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

		const card = document.importNode(template.content, true);

		const image = card.querySelector(".card_image");
		const name = card.querySelector(".name");
		const pokemonNumber = card.querySelector(".pokemon_number");
		const firstType = card.querySelector(".pokemon_type_primary");
		const secondType = card.querySelector(".pokemon_type_secondary");

		image.src = pokemon.sprites.front_default;
		name.textContent = pokemon.name;
		pokemonNumber.textContent = pokemon.id;
		firstType.textContent = pokemon.types[0].type.name;
		if (pokemon.types.length > 1) {
			secondType.textContent = pokemon.types[1].type.name;
		}

		container.appendChild(card);
	}
}

createPokemonCards();
