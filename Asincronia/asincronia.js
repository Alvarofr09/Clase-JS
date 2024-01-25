// let seconds = 0;

// setTimeout(() => {
// 	console.log(`Ya pasaron los ${seconds} segundos`);
// }, seconds * 1000);

// console.log("Esto se ejecuta al instante");

// console.time("Loop took");
// let total = 0;
// for (let i = 0; i < 500_000_000; i++) {
// 	total += i;
// }
// console.timeEnd("Loop took");
// console.log("termino el bucle ", total);

function makeRequest(method, url, callback) {
	// Crear una nueva instancia de XMLHttpRequest
	const xhr = new XMLHttpRequest();

	// Configurar la solicitud HTTP con el método y la URL proporcionados
	xhr.open(method, url);

	// Configurar el tipo de respuesta esperada como JSON
	xhr.responseType = "json";

	// Definir el evento onload que se ejecutará cuando la solicitud sea exitosa
	xhr.onload = () => {
		// Verificar si la respuesta del servidor tiene un código de estado exitoso (entre 200 y 299)
		if (xhr.status >= 200 && xhr.status < 300) {
			// Llamar al callback con el resultado exitoso y la respuesta parseada como JSON
			callback(null, xhr.response);
		} else {
			// Si el código de estado no es exitoso, llamar al callback con un objeto Error
			callback(new Error(xhr.statusText), null);
		}
	};

	// Definir el evento onerror que se ejecutará en caso de un error de red
	xhr.onerror = () => {
		// Llamar al callback con un objeto Error indicando un error de red
		callback(new Error("Network error"), null);
	};

	// Enviar la solicitud al servidor
	xhr.send();
}

console.time("Fetch took"); // Inicia un temporizador llamado "Fetch took"

makeRequest("GET", `${baseUrl}/users/1`, (err, users) => {
	// Callback después de la primera solicitud a "/users/1"
	console.log({ users }); // Imprime los usuarios obtenidos

	console.timeEnd("Fetch took"); // Detiene el temporizador y muestra el tiempo transcurrido

	makeRequest("GET", `${baseUrl}/posts?userId=${users.id}`, (err, posts) => {
		// Callback después de la segunda solicitud a "/posts?userId=${users.id}"
		const post = posts[0];

		makeRequest(
			"GET",
			`${baseUrl}/comments?postId=${post.id}`,
			(err, comments) => {
				// Callback después de la tercera solicitud a "/comments?postId=${post.id}"
				console.log({ comments }); // Imprime los comentarios obtenidos
				console.timeEnd("Fetch took"); // Detiene el temporizador y muestra el tiempo transcurrido
			}
		);
	});
});

// // Inversion de control
// paypal.createOrder(orderInfo, (err, createdOrder) => {
// 	console.log("Esto lo ejecutaria el SDK Software Developer Kit");
// });
