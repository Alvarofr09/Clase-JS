const template = document.querySelector(".card--template");
const container = document.querySelector(".container");
const baseUrl = "https://reqres.in/api/users?page=2";

function myFetch(url) {
	return fetch(url).then((res) => {
		return res.json();
	});
}

async function getData(url) {
	const data = await myFetch(url);
	return data;
}

async function createUsersCards() {
	const data = await getData(baseUrl);
	const users = data.data;

	for (let i = 0; i < users.length; i++) {
		const user = users[i];

		// Clonar plantilla
		const card = document.importNode(template.content, true);

		// Modificar el contenido del clon con datos específicos
		const cardImage = card.querySelector(".card_izq_image");
		const cardName = card.querySelector(".card_izq_name");
		const cardEmail = card.querySelector(".card_der_email");

		// Crear elementos para datos específicos
		const image = document.createElement("img");
		image.classList.add("user_card");
		image.src = user.avatar;

		const name = document.createElement("h3");
		name.classList.add("user_name");
		name.textContent = `${user.first_name} ${user.last_name}`;

		const email = document.createElement("p");
		email.classList.add("user_email");

		const titleEmail = document.createElement("span");
		titleEmail.classList.add("user_title_email");
		titleEmail.textContent = "Email: ";
		email.appendChild(titleEmail);
		email.textContent += `${user.email}`;

		// Agregar elementos al clon
		cardImage.appendChild(image);
		cardName.appendChild(name);
		cardEmail.appendChild(email);

		// Agregar el clon al contenedor
		container.appendChild(card);
	}
}

createUsersCards();
