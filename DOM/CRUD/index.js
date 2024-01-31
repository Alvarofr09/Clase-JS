const createForm = document.querySelector("#createUserForm");
const userContainer = document.querySelector("#userContainer");
const updateForm = document.querySelector("#updateUserForm");

async function getUsers() {
	try {
		const response = await fetch("https://reqres.in/api/users");
		const usersData = await response.json();

		const users = usersData.data;

		for (let i = 0; i < users.length; i++) {
			const div = document.createElement("div");
			const p = document.createElement("p");
			p.textContent = users[i].first_name;

			const editButton = document.createElement("button");
			editButton.textContent = "Editar";

			const deleteButton = document.createElement("button");
			deleteButton.textContent = "Eliminar";

			const formData = Object.fromEntries(new FormData(updateForm));

			editButton.addEventListener("click", function () {
				updateForm.classList.toggle("hide");
				formData.first_name = user[i].first_name;
			});

			deleteButton.addEventListener("click", function () {});

			div.append(p, editButton, deleteButton);

			userContainer.append(div);
		}
	} catch (error) {
		console.log(error);
	}
}

getUsers();
