// REST

function sum(...values) {
	return values.reduce((acc, values) => acc + values);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// SPREAD

const studentsAges = [23, 34, 56, 55, 18, 24];

console.log(sum(...studentsAges));
