import { getData } from "../utils/index.js";

const postsContainer = document.getElementById("postsContainer");

const url = new URL(document.location.href);

const userId = url.searchParams.get("userId");

async function createPostCard() {
	const posts = await getData(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
	);

	for (let i = 0; i < posts.length; i++) {
		const url = `../comments/index.html?postId=${posts[i].id}`;
		const cardHTML = `
        <div class="card" style="width:18rem;">
          <img src="https://media.sproutsocial.com/uploads/2022/05/How-to-post-on-instagram-from-pc.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${posts[i].title}</h5>
            <p class="card-text">${posts[i].body}</p>
            <button class="go-to-comments-btn" data-url="${url}">VER COMMENTS</button>
          </div>
        </div>
      `;
		postsContainer.insertAdjacentHTML("beforeend", cardHTML);
	}

	const buttons = document.querySelectorAll(".go-to-comments-btn");

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function () {
			const url = this.getAttribute("data-url");
			document.location.href = url;
		});
	}
}
createPostCard();
const button = document.createElement("button");
button.textContent = "Crear post";
button.addEventListener("click", addPost);
postsContainer.prepend(button);
async function addPost() {
	const post = {
		title: "Hola que tal",
		body: "dsjfghsdkfjghdfsj ldfkgfldkgh dlg lkhg dsfjkghdfk jdfgkjdfg dfkjh dfkjhg añkjdf",
		userId: 1,
	};
	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify(post),
		headers: {
			"Content-type": "application/json",
		},
	});
	const newPost = await response.json();
	const cardHTML = `
        <div class="card" style="width:18rem;">
          <img src="https://media.sproutsocial.com/uploads/2022/05/How-to-post-on-instagram-from-pc.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${newPost.title}</h5>
            <p class="card-text">${newPost.body}</p>
            <button class="go-to-comments-btn" data-url="${url}">VER COMMENTS</button>
          </div>
        </div>
      `;
	postsContainer.insertAdjacentHTML("beforeend", cardHTML);
}
