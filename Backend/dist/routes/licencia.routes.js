"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _licenciasController = require("../controllers/licencias.controller.js");
var _verifyToken = require("../authentication/tokens/verifyToken.js");
var router = (0, _express.Router)();
router.post('/', _verifyToken.TokenValidation, _licenciasController.createLicencia);
router.get('/', _verifyToken.TokenValidation, _licenciasController.getLicencia);
router.put('/:id', _verifyToken.TokenValidation, _licenciasController.putLicencia);
router["delete"]('/:id', _verifyToken.TokenValidation, _licenciasController.deleteLicencia);
var _default = exports["default"] = router;