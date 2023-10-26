// https://api.github.com/users/hiteshchoudhary

/*
    let apiUrl = "https://api.github.com/users/hiteshchoudhary";
    let data = new XMLHttpRequest();
    data.open("GET", apiUrl);

    data.onreadystatechange = function () {
      console.log(data.readyState);

      if (data.readyState === 4) {
        let res = JSON.parse(this.responseText)
        console.log(typeof res, res);
        console.log(res.followers);
      }
    };

    data.send();
*/

let url = "https://api.github.com/users/hiteshchoudhary";

let request = new XMLHttpRequest();
request.open("GET", url);
let data;
request.onreadystatechange = function () {
  console.log(request.readyState);
  if (this.readyState === 4) {
    data = JSON.parse(this.responseText);
    console.log(data);
    document.querySelector("img").setAttribute("src", data.avatar_url);
    document.querySelector(".name").textContent = data.name;
    document.querySelector(".id").textContent = data.id;
    document.querySelector("p").innerHTML = `Bio: ${data.bio}`;
  }
};
request.send();
