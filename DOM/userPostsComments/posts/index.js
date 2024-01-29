const template = document.querySelector(".card--template");
const container = document.querySelector(".container");
const baseUrl = "https://jsonplaceholder.typicode.com/";
const url = new URL(document.location.href);
const userId = url.searchParams.get("userId");

console.log(userId);

async function getPosts() {
	// const users = await myFetch(`${baseUrl}/users`);
	const response = await fetch(`${baseUrl}/posts?userId=${userId}`);
	const posts = await response.json();

	return posts;
}

async function createUsersPosts() {
	const posts = await getPosts();

	for (let i = 0; i < posts.length; i++) {
		const post = posts[i];

		// Clonar plantilla
		const card = document.importNode(template.content, true);

		// Modificar el contenido del clon con datos específicos
		const cardTitle = card.querySelector(".card-title");
		const cardText = card.querySelector(".card-text");
		const cardBtn = card.querySelector(".btn-primary");

		// Añadir los datos a cada elemento de la card
		cardTitle.textContent = post.title;
		cardText.textContent = post.body;
		cardBtn.textContent = "Ver posts de este usuario";

		cardBtn.addEventListener("click", function () {
			document.location.href = `../comments/index.html?userId=${userId}&postId=${post.id}`;
		});
		// Agregar el clon al contenedor
		container.appendChild(card);
	}
}

function showUserPost(userId) {
	`${baseUrl}/posts?userId=${usersId}`;
}

createUsersPosts();
