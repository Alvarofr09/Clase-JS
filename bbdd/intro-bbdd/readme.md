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

## Para meter un dato en la base de datos

1. Crear una función async con try/catch
2. Luego usar el pool.query como antes solo que con el insert:
   const result = await pool.query(
   "INSERT INTO personajes (nombre, autor, year, capitulos, ages_on_air, chaps_per_year) " +
   "VALUES ($1, $2, $3, $4, $5, $6)",
   ["Naruto Uzumaki", "Masashi Kishimoto", 1999, 700, 25, 28]
   );
   en el values se pone $ y el numero como haya de numero de datos, y luego los datos se ponen abajo como un array

## Crear nuestra api rest

1. instalar express: npm i express;
2. importar express en el js donde lo vayas a usar: import express from "express";
3. Luego usar el express usando:
   const app = express();
   app.use(express.json());

4. Ponerle un puerto para que lo utilize: const PORT = ----;
5. Iniciar el servidor: app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

## Crear endpoint

1. Aqui se crea el endpoint '/personajes', para que cuando llames a la ruta del servidor + '/personajes' haga esta llamada
   app.get("/personajes", async (req, res) => {
   try {
   const result = await getPersonajes();
   res.send(result);
   } catch (error) {
   console.error("Error al realizar la consulta", error);
   res.status(500).json({ error: "Error interno del servidor" });
   }
   });
