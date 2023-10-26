// ---------- Map Array Method - Return copy of an array ----------
// Map main ham sirf ham values ko print karwatay hain just like foreach loop.

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let mapResult = num
//   .map((num) => num * 100)
//   .map((num) => num + 250)
//   .filter((num) => num >= 1000);

// Same working with foreach loop.
// num.forEach((e) => {
//   console.log(e*10);
// });

// console.log("Original Array is", num);
// console.log("After Map & Filter value is", mapResult);

// ---------- Map Array Method - Practice with example ----------

let books = [
  {
    title: "The Road Ahead",
    genre: "Action",
    publish: 2011,
    edition: 1,
    price: 2999,
  },
  {
    title: "The Road Middle",
    genre: "Fiction",
    publish: 2003,
    edition: 2004,
    price: 899,
  },
  {
    title: "The Road Behind",
    genre: "Fiction",
    publish: 2013,
    edition: 3,
    price: 1599,
  },
  {
    title: "The Road After",
    genre: "History",
    publish: 2014,
    edition: 4,
    price: 699,
  },
];

let bookDir = books
  .map((bk) => bk)
  .filter((bk) => bk.price >= 1500)
  .reduce((prevVal, kb) => prevVal + kb.price, 0);
// console.log(bookDir);

// ---------- Map Array Method - Practice with example ----------

let products = [
  {
    id: "1",
    name: "Apple MacBook Pro 16",
    description:
      "Apple MacBook Pro 16 with Touch Bar, 9th-Gen 8-Core Intel i9 2.4GHz, 32GB RAM, 512GB SSD, AMD Radeon Pro 5300M 4GB, Space Gray, Mid-2019 Retinate 2019",
    brand: "Apple",
    price: "2969",
    category: "laptop",
  },

  {
    id: "15",
    name: "Logitech MK295 Wireless Mouse & Keyboard Combo",
    description:
      "Logitech MK295 Wireless Mouse & Keyboard Combo with SilentTouch Technology, Full Numpad, Advanced Optical Tracking, Lag-Free Wireless, 90% Less Noise - Graphite",
    brand: "Logitech",
    price: "26",
    category: "accessories",
  },
];

let productDir = products
  .map((prod) => prod)
  .filter((prod) => prod.brand === "Logitech")
  .reduce((acc, prod) => acc + Number(prod.price), 0);

console.log(productDir);
