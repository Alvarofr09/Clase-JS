let numbers = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

function sumaMatriz(matriz) {
	let suma = 0;
	for (let i = 0; i < matriz.length; i++) {
		for (let j = 0; j < matriz[i].length; j++) {
			suma += matriz[i][j];
		}
	}
	console.log(suma);
}

sumaMatriz(numbers);
