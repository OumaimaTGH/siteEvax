const Center = require("../../models/Center.models");
const { StatusCodes } = require("http-status-codes");
const ValidateCenter = require('../../validation/center')
module.exports = {
  Add: async (req, res) => {
    const { errors, isValid } = ValidateCenter(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      const newCenter = new Center(req.body);
      await newCenter.save();
      res.status(StatusCodes.CREATED).json({ message: "Enregistrement avec succès" });
    }
  },
  FindOne: async (req, res) => {
      const center = await Center.findOne({_id: req.params.id})
      res.status(StatusCodes.OK).json(center)
  },
  All: async (req, res) => {
      const centers = await Center.find()
      res.status(StatusCodes.OK).json(centers)
  },
  Update: async (req, res) => {
    const { errors, isValid } = ValidateCenter(req.body);
    if (!isValid) {
      res.status(StatusCodes.NOT_FOUND).json(errors);
    } else {
      const data = await Center.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
      res.status(StatusCodes.CREATED).json({ message: "Enregistrement avec succès", data });
    }
  },
  Delete: async (req, res) => {
      await Center.findByIdAndRemove(req.params.id)
      res.status(StatusCodes.OK).json({message: 'Supprimé avec succès'})
  },
};
