const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function ValidateOperator(data) {
  const errors = {};

  data.fullname = !isEmpty(data.fullname) ? data.fullname : "";
  data.email = !isEmpty(data.email) ? data.email : "";

 
  if (validator.isEmpty(data.fullname)) {
    errors.fullname = "nom complet obligatoire";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "email obligatoire";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "format inconnue";
  }


  return {
    errors,
    isValid: isEmpty(errors),
  };
};
