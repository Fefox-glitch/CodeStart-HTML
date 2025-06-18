const express = require('express');
const cors = require('cors');
const moduleRoutes = require('./routes/moduleRoutes');

/**
 * Express application setup with middleware and route configuration
 */
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend requests
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/modules', moduleRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: 'Ruta no encontrada'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Server configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  console.log(`API disponible en http://localhost:${PORT}/api/modules`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  // In production, you might want to exit the process and let your process manager restart it
  // process.exit(1);
});

module.exports = app;
