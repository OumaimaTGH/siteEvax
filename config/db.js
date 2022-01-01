const mongoose = require("mongoose");

const CONNECT = async()=> {
  await mongoose.connect(process.env.MONGO_URI)
 
};

module.exports = CONNECT;
