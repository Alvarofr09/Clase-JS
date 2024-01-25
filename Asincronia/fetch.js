// Fetch API --> Promesas

const baseUrl = "https://jsonplaceholder.typicode.com";

console.time("Fetch took");
/*const promise = fetch(`${baseUrl}/users/1`);
console.log({ promise });

promise
	.then((res) => {
		return res.json();
	})
	.then((user) => {
		return fetch(`${baseUrl}/posts?userId=${user.id}`);
	})
	.then((res) => {
		return res.json();
	})
	.then((posts) => {
		const post = posts[0];
		return fetch(`${baseUrl}/comments?postId=${post.id}`);
	})
	.then((res) => {
		return res.json();
	})
	.then((comments) => {
		console.log({ comments });
		console.timeEnd("Fetch took");
	})
	.catch((err) => {
		console.log("Todo salio mal", err);
	})
	.finally(() => {
		console.log("Esto se ejecuta SIEMPRE");
	});*/

function myFetch(url) {
	return fetch(url).then((res) => {
		return res.json();
	});
}

const promise = myFetch(`${baseUrl}/users/1`);

promise
	.then((user) => myFetch(`${baseUrl}/posts?userId=${user.id}`))
	.then((posts) => myFetch(`${baseUrl}/comments?postId=${posts[0].id}`))
	.then((comments) => console.log({ comments }))
	.catch((err) => console.log("Todo salio mal", err))
	.finally(() => console.log("Esto se ejecuta SIEMPRE"));
