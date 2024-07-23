"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _csrfMiddleware = _interopRequireWildcard(require("./middlewares/csrfMiddleware.js"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _cargaPesadaRoutes = _interopRequireDefault(require("./routes/cargaPesada.routes.js"));
var _cloudinaryRoutes = _interopRequireDefault(require("./routes/cloudinary.routes.js"));
var _documentoRoutes = _interopRequireDefault(require("./routes/documento.routes.js"));
var _licenciaRoutes = _interopRequireDefault(require("./routes/licencia.routes.js"));
var _mecanicoRoutes = _interopRequireDefault(require("./routes/mecanico.routes.js"));
var _personaRoutes = _interopRequireDefault(require("./routes/persona.routes.js"));
var _tanqueoRoutes = _interopRequireDefault(require("./routes/tanqueo.routes.js"));
var _usuarioRoutes = _interopRequireDefault(require("./routes/usuario.routes.js"));
var _vehiculoRoutes = _interopRequireDefault(require("./routes/vehiculo.routes.js"));
var _volquetaRoutes = _interopRequireDefault(require("./routes/volqueta.routes.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var app = (0, _express["default"])();

// Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// Middlewares...
app.use((0, _morgan["default"])('dev'));
// Aquí, la URL (Front local) debe sustituirse por la URL del Front desplegado...
app.use((0, _cors["default"])({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());

// Middleware para generar el token CSRF...
app.use(_csrfMiddleware.generateCsrfToken);

// Routes...
app.use('/api/auth', _authRoutes["default"]);
app.use('/api/cargapesada', _csrfMiddleware.verifyCsrfToken,
// CON PROTECCION CSRF...
_cargaPesadaRoutes["default"]);
app.use('/api/cloudinary', _cloudinaryRoutes["default"]);
app.use('/api/documentos', _documentoRoutes["default"]);
app.use('/api/licencias', _licenciaRoutes["default"]);
app.use('/api/mecanicos', _mecanicoRoutes["default"]);
app.use('/api/personas', _csrfMiddleware.verifyCsrfToken, _personaRoutes["default"]); // CON PROTECCION CSRF...
app.use('/api/tanqueos', _tanqueoRoutes["default"]);
app.use('/api/usuarios', _csrfMiddleware.verifyCsrfToken, _usuarioRoutes["default"]); // CON PROTECCION CSRF...
app.use('/api/vehiculos', _vehiculoRoutes["default"]);
app.use('/api/planillas', _volquetaRoutes["default"]);

// Ruta para obtener el token CSRF...
app.use(_csrfMiddleware["default"]);

// Middleware para manejo de errores CSRF...
app.use(_csrfMiddleware.handleCsrfError);

// Test route...
app.get('/', function (req, res) {
  res.end("Welcome to Backend Node.js Server. Running on port: ".concat(app.get('port'), "...!"));
});
var _default = exports["default"] = app;