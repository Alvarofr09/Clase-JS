const galery = document.querySelector("#galeria");
imgs = new Array();

imgs[0] = ["./images/fresa.jpeg", "Fresa"];
imgs[1] = ["./images/golden.jpg", "Golden"];
imgs[2] = ["./images/husky.jpg", "Husky"];
imgs[3] = ["./images/pug.jpg", "Pug"];
imgs[4] = ["./images/shiba.jpg", "Shiba"];

for (let i = 0; i < imgs.length; i++) {
	crearImagen(imgs[i][0]);
}

function crearImagen(fotoLink) {
	// Crear template de la foto y añadirle el id
	const template = document.createElement("template");
	template.setAttribute("id", "plantillaImagen");

	// Crear div con clase contenedor-Imagen
	const contenedorImg = document.createElement("div");
	contenedorImg.classList.add("contenedor-imagen");

	// Crear la imagen, darle un alt y un src
	const imagen = document.createElement("img");
	imagen.setAttribute("alt", "Imagen de la galeria");
	imagen.src = fotoLink;

	// Crear div (contenedor de comentarios)
	const contenedorComment = document.createElement("div");
	contenedorComment.classList.add("contenedor-comentarios");

	// Crear input del comentario
	const inputComment = document.createElement("input");
	inputComment.setAttribute("type", "text");
	inputComment.classList.add("comentario-input");
	inputComment.placeholder = "Añade un comnetario...";

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

	// Meter template dentro de la galeria
	galery.append(template);
}
