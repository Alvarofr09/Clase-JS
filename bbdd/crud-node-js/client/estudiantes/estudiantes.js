let datos = document.querySelector(".datos");
let datosStudents = document.querySelector(".students");
const URL = "http://localhost:8000/";

const editStudents = URL + "update-students/";
const deleteStudents = URL + "delete-students/";

async function getData(url) {
	const response = await fetch(url);
	const data = await response.json();

	console.log(data);
	return data;
}

getData(URL + "students");

async function showStudentsInTable(tabla) {
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

async function showStudentsInTableC(cabecera, tabla) {
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
		columnNames.forEach((columnName) => {
			const td = document.createElement("td");
			td.textContent = student[columnName];
			tr.appendChild(td);
		});

		// Agregar botones de editar y borrar
		const tdEdit = document.createElement("td");
		const editButton = document.createElement("button");
		editButton.textContent = "Editar";
		editButton.classList.add("btn", "btn-success");
		tdEdit.appendChild(editButton);
		tr.appendChild(tdEdit);

		const tdDelete = document.createElement("td");
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Borrar";
		deleteButton.classList.add("btn", "btn-danger");
		tdDelete.appendChild(deleteButton);
		tr.appendChild(tdDelete);

		// Agregar la nueva fila a la tabla
		tabla.append(tr);
	});
}

showStudentsInTableC(datos, datosStudents);
