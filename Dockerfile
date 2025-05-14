FROM node:18-alpine

WORKDIR /app

# Copiar archivos del proyecto
COPY package*.json ./
COPY app.js ./

# Instalar dependencias
RUN npm ci --only=production

# Exponer puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
