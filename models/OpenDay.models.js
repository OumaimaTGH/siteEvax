const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OpenDay = new Schema(
  {
    center: {
      type: Schema.Types.ObjectId,
      ref: 'centers'
    },
    date: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("opendays", OpenDay);
