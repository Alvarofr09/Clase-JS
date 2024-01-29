const template = document.querySelector(".card--template");
const container = document.querySelector(".container");
const baseUrl = "https://jsonplaceholder.typicode.com/";
const url = new URL(document.location.href);
const userId = url.searchParams.get("userId");
const postId = url.searchParams.get("postId");

async function getComments() {
	// const users = await myFetch(`${baseUrl}/users`);
	const response = await fetch(`${baseUrl}/comments?postId=${postId}`);
	const comments = await response.json();

	return comments;
}

async function createPostsComments() {
	const comments = await getComments();

	for (let i = 0; i < comments.length; i++) {
		const comment = comments[i];

		// Clonar plantilla
		const card = document.importNode(template.content, true);

		// Modificar el contenido del clon con datos específicos
		const cardTitle = card.querySelector(".card-title");
		const cardSubtitle = card.querySelector(".subtitle");
		const cardText = card.querySelector(".card-text");

		// Añadir los datos a cada elemento de la card
		cardTitle.textContent = comment.name;
		cardSubtitle.textContent = comment.email;
		cardText.textContent = comment.body;

		// Agregar el clon al contenedor
		container.appendChild(card);
	}
}

createPostsComments();
