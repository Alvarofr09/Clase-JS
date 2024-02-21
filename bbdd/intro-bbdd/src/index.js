// import { pool } from "./conectionMysql.js";
import { pool } from "./conectionMysql.js";

async function getPersonajes() {
	try {
		const result = await pool.query("SELECT * FROM personajes");
		console.log(result.rows[0]);
	} catch (error) {
		console.log(error);
	}
}

getPersonajes();

async function addPersonajes() {
	try {
		const result = await pool.query(
			"INSERT INTO personajes (nombre, autor, year, capitulos, ages_on_air, chaps_per_year) " +
				"VALUES ($1, $2, $3, $4, $5, $6)",
			["Naruto Uzumaki", "Masashi Kishimoto", 1999, 700, 25, 28]
		);

		console.log(result);
		console.log("Personaje añadido");
	} catch (error) {
		console.log(error);
	}
}

// addPersonajes();
