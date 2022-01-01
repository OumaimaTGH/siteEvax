const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VaccinSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("vaccins", VaccinSchema);
