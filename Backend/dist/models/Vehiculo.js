"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var vehiculoSchema = new _mongoose["default"].Schema({
  placa: {
    type: String,
    required: true,
    unique: true
  },
  tipo_de_combustible: {
    type: String,
    "enum": ['Gasolina', 'A.C.P.M'],
    required: true
  },
  clase_de_vehiculo: {
    type: String,
    "enum": ['VOLQUETA DTRQ', 'VOLQUETA', 'CARRO TANQUE', 'CAMION SENCILLO', 'TRACTOCAMION', 'CAMIONETA JEFES'],
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  color: String,
  propietario: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Persona'
  },
  documentos: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Documento'
  }],
  volquetas: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Volqueta'
  }],
  cargaPesada: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Tractomula'
  }],
  tanqueos: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Tanqueo'
  }]
}, {
  timestamps: false,
  autoCreate: false
});
var Vehiculo = _mongoose["default"].model('Vehiculo', vehiculoSchema);
var _default = exports["default"] = Vehiculo;