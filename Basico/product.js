function createProduct(name, price, quantity) {
	return { name, price, quantity };
}

let inventory = [
	createProduct("pan", 0.4, 5),
	createProduct("leche", 1.6, 10),
	createProduct("azucar", 2.3, 2),
];

function addProduct(product) {
	inventory.push(product);
	console.log("Producto agregado: " + product.name);
}

const newProduct = {
	name: "arroz",
	price: 5,
	quantity: 6,
};

addProduct(newProduct);

function removeProduct(inventory, productName) {
	for (let i = 0; i < inventory.length; i++) {
		if (productName === inventory[i].name) {
			for (let j = i; j <= inventory.length - 1; j++) {
				inventory[j] = inventory[j + 1];
			}
			inventory.length = inventory.length - 1;
			console.log("Producto eliminado: " + productName);
			return;
		}
	}
	console.log("Producto no encontrado: " + productName);
}

function findProduct(inventory, productName) {
	for (let i = 0; i < inventory.length; i++) {
		if (productName === inventory[i].name) {
			const product = inventory[i];
			console.log(
				"Producto encontrado: " +
					product.name +
					" Precio: " +
					product.price +
					" Cantidad: " +
					product.quantity
			);
			return product;
		}
	}
	console.log("Producto no encontrado" + productName);
	return null;
}

console.log(inventory);
console.log(removeProduct(inventory, "azucar"));
console.log(inventory);
