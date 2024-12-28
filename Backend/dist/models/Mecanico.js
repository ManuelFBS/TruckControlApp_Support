"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var mecanicoSchema = new _mongoose["default"].Schema({
  placas: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Vehiculo'
  },
  fecha_de_revision: {
    type: Date,
    "default": Date.now,
    required: true
  },
  kilometraje: {
    type: String,
    required: true
  },
  nombre_mecanico: {
    type: String,
    required: true
  },
  celular: {
    type: String,
    required: true
  },
  area_de_revision: {
    type: String,
    "enum": ['Motores', 'Frenos', 'Suspensión', 'Transmisión', 'Electrónica', 'Otros'],
    required: true
  },
  fecha_entrega: {
    type: Date,
    "default": ''
  },
  descripcion_revicion: String
}, {
  timestamps: true,
  autoCreate: true
});
var Mecanico = _mongoose["default"].model('Mecanico', mecanicoSchema);
var _default = exports["default"] = Mecanico;