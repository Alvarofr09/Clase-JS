// import { pool } from "./conectionMysql.js";
import { pool } from "./conectionMysql.js";

async function getPersonajes() {
	try {
		const result = await pool.query("SELECT * FROM personajes");
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

getPersonajes();
