const Vaccin = require("../../models/Vaccin.models");
const { StatusCodes } = require("http-status-codes");
const validator = require("validator");
const isEmpty = require("../../validation/isEmpty");

function validation(data) {
  const errors = {};
  data.name = !isEmpty(data.name) ? data.name : ''
  data.quantity = !isEmpty(data.quantity) ? data.quantity : ''
  if (validator.isEmpty(data.name)) {
    errors.name = "vaccin  obligatoire ";
  }
  if (validator.isEmpty(data.quantity)) {
    errors.quantity = "la quantity obligatoire";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}

module.exports = {
  Add: async (req, res) => {
    const { errors, isValid } = validation(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      const newVaccin = new Vaccin(req.body);
      await newVaccin.save();
      res
        .status(StatusCodes.CREATED)
        .json({ message: "Enregistrement avec succès" });
    }
  },
  FindOne: async (req, res) => {
    const center = await Vaccin.findOne({ _id: req.params.id });
    res.status(StatusCodes.OK).json(center);
  },
  All: async (req, res) => {
    const v__ = await Vaccin.find();
    res.status(StatusCodes.OK).json(v__);
  },
  Update: async (req, res) => {
    const { errors, isValid } = validation(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      const data = await Vaccin.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res
        .status(StatusCodes.CREATED)
        .json({ message: "Enregistrement avec succès", data });
    }
  },
  Delete: async (req, res) => {
    await Vaccin.findByIdAndRemove(req.params.id);
    res.status(StatusCodes.OK).json({ message: "Supprimé avec succès" });
  },
};
