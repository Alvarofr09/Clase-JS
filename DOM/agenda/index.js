const form = document.getElementById("contactForm");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const contactList = document.getElementById("contactList");

form.addEventListener("submit", handleSubmit);
searchForm.addEventListener("submit", function (e) {
	e.preventDefault();
	searchItem(contactList.children, searchInput.value);
});

function handleSubmit(e) {
	e.preventDefault();
	const formData = Object.fromEntries(new FormData(this));

	contactList.insertAdjacentHTML(
		"afterbegin",
		`
    <li 
        data-name="${formData.name.toLowerCase()}" 
        data-phone="${formData.phone.toLowerCase()}" 
        data-category="${formData.category.toLowerCase()}" 
        class="contact-item"
    >
        ${formData.name} - ${formData.phone} (${formData.category})
        <button onclick="removeElement(this.parentElement)">X</button>
    </li>
  `
	);

	this.reset();
}

function removeElement(element) {
	element.remove();
}

function searchItem(list, value) {
	for (let i = 0; i < list.length; i++) {
		let contact = list[i];
		let name = contact.getAttribute("data-name").toLowerCase();
		let phone = contact.getAttribute("data-phone").toLowerCase();
		let category = contact.getAttribute("data-category").toLowerCase();

		if (value === "") {
			contact.classList.remove("hide");
		} else {
			if (
				name === value.toLowerCase() ||
				phone === value.toLowerCase() ||
				category === value.toLowerCase()
			) {
				contact.classList.remove("hide");
			} else {
				contact.classList.add("hide");
			}
		}
	}
}
