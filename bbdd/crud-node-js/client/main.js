import { deleteStudent, getStudents } from "../client copy/api/students.js";

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
		const { editButton, deleteButton } = createActionButtons(students[i].id);
		const td = document.createElement("td");
		td.append(editButton, deleteButton);

		row.appendChild(td);
		tableBody.appendChild(row);
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
	const editButton = document.createElement("button");
	editButton.textContent = "Editar";
	editButton.classList.add("btn", "btn-warning", "me-3");
	editButton.addEventListener("click", () => {
		document.location.href = `/update-student/id=${id}`;
	});

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Borrar";
	deleteButton.classList.add("btn", "btn-danger");
	deleteButton.addEventListener("click", async function () {
		await deleteStudent(id);
		this.closest("tr").remove();
	});

	return { editButton, deleteButton };
}
