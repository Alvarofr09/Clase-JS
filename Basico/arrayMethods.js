const students = [
	{
		id: 3,
		name: "Mirella",
		lastname: "Ramirez Camacho",
		gender: "Femenino",
		age: 22,
		address: [
			{
				name: "Calle 1",
				number: 123,
				city: "Madrid",
			},
		],
	},
	{
		id: 6,
		name: "Alvaro",
		lastname: "Frias Ruiz",
		gender: "Masculino",
		age: 20,
		address: [
			{
				name: "Calle 2",
				number: 365,
				city: "Malaga",
			},
		],
	},
	{
		id: 7,
		name: "Mireilla",
		lastname: "Ramirez Camacho",
		gender: "Masculino",
		age: 23,
		address: [
			{
				name: "Calle 3",
				number: 125,
				city: "Barcelona",
			},
			{
				name: "Calle 4",
				number: 54,
				city: "Barcelona",
			},
		],
	},
];

// 1. map

const studentsMapped = students.map((student, index) => {
	// console.log(index);
	student.address.map((address, index) => {
		// console.log(address);
	});
});

// 2. push --> Añade un elemento al final del array

students.push({
	id: 38,
	name: "Pepe",
	lastname: "Flores",
	gender: "Masculino",
	age: 45,
	address: [
		{
			name: "Calle 5",
			number: 1245,
			city: "Madrid",
		},
	],
});

// console.log(students);

// 3. filter --> Filtra los elementos de un array que cumplan con una condición

const studentsFiltered = students.filter((student) => {
	return student.age >= 23;
});

// console.log(studentsFiltered);

// 4. find --> Devuelve el primer elemento que cumplan con una condición
const studentsFinded = students.find((student) => {
	return student.name === "Alvaro";
});

// console.log(studentsFinded);

// 5. sort --> Devuelve un nuevo array ordenado

const studentsSorted = students.sort((a, b) => b.age - a.age);

// console.log(studentsSorted);

// 6. findIndex --> Encuentra el indice del primer elemento que cumplan con una condición

const studentsFoundByIndex = students.findIndex((student) => student.id === 38);

// console.log(studentsFoundByIndex);

// 7. pop --> Elimina el ultimo elemento de un array

// const studentsWithOutLast = students.pop();
console.log(students);

// 8. splice --> cambia el contenido de un array eliminando elementos existenientes y/o agregando nuevos elementos

const student = {
	id: 40,
	name: "Jesus",
	lastname: "Molina",
	gender: "Masculino",
	age: 45,
	address: [
		{
			name: "Calle 5",
			number: 1245,
			city: "Madrid",
		},
	],
};
const newStudentList = students.splice(2, 1, student);
console.log(students);
