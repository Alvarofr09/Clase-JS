// console.log(
// 	" Mostrar por consola a traves de los bucles while, do while y for numeros del 0 al 25"
// );

function consoleNumberWhile() {
	let i = 0;

	console.log("<-------------------While-------------->");
	while (i <= 25) {
		console.log(`El valor del i con el while es ${i}`);
		i++;
	}
}

function consoleNumberDoWhile() {
	let i = 0;
	console.log("<-------------------Do While-------------->");
	do {
		console.log(`El valor del i con el do while es ${i}`);
		i++;
	} while (i <= 25);
}

function consoleNumberFor() {
	console.log("<-------------------For-------------->");
	for (let i = 0; i <= 25; i++) {
		console.log(`El valor del i con el for es ${i}`);
	}
}

// console.log(
// 	"Hacer una cuenta atras desde 10 hasta 0 y al final felicitar el año nuevo"
// );

function cuentaAtrasWhile() {
	console.log("<-------------------While-------------->");
	let i = 10;
	while (i >= 0) {
		if (i === 0) {
			console.log("Feliz Año Nuevo!!");
		} else {
			console.log(i);
		}

		i--;
	}
}

function cuentaAtrasDoWhile() {
	console.log("<-------------------Do While-------------->");
	let i = 10;

	do {
		if (i === 0) {
			console.log("Feliz Año Nuevo!!");
		} else {
			console.log(i);
		}
		i--;
	} while (i >= 0);
}

function cuentaAtrasFor() {
	console.log("<-------------------For-------------->");
	for (let i = 10; i >= 0; i--) {
		if (i === 0) {
			console.log("Feliz Año Nuevo!!");
		} else {
			console.log(i);
		}
	}
}

// console.log(
// 	"Funcion que reciba un numero e imprma todos los numeros hasta el X"
// );

function cuentaAtrasWhile2(number, min) {
	console.log("<-------------------While-------------->");
	while (number > min) {
		console.log(number);

		number--;
	}
}

function cuentaAtrasDoWhile2(number, min) {
	console.log("<-------------------Do While-------------->");

	do {
		console.log(number);

		number--;
	} while (number > min);
}

function cuentaAtrasFor2(number) {
	console.log("<-------------------For-------------->");
	for (let i = number; i >= 0; i--) {
		console.log(i);
	}
}

// console.log(
// 	"Recibe un numero por parametro e imprime todos los numeros incluyendose a el mismo hasta el "
// );

function printNumberWhile(num) {
	let i = num;

	while (i >= 0) {
		console.log(i);
		i--;
	}
}

function printNumberDoWhile(num) {
	let i = num;

	do {
		console.log(i);
		i--;
	} while (i >= 0);
}

function printNumberFor(num) {
	for (let i = num; i >= 0; i--) {
		console.log(i);
	}
}

// console.log(
// 	"Recibe una letra y un numero e imprime por consola la letra el numero de veces que le hayamos pasado"
// );

function printLetterWhile(letter, num) {
	let i = 0;
	let result = "";

	while (i < num) {
		result += letter + " ";
		i++;
	}
	console.log(result);
}

function printLetterDoWhile(letter, num) {
	let i = 0;
	let result = "";

	do {
		result += letter + " ";
		i++;
	} while (i < num);

	console.log(result);
}

function printLetterFor(letter, num) {
	let result = "";

	for (let i = 0; i < num; i++) {
		result += letter + " ";
	}

	console.log(result);
}

// console.log(
// 	"Crear una funcion que reciba un array de numeros los sume y muestre por consola la media aritmetica"
// );

let grades = [8, 4, 9, 7, 6, 8];

function averageWhile(grades) {
	let total = 0;
	let i = 0;
	while (i < grades.length) {
		total += grades[i];
		i++;
	}

	let average = total / grades.length;

	console.log(average);
}

function averageDoWhile(grades) {
	let total = 0;
	let i = 0;

	do {
		total += grades[i];
		i++;
	} while (i < grades.length);

	let average = total / grades.length;

	console.log(average);
}

function averageFor(grades) {
	let total = 0;

	for (let i = 0; i < grades.length; i++) {
		total += grades[i];
	}

	let average = total / grades.length;

	console.log(average);
}

// console.log(
// 	`Escribir una funcion que reciba una cantidad a invertir,
// el interes anual y el numero de años y muestre por consola
// el capital obtenido en la inversion cada año de la inversion`
// );

function getInversion(amount, interest, year) {
	let amountWithInterest = amount;
	let percentaje = interest / 100;
	for (let i = 1; i <= year; i++) {
		amountWithInterest = amountWithInterest + amountWithInterest * percentaje;

		console.log(
			`El dinero obtenido en el año ${i} es ${amountWithInterest.toFixed(2)}`
		);
	}
}
