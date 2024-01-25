const contactList = document.querySelector("#contactList");
const baseUrl = "https://jsonplaceholder.typicode.com";

function myFetch(url) {
	return fetch(url).then((res) => {
		return res.json();
	});
}

async function getUsers() {
	// const users = await myFetch(`${baseUrl}/users`);
	const response = await fetch(`${baseUrl}/users`);
	const users = await response.json();

	return users;
}

async function getData(url) {
	const response = await fetch(url);
	const data = await response.json();

	return data;
}

async function createUsersList() {
	const users = await getUsers();

	for (let i = 0; i < users.length; i++) {
		const li = document.createElement("li");
		li.setAttribute("id", users[i].id);
		li.textContent = users[i].name;

		contactList.appendChild(li);
	}
}
createUsersList();
