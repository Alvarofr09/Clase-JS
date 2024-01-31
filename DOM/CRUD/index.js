const createForm = document.querySelector("#createUserForm");
const userContainer = document.querySelector("#userContainer");
const updateForm = document.querySelector("#updateUserForm");

const nameInputEditForm = document.querySelector('[data-name = "first_name"]');

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

			editButton.addEventListener("click", function (e) {
				e.preventDefault();
				updateForm.classList.toggle("hide");
				nameInputEditForm.value = users[i].first_name;
			});

			deleteButton.addEventListener("click", function (e) {});

			div.append(p, editButton, deleteButton);

			userContainer.append(div);
		}
	} catch (error) {
		console.log(error);
	}
}

getUsers();
