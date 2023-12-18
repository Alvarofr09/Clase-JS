// Paso por valor y paso por referencia

let num = 5;

let num2 = num;

num = 9;

console.log(num2);

let user = {
	name: "Nacho",
};
let user2 = user;

user.name = "Pepe";

console.log(user2.name);

user2.name = "Veronica";

console.log(user.name);

function modificarValor(numero) {
	numero = numero * 2;

	console.log(numero + " Valor dentro de la funcion");
}

let a = 8;
modificarValor(a);
console.log(a + " Valor fuera de la funcion");

function modificarArray(array) {
	array[0] = "Pepe";
	console.log(array + " Valor dentro de la funcion");
}

let myArray = ["nacho ", "alvaro ", "pablo "];
modificarArray(myArray);

function modificarObjeto(obj) {
	obj.name = "David";
	// console.log(obj.name + " objeto dentro de la funcion");
}

let admin = {
	name: "Marco",
};

modificarObjeto(admin);
// console.log(admin.name + " objeto fuera de la funcion");

function createUser(name, surname, age) {
	return {
		name,
		surname,
		age,
	};
}

const myUser = createUser("Alvaro", "Frias", "Ruiz");

function addAddress(user) {
	user.address = "Calle Larios";
}

console.log(myUser);
addAddress(myUser);
console.log(myUser);
