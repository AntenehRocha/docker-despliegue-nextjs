FROM node:20-alpine

WORKDIR /app

# copiamos los archivos de configuración de npm
COPY package*.json ./

# instalamos las dependencias
RUN npm install

# copiamos todo el resto
COPY . .

# comando para arrancar la app
CMD ["npm", "run", "dev1"]
