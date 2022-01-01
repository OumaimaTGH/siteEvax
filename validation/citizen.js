const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function ValidateCenter(data){
    const errors = {};

  data.cin = !isEmpty(data.cin) ? data.cin : ''
  data.date_of_birth = !isEmpty(data.date_of_birth) ? data.date_of_birth : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.phone = !isEmpty(data.phone) ? data.phone : ''

  data.firstname = !isEmpty(data.firstname) ? data.firstname : ''
  data.lastname = !isEmpty(data.lastname) ? data.lastname : ''

  data.sexe = !isEmpty(data.sexe) ? data.sexe : ''
  data.father_lastname = !isEmpty(data.father_lastname) ? data.father_lastname : ''
  data.grandfather_lastname = !isEmpty(data.grandfather_lastname) ? data.grandfather_lastname : ''
  data.mother_firstname = !isEmpty(data.mother_firstname) ? data.mother_firstname : ''
  data.mother_lastname = !isEmpty(data.mother_lastname) ? data.mother_lastname : ''

  data.governorate = !isEmpty(data.governorate) ? data.governorate : ''
  data.municipality = !isEmpty(data.municipality) ? data.municipality : ''
  data.delegation = !isEmpty(data.delegation) ? data.delegation : ''

  data.positif_pcr = !isEmpty(data.positif_pcr) ? data.positif_pcr : ''
  data.allergy = !isEmpty(data.allergy) ? data.allergy : ''
  data.anticaogulant = !isEmpty(data.anticaogulant) ? data.anticaogulant : ''
  data.hemostasis = !isEmpty(data.hemostasis) ? data.hemostasis : ''
  data.pregnant = !isEmpty(data.pregnant) ? data.pregnant : ''

  if (validator.isEmpty(data.cin)) {
    errors.cin = "cin obligatoire";
  }
  if (!validator.isLength(data.cin, {min: 8, max: 8})) {
    errors.cin = "format cin inconnue";
  }
  if (validator.isEmpty(data.date_of_birth)) {
    errors.date_of_birth = "date de naissance obligatoire";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "format email inconnue";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "email obligatoire";
  }
  if (validator.isEmpty(data.phone)) {
    errors.phone = "téléphone obligatoire";
  }


  if (validator.isEmpty(data.firstname)) {
    errors.firstname = "nom obligatoire";
  }
  if (validator.isEmpty(data.lastname)) {
    errors.lastname = "prénom obligatoire";
  }

  if (validator.isEmpty(data.sexe)) {
    errors.sexe = "genre obligatoire";
  }

  if (validator.isEmpty(data.father_lastname)) {
    errors.father_lastname = "nom du pére obligatoire";
  }

  if (validator.isEmpty(data.grandfather_lastname)) {
    errors.grandfather_lastname = "nom du grand pére obligatoire";
  }

  if (validator.isEmpty(data.mother_firstname)) {
    errors.mother_firstname = "nom de la mére obligatoire";
  }

  if (validator.isEmpty(data.mother_lastname)) {
    errors.mother_lastname = "pénom de la mére obligatoire";
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

  if (validator.isEmpty(data.positif_pcr)) {
    errors.positif_pcr = "obligatoire";
  }

  if (validator.isEmpty(data.allergy)) {
    errors.allergy = "délégation obligatoire";
  }

  if (validator.isEmpty(data.anticaogulant)) {
    errors.anticaogulant = "obligatoire";
  }

  if (validator.isEmpty(data.hemostasis)) {
    errors.hemostasis = "obligatoire";
  }

  if (validator.isEmpty(data.pregnant)) {
    errors.pregnant = "obligatoire";
  }

  
  return {
      errors,
      isValid: isEmpty(errors)
  }

}