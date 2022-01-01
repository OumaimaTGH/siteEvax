const Pharmacy = require("../../models/Pharmacy.models");
const { StatusCodes } = require("http-status-codes");
const ValidatePharmacy = require("../../validation/pharmacy");
module.exports = {
  Add: async (req, res) => {
    const { errors, isValid } = ValidatePharmacy(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      const data = {
        local: {
          name_ar: req.body.name_ar,
          name_fr: req.body.name_fr,
          n_order: req.body.n_order,
          fix_tel: req.body.fix_tel,
          other_tel: req.body.other_tel,
          category: req.body.category,
          governorate: req.body.governorate,
          municipality: req.body.municipality,
          delegation: req.body.delegation,
          addr_ar: req.body.addr_ar,
          addr_fr: req.body.addr_fr
        },
        owner: {
          cin: req.body.cin,
          date_of_birth: req.body.date_of_birth,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          phone: req.body.phone,
          email: req.body.email,
          fax: req.body.fax
        }
      };
      const newPharmacy = new Pharmacy(data);
      await newPharmacy.save();
      res
        .status(StatusCodes.CREATED)
        .json({ message: "Enregistement avec succès"});
    }
  },
  FindOne: async (req, res) => {
    const center = await Pharmacy.findOne({ _id: req.params.id });
    res.status(StatusCodes.OK).json(center);
  },
  All: async (req, res) => {
    const centers = await Pharmacy.find();
    res.status(StatusCodes.OK).json(centers);
  },
  Update: async (req, res) => {
    const { errors, isValid } = ValidatePharmacy(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      const data = {
        local: {
          name_ar: req.body.name_ar,
          name_fr: req.body.name_fr,
          n_order: req.body.n_order,
          fix_tel: req.body.fix_tel,
          other_tel: req.body.other_tel,
          category: req.body.category,
          governorate: req.body.governorate,
          municipality: req.body.municipality,
          delegation: req.body.delegation,
          addr_ar: req.body.addr_ar,
          addr_fr: req.body.addr_fr
        },
        owner: {
          cin: req.body.cin,
          date_of_birth: req.body.date_of_birth,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          phone: req.body.phone,
          email: req.body.email,
          fax: req.body.fax
        }
      };
      const result = await Pharmacy.findByIdAndUpdate(
        req.params.id,
        { $set: data },
        { new: true }
      );
      res
        .status(StatusCodes.CREATED)
        .json({ message: "Mis à jour avec succès", result });
    }
  },
  Delete: async (req, res) => {
    await Pharmacy.findByIdAndRemove(req.params.id);
    res.status(StatusCodes.OK).json({ message: "Supprimer avec succès " });
  },
};
