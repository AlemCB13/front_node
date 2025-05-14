const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para procesar JSON
app.use(express.json());

// Endpoint para obtener la IP del cliente
app.get('/api/ip', (req, res) => {
  // Obtener la IP del cliente de diferentes posibles encabezados
  const clientIP = req.headers['x-forwarded-for'] || 
                   req.headers['x-real-ip'] || 
                   req.connection.remoteAddress || 
                   req.socket.remoteAddress || 
                   req.connection.socket.remoteAddress || 
                   '127.0.0.1';
  
  // Devolver la IP y algunos metadatos adicionales
  res.json({
    success: true,
    ip: clientIP,
    timestamp: new Date().toISOString(),
    headers: req.headers,
    method: req.method,
    path: req.path
  });
});

// Ruta principal redirecciona al endpoint de IP
app.get('/', (req, res) => {
  res.redirect('/api/ip');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API servidor corriendo en http://localhost:${port}`);
  console.log(`Endpoint de IP disponible en http://localhost:${port}/api/ip`);
});