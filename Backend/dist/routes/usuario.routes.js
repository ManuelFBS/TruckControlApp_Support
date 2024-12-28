"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usuariosController = require("../controllers/usuarios.controller.js");
var _verifyToken = require("../authentication/tokens/verifyToken.js");
var _validateUser = require("../middlewares/validateUser.js");
var router = (0, _express.Router)();
router.post('/addusuario', _verifyToken.TokenValidation, _validateUser.validateUser, _usuariosController.registrarUsuario);
router.get('/', _verifyToken.TokenValidation, _usuariosController.getAllUsuarios);
router.get('/:usuario', _verifyToken.TokenValidation, _usuariosController.getUsuario);
router.patch('/edit/:_id', _verifyToken.TokenValidation, _usuariosController.updateUsuario);
router["delete"]('/delete/:_id', _verifyToken.TokenValidation, _usuariosController.deleteUsuario);
var _default = exports["default"] = router;