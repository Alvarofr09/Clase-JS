import express from "express";
import { pool } from "./conectionMysql.js";

// Funcion que te trae los personajes
async function getPersonajes() {
	try {
		const result = await pool.query("SELECT * FROM personajes");
		return result.rows[0];
	} catch (error) {
		console.log(error);
	}
}

async function getPersonajeByid(id) {
	try {
		const result = await pool.query(
			`SELECT * FROM personajes where id = ${id}`
		);
		return result.rows[0];
	} catch (error) {
		console.log(error);
	}
}
// getPersonajes();

// Funcion que te añade un personaje
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

async function updatePersonaje(
	{ nombre, autor, year, capitulos, ages_on_air, chap_per_year },
	id
) {
	try {
		await pool.query(
			"UPDATE personajes " +
				"SET nombre = $1, autor = $2, year = $3, capitulos = $4, ages_on_air = $5, chap_per_year = $6 " +
				`WHERE id = ${id}`,
			[nombre, autor, year, capitulos, ages_on_air, chap_per_year]
		);

		return "Personaje actualizado";
	} catch (error) {
		console.error("Error al actualizar el personaje:", error);
		throw error;
	}
}

async function deletePersonaje({ id }) {
	try {
		await pool.query("DELETE FROM personajes WHERE id = $1", [id]);

		return "Personaje borrado";
	} catch (error) {
		console.error("Error al actualizar el personaje:", error);
		throw error;
	}
}

// addPersonajes();

const app = express();

app.use(express.json());

const PORT = 3000;

// Endpoint de GET
app.get("/personajes", async (req, res) => {
	try {
		const result = await getPersonajes();
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

app.get("/personajes/:id", async (req, res) => {
	try {
		const result = await getPersonajeByid(req.params.id);
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

// Endpoint de POST
app.post("/personajes", async (req, res) => {
	try {
		const result = await addPersonajes(req.body);
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

// Endpoint de PUT
app.put("/personajes/:id", async (req, res) => {
	try {
		const result = await updatePersonaje(req.body, req.params.id);
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

// Endpoint de DELETE
app.delete("/personajes", async (req, res) => {
	try {
		const result = await deletePersonaje(req.body);
		res.send(result);
	} catch (error) {
		console.error("Error al realizar la consulta", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
});

// Inicia el servidor
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
