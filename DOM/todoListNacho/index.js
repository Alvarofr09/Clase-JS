const button = document.querySelector(".button");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const listContainer = document.querySelector(".list-container");

//Añadir el evento submit al form
form.addEventListener("submit", handleSubmit);

function message() {
  //Crear un elemento h3
  const h3 = document.createElement("h3");

  //Añadirle una clase para poder encontrarlo en el paso siguiente
  h3.classList.add("task-message");

  //Comprobar si tiene hijos para poner un texto u otro
  if (listContainer.childElementCount) {
    h3.textContent = "Tareas por hacer";
  } else {
    h3.textContent = "No hay tareas aun";
  }

  /*   h3.textContent = listContainer.childElementCount
    ? "Tareas por hacer"
    : "No hay tareas aun"; */

  //Buscar si hay un elemento que tenga la clase task-message
  const prevMessage = document.querySelector(".task-message");

  //Comprobar si exite ese elemento y si existe, reemplazarlo y parar la ejecucion del codigo
  if (prevMessage) {
    prevMessage.replaceWith(h3);
    return;
  }

  //Añadir este elemento al DOM
  listContainer.before(h3);
}

message();

function handleSubmit(e) {
  //Evitar el comportamiento por defecto del form
  e.preventDefault();

  //Capturar el valor del input
  const newTodo = input.value;

  //Evitar crear tareas vacias
  if (newTodo === "") {
    return;
  }

  /*   if (!newTodo) {
        return;
        } */

  //crear la tarea en el DOM
  createTask(newTodo);

  //formatear el form
  this.reset();
  message();
}

function createTask(value) {
  //Crear un elemento li
  const li = document.createElement("li");

  //Ponerle el texto al elemento
  li.textContent = value;

  //Añadir un evento de doble click al li
  //addRemoveEvent(li);

  listContainer.insertAdjacentHTML(
    "afterbegin",
    `
  <li class="list-item">
    <span onclick="completedTask(this)">${value}</span>
    <button onclick="removeTask(this)" class="buttonRed">X</button>
  </li>
  `
  );

  //Añadirlo a la lista, como primer elemento
  //listContainer.prepend(li);
}

function completedTask(element) {
  element.classList.toggle("completed");
  element.parentElement.classList.toggle("bg-completed");
}

function removeTask(element) {
  element.parentElement.remove();
  message();
}

function addRemoveEvent(element) {
  element.addEventListener("dblclick", function () {
    element.remove();
    message();
  });
}
