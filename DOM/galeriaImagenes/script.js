const galery = document.querySelector("#galeria");
const template = document.querySelector("#plantillaImagen");
const inputImagen = document.querySelector("#imagenPorPoner");

const imgs = [
	["./images/fresa.jpeg", "Fresa 1"],
	["./images/fresa2.jpeg", "Fresa 2"],
	["./images/fresa3.jpeg", "Fresa 3"],
	["./images/fresa4.jpeg", "Fresa 4"],
	["./images/fresa5.jpeg", "Fresa 5"],
	["./images/fresa6.jpeg", "Fresa 6"],
	["./images/fresa7.jpeg", "Fresa 7"],
];

for (let i = 0; i < imgs.length; i++) {
	crearImagen(imgs[i][0], imgs[i][1]);
}

// Manejar el cambio en el input de archivo
imagenPorPoner.addEventListener("change", function (e) {
	const image = e.target.files[0];

	if (image) {
		// Crear una URL para la imagen seleccionada
		const imageUrl = URL.createObjectURL(image);

		// Crear una nueva imagen con la URL
		crearImagen(imageUrl, "Imagen personalizada");
	}
});

// Crear la imagen creando el template desde 0
function crearImagen(fotoLink, altText) {
	// Crear template de la foto y añadirle el id
	const template = document.createElement("template");
	template.setAttribute("id", "plantillaImagen");

	// Crear div con clase contenedor-Imagen
	const contenedorImg = document.createElement("div");
	contenedorImg.classList.add("contenedor-imagen");

	// Crear la imagen, darle un alt y un src
	const imagen = document.createElement("img");
	imagen.alt = altText;
	imagen.src = fotoLink;

	// Crear div (contenedor de comentarios)
	const contenedorComment = document.createElement("div");
	contenedorComment.classList.add("contenedor-comentarios");

	// Crear input del comentario
	const inputComment = document.createElement("input");
	inputComment.setAttribute("type", "text");
	inputComment.classList.add("comentario-input");
	inputComment.placeholder = "Añade un comentario...";

	// Crear boton de Comentar
	const botonComment = document.createElement("button");
	botonComment.classList.add("btn-comentar");
	botonComment.textContent = "Comentar";

	// Crear lista de comentarios
	const listaComments = document.createElement("ul");
	listaComments.classList.add("lista-comentarios");

	// Meter las etiquetas del comnetario en el contenedor de comentarios
	contenedorComment.append(inputComment);
	contenedorComment.append(botonComment);
	contenedorComment.append(listaComments);

	// Meter la imagen y el contenedor de comentarios en el contenedor de la imagen
	contenedorImg.append(imagen);
	contenedorImg.append(contenedorComment);

	// Meter el contenedor de la imagen en el template
	template.append(contenedorImg);

	// Manejar el evento de comentario
	botonComment.addEventListener("click", function () {
		// Coger texto del comentario
		const comentario = inputComment.value;

		// Comfirmar que el comentario no esta vacio, ni tiene un espacio solo
		if (comentario.trim() !== "") {
			createComment(listaComments, comentario);

			// Limpiar el campo de comentario luego de agregarlo
			inputComment.value = "";
		}
	});

	// Meter template dentro de la galeria
	galery.append(template);
}

// Crear la imagen clonando el template del html
function createImg(fotoLink, altText) {
	// Clonar template existente
	// Usando importNode(contenido del template, boolean)
	const clone = document.importNode(template.content, true);

	// Obtener referencias a elementos dentro del template clonado
	const imagen = clone.querySelector("img");
	const inputComment = clone.querySelector(".comentario-input");
	const botonComment = clone.querySelector(".btn-comentar");
	const listaComments = clone.querySelector(".lista-comentarios");

	// Establecer atributos y contenido
	imagen.src = fotoLink;
	imagen.alt = altText;

	// Manejar el evento de comentario
	botonComment.addEventListener("click", function () {
		// Coger texto del comentario
		const comentario = inputComment.value;

		// Comfirmar que el comentario no esta vacio, ni tiene un espacio solo
		if (comentario.trim() !== "") {
			createComment(listaComments, comentario);

			// Limpiar el campo de comentario luego de agregarlo
			inputComment.value = "";
		}
	});

	console.log(clone);

	//Agregar el elemento clonado a la galeria
	galery.appendChild(clone);
}

// Crear el comentario y meterlo en la lista de comentarios
function createComment(listaComments, comment) {
	// Crear un elemento li para el comentario
	const li = document.createElement("li");
	li.textContent = comment;

	// Crear un elemento boton con clase delete para borrar el comentario
	const button = document.createElement("button");
	button.classList.add("delete");
	button.textContent = "X";

	// Añadir un evento de click al boton
	addRemoveEvent(button);

	// Agregar boton como hijo del li
	li.appendChild(button);

	// Agregar el comentario a la lista
	listaComments.appendChild(li);
}

// Meterle el eveno de borrar al boton cuando se hace click
function addRemoveEvent(element) {
	element.addEventListener("click", function () {
		element.parentElement.remove();
	});
}
