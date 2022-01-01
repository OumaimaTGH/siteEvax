const Users = require("../../models/Users.models");
const ValidateOperator = require("../../validation/operator");

var bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const mailer = require("../../config/mailer");

const random__password = () => {
  return Math.random().toString(36).substr(2, 12).toUpperCase();
};

// !custom__function

const Error__handler = (err) => {
  if (process.env.ENV_ === "development") {
    {
      message: err.message;
    }
  }
  if (process.env.ENV__ === "production") {
    {
      message: "erreur contacter nous pour plus de detail";
    }
  }
};

module.exports = {
  // !add operator
  Add_Operator: async (req, res) => {
    const { errors, isValid } = ValidateOperator(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      await Users.findOne({ email: req.body.email })
        .then((data) => {
          if (data) {
            errors.email = "Compte existe déja";
            return res.status(StatusCodes.NOT_FOUND).json(errors);
          }
          var pass = random__password();
          var hash = bcrypt.hashSync(pass, 10);
          const user = new Users({
            fullname: req.body.fullname,
            email: req.body.email,
            password: hash,
            role: 2
          });
          user
            .save()
            .then(() =>{
              res
              .status(StatusCodes.CREATED)
              .json({
                message: "Enregistrement avec succès",
                email: req.body.email,
                password: pass,
              })
              mailer(req.body.email, 'Compte Opérateur', `Bonjour ${req.body.fullname}, 
              <br/> Tu trouve votre compte d'accés a Evax plateform 
              <br/> email: ${req.body.email} <br/> mot de passe : ${pass}`)
            })
            .catch((err) =>
              res.status(StatusCodes.NOT_FOUND).json({ message: err })
            );
        })
        .catch((err) => {
          res.status(StatusCodes.NOT_FOUND).json(Error__handler(err));
        });
    }
  },
  // !update operator
  UpdateOperator: async (req, res) => {
    const newUser = {
      fullname: req.body.fullname,
      role: req.body.role
    };
    const data = await Users.findByIdAndUpdate(
      req.params.id,
      { $set: newUser },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ message: `Mis à jour avec succès`, data });
  },
  // !update password operator
  UpdatePassword: async (req, res) => {
    var pass = random__password();
    var hash = bcrypt.hashSync(pass, 10);
    const newUser = {
      password: hash,
    };
    const data = await Users.findByIdAndUpdate(
      req.params.id,
      { $set: newUser },
      { new: true }
    );
    res
      .status(StatusCodes.OK)
      .json({ message: `mot de pass changé avec succès`, email: data.email,  password: pass });
      mailer(data.email, 'Mot de passe changé', `Bonjour ${data.fullname}, 
      <br/> Tu trouve votre compte d'accés a Evax plateform 
      <br/> email: ${data.email} <br/> mot de passe : ${pass}`)   
  },
  // !delete operator
  DeleteOperator: async (req, res) => {
    await Users.findByIdAndRemove(req.params.id);
    res.status(StatusCodes.OK).json({ message: `Supprimer avec succès` });
  },
  // !find all operator
  FindAll: async (req, res) => {
    const data = await Users.find({ role: 2 })
      .exec();
    res.status(StatusCodes.OK).json(data);
  },
  // !find all operator
  FindSingle: async (req, res) => {
    const data = await Users.findById(req.params.id)
      .exec();
    res.status(StatusCodes.OK).json(data);
  },
};
