// Fetch API --> Promesas

const baseUrl = "https://jsonplaceholder.typicode.com";

console.time("Fetch took");
const promise = fetch(`${baseUrl}/users/1`);
console.log({ promise });

promise.then((res) => {
	console.log(res);
});
console.timeEnd("Fetch took");
