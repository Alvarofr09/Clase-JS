const listContainer = document.querySelector(".list-container");
const button = document.querySelector(".button");
const form = document.querySelector(".form");
const input = document.querySelector(".input");

form.addEventListener("submit", handleSubmit);
mesagge();

function mesagge() {
	// Crear el elemento h3
	const h3 = document.createElement("h3");
	h3.classList.add("task-message");

	// Ver si tiene elementos el container
	h3.textContent = listContainer.firstElementChild
		? "Tareas por hacer"
		: "No hay tareas aun";

	// Coger el h3 anterior
	const previousMessage = document.querySelector(".task-message");

	// Reemplazar el h3
	if (previousMessage) {
		previousMessage.replaceWith(h3);
		return;
	}

	// Insertar el h3 antes que el contenedor
	listContainer.before(h3);
}

function handleSubmit(e) {
	// Evitar comportamiento por defecto del form
	e.preventDefault();

	// Capturar el valor del input
	const newTodo = input.value;

	// Evitar crear tareas vacias
	if (!newTodo) {
		return;
	}

	// Crear la tarea en el DOM
	createTask(newTodo);
	this.reset();
	mesagge();
}

function createTask(task) {
	// Crear un elemento li
	const li = document.createElement("li");

	// Crear el boton, darle una clase y añadirle la X al texto
	const button = document.createElement("button");
	button.classList.add("delete");
	button.textContent = "X";

	// Ponerle texto al elemento
	li.textContent = task;

	// Añadir un evento de doble click al li
	// addDashedClass(li);

	listContainer.insertAdjacentHTML(
		"afterbegin",
		`
	<li class = "list-item">
		<span onclick = "completedTask(this)">${task}</span>
		<button onclick = "removeTask(this)" class = "delete" >X</button>
	</li>
	`
	);
	// Añadir un evento de click al boton
	addRemoveEvent(button);

	// Añadirlo a la lista como primer elemento
	// listContainer.prepend(li);
	// li.append(button);
}

function completedTask(element) {
	element.classList.toggle("tachado");
	element.parentElement.classList.toggle("bg-completed");
}

function removeTask(element) {
	element.parentElement.remove();
	mesagge();
}
