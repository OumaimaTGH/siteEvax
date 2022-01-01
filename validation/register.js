const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function ValidateRegister(data) {
  const errors = {};

  data.fullname = !isEmpty(data.fullname) ? data.fullname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirm = !isEmpty(data.confirm) ? data.confirm : "";
 
  if (validator.isEmpty(data.fullname)) {
    errors.fullname = "nom complet obligatoire";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "email obligatoire";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "format email inconnue ";
  }

 

  if (validator.isEmpty(data.password)) {
    errors.password = "mot de passe obligatoire";
  }

  if (!validator.equals(data.password, data.confirm)) {
    errors.confirm = "confirmation mot de passe obligatoire ";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
