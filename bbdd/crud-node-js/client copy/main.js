import { deleteStudent, getStudents } from "./api/students.js";

const tableBody = document.querySelector("#tableBody");
const addStudentButton = document.querySelector("#addStudent");

async function showStudents() {
	const students = await getStudents();

	for (let i = 0; i < students.length; i++) {
		const row = createTableRowValues([
			students[i].name,
			students[i].lastname,
			students[i].age,
			students[i].gender,
		]);

		tableBody.append(row);
	}
}

showStudents();

function createTableRowValues(values) {
	const tr = document.createElement("tr");
	for (let i = 0; i < values.length; i++) {
		const td = document.createElement("td");
		td.textContent = values[i];
		tr.appendChild(td);
	}
	return tr;
}

function createActionButtons(id) {
	const editarButton = document.createElement("button");
	editarButton.textContent = "Editar";
	editarButton.classList.add("btn", "btn-warning", "me-3");
	editarButton.addEventListener("click", () => {
		document.location.href = `/update-student/id=${id}`;
	});
}
