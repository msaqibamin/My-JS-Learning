let clockBackground = document.querySelector(".clockBackground");
let dateBackground = document.querySelector(".dateBackground");
let date = new Date();
dateBackground.innerHTML = date.toLocaleDateString();
setInterval(() => {
  let time = new Date();
  clockBackground.innerHTML = time.toLocaleTimeString();
}, 1000);
