const posts = [
  { title: "Post 1", body: "This is post one." },
  { title: "Post 2", body: "This is post two." },
];

// ========================================
// PROMISES
// ========================================

createPost({ title: "Post 3", body: "This is post three." })
  .then(getPosts)
  .catch(err => console.log(err));

// ========================================
// PROMISE ALL
// ========================================

const promise1 = Promise.resolve("Promise 1 resolved.");
const promise2 = true;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "Promise 3 resolved."));
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

Promise
  .all([promise1, promise2, promise3, promise4])
  .then((values) => console.log(values));

// ========================================
// PROMISES WITH ASYNC/AWAIT
// ========================================

init();

async function init() {
  await createPost({ title: "Post 3", body: "This is post three." });
  getPosts();
}

// ========================================
// PROMISES WITH ASYNC/AWAIT AND FETCH
// ========================================

fetchUsers();

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

// ========================================
// FUNCTION DECLARATIONS
// ========================================

function getPosts() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post, i) => {
      output += `<li>${post.title}</li>`;
    });

    document.getElementById("output").innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errors = false;

      if(!errors) resolve();
      else reject("Error: something went wrong.");

      posts.push(post);
    }, 2000);
  });
}