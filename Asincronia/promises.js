// // Promesas soluciona la inversion de control
// paypal
// 	.createOrder(orderInfo)
// 	.then(() => {
// 		console.log("Esto se ejecutaria en nuestro codigo");
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

function makeRequest(method, url) {
	// Se crea una nueva instancia de Promise
	const promise = new Promise((resolve, reject) => {
		// Se crea una instancia de XMLHttpRequest
		const xhr = new XMLHttpRequest();

		// Configuración de la solicitud HTTP con el método y la URL proporcionados
		xhr.open(method, url);

		// Configuración del tipo de respuesta esperada como JSON
		xhr.responseType = "json";

		// Definición del evento onload que se ejecutará cuando la solicitud sea exitosa
		xhr.onload = () => {
			// Verificar si la respuesta del servidor tiene un código de estado exitoso (entre 200 y 299)
			if (xhr.status >= 200 && xhr.status < 300) {
				// Resolver la Promise con la respuesta parseada como JSON
				resolve(xhr.response);
			} else {
				// Rechazar la Promise con un objeto Error indicando el error de estado
				reject(new Error(xhr.statusText));
			}
		};

		// Definición del evento onerror que se ejecutará en caso de un error de red
		xhr.onerror = () => {
			// Rechazar la Promise con un objeto Error indicando un error de red
			reject(new Error("Network error"));
		};

		// Enviar la solicitud al servidor
		xhr.send();
	});

	// Devolver la Promise creada
	return promise;
}

// fullfilled, pending y rejected Estos son los 3 estados de las promesas
const baseUrl = "https://jsonplaceholder.typicode.com";
console.time("Fetch took");

// Realiza la solicitud HTTP utilizando la función makeRequest y obtiene una Promise
const promise = makeRequest("get", `${baseUrl}/users/1`);
console.log({ promise });

promise
	.then((res) => {
		// Este bloque se ejecuta si la Promise se resuelve exitosamente
		console.log("Todo salió bien ", res);
		console.timeEnd("Fetch took");
	})
	.catch((err) => {
		// Este bloque se ejecuta si la Promise es rechazada
		console.log("Todo salió mal ", err);
	})
	.finally(() => {
		// Este bloque se ejecuta siempre, ya sea que la Promise se resuelva o sea rechazada
		console.log("Esto se ejecuta SIEMPRE");
	});
