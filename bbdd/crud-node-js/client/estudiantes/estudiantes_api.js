import { URL } from "./estudiantes.js";

const editStudentURL = URL + "/update-students/";
const deleteStudentURL = URL + "/delete-students/";

async function updateStudent(id) {
	console.log("Vas a editar al estudiante con el id: " + id);
}

async function deleteStudent(id) {
	try {
		console.log("Vas a borrar al estudiante con el id: " + id);
	} catch (error) {
		console.log(error);
	}
}

export { updateStudent, deleteStudent };
