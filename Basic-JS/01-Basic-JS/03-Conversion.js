// ------------ Conversion & Operation ------------

// Type change karna string to number and number to string etc.

// let score = "33";
// console.log(typeof score, score);
// let typeChange = Number(score)
// console.log(typeChange, typeof typeChange);

// Agar number kay sath alphabats likha ho to us main type change number ka masla iay ga show karay ga number magar wo number nahi ho ga wo NaN=>Not a Number ho ga.

// let score = "null";
// let typeChange = Number(score);
// console.log(typeChange, typeof typeChange);

// 33 = 33
// 33abc= NaN

// let isLoggedIn = 0;
// let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);

// 1 => true
// 0 => false
// "" => true

let a = "33";
let b = String(a);
console.log(typeof b, b);
