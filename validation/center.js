const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function ValidateCenter(data){
    const errors = {};

  data.name = !isEmpty(data.name) ? data.name : ''
  data.governorate = !isEmpty(data.governorate) ? data.governorate : ''
  data.municipality = !isEmpty(data.municipality) ? data.municipality : ''
  data.delegation = !isEmpty(data.delegation) ? data.delegation : ''
  data.address = !isEmpty(data.address) ? data.address : ''
  data.postal_code = !isEmpty(data.postal_code) ? data.postal_code : ''
  data.quantity = !isEmpty(data.quantity) ? data.quantity : ''
    
  if (validator.isEmpty(data.name)) {
    errors.name = "centre obligatoire ";
  }
  if (validator.isEmpty(data.governorate)) {
    errors.governorate = "gouvernorat obligatoire";
  }
  if (validator.isEmpty(data.municipality)) {
    errors.municipality = "municipalité obligatoire";
  }
  if (validator.isEmpty(data.delegation)) {
    errors.delegation = "délégation obligatoire";
  }
  if (validator.isEmpty(data.address)) {
    errors.address = "adresse obligatoire";
  }
  if (validator.isEmpty(data.postal_code)) {
    errors.postal_code = "code postale obligatoire ";
  }
  if (validator.isEmpty(data.quantity)) {
    errors.quantity = "quantité vaccin obligatoire ";
  }
  
  return {
      errors,
      isValid: isEmpty(errors)
  }

}