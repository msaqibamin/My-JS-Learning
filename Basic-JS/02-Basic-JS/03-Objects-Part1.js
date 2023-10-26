// ------------ Objects - Keys & Values ------------

// Singleton
// Object.create. // Through constructor.

// Object Literals

let sym = Symbol("Saqib");

let user = {
  "First Name": "Muhammad Saqib",
  lName: "Muhammad Amin",
  age: 40,
  location: "Lahore",
  email: "xyz@example.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  [sym]: "Saqib", // Symbol ko add karna object main
};

// console.log(user.fName);// Sahi tareeqa nahi hay.
// console.log(user);
// console.log(user["First Name"]);
// console.log(user["lastLoginDays"]);
// console.log(user.lastLoginDays[0]);
// console.log(user[sym], typeof user[sym]); // Symbol ki value ko extract karna object say.

// ------------ Objects - Modify Value ------------
// user.email = "saqib@gmail.com";
// console.log(user.email);
// console.log(user["email"]);

// ------------ Freeze Object ------------
// Freeze karnay kay baad koi bhi Modifications aap object main nahi kar sako gay.
// Object.freeze(user);
// user.age = 60;
// console.log(user);

// ------------ Function (Methods) in Objects ------------
user.greeting = function () {
  console.log(`Welcome Mr ${this["First Name"]}, to our JS saminar`);
};
console.log(user.greeting);
console.log(user.greeting());
