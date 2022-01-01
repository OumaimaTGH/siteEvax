const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PharmacySchema = new Schema(
  {
    local: {
      name_ar: {
        type: String,
        required: true
      },
      name_fr: {
        type: String,
        required: true
      },
      n_order: {
        type: String,
        required: true        
      },
      fix_tel: {
        type: String,
        required: true
      },
      other_tel: {
        type: String
      },
      category: {
        type: String,
        required: true,
      },
      governorate: {
        type: String,
        required: true
      },
      municipality: {
        type: String,
        required: true
      },
      delegation: {
        type: String,
        required: true
      },
      addr_ar:{
        type: String,
        required: true
      },
      addr_fr:{
        type: String,
        required: true
      }
    },
    owner: {
      cin: {
        type: Number,
        required: true
      },
      date_of_birth:{
        type: String,
        required: true
      },
      firstname:{
        type: String,
        required: true
      },
      lastname:{
        type: String,
        required: true
      },
      phone:{
        type: String,
        required: true
      },
      email:{
        type: String,
        required: true
      },
      fax:{
        type: String
      }
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("pharmacy", PharmacySchema);
