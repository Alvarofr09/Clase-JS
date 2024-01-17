const listContainer = document.querySelector(".list-container");
const textInput = document.querySelector(".input");
const button = document.querySelector(".button");

// const lists = document.querySelectorAll("li");

function crearList(texto) {
	const li = document.createElement("li");
	const text = document.createTextNode(texto);

	const button = document.createElement("button");
	button.classList.add("delete");
	button.append(document.createTextNode("X"));

	li.append(text);
	li.append(button);

	return li;
}

function meterList() {
	if (textInput.value !== "") {
		const li = crearList(textInput.value);

		const primerElemento = listContainer.firstChild;

		listContainer.insertBefore(li, primerElemento);

		textInput.value = "";
		actualizarLista();
	}
}

function comprobarTareas() {
	const mensajeExistente = document.querySelector(".mensaje-tareas");

	if (mensajeExistente) {
		mensajeExistente.remove();
	}

	if (listContainer.childElementCount > 0) {
		listContainer.insertAdjacentHTML(
			"beforebegin",
			"<p class='mensaje-tareas'>Tareas por hacer</p>"
		);
	} else {
		listContainer.insertAdjacentHTML(
			"beforebegin",
			"<p class='mensaje-tareas'>Aun no hay tareas</p>"
		);
	}
}

function actualizarLista() {
	let buttons = document.querySelectorAll(".delete");

	console.log(buttons);

	buttons.forEach(function (button) {
		button.addEventListener("click", function (e) {
			e.target.parentElement.remove();
			e.stopImmediatePropagation();
			comprobarTareas();
		});
	});

	let lists = document.querySelectorAll("li");

	lists.forEach(function (li) {
		li.addEventListener("click", function (e) {
			li.classList.toggle("tachado");
			e.stopImmediatePropagation();
		});
	});
}

comprobarTareas();
button.addEventListener("click", function (e) {
	e.preventDefault();
	meterList(textInput.value);
	comprobarTareas();
});
