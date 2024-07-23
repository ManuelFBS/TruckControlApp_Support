"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _volquetasController = require("../controllers/volquetas.controller.js");
var _verifyToken = require("../authentication/tokens/verifyToken.js");
var router = (0, _express.Router)();
router.post('/', _verifyToken.TokenValidation, _volquetasController.createVolqueta);
router.get('/', _verifyToken.TokenValidation, _volquetasController.getVolqueta);
router.put('/:id', _verifyToken.TokenValidation, _volquetasController.putVolqueta);
router["delete"]('/:id', _verifyToken.TokenValidation, _volquetasController.deleteVolqueta);
var _default = exports["default"] = router;