// ----------- Closure in JS -----------

//  function outer() {
//   let name = "Outer Function";
//   function inner() {
//     console.log(name);
//   }
//   return inner;
// }

// let myFunc = outer()
// myFunc()

// ----------- Practicle Example - Closure in JS -----------

// function clickHandler(color) {
//   function colorChanger() {
//   document.body.style.backgroundColor = `${color}`
//   }
//   return colorChanger
// }
// document.querySelector(".orange").onclick = clickHandler("orange");
// document.querySelector(".green").onclick = clickHandler("green");

function clickHandler(color) {
  function colors() {
    document.body.style.backgroundColor = color;
  }
  return colors;
}
document.querySelector(".orange").onclick = clickHandler("orange");
