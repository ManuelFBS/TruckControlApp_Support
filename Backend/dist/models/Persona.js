"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var personaSchema = new _mongoose["default"].Schema({
  cedula: {
    type: Number,
    "default": 20,
    required: true,
    unique: true
  },
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  fecha_nacimiento: {
    type: Date,
    required: true
  },
  correo: {
    type: String,
    required: true,
    unique: true
  },
  telefono: {
    type: String,
    required: true
  },
  fecha_inicio_contrato: {
    type: Date,
    required: true
  },
  fecha_final_contrato: {
    type: Date
  },
  tipo_de_contrato: {
    type: String,
    "enum": ['Fijo', 'Indefinido'],
    required: true
  },
  Usuario: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  licencias: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Licencia'
  }],
  vehiculos: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Vehiculo'
  }],
  volquetas: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Volqueta'
  }],
  tanqueos: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Tanqueo'
  }]
}, {
  timestamps: true,
  autoCreate: true
});
var Persona = _mongoose["default"].model('Persona', personaSchema);
var _default = exports["default"] = Persona;