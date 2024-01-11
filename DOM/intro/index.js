console.log(document); //Muestra todo mi documento
console.log(document.body); //Muestra todo el body de mi documento
console.log(document.body.childNodes); //Te da un array con todos los nodos hijos de body
console.log(document.body.children); //Te da un array con todos los nodos hijos de tipo elemento
console.log(document.body.children[0]); //Te da el primer hijo de tipo elemento (Es un array)
console.log(document.body.firstChild); // Te la el primero de body

const div = document.body.children[0];
console.log(div);

console.log(div.nextSibling); //Muestra el siguiente hermano del elemento
console.log(div.nextElementSibling); //Muestra el siguiente hermano que sea elemento del elemento

console.log(div.previousElementSibling); //Muestra el anterior hermano que sea elemento del elemento

const h1 = div.firstElementChild; //Muestra el primer hijo de div que sea elemento

console.log(h1);

const anchor = div.children[1].firstElementChild; //Muestra el primer hijo que sea elemento del hijo numero 2 de div
// const anchor = div.children[1].children[0]; Lo mismo que lo de arriba
console.log(anchor);

// anchor.addEventListener("click", function () {
// 	h1.textContent = "Me modifican desde el boton";
// });

anchor.addEventListener("click", function () {
	document.documentElement.style.backgroundColor = "#000";
	document.documentElement.style.color = "#FFF";
});

console.log(anchor.parentElement); //Padre del elemento

//--------------- Vida Real -------------//

const links = document.getElementsByClassName("link"); //Seleccionar todos los elementos que tengan esa clase
console.log(links);

const divs = document.getElementsByTagName("div"); //Seleccionar todos los elementos que sean esa etiqueta
console.log(divs);

const input = document.getElementsByName("telephone"); //Seleccionar todos los elementos que tengan ese "name"
console.log(input);

const firstAnchor = document.querySelector("#wrapper a"); //Seleccionar con selectores
console.log(firstAnchor);

const anchorList = document.querySelectorAll("#wrapper a"); //Seleccionar con selectores
console.log(anchorList);

const secondAnchor = document.querySelectorAll("#wrapper a")[1];
console.log(secondAnchor);

const thirdAnchor = document.querySelectorAll("#wrapper a")[2];

const fithAnchor = document.createElement("a");
fithAnchor.setAttribute("class", "link");
fithAnchor.setAttribute("href", "#");
fithAnchor.textContent = "Quinto hijo";
divs[1].append(fithAnchor);
// divs[1].insertBefore(fithAnchor, secondAnchor);

const fourthAnchor = document.createElement("a");
fourthAnchor.setAttribute("class", "link");
fourthAnchor.setAttribute("href", "#");
fourthAnchor.textContent = "Cuarto hijo";
divs[1].insertBefore(fourthAnchor, fithAnchor);

const tag = document.createElement("p"); //Crea un elemento hmtl
tag.textContent = "prueba";

h1.insertAdjacentElement("afterend", tag); // Inserta un elemento "tag" en la posicion indicada ("beforebegin", "afterbegin", "beforeend", "afterend")
h1.insertAdjacentHTML("afterend", '<a href="#" class = "link">Hola</a>'); // Inserta una cadena de texto en la posicion indicada

/**
 * 	beforebegin
 * 		<p>
 * 			afterbegin
 * 		"Texto"
 * 			beforeend
 * 		</p>
 * 	afterend
 */
