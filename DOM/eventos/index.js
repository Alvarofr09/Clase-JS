const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id = "name"]');
const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');
const section = document.querySelectorAll(".section")[1];

input.addEventListener("change", function (event) {
	//Cuando deje de tener el foco se va a realizar esta funcion
	// console.log(event.target.value);
	// console.log("Has perdido el foco");
	changeUser.textContent = event.target.value;
});

function controladorEvento() {
	const name = prompt("¿Como te lamas?");
	alert(`Hola ${name}`);
}

buttonShow.onclick = controladorEvento;

buttonShow.onclick = null;

// Forma mas adecuada para agregar metodos:

//buttonShow.addEventListener("click", controladorEvento);
/*
function showSection(event) {
	wrapper.className = "show";
	event.preventDefault();
}

function hideSection(event) {
	wrapper.className = "hide";
	event.preventDefault();
}
*/
// buttonShow.addEventListener("click", showSection);
// buttonHide.addEventListener("click", hideSection);

// function changeColor(event) {
// 	const color = event.target.dataset.color;
// 	console.log(color);
// }

// wrapper.addEventListener("click", function (e) {
// 	e.target.style.backgroundColor = "greenyellow";
// });
/*
const form = input.parentElement;

form.addEventListener("submit", function (e) {
	e.preventDefault();
	/**
	 * Prevenimos el comportamiento por defecto del formulario
	 * para tratar los datos antes de enviarlos
	 * Verificaciones --> email es un email valido,
	 * password tiene 8 caracteres
	 
});
*/

// objeto "this"

/**
 * Hace referencia al objeto en el contexto actual, es decir,
 * cuando se utiliza un manejador de eventos uqe es llamado en un
 * listener, this hace referencia al objeto actual, que en este
 * caso es el modo que activa el evento, si damos click en el boton,
 * vemos que this es igual al elemento actual.
 */

/*
function showSection(e) {
	e.preventDefault();
	wrapper.className = "show";
	this.textContent = "Me han cambiado el texto";
}

function hideSection(e) {
	e.preventDefault();
	console.log(this);
	wrapper.className = "hide";
	this.textContent = "Me han cambiado el texto";
}

buttonHide.addEventListener("click", hideSection);

const showSection2 = (e) => {
	e.preventDefault();
	console.log(this);
	wrapper.className = "show";
	this.textContent = "Me han cambiado el texto";
};
*/

/**
 * this no hara referencia al objeto dinde se disparo el evento,
 * sino al objeto global window
 * esto es xq cuando usamos funciones flechas no sera el del objeto
 * donde se produjo la accion si no que tomara el contexto de la funcion
 * contenedora de la funcion flecha, en este caso el objeto window
 */

// buttonShow.addEventListener("click", showSection2);
// buttonShow.removeEventListener("click", showSection2);

//--------------- Event bubbling o propagacion de eventos -----------------

/**
 * es una caracteristicasde los eventos en js. Cuando hacemos click en un boton se va a generar
 * una accion en ese boton, eso ya lo sabemos, pero no solo se genera una accion en ese elemento
 * sino que se creara tb en el contenedor de ese elemento y en los sucsivos contenedor, basicamente
 * propaga el evento en la jerarquia del dom, esto es la popagacion de eventos y es un comportamiento
 * por defecto.
 */

function handleEvent(e) {
	console.log(`Has dado click en ${e.currentTarget.nodeName}`);
}

/*function handleEventStop(e) {
	e.stopPropagation();
	console.log(`Has dado click en ${e.currentTarget.nodeName}`);
}

buttonShow.addEventListener("click", handleEventStop);
section.addEventListener("click", handleEvent);
document.body.addEventListener("click", handleEvent);*/

/**
 * stopImmediatePropagation() hace practicamente lo mismo que stopPropagation con la diferencia
 * que este metodo evita que un elemento tenga mas de un manejador de evento
 */

function handleEventStop(e) {
	e.stopImmediatePropagation();
	console.log(`Has dado click en ${e.currentTarget.nodeName}`);
}

/*buttonShow.addEventListener("click", handleEventStop); // Despues de este listener no se va a poder añadir ninguno mas
section.addEventListener("click", handleEvent);
document.body.addEventListener("click", handleEvent);

buttonShow.addEventListener("click", function () {
	alert("Hola mundo");
});*/

// Fase de captura

/**
 * En la fase de captura los eventos se capturan de manera descendente, esta fase se activa
 * pasandole un tercer parametro a un eventListener como un objeto con la propiedad capture
 */

// buttonShow.addEventListener("click", handleEvent, { capture: true });
// section.addEventListener("click", handleEvent, { capture: true });
// document.body.addEventListener("click", handleEvent, { capture: true });

// ---------------------- matches()

/**
 * Este se utiliza en cualquier nodo de tipo elemento y recibe un
 * selector de tipo css como parametro y va a comrpobar si el parametro css
 * coincide con el nodo acual, si coincide retornara true, sino false.
 */
const elements = document.querySelectorAll("[data-id]");
// console.log(elements);

for (element of elements) {
	// console.log(element);
	const currentElement = element.matches('[data-id="button-show"]');
	console.log(currentElement);
	if (currentElement) {
		console.log(element);
		console.log(
			`El elemento ${element.nodeName} contiene el valor de button-show en su atributo`
		);
	}
}

//---------------clostes()
console.log(input.closest(".wrapper"));

//--------------- Event Delegation

/**
 * Nos permite aprovecharnos de la propagacion de eventos para determinar un manejador
 * de eventos a un contenedor de eventos que haga una accion determinada por cada nodo que contiene.
 * En lugar de declarar un manejador de eventos por cada nodo vamos a declarar un manejador de eventos
 * global, esto optimiza el rendimiento y ademas reduce la cantidad de manejadores que se implementan, en
 * lugar de poner un manejador por cada boton que haremos uno para la seccion que contiene a los botones, aprovechando
 * el event bubbling o la propagacion de eventos, haciendo que cada boton cambie el bgcolor de la seccion
 */
const sectionColor = document.querySelector(".section");

function eventDelegation(e) {
	// console.log(e);
	if (e.target.matches(".button-color")) {
		const color = e.target.getAttribute("data-color");

		e.currentTarget.style.backgroundColor = color;
	}
}

sectionColor.addEventListener("click", eventDelegation);
