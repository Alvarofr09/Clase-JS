function generarNumeroAleatorio() {
	return Math.floor(Math.random() * 3) + 1;
}

function generarNumeroDeTresCifras() {
	const cifra1 = generarNumeroAleatorio();
	const cifra2 = generarNumeroAleatorio();
	const cifra3 = generarNumeroAleatorio();

	const numeroDeTresCifras = cifra1 * 100 + cifra2 * 10 + cifra3;

	return numeroDeTresCifras;
}

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
