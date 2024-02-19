# Pasos para crear un nuevo proyecto

1. Creamos una carpeta para el proyecto
2. Ejecutamos npm init -y
3. Crear una carpeta src
4. Creamos archivo index.js en src
5. Ejecutamos npm install mysql2
6. Ejecutamos npm install --save-dev nodemon
7. Configurar script en package.json para utilizar nodemon.
   `"scripts": {
  "start": "nodemon src/index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},`

## Conexión con la base de datos

1.  Creamos archivo en src llamado connectionMysql.js
2.  Importamos import { createPool } from 'mysql2';
