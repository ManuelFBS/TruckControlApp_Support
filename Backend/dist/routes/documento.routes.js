"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _documentosController = require("../controllers/documentos.controller.js");
var _verifyToken = require("../authentication/tokens/verifyToken.js");
var router = (0, _express.Router)();
router.post('/', _verifyToken.TokenValidation, _documentosController.createDocumento);
router.get('/', _verifyToken.TokenValidation, _documentosController.getAllDocumento);
router.put('/:id', _verifyToken.TokenValidation, _documentosController.putDocumento);
router["delete"]('/:id', _verifyToken.TokenValidation, _documentosController.deleteDocumento);
var _default = exports["default"] = router;