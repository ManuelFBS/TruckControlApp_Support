"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cloudinarysController = require("../controllers/cloudinarys.controller.js");
var _express = require("express");
var _verifyToken = require("../authentication/tokens/verifyToken.js");
var router = (0, _express.Router)();
router.post('/upload', _verifyToken.TokenValidation, _cloudinarysController.parser, _cloudinarysController.uploadImage);
router.get('/', _verifyToken.TokenValidation, _cloudinarysController.getImagesFromCloudinay);
router["delete"]('/delete/:id', _verifyToken.TokenValidation, _cloudinarysController.deleteImageById);
router.get('/:id', _verifyToken.TokenValidation, _cloudinarysController.getImageById);
router.put('/update/:id', _verifyToken.TokenValidation, _cloudinarysController.updateImageById);
var _default = exports["default"] = router;