import { getData } from "../utils/index.js";
const cardsContainer = document.getElementById("cardsContainer");

async function createUserCard() {
	const userData = await getData(`https://jsonplaceholder.typicode.com/users`);

	for (let i = 0; i < userData.length; i++) {
		const url = `../posts/index.html?userId=${userData[i].id}`;
		const cardHTML = `
      <div class="card" style="width:18rem;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${userData[i].name}</h5>
          <p class="card-text">${userData[i].email}</p>
          <button class="go-to-posts-btn" data-url="${url}">VER POSTS</button>
        </div>
      </div>
    `;
		cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
	}

	const buttons = document.querySelectorAll(".go-to-posts-btn");

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function () {
			const url = this.getAttribute("data-url");
			document.location.href = url;
		});
	}
}
createUserCard();
