// ---------- for of Loop ----------

// let num = [1, 2, 3, 4, 5];
// for (const value of num) {
//   //   console.log(value);
// }

// let fname = "muhammad saqib";
// for (const value of fname) {
//   // console.log(value);
// }

// ---------- Maps (Hold Key Value Pairs with same order) ----------
// maps main value unique rehti hain duplication allow nahi hay.
// let map = new Map();
// map.set(1, "Saqib");
// map.set(2, "Amin");
// map.set(3, "Wahaj");
// // console.log(map);
// for (const [key, value] of map) {
//   //   console.log(map);
// }

// for of loop kay sath ham condings ko iterate nahi kar saktay.
// let myObj = {
//   name: "Saqib",
//   age: 40,
// };
// for (const key of myObj) {
//     console.log(key);
// }

// ---------- for in Loop ----------
// const language = {
//   HTML: "Hyper Text Markup Language",
//   CSS: "Cascading Style Sheet",
//   JS: "JavaScript",
// };
// for (const key in language) {
//   console.log(`The value against ${key} key is ${language[key]}`);
// }

// let arr = [1, 2, 3, 4, 5];
// for (const key in arr) {
//   console.log(arr[key]);
// }
// for (const key of arr) {
//   //   console.log(key);
// }

// ---------- forEach Loop ----------
// foreach loop run hota hay array par.
// let languages = ["HTML", "CSS", "JS"];
// languages.forEach((language) => {
//   console.log(language);
// });

// languages.forEach((language) => console.log(language)); // forEach loop in one line.

//Alag say function main value store kar kay us function ka reference pass on karna foreach loop main.
// function logLanguage(language) {
//   console.log(language);
// }
// languages.forEach(logLanguage);

// languages.forEach((item, index) => console.log(item, index));

let coding = [
  { languageName: "HTML", language: "Hyper Text Markup Language" },
  { languageName: "CSS", language: "Cascading Style Sheet" },
  { languageName: "JS", language: "JavaScript" },
  { languageName: "TS", language: "TypeScript" },
  { languageName: "PY", language: "Python" },
  { languageName: "C", language: "C" },
];
// coding.forEach((item) => {
//   console.log(item);
// })

coding.forEach((item) => {
  console.log(item.language);
  return item;
});
