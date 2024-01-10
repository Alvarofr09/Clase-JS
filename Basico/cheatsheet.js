// Hola mundo en JS
console.log("Hola mundo");

// Variables y constantes

var userName = "Alvaro";

userName = "Pepe";
console.log(userName);



if (true) {
    let surname = "Frias";
}
const dni = "45 123789M";

console.log(dni);

// DATOS SIMPLES

// String
// Son valores de texto. Siempre se van a representar con comillas dobles o simples.
const welcome = "Bienvenido a JS";

// Number
// Son numeros tanto decimales como enteros.
const km = 340;

console.log(km + " " +  typeof km);

// Boolean
// Son balores que van a ser siempre verdadero o falso. Y se representa siempre conlas palabras true y false

const isAlive = true;

// Undefined
// Quiere decir que esa variable no esta definida.No confundir con null

let noDefined;

// Null
// Esta variable si que tiene un valory su valor es "ninguno".

let address = null;

// DATOS COMPLEJOS

// Objetos
/**
 * Los objetos se crean igual que cualquier otra variable pero crearlos utilizaremos {}
 * Dentro de los objetos lo que vamos a tener va a ser: propiedad/valor ---> key/value
 * Para darle valor a la propiedad se utilizan los dos puntos :
 * Dentro de un objeto sus propiedades pueden ser de cualquier tipo.
 */
const user = {
    // Las propiedades del objeto. Cada propiedad va separada con una coma.
    name: "Alvaro",
    surname: "Frias",
    age: 20,
    address : {
        street: "Calle larios",
        number: 5
    }
}

// Para accede a alguna propiedad de nuestro objeto, se hará a traves del punto
// console.log(user.address.street);

// Arrays / Listas
/**
 * Los arrays son listas de elementos (string, number, objetos, arrays)
 * Los arrays estan siempre compuestos por los mismos elementos
 * Se representan con los corchetes []
 */

const notes = [4, 7, 9, 5];

console.log(notes[2] + " es la primera nota de mi lista");
console.log(notes.length + " es el numero de elementos de mi lista");

const students = [
    {name: "Alvaro", surname: "Frias"},
    {name: "Miguel", surname: "Perez"},
    {name: "Pepe", surname: "Ruiz"},
]

console.log(students[1].surname);




// Comparaciones / Asignaciones

// Asignacion
// Para asignarle un valor a una variable se utiliza un solo igual =
const x = 4;

// Doble igual ==
/**
 * Con el doble igual lo que estamos comparando es si dos variables tienen el mismo valor
 * independientemente de su tipo
 */

const a = 2;
const b = "2";

console.log(a == b);

// Tripe igual ===
// Compara dos variables incluyendo su tipo. Para que sea true tienen q ser estrictamente iguales

const c = 3;
const d = "3";

console.log(c === d);

// Diferente de !=
// Compara si dos variables son distintas independientemente de su tipo.

const f = "2";
const h = 2;
console.log(f != h);

// Estrictamente diferente !==
// Compara el valor de dos variables incluyendo el tipo
console.log(f !== h);

console.log(f + h); // Si uno de los dos elemento es un string lo que hara sera concatenar las dos variables

// Condicionales
// Se utiliza cuando queremos tener un resultado dependiendo de si cumplen o no las condiciones

const demon = "var";
const isDemon = demon === "var" && isAlive === false; // --> false
console.log(isDemon);

// && significa "y" y lo que comprueba es que las condiciones se cumplan

const isGod = demon !== "var" || isAlive === true; // --> true
console.log(isGod);

// || significa "o" y lo que comprueba es que una de las condiciones se cumple

// Negacion 
// Se utiliza la exclamacion para cambiarle el valor a un elemento booleano
const isDead = !isAlive;
console.log(isDead);

const isAdult = true;

const cantBuyAlcohol = !isAdult;

const michaelJackson = {
    isBlack : true,
};

const harrisonFord = {
    isBlack : !michaelJackson.isBlack, 
}

console.log("Es negro Harrison Ford? " + harrisonFord.isBlack);

// Valores truthy y falsy
// Todos los valores siguientes retornan false

Boolean(false);
Boolean(0);
Boolean(-0);
Boolean(0n);
Boolean("");
Boolean(``);
Boolean(null);
Boolean(undefined);
Boolean(NaN);

// Cualquier otro valor retorna true

Boolean(true);
Boolean([]);
Boolean({});
Boolean("Hola mundo");
Boolean(new Date());