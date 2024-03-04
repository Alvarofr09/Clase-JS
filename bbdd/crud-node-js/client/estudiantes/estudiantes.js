import { updateStudent, deleteStudent } from "./estudiantes_api.js";

let datos = document.querySelector(".datos");
let datosStudents = document.querySelector(".students");

export const URL = "http://localhost:8000/";

async function getData(url) {
	const response = await fetch(url);
	const data = await response.json();

	console.log(data);
	return data;
}

async function showStudentsInTableA(tabla) {
	const students = await getData(URL + "students");

	for (let i = 0; i < students.length; i++) {
		const student = students[i];

		// Crear una nueva fila (tr)
		const tr = document.createElement("tr");

		// Crear y agregar celdas para cada dato
		const thId = document.createElement("th");
		thId.textContent = student.ID;

		const tdName = document.createElement("td");
		tdName.textContent = student.NAME;

		const tdLastName = document.createElement("td");
		tdLastName.textContent = student.LAST_NAME;

		const tdAge = document.createElement("td");
		tdAge.textContent = student.AGE;

		const tdGender = document.createElement("td");
		tdGender.textContent = student.GENDER;

		// Agregar las celdas a la nueva fila
		tr.append(thId, tdName, tdLastName, tdAge, tdGender);

		// Agregar la nueva fila a la tabla
		tabla.appendChild(tr);
	}
}

async function showStudentsInTable(cabecera, tabla) {
	const students = await getData(URL + "students");

	// Obtener las claves (nombres de las columnas) del primer estudiante
	const columnNames = Object.keys(students[0]);

	// Crear y agregar encabezados de columna (th) basados en las claves del primer estudiante
	columnNames.forEach((columnName) => {
		const th = document.createElement("th");
		th.textContent = columnName;
		cabecera.prepend(th);
	});

	// Iterar sobre los estudiantes y agregarlos a la tabla
	students.forEach((student) => {
		const tr = document.createElement("tr");

		// Crear y agregar el primer campo (ID) como un th
		const thId = document.createElement("th");
		thId.textContent = student.ID;
		tr.appendChild(thId);

		// Guardar el ID como un atributo de dataset en el elemento tr
		tr.dataset.id = student.ID;

		// Agregar celdas de datos para las otras columnas
		columnNames.slice(1).forEach((columnName) => {
			const td = document.createElement("td");
			td.textContent = student[columnName];
			tr.appendChild(td);
		});

		// Agregar botones de editar y borrar
		const tdEdit = document.createElement("td");
		const editButton = document.createElement("button");
		editButton.textContent = "Editar";
		editButton.classList.add("btn", "btn-success");
		editButton.addEventListener("click", (e) => {
			updateStudent(e.target.parentElement.parentElement.dataset.id);
		});
		tdEdit.appendChild(editButton);
		tr.appendChild(tdEdit);

		const tdDelete = document.createElement("td");
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Borrar";
		deleteButton.classList.add("btn", "btn-danger");
		deleteButton.addEventListener("click", (e) => {
			deleteStudent(e.target.parentElement.parentElement.dataset.id);
		});
		tdDelete.appendChild(deleteButton);
		tr.appendChild(tdDelete);

		// Agregar la nueva fila a la tabla
		tabla.append(tr);
	});
}

showStudentsInTable(datos, datosStudents);

// export { getData, showStudentsInTable };
