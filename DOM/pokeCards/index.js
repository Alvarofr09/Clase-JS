import { colors } from "./pokemonColors.js";
const template = document.querySelector(".card--template");
const container = document.querySelector(".container");
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

async function getData(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

async function createPokemonCards() {
	const quantity = 10;

	for (let i = 1; i <= quantity; i++) {
		const pokemon = await getData(`${baseUrl}${i}/`);
		console.log(pokemon);

		const templateCard = document.importNode(template.content, true);

		const image = templateCard.querySelector(".card_image");
		const card = templateCard.querySelector(".card");
		const name = templateCard.querySelector(".name");
		const pokemonNumber = templateCard.querySelector(".pokemon_number");
		const firstTypeContent = templateCard.querySelector(
			".pokemon_type_primary"
		);
		const types = templateCard.querySelector(".card_content_type");
		const firstType = pokemon.types[0].type.name;

		card.style.backgroundColor = `${colors[firstType]}`;

		image.src = pokemon.sprites.front_default;
		name.textContent =
			pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

		pokemonNumber.textContent = pokemon.id;
		firstTypeContent.textContent = firstType.toUpperCase();
		firstTypeContent.classList.add("type", firstType);
		firstTypeContent.style.backgroundColor = colors[firstType];
		if (pokemon.types.length > 1) {
			const secondType = pokemon.types[1].type.name;

			const span = document.createElement("span");
			span.classList.add("pokemon_type_secondary", "type", secondType);
			span.textContent = secondType.toUpperCase();
			span.style.backgroundColor = colors[secondType];
			card.style.backgroundImage = `linear-gradient(to right, ${colors[firstType]}, ${colors[secondType]})`;
			types.appendChild(span);
		}

		container.appendChild(templateCard);
	}
}

createPokemonCards();
