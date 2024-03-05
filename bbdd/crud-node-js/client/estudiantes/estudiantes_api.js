import { URL } from "./estudiantes.js";

const addStudentURL = URL + "add-students/";
const editStudentURL = URL + "update-students/";
const deleteStudentURL = URL + "delete-students/";

const inputId = document.querySelector("#idUpdate");
const inputName = document.querySelector("#nameUpdate");
const inputLastName = document.querySelector("#lastnameUpdate");
const inputAge = document.querySelector("#ageUpdate");

async function showDataStudent(id) {
	try {
		const response = await fetch(`${URL}students/${id}`);
		const student = await response.json();
		inputId.value = student.id;
		inputName.value = student.name;
		inputLastName.value = student.lastname;
		inputAge.value = student.age;
	} catch (error) {
		console.log(error);
	}
}
async function createStudent(Estudiante) {
	try {
		const response = await fetch(addStudentURL, {
			method: "POST",
			body: JSON.stringify(Estudiante),
			headers: {
				"Content-type": "application/json",
			},
		});

		if (response.ok) {
			location.reload();
		}
	} catch (error) {
		console.log(error);
	}
}

async function updateStudent(Estudiante, id) {
	try {
		const response = await fetch(`${editStudentURL}${id}`, {
			method: "PUT",
			body: JSON.stringify(Estudiante),
			headers: {
				"Content-type": "application/json",
			},
		});

		if (response.ok) {
			location.reload();
		}
	} catch (error) {
		console.log(error);
	}
}

async function deleteStudent(id) {
	const url = deleteStudentURL + id;
	try {
		const response = await fetch(url, {
			method: "DELETE",
		});
		if (response.status === 204) {
			alert("Estudiante eliminado");
			const userToDelete = document.querySelector(`[data-id = "${id}"]`);
			userToDelete.remove();
		}
		location.reload();
	} catch (error) {
		console.log(error);
	}
}

export { showDataStudent, createStudent, updateStudent, deleteStudent };
