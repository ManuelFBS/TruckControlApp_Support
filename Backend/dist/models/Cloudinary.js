"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var cloudinarySchema = new _mongoose["default"].Schema({
  url: String
}, {
  timestamps: false,
  autoCreate: false
});
var Cloudinary = _mongoose["default"].model('Cloudinary', cloudinarySchema);
var _default = exports["default"] = Cloudinary;