/*
Promis ko initialize kia jata hay new keyword kay sath.
Promises aik objects hain. Promises ka matlab hay kay kia koi kaam complete hoa ya wo fail hoa.

Promis aik callback ko latia hay jis kay 2 arguments hotay hain. Resolve and Reject.

Promises ki 3 states hoti hain.
1 - pending
2 - fulfilled
3 - reject
*/

// ----------- 1 - Create promise and set value to variables -----------
// let myPromis = new Promise((resolve, reject) => {
//   // Do an async task.
//   // DB Call back, Cryptography, network etc.
//   setTimeout(() => {
//     console.log("async task 1 comoleted");
//     resolve();
//   }, 1000);
// });
// ----------- Consume the promise -----------
// myPromis.then(() => {
//   console.log("promis 1 Consumed");
// });

// --------- 2 - Another way to Create promise Direct initialization -----------
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("acync task 2 is here");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("promis 2 resolved");
// });

// --------- 3 - Create another promise -----------
// resolve ka argument jis ko ham nay promise mian initialize kia tha us main value ko pass karna, Jo value ham pass kartay hain same wohi value print ho jati hay. Chahay wo array ho ya koi string value ho ya koi object ho.

// let thirdPromis = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([{ username: "saqib", email: "xyz@example.com" }]);
//   }, 1000);
// });
// thirdPromis.then((user) => {
//   console.log(user);
// });

// --------- 4 - Create another promise -----------
// First Approach

// .then chaining (aik .then ki value dosray main pass kar kay result extract karna.)
// Yeh perfect tareeqa hay promis ko use karnay ka.

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "saqib", password: "123456" });
//     } else {
//       reject("Error: Something went wrong");
//     }
//   }, 1000);
// })
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let practicePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ user: "saqib", password: 123456 });
//         } else {
//             reject("Error: Data is not Fetching Correctly.");
//         }
//     }, 1000);
// })
// .then((user) => {
//     return user;
// })
// .then((user) => {
//     console.log(user.password);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("Data is either resolve or rejected.");
// });

// --------- 5 - Create another promise -----------
//  Second Approach with acync await

// let promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ course: "Java Script", courseFee: 2999 });
//     } else {
//       reject("Error: JS Went Wrong.");
//     }
//   }, 1000);
// });

// async function consumePromisFive() {
//   try {
//     let response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromisFive();

// let practicePromiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ course: "Java Script", courseFee: 2999 });
//     } else {
//       reject("Error: Something went wrong......!");
//     }
//   }, 1000);
// });

// async function runPromise() {
//   try {
//     let result = await practicePromiseFive;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// runPromise();

// let myPromis = new Promise((resolve, reject) => {
//   let error = true;
//   if (!error) {
//     resolve({ user: "saqib", password: 123 });
//   } else reject("Error: Something Went Wrong.");
// });
// myPromis
//   .then((user) => {
//     console.log(user, "Promise Consumed");
//     return user.password;
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function practicePromise() {
//   try {
//     let response = await myPromis;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// practicePromise();

// --------- Async Await function -----------
//Async function for fetchind APi's.

// async function fetchAPIs() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// fetchAPIs();

// --------- Fetch function with return -----------
// Fetch aik priority cue say handel hota hay jis ko ham Special Que bhi keh saktay hain.
// Fetch aik promise return karta hay.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Data either Fetched Successfully or failed.");
//   });

// --------- Fetch function Literals -----------
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((error) => console.log("Error:", error))
//   .finally(() => console.log("Data fetched."));

// --------- async await practice -----------

// async function practice() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
//     document.querySelector(
//       ".name"
//     ).innerHTML = `User Name: ${data[0].username}`;
//     document.querySelector(".id").innerHTML = `User id: ${data[0].id}`;
//     document.querySelector(".email").innerHTML = `User email: ${data[0].email}`;
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// practice();

// --------- Practice with DOM on Async for fetching data -----------

// document.querySelector("button").addEventListener(
//   "click",
//   function (e) {
//     async function loadData() {
//       try {
//         let url = "https://jsonplaceholder.typicode.com/users";
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data);
//         document.querySelector(".id").innerHTML = `ID: ${data[0].id}`;
//         document.querySelector(".name").innerHTML = `Name: ${data[0].name}`;
//         document.querySelector(".email").innerHTML = `Email: ${data[0].email}`;
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     loadData();
//     e.target.style.visibility = "hidden";
//   },
//   false
// );

// --------- Practice with DOM on fetch() for fetching data -----------

// document.querySelector("button").addEventListener(
//   "click",
//   (e) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         document.querySelector(".id").innerHTML = `ID: ${data[0].id}`;
//         document.querySelector(".name").innerHTML = `Name: ${data[0].name}`;
//         document.querySelector(".email").innerHTML = `Email: ${data[0].email}`;
//       })
//       .catch((error) => console.log(error))
//       .finally(() => console.log("Task Completed..."));
//     e.target.style.visibility = "hidden";
//   },
//   false
// );

// let url = "https://jsonplaceholder.typicode.com/users";
// 06:40:00
