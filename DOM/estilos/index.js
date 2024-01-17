const title = document.querySelector(".title");
const inputColor = document.querySelector('[type = "color"]');
const inputRange = document.querySelector('[type = "range"]');

// CSSOM --> CSS Object Model

// title.style.fontFamily = "cursive";
// title.style.fontSize = "4rem";
// title.style.color = "darkgreen";

// title.style.color = "var(--color-title)";
// document.documentElement.style.setProperty("--color-title", "hotpink");
// console.log(title.style);

// Eliminar estilos en linea

// title.style.removeProperty("font-family");
// title.style.color = "";
// title.setAttribute("style", "");

function changeColor() {
	title.style.color = this.value;
}

inputColor.addEventListener("input", changeColor);

function changeFontSize() {
	title.style.fontSize = this.value + "px";
}

inputRange.addEventListener("input", changeFontSize);

console.log(getComputedStyle(title).fontSize);

const titleStyle = getComputedStyle(title, "::after");
console.log(titleStyle.margin);
