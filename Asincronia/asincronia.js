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

// function makeRequest(method, url, callback) {
// 	const xhr = new XMLHttpRequest();
// 	xhr.open(method, url);
// 	xhr.responseType = "json";
// 	xhr.onload = () => {
// 		if (xhr.status >= 200 && xhr.status < 300) {
// 			callback(null, xhr.response);
// 		} else {
// 			callback(new Error(xhr.statusText), null);
// 		}
// 	};

// 	xhr.onerror = () => {
// 		callback(new Error("Network error"), null);
// 	};

// 	xhr.send();
// }

// console.time("Fetch took");
// makeRequest("GET", `${baseUrl}/users/1`, (err, users) => {
// 	console.log({ users });
// 	console.timeEnd("Fetch took");
// 	makeRequest("GET", `${baseUrl}/posts?userId=${users.id}`, (err, posts) => {
// 		const post = posts[0];
// 		makeRequest(
// 			"GET",
// 			`${baseUrl}/comments?postId=${post.id}`,
// 			(err, comments) => {
// 				console.log({ comments });
// 				console.timeEnd("Fetch took");
// 			}
// 		);
// 	});
// });

// // Inversion de control
// paypal.createOrder(orderInfo, (err, createdOrder) => {
// 	console.log("Esto lo ejecutaria el SDK Software Developer Kit");
// });

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
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = "json";
		xhr.onload = () => {
			if (xhr.status >= 200 && xhr.status < 300) {
				resolve(xhr.response);
			} else {
				reject(new Error(xhr.statusText));
			}
		};

		xhr.onerror = () => {
			reject(new Error("Network error"));
		};

		xhr.send();
	});
	return promise;
}

// fullfilled, pending y rejected Estos son los 3 estados de las promesas
const baseUrl = "https://jsonplaceholder.typicode.com";
console.time("Fetch took");
const promise = makeRequest("get", `${baseUrl}/users/1`);
console.log({ promise });

promise
	.then((res) => {
		console.log("Todo salio bien ", res);
		console.timeEnd("Fetch took");
	})
	.catch((err) => {
		console.log("Todo salio mal ", err);
	})
	.finally(() => {
		console.log("Esto se ejecuta SIEMPRE");
	});

// Fetch API --> Promesas
