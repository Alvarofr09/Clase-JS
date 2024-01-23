const nameForm = document.querySelector("#personNameForm");
const taskForm = document.querySelector("#taskForm");
const taskList = document.querySelector("#taskList");
const memberPoints = document.querySelector("#memberPoints");
const memberSelect = document.querySelector("[name='nombre']");

nameForm.addEventListener("submit", function (e) {
	e.preventDefault();
	addToSelectName(
		memberSelect,
		e.target.querySelector("[name='Nombre']").value
	);
	nameForm.reset();
});

function createTaskForm(form) {
	const h3 = document.createElement("h3");
	h3.textContent = "Añade tareas a miembros";
	taskForm.innerHTML = ""; // Limpiar el contenido existente
	taskForm.appendChild(h3);

	const taskInput = createInputElement("text", "Nueva Tarea", "tarea");
	taskForm.appendChild(taskInput);

	const memberSelect = createSelectElement("nombre");
	addToSelectName(memberSelect, form[0].value);
	taskForm.appendChild(memberSelect);

	const valueSelect = createSelectElement("ratings");
	addToSelect(valueSelect);
	taskForm.appendChild(valueSelect);

	const button = document.createElement("button");
	button.textContent = "Generar tarea";
	button.type = "submit";
	taskForm.appendChild(button);
}

function createInputElement(type, placeholder, name) {
	const input = document.createElement("input");
	input.type = type;
	input.placeholder = placeholder;
	input.name = name;
	return input;
}

function createSelectElement(name) {
	const select = document.createElement("select");
	select.name = name;
	return select;
}

function addToSelectName(select, memberName) {
	const option = createOptionElement(memberName, memberName);
	select.appendChild(option);
}

function createOptionElement(value, text) {
	const option = document.createElement("option");
	option.value = value;
	option.text = text;
	return option;
}

function addToSelect(select) {
	for (let i = 1; i <= 10; i++) {
		const option = createOptionElement(i, i);
		select.appendChild(option);
	}
}

function removeElement(element) {
	element.remove();
}

function createTask(form) {
	const formData = new FormData(form);

	const tarea = formData.get("tarea");
	const nombreFamilia = formData.get("nombre");
	const valorTarea = formData.get("ratings");

	taskList.insertAdjacentHTML(
		"beforeend",
		`
        <li
            data-name="${tarea}"
            data-member="${nombreFamilia}"
            data-value="${valorTarea}"
            class="task-item"
        >
            ${tarea} - ${nombreFamilia} - ${valorTarea} puntos
            <button onclick="removeElement(this.parentElement)">X</button>
        </li>
      `
	);

	form.reset();
}

// Agrega el evento submit al formulario de tareas
taskForm.addEventListener("submit", function (e) {
	e.preventDefault();
	createTask(e.target);
});
