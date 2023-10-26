// ---------- Scopes {} Yeh curly brases hi scope hay----------

// var, let, const

// var a = 10
// let b = 20
// const c = 30

// console.log("Value of var is", a);
// console.log("Value of let is", b);
// console.log("Value of const is", c);

// {
//     var a = 10
//     let b = 20
//     const c = 30
// }

// console.log("Value of var is", a); //Global scope
// console.log("Value of let is", b); // Block Scope
// console.log("Value of const is", c); // Block Scope


// let a = 20
// {
//     let a = 10
//     console.log(a);
// }
// console.log(a);


// ---------- Nested Scope Function ----------

// Child kay funcitons parent kay function ko access kar saktay hain is ko kisi had tak ham clousers kehtay hain.
// function one() {
//     let username = "Saqib"
//     function two() {
//         let website = "http:\\www.google.com"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()

// ---------- Nested Scope IF ----------

// if (true) {
//     let score = 10
//     if (score === 10) {
//         let website = "google"
//         console.log(score + " " + website);
//     }
//     // console.log(website);
// }
// console.log(username);

// ---------- Hoisting in Functions ----------

// Simple Function.
// Agar ham Simple Functions ko declear kartay hain to us mian ham pehlay ham decleration kar saktay hain phir function ki body ko assign kar saktay hain.
// let result = addOne(15)
// console.log(result);

// function addOne(num) {
//     return num + 1
// }

// Function Expression.
// Agar ham Functions Expression ko pehlay declear kartay hain to baad main agar ham function body likhtay hain us main error iay ga.
// console.log(addTwo(5));
// let addTwo = function (num) {
//     return num + 2
// }

