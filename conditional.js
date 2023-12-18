// Condicionales - if/else

/**
 * Los condicionales if/else nos permiten ejecutar codigo, siempre y cuando
 * se cumpla la condicion que hayamos programado
 */

const noWater = false;

const canShower = !noWater;

if (canShower) {
	console.log("Estare limpio");
} else {
	console.log("olere mal");
}

const users = { name: "Alvaro" };

if (!users) {
	console.log("No hay usuarios");
} else {
	console.log(users);
}

if (Boolean(users) === false) {
	console.log("No hay usuarios");
} else {
	console.log(users);
}

// Ejemplo else if

const grades = 85;

if (grades >= 90) {
	console.log("Aprobaste con sobresaliente");
} else if (grades >= 70) {
	console.log("Aprobaste con notable");
} else if (grades >= 50) {
	console.log("Aprobaste con suficiente");
} else {
	console.log("Suspendiste amigo");
}

const age = 25;

if (age >= 65) {
	console.log("Estas jubilado");
} else if (age >= 18 && age < 65) {
	console.log("Cotiza");
} else {
	console.log("A estudiar");
}

// Estructura switch

let fruit = "melon";
switch (fruit) {
	case "melon":
		console.log("Que rico el melon en diciembre");
		break;

	case "papaya":
		console.log("Que fruta tan tropical");
		break;

	case "sandia":
		console.log("Has elegido la sandia");
		break;

	default:
		break;
}

switch (true) {
	case grades >= 90:
		console.log("Aprobaste con sobresaliente");
		break;
	case grades >= 70:
		console.log("Aprobaste con notable");
		break;
	case grades >= 50:
		console.log("Aprobaste con suficiente");
		break;

	default:
		console.log("Suspendiste amigo");
		break;
}
