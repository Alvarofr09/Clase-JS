// FUNCIONES
// Metodos que automatizan procedimientos.

// Funcion nombrada con retorno
console.log("<---------------Funcion nombrada con retorno------------->");
console.log("<---------------Funcion covertir string a numero------------->");
function coverStringToNumber(string) {
    return Number(string);
}

console.log(coverStringToNumber("3"));

// Funcion nombrada sin retorno
console.log("<---------------Funcion nombrada sin retorno------------->");
console.log("<---------------Funcion que nos cambia el estado------------->");
let state = 1;

function changeUserStatus() {
    state = 2;
}

console.log("Estado del usuario antes " + state);
changeUserStatus();
console.log("Estado del usuario despues " + state);

console.log("<---------------Funcion que nos da los milisegundos y luego los cambia------------->");
let currentTime = new Date().getTime(); // Nos da los milisegundos desde 1/1/1970
console.log(currentTime);
function getCurrentTime() {
    currentTime = new Date().getTime();
    console.log(currentTime);
}

setTimeout(getCurrentTime, 1000);