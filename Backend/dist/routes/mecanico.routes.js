"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _mecanicosController = require("../controllers/mecanicos.controller.js");
var _verifyToken = require("../authentication/tokens/verifyToken.js");
var router = (0, _express.Router)();
router.post('/create', _verifyToken.TokenValidation, _mecanicosController.createMecanico);
router.get('/', _verifyToken.TokenValidation, _mecanicosController.getAllMecanicos);
router.get('/:id', _verifyToken.TokenValidation, _mecanicosController.getMecanicoById);
router.patch('/update/:id', _verifyToken.TokenValidation, _mecanicosController.updateMecanico);
router["delete"]('/delete/:id', _verifyToken.TokenValidation, _mecanicosController.deleteMecanico);
var _default = exports["default"] = router;