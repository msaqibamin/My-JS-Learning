// ---------- Simple Functions ----------
// function name(params) {
//     }
// ---------- Function Expression ----------
// let sum = function(){
// }

// ---------- This keyword in Object ----------
// this keyword is use for putting current context value.

let user = {
  userName: "Saqib",
  price: 999,
  "user Password": "12345678",
  welcome: function () {
    console.log(`Welcome to site ${this.userName}, Your deducted amount is Rs ${this.price} only.`);
    console.log(this);
  }
}
// user.welcome()
// user.userName = "Amin"
// user.isLoggedIn = false
// console.log(this); // Code enviornment main this show karta hay empty object magar agar ham browser main this key word ko agar ham show kartay hain to window object show karta hay.


// ---------- Arrow Functions ----------
// let userDetails = () => {
//     console.log(this); // Code enviornment main this show karta hay empty object magar agar ham browser main this key word ko agar ham show kartay hain to window object show karta hay.
// }
// userDetails()

// let addTwo = (a)=>{
//     return a + 2
// }
// console.log(addTwo(5));

// ---------- Arrow Functions - Implisit Return ----------

// Return a Object with implicit Return.
let addTwo = (a) => ({ userName: "Muhammad Saqib", password: "12345678" })
console.log(addTwo(5));

// Return Sum of 2 numbers with implicit Return.
let sum = (a, b) => (a + b)
console.log(sum(5, 5));

// ---------- IIFE Functions ----------
// create IFFE function. Instant function bana or run ho gia.
// Global scope kay polution say problem hoti hay kai bar to Global Scope kay jo bhi variables hain jo declerations hain us ko hatanay kay liay ham IFFE ka use kartay hain.

// End par ; Lazmi lagana hay.
// Yeh Named IIFE hay.
(function welcome() {
  console.log("Welcome");
})();

// IFFE Regular function Expression Decleration (Named IIFE).
(function greet() { })();

// IFFE Arrow function Expression Decleration (Without Named IIFE).
(() => { console.log("DB Connected"); })();

// IFFE Arrow function Expression Decleration (Without Named IIFE). With Parameter.
((name) => { console.log(`DB is connected with ${name}`); })("Oracle");

let user1 = {
  userName: "Saqib",
  password: "12345678",
}
function handleObject(anyObj) {
  console.log(`User name is ${anyObj.userName} and Password is ${anyObj.password}`);
}

handleObject(user1);

// 05:55:00 

