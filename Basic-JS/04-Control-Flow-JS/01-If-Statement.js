// ---------- If Statement ----------

// ---------- Comarasion Operators ----------
// > < >= <= = == === != (&& and "Both are true") (|| or "Any one is true")

// ---------- If Standard Statement ----------
// if (condition) {}
// ---------- If Statement - (Implicit Scope) ----------
// if (true) console.log("true");

// let age = 18
// if (age >= 18) {
//     console.log("Your age is greater than or equal to 18");
// }

// let isLoggedIn = true
// if (isLoggedIn) {
//     console.log("You are logged in");
// }

/*
// Return True and False in If Statement with != Operator.
if (3 != 3) {
    console.log("true");
}
else {
    console.log("false");
}
*/

/*
let temprature = 41
let enteredTemprature = Number(prompt("Enter Temprature: "))
if (enteredTemprature >= temprature) {
    console.log("Temprature is greater then and equals to 41")
}
else {
    console.log("Temprature is less then 41");
}
*/

/*
let score = 200
if (score > 100) {
    let userPower = "Fly"
    console.log(`User can ${userPower}.`);
}
*/

/*
// if Short Hand (Implicit Scope).

let balance = 1000
if (balance >= 1000) console.log("true"); // Sirf 1 condition ham check kar saktay hain. Magar ham is main , kay sath mazeed console.log nahi karain gay kiaoon kay teh achi practice nahi hay.
*/

/*
// nested if else

let balance = 2000
if (balance < 500) {
    console.log("Balance is greater then 500");
}
else if(balance < 750){
    console.log("Balance is greater then 750");
}
else if(balance < 900){
    console.log("Balance is greater then 900");
}
else{
    console.log("Balance is greater then and equals to 1000");
}
*/

// ---------- && and Operators ----------

/*
let userLoggedIn = true
let debitCard = true
if (userLoggedIn && debitCard) {
    console.log("Allowed to purchase a product");
}
else {
    console.log("Not allowed to purchase a product");
}
*/

// ---------- || or Operators ----------

/*
let loggedInWithGoogle = false;
let loggedInWithEmail = false;
let loggedInWithFacebook = true;
let loggedInWithTwitter = false;

if (loggedInWithEmail || loggedInWithGoogle || loggedInWithFacebook || loggedInWithTwitter) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in");
}
*/