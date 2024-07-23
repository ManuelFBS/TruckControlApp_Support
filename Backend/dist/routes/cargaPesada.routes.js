"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _cargaPesadaController = require("../controllers/cargaPesada.controller.js");
var _verifyToken = require("../authentication/tokens/verifyToken.js");
var router = (0, _express.Router)();
router.post('/addplanillacarga', _verifyToken.TokenValidation, _cargaPesadaController.createHeavyLoadForm);
router.get('/', _verifyToken.TokenValidation, _cargaPesadaController.getAllHeavyLoadForms);
router.get('/planilla/:n_planilla', _verifyToken.TokenValidation, _cargaPesadaController.getHeavyLoadByFormNumber);
router.get('/planillaid/:_id', _verifyToken.TokenValidation, _cargaPesadaController.getHeavyLoadByFormID);

// router.patch(
//   '/planilla/edit/:n_planilla',
//   TokenValidation,
//   updateHeavyLoadForm,
// );

// router.delete(
//   '/planilla/delete/:n_planilla',
//   TokenValidation,
//   deleteHeavyLoadForm,
// );
var _default = exports["default"] = router;