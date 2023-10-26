// console.log("Hello" + " World");
// let fName = "Muhammad Saqib";
// let lName = " Muhammad Amin";
// let c = fName.concat(lName);
// console.log("My full name is :",  c); // Outdated syntex.
// console.log(`My first name is ${fName} and my last name is ${lName}.`); // Mordern way to write strings. String Literals.

let fName = new String("Muhammad Saqib");
// console.log(fName);
// console.log(fName[2]); // is say ham string ka koi bhi character utha saktay hain.
console.log(fName.__proto__); // Yeh return karay ga Object.
// console.log(fName.length); // is say ham  string ki length ko check kar saktay hain.
// console.log(fName.toLowerCase());
// console.log(fName.toUpperCase());
// console.log(fName.includes("s"));
// console.log(fName.replace("Saqib", "Amin"));
// console.log(fName.slice(2, 6));
// console.log(fName.trim());
// console.log(fName.charAt(9));
// console.log(fName.indexOf("d"));

// let str = "    Saqib     "
// console.log(str);
// console.log(str.trim());

console.log(fName.split(" "));
