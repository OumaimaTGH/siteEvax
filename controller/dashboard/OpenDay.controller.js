const OpenDay = require("../../models/OpenDay.models");
const { StatusCodes } = require("http-status-codes");
const validator = require("validator");
const isEmpty = require("../../validation/isEmpty");

function validation(data) {
  const errors = {};
  data.center = !isEmpty(data.center) ? data.center : ''
  data.date = !isEmpty(data.date) ? data.date : ''
  if (validator.isEmpty(data.center)) {
    errors.center = "centre  obligatoire ";
  }
  if (validator.isEmpty(data.date)) {
    errors.date = "la date obligatoire";
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
      const newOpenDay = new OpenDay(req.body);
      await newOpenDay.save();
      res
        .status(StatusCodes.CREATED)
        .json({ message: "Enregistrement avec succès" });
    }
  },
  FindOne: async (req, res) => {
    const openday = await OpenDay.findOne({ _id: req.params.id });
    res.status(StatusCodes.OK).json(openday);
  },
  All: async (req, res) => {
    const v__ = await OpenDay.find().populate("center", ["name"]).exec();
    res.status(StatusCodes.OK).json(v__);
  },
  Update: async (req, res) => {
    const { errors, isValid } = validation(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      const data = await OpenDay.findByIdAndUpdate(
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
    await OpenDay.findByIdAndRemove(req.params.id);
    res.status(StatusCodes.OK).json({ message: "Supprimé avec succès" });
  },
};
