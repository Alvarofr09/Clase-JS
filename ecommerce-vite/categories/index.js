const urlCategories = "https://api.escuelajs.co/api/v1/categories";
const template = document.querySelector(".card--template");
const container = document.querySelector(".container");

async function getData(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

async function showData() {
	const categories = await getData(urlCategories);

	for (let i = 0; i < categories.length; i++) {
		const category = categories[i];

		const templateCard = document.importNode(template.content, true);

		const imagen = templateCard.querySelector(".card-image");
		const cardTitle = templateCard.querySelector(".card-title");
		const editButton = templateCard.querySelector(".card-edit");
		const deleteButton = templateCard.querySelector(".card-delete");

		editButton.addEventListener("click", handleEdit);

		deleteButton.addEventListener("click", handleDelete);

		imagen.src = category.image;
		cardTitle.textContent = category.name;

		container.append(templateCard);

		console.log(category);
	}
}

function handleEdit(e) {
	e.preventDefault();
	alert("Vas a editar");
}

function handleDelete(e) {
	e.preventDefault();
	alert("Vas a borrar");
}

showData();
