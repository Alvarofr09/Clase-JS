import express from "express";
import { pool } from "./conectionMysql.js";

async function getPersonajes() {
	try {
		const result = await pool.query("SELECT * FROM personajes");
		return result.rows[0];
	} catch (error) {
		console.log(error);
	}
}

// getPersonajes();

async function addPersonajes({
	nombre,
	autor,
	year,
	capitulos,
	ages_on_air,
	chap_per_year,
}) {
	try {
		await pool.query(
			"INSERT INTO personajes (nombre, autor, year, capitulos, ages_on_air, chap_per_year) " +
				"VALUES ($1, $2, $3, $4, $5, $6)",
			[nombre, autor, year, capitulos, ages_on_air, chap_per_year]
		);

		return "Personaje añadido";
	} catch (error) {
		console.log(error);
	}
}

// addPersonajes();

const app = express();

app.use(express.json());

const PORT = 3000;

// End point de GET
app.get("/personajes", async (req, res) => {
	try {
		const result = await getPersonajes();
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

app.post("/add-personajes", async (req, res) => {
	try {
		const result = await addPersonajes(req.body);
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

// Inicia el servidor
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
