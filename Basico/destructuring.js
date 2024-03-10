const student = {
	id: 40,
	name: "Jesus",
	lastname: "Molina",
	age: 45,
	gender: "Masculino",
	address: [
		{
			name: "Calle 5",
			number: 1245,
			city: "Madrid",
		},
	],
};

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

// ---------------------- Destructuring de objetos ----------------------

const { address, age, ...rest } = student;

const newStudent = { ...rest };

const superStudent = { ...student, note: 8 };

// console.log(superStudent);

// ---------------------- Destructuring de arrays ----------------------

const [firstElement, secondElement, ...rest2] = students;

console.log(secondElement);
