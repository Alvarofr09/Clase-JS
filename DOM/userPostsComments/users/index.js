const template = document.querySelector(".card--template");
const container = document.querySelector(".container");
const baseUrl = "https://jsonplaceholder.typicode.com/";

async function getUsers() {
	// const users = await myFetch(`${baseUrl}/users`);
	const response = await fetch(`${baseUrl}/users`);
	const users = await response.json();

	return users;
}

async function createUsersCards() {
	const users = await getUsers();

	for (let i = 0; i < users.length; i++) {
		const user = users[i];

		// Clonar plantilla
		const card = document.importNode(template.content, true);

		// Modificar el contenido del clon con datos específicos
		const cardTitle = card.querySelector(".card-title");
		const cardText = card.querySelector(".card-text");
		const cardBtn = card.querySelector(".btn-primary");

		// Añadir los datos a cada elemento de la card
		cardTitle.textContent = user.username;
		cardText.textContent = user.name;
		cardBtn.textContent = "Ver posts de este usuario";
		// cardBtn.href = `../posts/index.html?userId=${user.id}`;

		cardBtn.addEventListener("click", function () {
			document.location.href = `../posts/index.html?userId=${user.id}`;
		});
		// Agregar el clon al contenedor
		container.appendChild(card);
	}
}

function showUserPost(userId) {
	`${baseUrl}/posts?userId=${usersId}`;
}

createUsersCards();
