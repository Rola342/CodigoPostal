  # Imagen de nodejs
FROM node:14.15.4-alpine

  # Creamos el directorio de la aplicación
WORKDIR /usr/src/app

  # Instalamos las dependencias
COPY package*.json ./
RUN npm ci --only=production

  # Copiamos las dependecias al directorio de trabajo
COPY . .

  # Expones el puerto para la aplicación
EXPOSE $PORT

  # Variables de entorno
ENV MONGO_DB_URI $MONGO_DB_URI
ENV HOST $HOST
ENV NODE_ENV "production"

  # Ejecutamos el servidor
CMD ["node" "server.js"]
