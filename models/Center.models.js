const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CentreSchema = new Schema(
  {
    name: {
      type: String,
      required: true
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
    address: {
      type: String,
      required: true,
    },
    postal_code: {
      type: String
    },
    quantity: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("centers", CentreSchema);
