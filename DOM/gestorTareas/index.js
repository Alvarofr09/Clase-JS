const nameForm = document.querySelector("#personNameForm");
const taskForm = document.querySelector("#taskForm");
const taskList = document.querySelector("#taskList");
const memberPoints = document.querySelector("#memberPoints");
const miembrosFamilia = ["Selecciona el valor de la tarea"];
const ratings = [
	"Selecciona el valor de la tarea",
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
];
const memberPointsData = {}; // Objeto para rastrear los puntos de cada miembro

let isTaskFormCreated = false;

nameForm.addEventListener("submit", function (e) {
	e.preventDefault();

	updateSelect(miembrosFamilia, nameForm.children[0].value);
	if (!isTaskFormCreated) {
		createTaskForm(e.target);

		isTaskFormCreated = true;
	} else {
		addToSelect(document.querySelector("[name='nombre']"), miembrosFamilia);
	}

	nameForm.reset();
});

function createTaskForm() {
	const h3 = document.createElement("h3");
	h3.textContent = "Añade tareas a miembros";
	taskForm.append(h3);

	const inputTask = document.createElement("input");
	inputTask.type = "text";
	inputTask.placeholder = "Nueva Tarea";
	inputTask.name = "tarea";
	inputTask.required = true; // Agrega esta línea
	taskForm.append(inputTask);

	const inputMember = document.createElement("select");
	inputMember.name = "nombre";
	inputMember.required = true; // Agrega esta línea
	const option = document.createElement("option");
	option.text = "Selecciona miembro de la familia";
	inputMember.append(option);
	addToSelect(inputMember, miembrosFamilia);
	taskForm.append(inputMember);

	const inputValue = document.createElement("select");
	inputValue.name = "ratings";
	inputValue.required = true; // Agrega esta línea
	const optionValue = document.createElement("option");
	optionValue.text = "Selecciona valor de la tarea";
	inputValue.append(optionValue);
	addToSelect(inputValue, ratings);
	taskForm.appendChild(inputValue);

	const button = document.createElement("button");
	button.textContent = "Generar tarea";
	button.classList.add("button");
	button.type = "submit";
	taskForm.appendChild(button);

	taskForm.addEventListener("submit", function (e) {
		e.preventDefault();
		createTask(e.target);
		createRanking();
	});
}

function addToSelect(select, array) {
	select.innerHTML = "";

	for (let i = 0; i < array.length; i++) {
		const option = document.createElement("option");
		option.value = array[i];
		option.text = array[i];
		select.appendChild(option);
	}
}

function updateSelect(array, value) {
	array.push(value);
}

function removeElement(element) {
	element.remove();
}

function createTask(form) {
	const formData = new FormData(form);
	console.log(formData);

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
        <span onclick="completedTask(this)">${tarea}: ${nombreFamilia} - ${valorTarea} puntos</span>
	        
	        <button class="buttonRed" onclick="removeElement(this.parentElement)">X</button>
	    </li>
	  `
	);

	form.reset();
}

function completedTask(element) {
	element.classList.toggle("completed");
	element.parentElement.classList.toggle("bg-completed");
}

function createRanking() {
	// Limpiar el contenido existente en memberPoints
	memberPoints.innerHTML = "";

	const h3 = document.createElement("h3");
	h3.textContent = "Ranking";
	memberPoints.appendChild(h3);

	// Crear una lista ordenada para el ranking
	const rankingList = document.createElement("ol");

	// Iterar sobre los miembros y agregar puntos al ranking
	for (const member in memberPointsData) {
		const listItem = document.createElement("p");
		listItem.textContent = `${member}: ${memberPointsData[member]} puntos`;
		memberPoints.appendChild(listItem);
	}

	// Agregar la lista al elemento memberPoints
	// memberPoints.appendChild(rankingList);
}

function addToPoints(member, points) {
	// Verificar si ya existe el miembro en el objeto memberPointsData
	if (!memberPointsData[member]) {
		memberPointsData[member] = 0;
	}

	// Sumar o restar puntos según la tarea esté completada o no
	memberPointsData[member] += points;

	// Actualizar el ranking
	createRanking();
}

function completedTask(element) {
	element.classList.toggle("completed");
	element.parentElement.classList.toggle("bg-completed");

	const tareaElement = element.parentElement;
	const member = tareaElement.getAttribute("data-member");
	const valorTarea = parseInt(tareaElement.getAttribute("data-value"));

	// Verificar si la tarea está completada y actualizar los puntos
	if (element.classList.contains("completed")) {
		addToPoints(member, valorTarea);
	} else {
		addToPoints(member, -valorTarea);
	}
}
