import { URL } from "./estudiantes.js";

const editStudentURL = URL + "/update-students/";
const deleteStudentURL = URL + "/delete-students/";

async function updateStudent(id) {
	try {
		console.log("Vas a editar al estudiante con el id: " + id);
	} catch (error) {
		console.log(error);
	}
}

async function deleteStudent(id) {
	const url = deleteStudent + id;
	try {
		const response = await fetch(url, {
			method: "DELETE",
		});
		if (response.status === 204) {
			alert("Estudiante eliminado");
			const userToDelete = document.querySelector(`[data-id = "${id}"]`);
			userToDelete.remove();
		}
	} catch (error) {
		console.log(error);
	}
}

export { updateStudent, deleteStudent };
