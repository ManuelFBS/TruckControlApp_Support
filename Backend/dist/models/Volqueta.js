"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var volquetaSchema = new _mongoose["default"].Schema({
  n_planilla: {
    type: String,
    required: true,
    unique: true
  },
  fecha: {
    type: Date,
    "default": Date.now
  },
  placas: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Vehiculo'
  },
  conductor: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Persona'
  },
  cliente: {
    type: String,
    required: true
  },
  volmts3: {
    type: String,
    required: true
  },
  n_viajes: {
    type: Number,
    required: true
  },
  material: {
    type: String,
    required: true
  },
  hora_inicio: {
    type: Date,
    "default": Date.now,
    required: true
  },
  hora_final: {
    type: Date,
    "default": ''
  },
  total_horas: Number,
  km_inicial: {
    type: String,
    required: true
  },
  km_final: {
    type: String,
    required: true
  },
  total_km_dia: String,
  lugar_de_cargue: String,
  lugar_de_descargue: String,
  observacion: String
}, {
  timestamps: false,
  autoCreate: false
});
var Volqueta = _mongoose["default"].model('Volqueta', volquetaSchema);
var _default = exports["default"] = Volqueta;