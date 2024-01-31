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
			p.setAttribute("data-userId", users[i].id);
			p.textContent = users[i].first_name;

			const editButton = document.createElement("button");
			editButton.textContent = "Editar";

			const deleteButton = document.createElement("button");
			deleteButton.textContent = "Eliminar";

			editButton.addEventListener("click", function (e) {
				e.preventDefault();
				updateForm.classList.toggle("hide");
				nameInputEditForm.setAttribute("data-id", users[i].id);
				nameInputEditForm.value = users[i].first_name;
			});

			deleteButton.addEventListener("click", async function (e) {
				try {
					const response = await fetch(
						`https://reqres.in/api/users/${users[i].id}`,
						{
							method: "DELETE",
						}
					);
					if (response.status === 204) {
						alert("Usuario eliminado");
					}
				} catch (error) {
					console.log(error);
				}
			});

			div.append(p, editButton, deleteButton);

			userContainer.append(div);
		}
	} catch (error) {
		console.log(error);
	}
}

getUsers();

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

createForm.addEventListener("submit", async function (e) {
	e.preventDefault();
	const formData = Object.fromEntries(new FormData(this));

	const newUser = {
		name: formData.name,
		job: formData.job,
	};

	try {
		const response = await fetch("https://reqres.in/api/users", {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: {
				"Content-type": "application/json",
			},
		});

		if (response.ok) {
			const userCreated = await response.json();

			const div = document.createElement("div");
			const p = document.createElement("p");
			p.setAttribute("data-userId", userCreated.id);
			p.textContent = userCreated.name;

			const editButton = document.createElement("button");
			editButton.textContent = "Editar";

			const deleteButton = document.createElement("button");
			deleteButton.textContent = "Eliminar";

			editButton.addEventListener("click", function (e) {
				e.preventDefault();
				updateForm.classList.toggle("hide");
				nameInputEditForm.setAttribute("data-id", userCreated.id);
				nameInputEditForm.value = userCreated.name;
			});

			deleteButton.addEventListener("click", async function (e) {
				try {
					const response = await fetch(
						`https://reqres.in/api/users/${userCreated.id}`,
						{
							method: "DELETE",
						}
					);
					if (response.status === 204) {
						alert("Usuario eliminado");
					}
				} catch (error) {
					console.log(error);
				}
			});

			div.append(p, editButton, deleteButton);

			userContainer.prepend(div);
		}
	} catch (error) {
		console.log(error);
	}
});
