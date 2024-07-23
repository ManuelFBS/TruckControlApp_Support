"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var licenciaSchema = new _mongoose["default"].Schema({
  conductor: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  licencia_N: {
    type: Number,
    required: true,
    unique: true
  },
  categoria: {
    type: String,
    required: true
  },
  clase_de_vehiculo: String,
  servicio: String,
  fecha_expedicion: {
    type: Date,
    require: true
  },
  fecha_vencimiento: {
    type: Date,
    require: true
  }
}, {
  timestamps: false,
  autoCreate: false
});
var Licencia = _mongoose["default"].model('Licencia', licenciaSchema);
var _default = exports["default"] = Licencia;