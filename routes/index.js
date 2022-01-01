const express = require('express');
const {  Login, Add_Admin } = require('../controller/auth/Users.controller');
const { Add_Operator, DeleteOperator, FindAll, UpdateOperator, UpdatePassword, FindSingle } = require('../controller/dashboard/Operator.controller');
const { RegisterAccess } = require('../util/util');
const router = express.Router();
const passport = require('passport');
const { checkIsInRole, ROLES } = require('../util/middleware');
const { Add, All, FindOne, Update, Delete } = require('../controller/dashboard/Centre.controller');
const PharmacyController = require('../controller/dashboard/Pharmacy.controller')
const CitizenController = require('../controller/dashboard/Citizen.controller')
const VaccinController = require('../controller/dashboard/Vaccin.controller');
const OpenDayController = require('../controller/dashboard/OpenDay.controller');

// !add admin
router.post('/add__admin', 
RegisterAccess,
Add_Admin)

// !add operator
router.post('/operator',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
Add_Operator)

// !find all operator
router.get('/operator',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
FindAll)

// !find single operator
router.get('/operator/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
FindSingle)

// !update operator
router.put('/operator/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
UpdateOperator)

// !update operator password
router.patch('/operator/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
UpdatePassword)

// !delete password
router.delete('/operator/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
DeleteOperator)

/* *********************************************
********************** center ***********************
 ********************************************* */

// !add center
router.post('/center',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
Add)

// !find all center
router.get('/center',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
All)

// !find single center
router.get('/center/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
FindOne)

// !update single center
router.put('/center/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
Update)

// !delete center
router.delete('/center/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
Delete)

/* *********************************************
********************** pharmacy ***********************
 ********************************************* */
// !add pharmacy
router.post('/pharmacy',
PharmacyController.Add)

// !find all pharmacy
router.get('/pharmacy',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
PharmacyController.All)

// !find single pharmacy
router.get('/pharmacy/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
PharmacyController.FindOne)

// !update single pharmacy
router.put('/pharmacy/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
PharmacyController.Update)

// !delete pharmacy
router.delete('/pharmacy/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
PharmacyController.Delete)

/* *********************************************
********************** citizen ***********************
 ********************************************* */
// !add citizen
router.post('/citizen',
CitizenController.Add)

// !count citizen
router.get('/citizen/length',
CitizenController.Count)

// !find all citizen
router.get('/citizen',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES, ROLES.OPERATOR__ROLES),
CitizenController.All)

// !find single citizen
router.get('/citizen/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES, ROLES.OPERATOR__ROLES),
CitizenController.FindOne)

// !update single citizen
router.put('/citizen/:id',
CitizenController.Update)

// !delete citizen
router.delete('/citizen/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
CitizenController.Delete)

// !confirm citizen
router.put('/citizen/confirm/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
CitizenController.Confirm)

// !vaccinated citizen
router.put('/citizen/vaccinated/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.OPERATOR__ROLES),
CitizenController.Vaccinated)

/* *********************************************
********************** citizen ***********************
 ********************************************* */
// !add vaccin
router.post('/vaccin',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
VaccinController.Add)

// !find single vaccin
router.get('/vaccin/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
VaccinController.FindOne)

// !find all vaccin
router.get('/vaccin',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
VaccinController.All)

// !update  vaccin
router.put('/vaccin/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
VaccinController.Update)

// !delete  vaccin
router.delete('/vaccin/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
VaccinController.Delete)


/* *********************************************
********************** citizen ***********************
 ********************************************* */
// !add  open day
router.post('/openday',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
OpenDayController.Add)

// !find all  open day
router.get('/openday',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
OpenDayController.All)

// !delete  open day
router.delete('/openday/:id',
passport.authenticate("jwt", { session: false }),
checkIsInRole(ROLES.ADMIN__ROLES),
OpenDayController.Delete)


// !connexion 
router.post('/secure__login', Login)

// !connect citizen
router.post('/citizen/connect',
CitizenController.Connect)

module.exports = router;
