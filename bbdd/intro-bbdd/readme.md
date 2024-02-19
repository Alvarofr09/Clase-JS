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

## Con mysql

2.  Importamos import { createPool } from 'mysql2';
3.  Luego exportamos la constante pool que es los datos de la conexion a la base de datos:
    export const pool = createPool({
    host: "localhost",
    port: 5432,
    database: "imdb",
    user: "postgres",
    password: 1234,
    });

## Con postgre

1.  npm i pg-pool pg
2.  importamos el pool del pg-pool
    import Pool from "pg-pool";
3.  hacer el objecto pool para que funcione la conexion a la base de datos
    export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "imdb",
    password: "1234",
    port: 5432,
    });

## Esto se hace igual para los 2

4.  Importar el pool en el archivo donde vayas a usar la base de datos
5.  Crear una funcion para traer datos:
    import { pool } from "./conectionMysql.js";
    function getPersonajes() {
    try {
    const result = pool.query("SELECT \* FROM personajes");
    console.log(result);
    } catch (error) {
    console.log(error);
    }
    }

    getPersonajes();
