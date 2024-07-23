"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _personasController = require("../controllers/personas.controller.js");
var _verifyToken = require("../authentication/tokens/verifyToken.js");
var _validatePerson = require("../middlewares/validatePerson.js");
var router = (0, _express.Router)();
router.post('/addpersona', _verifyToken.TokenValidation, _validatePerson.validatePerson, _personasController.createPersona);
router.get('/', _verifyToken.TokenValidation, _personasController.getAllPersonas);
router.get('/personaced/:cedula', _verifyToken.TokenValidation, _personasController.getPersonaByDNI);
router.get('/personaid/:_id', _verifyToken.TokenValidation, _personasController.getPersonaByID);
router.patch('/persona/edit/:_id', _verifyToken.TokenValidation, _personasController.updatePersona);
router["delete"]('/persona/delete/:_id', _verifyToken.TokenValidation, _personasController.deletePersona);
var _default = exports["default"] = router;