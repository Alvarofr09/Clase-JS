import { pool } from "../../conectionMysql.js";

async function getEstudiantes() {
	try {
		const result = await pool.query("SELECT * FROM students");
		return result[0];
	} catch (error) {
		console.log(error);
	}
}

async function getEstudianteByid(id) {
	try {
		const result = await pool.query(`SELECT * FROM students where id = ${id}`);
		return result[0];
	} catch (error) {
		console.log(error);
	}
}

async function addEstudiante({ name, lastname, gender, age }) {
	try {
		const result = await pool.query(
			"INSERT INTO students " + "VALUES (?, ?, ?, ?)",
			[name, lastname, gender, age]
		);
		result;
	} catch (error) {
		console.log(error);
	}
}

export {
	getEstudiantes,
	getEstudianteByid,
	addEstudiante,
	// updatePersonaje,
	// deletePersonaje,
};
