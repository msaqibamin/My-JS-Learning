// ----------- Prototype -----------

// task
// let str = "saqib       ";
// console.log(str.trulength());

// let myHeros = ["saqib", "amin"];

// let heroPower = {
//   saqib: "good",
//   amin: "very good",
//   getCombile: function () {
//     console.log(`complete name is ${this.saqib}${this.amin}`);
//   },
// };

// console.log(heroPower.getCombile());
// Object.prototype.saqibAmin = function () {
//   console.log("saqib is present in all objects.");
// };

// console.log(heroPower.saqibAmin());
// console.log(myHeros.saqibAmin());

// Array.prototype.good = function () {
//   console.log("good Job");
// };

// console.log(heroPower.good());
// console.log(myHeros.good());

// Inheritance
// Old Method.

// ----------- Prototype Inheritance -----------

// let userDetails = {
//   name: "saqib",
//   password: 123456,
//   email: "saqib.amin@google.com",
//   address: "Walton Road, Lahore",
// };
// let loginDetails = {
//   isLoggedIn: true,
//   loginCount: 8,
// };

// Old Method / Aproach.
// userDetails.__proto__ = loginDetails
// console.log(userDetails.loginCount);

// New Method / Aproach.
// Object.setPrototypeOf(userDetails, loginDetails);
// console.log(
//   `Login Count of user ${userDetails.name} is ${userDetails.loginCount}.`
// );

// userDetails.__proto__ = loginDetails;
// console.log(userDetails.isLoggedIn);

// ----------- Practice -----------

function addUserIntoDB(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  return this;
}
addUserIntoDB.prototype.welcomeMessage = function () {
  console.log(
    `Hello ${this.name}, Welcome onboard. Your email is ${this.email} with password ${this.password}. Did not disclosed your credentials with any one.`
  );
};
let user1 = new addUserIntoDB("Saqib", "abc@cde.com", 123);
let user2 = new addUserIntoDB("Amin", "cde@def.com", 987);
// console.log(user1.welcomeMessage());
// console.log(user2.welcomeMessage());

let myArr = [1, 2, 3, 4, 5, 6];
let myArr1 = [10, 11, 12, 13, 14, 15, 16, 17, 18];
Array.prototype.spliceAndLength = function () {
  this.splice(1, 3);
  return this;
};
let modifiedVersion = myArr.spliceAndLength();
// console.log(modifiedVersion);
// console.log(myArr1.spliceAndLength());

let userDetails = {
  name: "saqib",
  password: 123456,
  email: "saqib.amin@google.com",
  address: "Walton Road, Lahore",
  getSummery: function () {
    console.log(
      `Your registered email is ${this.email} and your password is ${this.password}`
    );
  },
};

let loginDetails = {
  isLoggedIn: true,
  loginCount: 8,
};

Object.setPrototypeOf(userDetails, loginDetails);
// console.log(userDetails.isLoggedIn);

let anotherUserName = "Saqib       ";
String.prototype.trueLength = function () {
  //   console.log(this.trim().length);
};
anotherUserName.trueLength();

async function FetchDataFromAPI() {
  // Using fetch().
  //   fetch("https://api.apis.guru/v2/list.json")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error))
  //     .finally(() => console.log(`data fetched completed.`));
  // Using async await try and catch.
  //   try {
  //     response = await fetch(
  //       "https://collectionapi.metmuseum.org/public/collection/v1/objects/100"
  //     );
  //     let data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Error ia gia hay:", error);
  //   }
}
FetchDataFromAPI();

// function addUser(userName, email, password) {
//   this.userName = userName;
//   this.email = email;
//   this.password = password;
// }

// addUser.prototype.successfullAdded = function () {
//   console.log(
//     `Welcome ${this.userName}, Your email is ${this.email} and password is ${this.password}. Please don't disclose this information to anyone.`
//   );
// };
// let client1 = new addUser("Saqib", "saqib@saqib.com", 123456);
// console.log(client1.successfullAdded());

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Array.prototype.findEntry = function () {
//   console.log("Value 5 is avaibale in this Array?", this.includes(5));
// };
// console.log(numbers.findEntry());

// let randomName = "saqib amin   "
// String.prototype.trueLen = function(){
//   console.log(`Actual Length of name with spaces is: ${this.trim().length}`);
// }
// console.log(randomName.trueLen());
// console.log("Ayesha Saqib".trueLen());

// let studentData = {
//   userName: "Muhammad Saqib Amin",
//   userPassword: "Allah25524",
//   userEmail: "saqib@google.com",
//   userDOB: "08/01/1983",
//   userEaduction: "Graduation",
// };
// let courseDetails = {
//   courseName: "Java Script",
//   CourseStartOn: "01/11/2023",
//   studentEnrolled: false,
//   studentEligible: true,
// };

// studentData.__proto__ = courseDetails
// console.log(studentData.studentEnrolled);
// Object.setPrototypeOf(studentData, courseDetails)
// console.log(studentData.courseName);

// 08:00:00
