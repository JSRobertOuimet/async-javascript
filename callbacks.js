const posts = [
  { title: "Post 1", body: "This is post one." },
  { title: "Post 2", body: "This is post two." },
];

getPosts();
createPost({ title: "Post 3", body: "This is post three." }, getPosts);

function getPosts() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post, i) => {
      output += `<li>${post.title}</li>`;
    });

    document.getElementById("output").innerHTML = output;
  }, 1000);
}

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}