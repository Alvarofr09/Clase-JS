import { pool } from "../../conectionMysql.js";

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

export {
	getPersonajes,
	getPersonajeByid,
	addPersonajes,
	updatePersonaje,
	deletePersonaje,
};
