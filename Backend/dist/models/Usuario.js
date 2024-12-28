"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var usuarioSchema = new _mongoose["default"].Schema({
  usuario: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: String,
    "enum": ['Admin', 'Empleado', 'Empresa'],
    required: true
  },
  estado: {
    type: Boolean,
    "default": false,
    required: true
  },
  persona: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Persona',
    required: true
  }
}, {
  timestamps: false,
  autoCreate: false
});
var Usuario = _mongoose["default"].model('Usuario', usuarioSchema);
var _default = exports["default"] = Usuario;