import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import csrfMiddleware, {
  generateCsrfToken,
  verifyCsrfToken,
  handleCsrfError,
} from './middlewares/csrfMiddleware.js';
import authRoutes from './routes/auth.routes.js';
import cargaPesadaRoutes from './routes/cargaPesada.routes.js';
import cloudinaryRoutes from './routes/cloudinary.routes.js';
import documentosRoutes from './routes/documento.routes.js';
import licenciasRoutes from './routes/licencia.routes.js';
import mecanicosRoutes from './routes/mecanico.routes.js';
import personasRoutes from './routes/persona.routes.js';
import tanqueosRoutes from './routes/tanqueo.routes.js';
import usuariosRoutes from './routes/usuario.routes.js';
import vehiculosRoutes from './routes/vehiculo.routes.js';
import volquetasRoutes from './routes/volqueta.routes.js';

dotenv.config();

const app = express();

// Settings...
app.set('port', process.env.PORT || 8585 || 3070);

// Middlewares...
app.use(morgan('dev'));
// Aquí, la URL (Front local) debe sustituirse por la URL del Front desplegado...
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Middleware para generar el token CSRF...
app.use(generateCsrfToken);

// Routes...
app.use('/api/auth', authRoutes);
app.use(
  '/api/cargapesada',
  verifyCsrfToken, // CON PROTECCION CSRF...
  cargaPesadaRoutes,
);
app.use('/api/cloudinary', cloudinaryRoutes);
app.use('/api/documentos', documentosRoutes);
app.use('/api/licencias', licenciasRoutes);
app.use('/api/mecanicos', mecanicosRoutes);
app.use('/api/personas', verifyCsrfToken, personasRoutes); // CON PROTECCION CSRF...
app.use('/api/tanqueos', tanqueosRoutes);
app.use('/api/usuarios', verifyCsrfToken, usuariosRoutes); // CON PROTECCION CSRF...
app.use('/api/vehiculos', vehiculosRoutes);
app.use('/api/planillas', volquetasRoutes);

// Ruta para obtener el token CSRF...
app.use(csrfMiddleware);

// Middleware para manejo de errores CSRF...
app.use(handleCsrfError);

// Test route...
app.get('/', (req, res) => {
  res.end(
    `Welcome to Backend Node.js Server. Running on port: ${app.get(
      'port',
    )}...!`,
  );
});

export default app;
