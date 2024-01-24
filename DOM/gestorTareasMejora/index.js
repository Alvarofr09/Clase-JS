const nameForm = document.querySelector("#personNameForm");
const inputName = document.querySelector("#inputName");
const taskForm = document.querySelector("#taskForm");
const taskList = document.querySelector("#taskList");
const memberPoints = document.querySelector("#memberPoints");
const miembrosFamilia = ["Selecciona el miembro para la tarea"];
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

let formularioPintado = false; // Variable para rastrear si ya se ha pintado el formulario

nameForm.addEventListener("submit", (e) => {
	e.preventDefault();
	updateFamily(inputName.value);

	// Verificar si el formulario ya ha sido pintado
	if (!formularioPintado) {
		paintForm();
	} else {
		updateMemberSelect();
	}

	// Resetear el formulario
	nameForm.reset();
});

function paintForm() {
	// Crear un h3 y ponerlo como titulo del formulario
	const h3 = document.createElement("h3");
	h3.textContent = "Añade tareas a miembros";
	taskForm.appendChild(h3);

	// Crear input text, donde ira el nombre de la tarea
	const inputTask = document.createElement("input");
	inputTask.type = "text";
	inputTask.placeholder = "Nueva Tarea";
	inputTask.name = "tarea";
	inputTask.required = true; // Agrega esta línea
	taskForm.appendChild(inputTask);

	// Crear el select de los miembros
	const inputMember = document.createElement("select");
	inputMember.name = "nombre";
	inputMember.id = "miembro";
	inputMember.required = true; // Agrega esta línea
	addToSelect(inputMember, miembrosFamilia);
	taskForm.appendChild(inputMember);

	// Crear el select de los puntos
	const inputValue = document.createElement("select");
	inputValue.name = "ratings";
	inputValue.required = true; // Agrega esta línea
	addToSelect(inputValue, ratings);
	taskForm.appendChild(inputValue);

	// Crear el boton de generar tarea
	const button = document.createElement("button");
	button.textContent = "Generar tarea";
	button.classList.add("button");
	button.type = "submit";
	taskForm.appendChild(button);

	// Marcar que el formulario ha sido pintado
	formularioPintado = true;
}

function updateFamily(member) {
	// Meter el miembro nuevo de la familia al array de miembros
	miembrosFamilia.push(member);
}

function addToSelect(select, array) {
	for (let i = 0; i < array.length; i++) {
		// Crear el elemento option por el numero de valores que tenga
		const option = document.createElement("option");

		// Ponerle al texto que se muestra y el valor, lo que tenga en ese indice el array
		option.value = array[i];
		option.text = array[i];

		//Meterlos en el select
		select.appendChild(option);
	}
}

function updateMemberSelect() {
	// Seleccionar el Select de miembros
	const selectMember = document.querySelector("#miembro");

	// Limpiar opciones actuales del select de miembros
	while (selectMember.firstChild) {
		selectMember.removeChild(selectMember.firstChild);
	}

	// Agregar nuevas opciones al select de miembros
	addToSelect(selectMember, miembrosFamilia);
}
