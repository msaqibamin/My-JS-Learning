console.log("Project 1");

let btn = document.querySelectorAll(".button");
let body = document.body;

// console.log(btn);

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "crimson") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
