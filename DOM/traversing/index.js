const wrapper = document.querySelector("#wrapper");
const title = document.querySelector(".title");
const link = document.querySelector(".link.bold");
const input = document.querySelector("[type='number']");

console.dir(input); // Muestra todas las propiedades del elemento
// wrapper.className = "container"; // Sobre escribe el nombre de la clase

// wrapper.innerHTML += "<h2>HTML modificado desde js</h2>"; // Añade el string dentro el html

// wrapper.innerHTML += `<img src='error' onerror='alert("te acabo de hackear")'>`;

//wrapper.outerHTML = "<h1>Mi nuevo HTML</h1>"; // No te cambia la estructura del DOM

// const h1 = document.querySelector("h1");

// const userName = prompt("¿Como te llamas?");

// title.textContent = `Hola, Bienvenido al DOM, ${userName}`;
console.log(input.getAttribute("type"));
console.log(input.attributes);
console.log(input.hasAttribute("name"));

input.setAttribute("value", 333);

input.removeAttribute("value");

const imagen = document.querySelector("[data-identificador='img']");
imagen.classList.add("img");
const figCaption = document.querySelector("figcaption");

imagen.src =
	"https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

figCaption.textContent = imagen.dataset.textoMostrar;
