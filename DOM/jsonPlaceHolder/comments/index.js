import { getData } from "../utils/index.js";

const commentsContainer = document.getElementById("commentsContainer");

const url = new URL(document.location.href);

const postId = url.searchParams.get("postId");

async function createCommentCard() {
	const comments = await getData(
		`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
	);

	for (let i = 0; i < comments.length; i++) {
		const cardHTML = `
        <div class="card" style="width:18rem;">
          <img src="https://cdn-icons-png.flaticon.com/512/6320/6320337.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${comments[i].name}</h5>
            <p class="card-text">${comments[i].body}</p>
          </div>
        </div>
      `;
		commentsContainer.insertAdjacentHTML("beforeend", cardHTML);
	}
}
createCommentCard();
