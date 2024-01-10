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
 * Funcion que genera una contraseña con la funcion generarNumeroDeTresCifras()
 * y la mira siguiendo una permutacion de como maximo el numero 3 en cualquier
 * posicion y te dice cuantos intentos te ha tomado hacerlo.
 */
function permutar() {
	const contraseña = generarNumeroDeTresCifras();
	let contador = 0;

	for (let i = 1; i < 4; i++) {
		for (let j = 1; j < 4; j++) {
			for (let k = 1; k < 4; k++) {
				let numero = `${i}${j}${k}`;
				contador++;

				if (contraseña == numero) {
					console.log(`La contraseña es: ${contraseña}`);
					console.log(`Lo has conseguido en el intento: ${contador}`);
				}
			}
		}
	}
}

permutar();
