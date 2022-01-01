const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function ValidateLogin(data) {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  
  if (!validator.isEmail(data.email)) {
    errors.email = "format email inconnue ";
  }
  
  if (validator.isEmpty(data.email)) {
    errors.email = "email obligatoire";
  }

 

  if (validator.isEmpty(data.password)) {
    errors.password = "mot de passe obligatoire";
  }

 

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
