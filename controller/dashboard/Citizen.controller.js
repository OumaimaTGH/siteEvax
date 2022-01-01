const Citizen = require("../../models/Citizen.models");
const { StatusCodes } = require("http-status-codes");
const validator = require("validator");
const ValidateCitizen = require("../../validation/citizen");
const mailer = require("../../config/mailer");
const isEmpty = require("../../validation/isEmpty");

function validateData(data) {
  const errors = {};
  data.cin = !isEmpty(data.cin) ? data.cin : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.cin)) {
    errors.cin = "obligatoire";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "obligatoire";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

const random__password = () => {
  return Math.random().toString(36).substr(2, 12).toUpperCase();
};

module.exports = {
  Add: async (req, res) => {
    const { errors, isValid } = ValidateCitizen(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      Citizen.findOne({ cin: req.body.cin }).then(async (result) => {
        if (result) {
          errors.cin = "cin exist";
          res.status(StatusCodes.NOT_FOUND).json(errors);
        } else {
          const newCitizen = new Citizen(req.body);
          await newCitizen.save();
          res
            .status(StatusCodes.CREATED)
            .json({ message: "Enregistement avec succès" });
        }
      });
    }
  },
  FindOne: async (req, res) => {
    const result = await Citizen.findOne({ _id: req.params.id });
    res.status(StatusCodes.OK).json(result);
  },
  All: async (req, res) => {
    const result = await Citizen.find();
    res.status(StatusCodes.OK).json(result);
  },
  Update: async (req, res) => {
    const { errors, isValid } = ValidateCitizen(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      const result = await Citizen.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res
        .status(StatusCodes.CREATED)
        .json({ message: "Mis à jour avec succès", result });
    }
  },
  Delete: async (req, res) => {
    await Citizen.findByIdAndRemove(req.params.id);
    res.status(StatusCodes.OK).json({ message: "Supprimer avec succès " });
  },
  Confirm: async (req, res) => {
    await Citizen.findOne({ _id: req.params.id }).then((result) => {
      //generer code de connexion aléatoirement
      const rnd = random__password();
      result.confirmed = !result.confirmed;
      result.authenticate_code = result.cin + rnd;
      result.save().then(() => {
        res
          .status(StatusCodes.CREATED)
          .json({ message: "demande confirmé et email envoyé au citoyen" });
      });
      if (result.confirmed) {
        mailer(
          result.email,
          "Code d'accés a votre compte citoyen",
          `Bonjour ${result.firstname} ${result.lastname}, 
      <br/> Tu trouve votre compte citoyen d'accés a Evax plateform 
      <br/> Code : ${result.cin + rnd}`
        );
      }
    });
  },
  Vaccinated: async (req, res) => {
    await Citizen.findOne({ _id: req.params.id }).then((result) => {
      result.vaccinated = !result.vaccinated;
      result.operator = req.user.id;
      result.vaccinated_type = "Pfizer";
      result.save().then(() => {
        res
          .status(StatusCodes.CREATED)
          .json({ message: "enregistrer avec succès" });
      });
      if (result.vaccinated === true) {
        mailer(
          result.email,
          "Alert vaccin",
          `Bonjour ${result.firstname} ${result.lastname}, 
        <br/> Tu trouve la confirmation de votre dose Pfizer pour le citoyen ${result.cin}`
        );
      } else {
        mailer(
          result.email,
          "Alert annulation vaccin",
          `Bonjour ${result.firstname} ${result.lastname}, 
        <br/> Tu trouve la déconfirmation de votre dose Pfizer pour le citoyen ${result.cin} grace a une erreur plateform`
        );
      }
    });
  },
  Connect: async (req, res) => {
    const { errors, isValid } = validateData(req.body);

    if (!isValid) {
      return res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      try {
        await Citizen.findOne({ cin: req.body.cin }).then((result) => {
          if (!result) {
            errors.cin = "compte n'existe pas";
            return res.status(StatusCodes.NOT_FOUND).json(errors);
          } else {
            if (result.authenticate_code !== req.body.password) {
              errors.password = "mot de pass inscorrect";
              return res.status(StatusCodes.NOT_FOUND).json(errors);
            }
            res.status(StatusCodes.OK).json({ data: result });
          }
        });
      } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json(error);
      }
    }
  },
  Count: async(req,res)=>{
   await Citizen.find()
   .then(result=>{
     res.status(StatusCodes.OK).send({count: result.length})
   })
  }
};
