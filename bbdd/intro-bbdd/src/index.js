import { pool } from "./conectionMysql.js";

function getPersonajes() {
	try {
		const result = pool.query("SELECT * FROM users");
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

getPersonajes();
