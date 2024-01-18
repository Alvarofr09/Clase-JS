const gameBoard = document.querySelector(".game__board");
const gameTurn = document.querySelector(".game__turn");
const endgameResult = document.querySelector(".endgame__result");
const endgameSection = document.querySelector(".endgame");
const restartButton = document.querySelector(".endgame__button");

let turno = 0;

function crearTablero() {
	for (let i = 1; i <= 3; i++) {
		for (let j = 1; j <= 3; j++) {
			const div = document.createElement("div");
			div.classList.add("cell");

			div.addEventListener("click", function () {
				pintarCelda(this);
				actualizarTablero();
			});
			gameBoard.appendChild(div);
		}
	}
}

function actualizarTablero() {
	if (turno % 2 !== 0) {
		if (gameTurn.hasChildNodes) {
			gameTurn.textContent = "";
		}
		gameTurn.append(document.createTextNode("X"));
	} else {
		gameTurn.textContent = "";
		gameTurn.append(document.createTextNode("O"));
	}
}

function pintarCelda(celda) {
	if (celda.classList.contains("circle") || celda.classList.contains("cross")) {
		return;
	}

	const jugadorActual = turno % 2 === 0 ? "circle" : "cross";
	celda.classList.add(jugadorActual);

	verificarResultado();
	turno++;
}

function verificarResultado() {
	const ganador = hayGanador();

	if (ganador) {
		mostrarResultado(ganador);
	}

	if (verificarEmpate()) {
		mostrarResultado("Empate");
	}
}

function hayGanador() {
	const combinacionesGanadoras = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (const combinacion of combinacionesGanadoras) {
		const [a, b, c] = combinacion;
		const celdaA = document.querySelector(`.cell:nth-child(${a + 1})`);
		const celdaB = document.querySelector(`.cell:nth-child(${b + 1})`);
		const celdaC = document.querySelector(`.cell:nth-child(${c + 1})`);

		if (
			celdaA.classList.contains("circle") &&
			celdaB.classList.contains("circle") &&
			celdaC.classList.contains("circle")
		) {
			return "circle";
		}

		if (
			celdaA.classList.contains("cross") &&
			celdaB.classList.contains("cross") &&
			celdaC.classList.contains("cross")
		) {
			return "cross";
		}
	}

	return null;
}

function verificarEmpate() {
	const todasLasCeldas = document.querySelectorAll(".cell");

	for (const celda of todasLasCeldas) {
		if (
			!celda.classList.contains("circle") &&
			!celda.classList.contains("cross")
		) {
			return false;
		}
	}

	return true;
}

function reiniciarJuego() {
	const todasLasCeldas = document.querySelectorAll(".cell");
	todasLasCeldas.forEach((celda) => {
		celda.classList.remove("circle", "cross");
	});

	endgameSection.classList.remove("show");
	turno = 0;
	actualizarTurno();
}

function mostrarResultado(resultado) {
	if (verificarEmpate()) {
		endgameResult.textContent = "Ha sido " + resultado;
	} else {
		endgameResult.textContent = "Ha ganado " + resultado;
	}
	endgameSection.classList.add("show");
}

function actualizarTurno() {
	const jugadorActual = turno % 2 === 0 ? "O" : "X";
	gameTurn.textContent = jugadorActual;
}

crearTablero();
actualizarTablero();

restartButton.addEventListener("click", reiniciarJuego);
