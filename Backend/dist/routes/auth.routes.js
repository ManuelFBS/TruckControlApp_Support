"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _loginController = require("../authentication/login_out/login.controller.js");
var _logoutController = require("../authentication/login_out/logout.controller.js");
var router = (0, _express.Router)();
router.post('/login', _loginController.login);
router.post('/logout', _logoutController.logout);
var _default = exports["default"] = router;