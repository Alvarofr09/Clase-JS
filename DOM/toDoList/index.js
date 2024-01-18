const listContainer = document.querySelector(".list-container");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const form = document.querySelector(".form");

// const lists = document.querySelectorAll("li");

form.addEventListener("submit", manejarSubmit);
mensaje();

function mensaje() {
	const h3 = document.createElement("h3");
	h3.classList.add("task-message");

	h3.textContent = listContainer.firstElementChild
		? "Tareas por hacer"
		: "No hay tareas aun";

	const previousMessage = document.querySelector(".task-message");

	if (previousMessage) {
		previousMessage.replaceWith(h3);
	}

	listContainer.before(h3);
}

function crearTarea(tarea) {
	const li = document.createElement("li");

	const button = document.createElement("button");
	button.classList.add("delete");
	button.textContent = "X";

	li.textContent = tarea;

	listContainer.prepend(li);
	li.append(button);

	// addDashedClass(li);
	addRemoveEvent(button);
}

function manejarSubmit(e) {
	e.preventDefault();

	const newTodo = input.value;

	if (!newTodo) {
		return;
	}

	crearTarea(newTodo);
	this.reset();
	mensaje();
}

function addDashedClass(element) {
	element.addEventListener("dblclick", function () {
		element.remove();
		mensaje();
	});
}

function addRemoveEvent(element) {
	element.addEventListener("click", function () {
		element.parentElement.remove();
		mensaje();
	});
}
