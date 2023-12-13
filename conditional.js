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

const users = {name: "Alvaro"};

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