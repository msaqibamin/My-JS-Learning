// ----------- Project 1 Solution -----------

let box = document.querySelectorAll(".box");
let body = document.body;
// console.log(box);
box.forEach((e) => {
  e.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "reset") {
      body.style.backgroundColor = "antiquewhite";
    }
  });
});

// ----------- Project 2 Solution -----------

let form = document.querySelector("form");
form.addEventListener("submit", BMICalculation);
function BMICalculation(e) {
  e.preventDefault();
  let height = Number(document.querySelector(".height").value);
  let weight = Number(document.querySelector(".weight").value);
  let result = document.querySelector(".result");
  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "*** Field is required as Valid Number ***";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "*** Field is required as Valid Number ***";
  } else if (
    height === "" ||
    height <= 0 ||
    (isNaN(height) && weight === "") ||
    weight <= 0 ||
    isNaN(weight)
  ) {
    result.innerHTML = "*** Field is required as Valid Number ***";
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi > 24.9) {
      result.innerHTML = `<span>Your BMI Result is ${bmi}</span><br><span>"Over Weight"</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>Your BMI Result is ${bmi}</span><br><span>"Normal Weight"</span>`;
    } else {
      result.innerHTML = `<span>Your BMI Result is ${bmi}</span><br><span>"Under Weight"</span>`;
    }
  }
}
