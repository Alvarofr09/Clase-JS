async function getStudents() {
	try {
		const response = await fetch("http://localhost:8000/students");
		const students = await response.json();
		return students;
	} catch (error) {
		throw new Error("Server error", error);
	}
}

async function getStudentById(id) {
	try {
		const response = await fetch(`http://localhost:8000/students/${id}`);
		const student = await response.json();
		return student;
	} catch (error) {
		throw new Error("Server error", error);
	}
}

async function deleteStudent(id) {
	try {
		const response = await fetch(
			`http://localhost:8000/delete-students/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const result = await response.json();
		return result;
	} catch (error) {
		throw new Error("Server error", error);
	}
}

async function updateStudent(id, student) {
	try {
		const response = await fetch(
			`http://localhost:8000/update-students/${id}`,
			{
				method: "PUT",
				body: JSON.stringify(student),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const result = await response.json();
		return result;
	} catch (error) {
		throw new Error("Server error", error);
	}
}

async function createStudent(student) {
	try {
		const response = await fetch(`http://localhost:8000/add-students`, {
			method: "POST",
			body: JSON.stringify(student),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();
		return result;
	} catch (error) {
		throw new Error("Server error", error);
	}
}

export {
	getStudents,
	getStudentById,
	deleteStudent,
	updateStudent,
	createStudent,
};
