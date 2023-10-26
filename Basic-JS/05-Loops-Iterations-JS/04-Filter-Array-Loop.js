// ---------- Filter Array Method ----------
//

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = num.filter((num) => {
  return num > 6;
});
// console.log(result);

// ---------- Examples of Filter ----------

let books = [
  {
    title: "The Road Ahead",
    genre: "Action",
    publish: 2011,
    edition: 1,
  },
  {
    title: "The Road Middle",
    genre: "Fiction",
    publish: 2003,
    edition: 2004,
  },
  {
    title: "The Road Behind",
    genre: "Fiction",
    publish: 2013,
    edition: 3,
  },
  {
    title: "The Road After",
    genre: "History",
    publish: 2014,
    edition: 4,
  },
];

// ---------- Explicit Return with Filter ----------
// Explicit return main ham {} ka scope laga detay hain is liay ham return lazmi use karain gay.

let userBooks = books.filter((bk) => {
  return bk.genre === "Fiction" && bk.publish >= 2000;
});
// .filter((bk) => {
//   return bk.publish >= 2000;
// });

// ---------- Implicit Return with Filter ----------
// Implicit return main ham single line mian condition likh detay hain with return keyword.

// let userBooks = books
//   .filter((bk) => bk.genre === "Fiction")
//   .filter((bk) => bk.publish >= 2003);
console.log(userBooks);
