# Aplicación de Redirección a PaaS

Esta es una aplicación web simple desarrollada con Node.js y Express que proporciona botones para redirigir a diferentes plataformas PaaS (Platform as a Service).

## Plataformas incluidas

- Heroku
- Railway
- DigitalOcean
- Vercel

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/paas-redirect-app.git
   cd paas-redirect-app
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Inicia la aplicación:
   ```
   npm start
   ```

4. Abre tu navegador y visita:
   ```
   http://localhost:3000
   ```

## Desarrollo

Para ejecutar la aplicación en modo desarrollo con recarga automática:
```
npm run dev
```

## Estructura del proyecto

```
.
├── app.js                # Archivo principal de la aplicación
├── package.json          # Configuración y dependencias
├── public/               # Archivos estáticos
│   ├── css/              # Hojas de estilo
│   │   └── styles.css    
│   ├── js/               # JavaScript del cliente
│   │   └── script.js     
│   └── index.html        # Página principal
└── README.md             # Documentación
```

## Despliegue

Esta aplicación está lista para ser desplegada en plataformas como Heroku, Vercel, Netlify o cualquier otra plataforma que soporte Node.js.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.