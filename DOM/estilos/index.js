const title = document.querySelector(".title");
const inputColor = document.querySelector('[type = "color"]');
const inputRange = document.querySelector('[type = "range"]');

inputColor.addEventListener("change", function () {
	title.style.color = inputColor.value;
});

inputRange.addEventListener("change", function () {
	title.style.fontSize = inputRange.value + "px";
});
