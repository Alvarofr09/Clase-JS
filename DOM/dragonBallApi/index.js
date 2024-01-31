const apiDragon = "https://dragonball-api.com/api/characters";

async function getData(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

async function personajes() {
	const dragonball = await getData(apiDragon);

	console.log(dragonball);
	for (let i = 0; i < dragonball.items.length; i++) {
		console.log(dragonball.items[i]);
	}
}

personajes();
