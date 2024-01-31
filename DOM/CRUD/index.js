const createForm = document.querySelector("#createUserForm");
const userContainer = document.querySelector("#userContainer");
const updateForm = document.querySelector("#updateUserForm");

async function getUsers() {
	try {
		const response = await fetch("https://reqres.in/api/users");
		const users = await response.json();
	} catch (error) {}
}
