FROM node:24-alpine3.21

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app

RUN npm install

# Copia solo los archivos necesarios para el desarrollo.  Evita copiar node_modules
COPY . /usr/src/app/

EXPOSE 4200

# Comando para iniciar el servidor de desarrollo de Angular
CMD ["npm", "start", "--", "--host=0.0.0.0"]