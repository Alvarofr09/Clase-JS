import { pool } from "../../database/connectionMysql.js";

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
		return result[0][0];
	} catch (error) {
		console.log(error);
	}
}

async function addEstudiante({ name, lastname, gender, age }) {
	try {
		const result = await pool.query(
			"INSERT INTO students (name, lastname, gender, age) " +
				"VALUES (?, ?, ?, ?)",
			[name, lastname, gender, age]
		);
		return result[0];
	} catch (error) {
		console.log(error);
	}
}

async function updateEstudiante({ name, lastname, gender, age }, id) {
	try {
		const result = await pool.query(
			"UPDATE students SET name = ?, lastname = ?, gender = ?, age = ? " +
				`WHERE id = ${id}`,
			[name, lastname, gender, age]
		);
		return result[0];
	} catch (error) {
		console.log(error);
	}
}

async function deleteEstudiante(id) {
	try {
		const result = await pool.query(`DELETE FROM students WHERE id = ${id}`);
		return result[0];
	} catch (error) {
		console.log(error);
	}
}

export {
	getEstudiantes,
	getEstudianteByid,
	addEstudiante,
	updateEstudiante,
	deleteEstudiante,
};
