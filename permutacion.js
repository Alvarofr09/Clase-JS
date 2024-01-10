/**
 * Funcion para generar un numero aleatorio
 * @returns Un numero aleatorio de como minimo valor 1 y max 3.
 */

function generarNumeroAleatorio() {
	return Math.floor(Math.random() * 3) + 1;
}

/**
 * Funcion que usa la funcion de generar un numero aleatorio y
 * crea uno de 3 cifras
 * @returns El numero de 3 cifras aleatorias.
 */

function generarNumeroDeTresCifras() {
	const cifra1 = generarNumeroAleatorio();
	const cifra2 = generarNumeroAleatorio();
	const cifra3 = generarNumeroAleatorio();

	const numeroDeTresCifras = cifra1 * 100 + cifra2 * 10 + cifra3;

	return numeroDeTresCifras;
}

/**
 * Permuta los numeros del 111 al 333, sin que ningun numero sea mayor que 3.
 */
function permutar() {
	for (let i = 1; i < 4; i++) {
		for (let j = 1; j < 4; j++) {
			for (let k = 1; k < 4; k++) {
				let numero = `${i}${j}${k}`;

				console.log(numero);
			}
		}
	}
}

permutar();

/**
 *
 * @param {Cantidad de cifras que tiene que ser tu numero} digits
 * @returns El numero aleatorio.
 */
function randomNumberCombination(digits) {
	let result = "";
	for (let i = 0; i < digits; i++) {
		result += Math.floor(Math.random() * 3) + 1;
	}
	return result;
}

/**
 * Mira la combiancion de numeros y va contando cuando coinciden
 * @returns Donde has encontrado la combinacion
 */

function getCombinationNumber() {
	let attemps = 1;
	const combination = randomNumberCombination();
	for (let i = 1; i <= 3; i++) {
		for (let j = 1; j <= 3; j++) {
			for (let k = 1; k <= 3; k++) {
				if (combination === `${i}${j}${k}`) {
					return `Has encontrado la cobinacion en el ${attemps}º intento y era ${combination}`;
				} else {
					attemps++;
				}
			}
		}
	}
}
