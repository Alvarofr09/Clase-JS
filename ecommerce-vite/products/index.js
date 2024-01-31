const container = document.querySelector(".container");
const template = document.querySelector(".card--template");
const urlProducts = "https://api.escuelajs.co/api/v1/products?offset=0&limit=";
const limit = 10;

async function getData(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

async function showData(limit) {
	try {
		const products = await getData(urlProducts + limit);

		for (let i = 0; i < products.length; i++) {
			const product = products[i];
			const templateCard = document.importNode(template.content, true);

			const imagen = templateCard.querySelector(".product-image");
			const name = templateCard.querySelector(".product-name");
			const price = templateCard.querySelector(".product-price");
			const description = templateCard.querySelector(".product-description");

			imagen.src = product.images[1];

			// Acortar el título a 10 palabras máximo
			const titleWords = product.title.split(" ");
			const shortenedTitle = titleWords.slice(0, 2).join(" ");
			name.textContent = shortenedTitle + (titleWords.length > 2 ? "..." : "");

			price.textContent = product.price + "€";

			// Acortar la descripción a 10 palabras máximo
			const descriptionWords = product.description.split(" ");
			const shortenedDescription = descriptionWords.slice(0, 10).join(" ");
			description.textContent =
				shortenedDescription + (descriptionWords.length > 10 ? "..." : "");

			container.appendChild(templateCard);
		}
	} catch (err) {
		console.log(err);
	}
}

showData(limit);
