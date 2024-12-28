"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tanqueosController = require("../controllers/tanqueos.controller.js");
var _verifyToken = require("../authentication/tokens/verifyToken.js");
var router = (0, _express.Router)();
router.post('/create', _verifyToken.TokenValidation, _tanqueosController.createTanqueo);
router.get('/', _verifyToken.TokenValidation, _tanqueosController.getAllTanqueos);
router.get('/:id', _verifyToken.TokenValidation, _tanqueosController.getTanqueoById);
router.patch('/update/:id', _verifyToken.TokenValidation, _tanqueosController.updateTanqueo);
router["delete"]('/delete/:id', _verifyToken.TokenValidation, _tanqueosController.deleteTanqueo);
var _default = exports["default"] = router;