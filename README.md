# IP API

Esta es una API simple desarrollada con Node.js y Express que devuelve la dirección IP del cliente que realiza la solicitud, junto con información adicional relevante.

## Descripción

La API detecta automáticamente la dirección IP del cliente a partir de varios encabezados HTTP y devuelve esta información en formato JSON. Es útil para servicios que necesitan conocer la IP del usuario final.

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/ip-api.git
   cd ip-api
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Inicia la aplicación:
   ```
   npm start
   ```

4. El servidor se iniciará en el puerto 3001 por defecto. Puedes acceder a la API en:
   ```
   http://localhost:3001/api/ip
   ```

## Desarrollo

Para ejecutar la aplicación en modo desarrollo con recarga automática:
```
npm run dev
```

## Estructura del proyecto

```
.
│── app.js                # Archivo principal de la aplicación
│── package.json          # Configuración y dependencias
│── .gitignore            # Configuración de Git
└── README.md             # Documentación
```

## Endpoints

### GET /api/ip

Este endpoint devuelve la dirección IP del cliente que realiza la solicitud, junto con información adicional.

**Respuesta:**
```json
{
  "success": true,
  "ip": "192.168.1.1",
  "timestamp": "2025-05-14T00:12:33-05:00",
  "headers": { "user-agent": "..." },
  "method": "GET",
  "path": "/api/ip"
}
```

### GET /

Ruta principal que redirecciona al endpoint de IP.

## Tecnologías

- Node.js
- Express.js
- CORS (para permitir solicitudes entre dominios)

## Variables de entorno

- `PORT`: Puerto en el que se ejecutará el servidor (predeterminado: 3001)

## Despliegue

Esta API está lista para ser desplegada en plataformas como Heroku, Vercel, Netlify, DigitalOcean o cualquier otra plataforma que soporte Node.js.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.