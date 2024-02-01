import { getData } from "../utils/index.js";
import Swal from "sweetalert2";
const urlCategories = "https://api.escuelajs.co/api/v1/categories";
const template = document.querySelector(".card--template");
const container = document.querySelector(".container");

async function showData() {
	const categories = await getData(urlCategories);

	for (let i = 0; i < categories.length; i++) {
		const category = categories[i];

		const templateCard = document.importNode(template.content, true);

		const imagen = templateCard.querySelector(".card-image");
		const cardTitle = templateCard.querySelector(".card-title");
		const link = templateCard.querySelector(".card-link");
		// const editButton = templateCard.querySelector(".card-edit");
		// const deleteButton = templateCard.querySelector(".card-delete");

		// editButton.addEventListener("click", handleEdit);

		// deleteButton.addEventListener("click", handleDelete);

		console.log(category);
		imagen.src = category.image;
		cardTitle.textContent = category.name;
		link.href = `../products/index.html?categoryId=${category.id}`;

		container.append(templateCard);
	}
}

// function handleEdit(e) {
// 	e.preventDefault();
// 	alert("Vas a editar");
// }

// function handleDelete(e) {
// 	e.preventDefault();
// 	const swalWithBootstrapButtons = Swal.mixin({
// 		customClass: {
// 			confirmButton: "btn btn-success",
// 			cancelButton: "btn btn-danger",
// 		},
// 		buttonsStyling: false,
// 	});
// 	swalWithBootstrapButtons
// 		.fire({
// 			title: "¿Quieres borrar la categoria?",
// 			text: "You won't be able to revert this!",
// 			icon: "warning",
// 			showCancelButton: true,
// 			confirmButtonText: "Yes, delete it!",
// 			cancelButtonText: "No, cancel!",
// 			reverseButtons: true,
// 		})
// 		.then((result) => {
// 			if (result.isConfirmed) {
// 				swalWithBootstrapButtons.fire({
// 					title: "Borrada!",
// 					text: "Has borrado la categoria: .",
// 					icon: "success",
// 				});
// 			} else if (
// 				/* Read more about handling dismissals below */
// 				result.dismiss === Swal.DismissReason.cancel
// 			) {
// 				swalWithBootstrapButtons.fire({
// 					title: "Cancelado",
// 					text: "No has borrado la categoria",
// 					icon: "error",
// 				});
// 			}
// 		});
// }

showData();
