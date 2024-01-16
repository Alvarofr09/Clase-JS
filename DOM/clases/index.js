const button = document.querySelector(".button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");

button.classList.add("primary");
console.log(button.classList.item(1)); // button.classList[1]

// button.addEventListener("click", function () {
// 	modal.classList.add("show");
// });

closeModal.addEventListener("click", function () {
	// modal.classList.remove("show");
});

button.addEventListener("click", function () {
	// if (!button.matches(".red")) {
	// 	button.classList.add("red");
	// } else {
	// 	button.classList.remove("red");
	// }
	button.classList.toggle("red");
});

console.log(button.classList.replace("red", "primary"));
console.log(button.classList.replace("primary", "red"));
