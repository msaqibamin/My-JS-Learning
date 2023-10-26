// ---------- Truthy & Falsy Values ----------

// ---------- Falsy Values ----------
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

// ---------- Truthy Values ----------
// true, "0", "false", [], {}, function(){},

// ---------- Practice of Truthy & Falsy ----------
/*
let userEmail = "abc@gmail.com"
if (userEmail) {
    console.log("User email found");
} else {
    console.log("User email not found");
}
*/
// ---------- Check Empty Array ----------
/*
let arr = [];
if (arr.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
}
*/
// ---------- Check Empty Object ----------
/*
let obj = {}
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}
*/

// ---------- Nullish Coalescing Operator (??) (null, undefined) ----------
// Yeh check karta hay kay agar 1 value ki value sahi add nahi hoi to dosri value ko return kar dia jiay. Yeh mostly data base or API's kay case main kaam iata hay kay agar response sahi nahi iata to dosri value ko return kar dia jiay.
// Jo Pehli value hay wo variable main assign ho jati hay.
/*
let value1
// value1 = 5 ?? 10
// value1 = null ?? 10
value1 = undefined ?? 15
console.log(value1);
*/
// ---------- Terniary Operator (?:) ----------
/*
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("Greater then 80");
*/

