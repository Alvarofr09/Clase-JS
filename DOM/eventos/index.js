const wrapper = document.querySelector('[data-id="wrapper"]');
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id = "name"]');
const buttonShow = document.querySelector('[data-id="button-show"]');
const buttonHide = document.querySelector('[data-id="button-hide"]');
const section = document.querySelector(".section");

input.addEventListener("change", function (event) {
	//Cuando deje de tener el foco se va a realizar esta funcion
	// console.log(event.target.value);
	// console.log("Has perdido el foco");
	changeUser.textContent = event.target.value;
});
