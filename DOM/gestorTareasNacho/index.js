const addMemberForm = document.querySelector("#personNameForm");
const taskForm = document.querySelector("#taskForm");

addMemberForm.addEventListener("submit", handleSubmit);
taskForm.addEventListener("submit", addTaskToList);

const familyMember = [];
const taskPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addMemberToList(name) {
	familyMember[familyMember.length] = { text: name, score: 0 };
}

function handleSubmit(e) {
	e.preventDefault();
	const formData = Object.fromEntries(new FormData(this));
	addMemberToList(formData.name);
	showTaskForm();
}

function addTaskToList(e) {
	e.preventDefault();
	const formData = Object.fromEntries(new FormData(this));
	const taskTitle = document.createElement("h3");
	taskTitle.textContent = "Tareas por hacer";
}

function showTaskForm() {
	if (familyMember.length > 0) {
		// Creo el titulo para el formulario
		const title = document.createElement("h3");
		title.textContent = "Añade tareas a miembros";

		// Creo el boton para submitear el form
		const button = document.createElement("button");
		button.setAttribute("type", "submit");
		button.textContent = "Añadir tarea";

		// Creo el input donde el usuario escribe la tarea
		const taskInput = document.createElement("input");
		taskInput.setAttribute("placeholder", "Nueva tarea");
		taskInput.setAttribute("id", "taskInput");
		taskInput.setAttribute("name", "task");
		taskInput.setAttribute("required", "true");

		// Crear los selects
		const memberSelect = createSelectWithOptions(
			familyMember,
			"memberSelect",
			"Selecciona miembro de la familia"
		);

		const pointsSelect = createSelectWithOptions(
			taskPoints,
			"pointsSelect",
			"Selecciona el valor de la tarea"
		);

		// Busco si el select de la familia existe
		const isSelectExist = document.querySelector("#memberSelect");

		// Si existe reemplazo el que hay por el que acabo de crear con el nuevo miembro
		if (isSelectExist) {
			isSelectExist.replaceWith(memberSelect);
			return;
		}

		// Añadirlos al DOM
		taskForm.append(title, taskInput, memberSelect, pointsSelect, button);
	}
}

function createSelectWithOptions(options, id, labelText) {
	const select = document.createElement("select");
	select.setAttribute("name", id);
	select.setAttribute("id", id);
	select.setAttribute("required", "true");

	const option = document.createElement("option");
	option.setAttribute("value", "");
	option.textContent = labelText;
	select.prepend(option);

	for (let i = 0; i < options.length; i++) {
		const option = document.createElement("option");
		if (typeof options[i] === "object") {
			option.setAttribute("value", options[i].text);
			option.textContent = options[i].text;
			select.append(option);
		} else {
			option.setAttribute("value", options[i]);
			option.textContent = options[i];
			select.append(option);
		}
	}
}
