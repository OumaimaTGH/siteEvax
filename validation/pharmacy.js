const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function ValidatePharmacy(data){
    const errors = {};
/* phamacie local */
  data.name_ar = !isEmpty(data.name_ar) ? data.name_ar : ''
  data.name_fr = !isEmpty(data.name_fr) ? data.name_fr : ''
  data.n_order = !isEmpty(data.n_order) ? data.n_order : ''
  data.fix_tel = !isEmpty(data.fix_tel) ? data.fix_tel : ''
  data.category = !isEmpty(data.category) ? data.category : ''
  data.governorate = !isEmpty(data.governorate) ? data.governorate : ''
  data.municipality = !isEmpty(data.municipality) ? data.municipality : ''
  data.delegation = !isEmpty(data.delegation) ? data.delegation : ''
  data.addr_ar = !isEmpty(data.addr_ar) ? data.addr_ar : ''
  data.addr_fr = !isEmpty(data.addr_fr) ? data.addr_fr : ''
/* pharmacie owner */    
  data.cin = !isEmpty(data.cin) ? data.cin : ''
  data.date_of_birth = !isEmpty(data.date_of_birth) ? data.date_of_birth : ''
  data.firstname = !isEmpty(data.firstname) ? data.firstname : ''
  data.lastname = !isEmpty(data.lastname) ? data.lastname : ''
  data.phone = !isEmpty(data.phone) ? data.phone : ''
  data.email = !isEmpty(data.email) ? data.email : ''


/* phamacie local */
  if (validator.isEmpty(data.name_ar)) {
    errors.name_ar = "nom en arabe obligatoire";
  }
  if (validator.isEmpty(data.name_fr)) {
    errors.name_fr = "nom en français obligatoire";
  }
  if (validator.isEmpty(data.n_order)) {
    errors.n_order = "numéro d'ordre obligatoire";
  }
  if (validator.isEmpty(data.fix_tel)) {
    errors.fix_tel = "téléphone fix obligatoire";
  }

  if (validator.isEmpty(data.category)) {
    errors.category = "catégorie obligatoire";
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
  if (validator.isEmpty(data.addr_ar)) {
    errors.addr_ar = "adresse en arabe obligatoire";
  }
  if (validator.isEmpty(data.addr_fr)) {
    errors.addr_fr = "adresse en français obligatoire";
  }

/* pharmacie owner */   
if (validator.isEmpty(data.cin)) {
  errors.cin = "cin obligatoire";
}
if (!validator.isLength(data.cin, {min: 8, max: 8})) {
  errors.cin = "format cin inconnue";
}
if (validator.isEmpty(data.date_of_birth)) {
  errors.date_of_birth = "date de naissance obligatoire";
}
if (validator.isEmpty(data.firstname)) {
  errors.firstname = "nom obligatoire";
}
if (validator.isEmpty(data.lastname)) {
  errors.lastname = "prénom obligatoire";
}
if (validator.isEmpty(data.phone)) {
  errors.phone = "téléphone obligatoire";
}
if (validator.isEmpty(data.email)) {
  errors.email = "email obligatoire";
}
if (!validator.isEmail(data.email)) {
  errors.email = "format email inconnue";
}

  return {
      errors,
      isValid: isEmpty(errors)
  }

}