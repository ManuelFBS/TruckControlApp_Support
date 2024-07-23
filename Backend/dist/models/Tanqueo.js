"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var tanqueoSchema = new _mongoose["default"].Schema({
  fecha_tanqueo: {
    type: Date,
    "default": Date.now,
    required: true
  },
  n_recibo: {
    type: String,
    required: true
  },
  estacion: {
    type: String,
    required: true
  },
  cantidad_galones: String,
  valor_tanqueo: Number,
  vehiculo: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Vehiculo',
    required: true
  },
  conductor: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Persona',
    required: true
  }
}, {
  timestamps: false,
  autoCreate: false
});
var Tanqueo = _mongoose["default"].model('Tanqueo', tanqueoSchema);
var _default = exports["default"] = Tanqueo;