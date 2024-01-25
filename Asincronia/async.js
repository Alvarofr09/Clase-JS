// async await
const baseUrl = "https://jsonplaceholder.typicode.com";

function myFetch(url) {
	return fetch(url).then((res) => {
		return res.json();
	});
}
console.time("Fetch took");
async function getCommentsByUserId(id) {
	const user = await myFetch(`${baseUrl}/users/${id}`);
	const posts = await myFetch(`${baseUrl}/posts?userId=${user.id}`);
	const comments = await myFetch(`${baseUrl}/comments?postId=${posts[0].id}`);

	console.log({ user, posts, comments });
}
console.timeEnd("Fetch took");

getCommentsByUserId(5);

async function getUsers() {
	const users = await myFetch(`${baseUrl}/users`);
	let usersLiveInMcKenziehaven = [];

	for (let i = 0; i < users.length; i++) {
		if (users[i].address.city === "McKenziehaven") {
			usersLiveInMcKenziehaven[usersLiveInMcKenziehaven.length] = users[i];
		}
	}

	return usersLiveInMcKenziehaven;
}

console.log(getUsers());
