import { URL } from "./estudiantes.js";

const addStudentURL = URL + "add-students/";
const editStudentURL = URL + "update-students/";
const deleteStudentURL = URL + "delete-students/";

async function showDataStudent(id) {
	try {
		console.log(`${URL}students/${id}`);
		const response = await fetch(`${URL}students/${id}`);
		const data = await response.json();
		console.log(data);
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

async function updateStudent(id) {
	try {
		showDataStudent(id);
		// const response = await fetch(`${URL}${id}`, {
		// 	method: "PUT",
		// 	body: JSON.stringify(Estudiante),
		// 	headers: {
		// 		"Content-type": "application/json",
		// 	},
		// });

		// if (response.ok) {
		// 	location.reload();
		// }
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

export { createStudent, updateStudent, deleteStudent };

updateForm.addEventListener("submit", async function (e) {
	e.preventDefault();
	const formData = Object.fromEntries(new FormData(this));

	const editedUser = {
		name: formData.first_name,
		job: formData.job,
	};
	const userId = document.querySelector("[data-id]");

	try {
		const response = await fetch(
			`https://reqres.in/api/users/${userId.dataset.id}`,
			{
				method: "PUT",
				body: JSON.stringify(editedUser),
				headers: {
					"Content-type": "application/json",
				},
			}
		);

		if (response.ok) {
			const updateUser = await response.json();
			const userToUpdate = document.querySelector(
				`[data-userid = "${userId.dataset.id}"]`
			);
			userToUpdate.textContent = updateUser.name;
			this.reset();
			updateForm.classList.toggle("hide");
		}
	} catch (error) {
		console.log(error);
	}
});
