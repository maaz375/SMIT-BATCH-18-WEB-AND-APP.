let posts = JSON.parse(localStorage.getItem("posts")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

let editIndex = null;
let deletedPost = null;
let deletedIndex = null;
let undoTimer = null;
let menuToggleBtn = document.getElementById("menuToggle");
let mobileMenu = document.getElementById("mobileMenu");

if (!currentUser) {
  alert("Please login first!");
  window.location.href = "login.html";
}

document.getElementById("welcomeUser").innerText =
  currentUser.firstName + " " + currentUser.lastName;

if (menuToggleBtn && mobileMenu) {
  menuToggleBtn.addEventListener("click", () => {
    let isOpen = mobileMenu.classList.toggle("is-open");
    menuToggleBtn.classList.toggle("is-open", isOpen);
    menuToggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

renderPosts();

document.getElementById("postBtn").addEventListener("click", () => {
  let content = document.getElementById("content").value.trim();
  let imageFile = document.getElementById("imageInput").files[0];

  if (!content) {
    alert("Post cannot be empty!");
    return;
  }

  let post = {
    username: currentUser.firstName + " " + currentUser.lastName,
    email: currentUser.email,
    content,
    image: null,
    likes: 0,
    comments: [],
    date: new Date().toLocaleString()
  };

  if (imageFile) {
    let reader = new FileReader();

    reader.onload = function () {
      post.image = reader.result;

      posts.unshift(post);
      savePosts();
      renderPosts();
      clearInputs();
    };

    reader.readAsDataURL(imageFile);
  } else {
    posts.unshift(post);
    savePosts();
    renderPosts();
    clearInputs();
  }
});

function renderPosts(filter = "") {
  let postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "";

  let filtered = posts.filter(p =>
    p.username.toLowerCase().includes(filter.toLowerCase()) ||
    p.content.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach((post, index) => {
    postsDiv.innerHTML += `
      <div class="card p-3 post-card mb-3">

        <div class="d-flex justify-content-between">
          <h6>${post.username}</h6>
          <small>${post.date}</small>
        </div>

        <p>${post.content}</p>

        ${post.image ? `<img src="${post.image}" class="img-fluid mb-2">` : ""}

        <div class="d-flex gap-2 align-items-center">

          <button class="btn btn-outline-danger btn-sm" onclick="likePost(${index}, this)">
            &#10084;&#65039; ${post.likes}
          </button>

          ${post.email === currentUser.email ? `
            <button class="btn btn-warning btn-sm" onclick="openEdit(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deletePost(${index})">Delete</button>
          ` : ""}

        </div>

        <input type="text" id="c${index}" class="form-control form-control-sm mt-2" placeholder="Comment...">
        <button class="btn btn-sm btn-primary mt-1" onclick="addComment(${index})">Comment</button>

        <div>
          ${post.comments.map(c => `<p>&#128172; ${c}</p>`).join("")}
        </div>

      </div>
    `;
  });
}

function likePost(index, btn) {
  posts[index].likes++;
  btn.classList.add("like-animate");

  setTimeout(() => btn.classList.remove("like-animate"), 200);

  savePosts();
  renderPosts();
}

function addComment(index) {
  let input = document.getElementById(`c${index}`);
  let text = input.value.trim();

  if (!text) return;

  posts[index].comments.push(text);

  savePosts();
  renderPosts();
}

document.getElementById("search").addEventListener("input", (e) => {
  renderPosts(e.target.value);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function deletePost(index) {
  if (!confirm("Delete post?")) return;

  deletedPost = posts[index];
  deletedIndex = index;

  posts.splice(index, 1);

  savePosts();
  renderPosts();

  let box = document.getElementById("undoBox");
  box.classList.remove("d-none");

  clearTimeout(undoTimer);

  undoTimer = setTimeout(() => {
    box.classList.add("d-none");
  }, 4000);
}

function undoDelete() {
  if (deletedPost) {
    posts.splice(deletedIndex, 0, deletedPost);

    savePosts();
    renderPosts();

    document.getElementById("undoBox").classList.add("d-none");
  }
}

function openEdit(index) {
  editIndex = index;

  document.getElementById("editContent").value = posts[index].content;

  new bootstrap.Modal(document.getElementById("editModal")).show();
}

document.getElementById("updateBtn").addEventListener("click", () => {
  let newContent = document.getElementById("editContent").value.trim();

  if (!newContent) {
    alert("Empty!");
    return;
  }

  if (newContent === posts[editIndex].content) {
    alert("No changes!");
    return;
  }

  posts[editIndex].content = newContent;

  savePosts();
  renderPosts();

  bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
});

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

function clearInputs() {
  document.getElementById("content").value = "";
  document.getElementById("imageInput").value = "";
}

function savePosts() {
  localStorage.setItem("posts", JSON.stringify(posts));
}
