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
	const xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.responseType = "json";
	xhr.onload = () => {
		if (xhr.status >= 200 && xhr.status < 300) {
			callback(null, xhr.response);
		} else {
			callback(new Error(xhr.statusText), null);
		}
	};

	xhr.onerror = () => {
		callback(new Error("Network error"), null);
	};

	xhr.send();
}

const baseUrl = "https://jsonplaceholder.typicode.com";
console.time("Fetch took");
makeRequest("GET", `${baseUrl}/users/1`, (err, users) => {
	// console.log({ users });
	// console.timeEnd("Fetch took");
	makeRequest("GET", `${baseUrl}/posts?userId=${users.id}`, (err, posts) => {
		const post = posts[0];
		makeRequest(
			"GET",
			`${baseUrl}/comments?postId=${post.id}`,
			(err, comments) => {
				console.log({ comments });
				console.timeEnd("Fetch took");
			}
		);
	});
});

// Inversion de control
paypal.createOrder(orderInfo, (err, createdOrder) => {
	console.log("Esto lo ejecutaria el SDK Software Developer Kit");
});

// Promsesas soluciona la inversion de control
paypal.createOrder(orderInfo);
