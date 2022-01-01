const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitizenSchema = new Schema(
  {
    cin: {
      type: String,
      required: true,
      unique: true,
    },
    date_of_birth: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    sexe: {
      type: String,
      required: true,
    },
    father_lastname: {
      type: String,
      required: true,
    },
    grandfather_lastname: {
      type: String,
      required: true,
    },
    mother_firstname: {
      type: String,
      required: true,
    },
    mother_lastname: {
      type: String,
      required: true,
    },
    governorate: {
      type: String,
      required: true,
    },
    municipality: {
      type: String,
      required: true,
    },
    delegation: {
      type: String,
      required: true,
    },
    positif_pcr: {
      type: Boolean
    },
    allergy: {
      type: Boolean
    },
    anticaogulant: {
      type: Boolean
    },
    hemostasis: {
      type: Boolean
    },
    pregnant: {
      type: Boolean
    },
    vaccinated: {
      type: Boolean,
      required: true,
      default: false,
    },
    vaccinated_type: {
      type: String,
      required: true,
      default: false,
    },
    confirmed: {
      type: Boolean,
      required: true,
      default: false,
    },
    authenticate_code: {
      type: String,
      required: false,
      default: null,
    },
    operator: {
      type: Schema.Types.ObjectId,
      ref: "users",
      default: null
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("citizens", CitizenSchema);
