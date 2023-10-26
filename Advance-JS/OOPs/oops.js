// ---------- Object Literal ----------

// this keyword use hota hay Current Context kay liay. kay is method kay current contaxt say data lay kar iao.
let user = {
  userName: "saqib",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("Got user details from Data Base.");
    console.log(`user has logged in ${this.loginCount} times.`);
    console.log(this);
  },
};
// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this); // Global agar ham this ko console.log kartay hain to window object milta hay.

// ---------- Constror Funciton ----------
// Har baar aik new instance yani copy day deta hay. Puranay walay ko nahi cheerta.
// let promis = new Promise()
// let date = new Date()
// let obj1 = new Object()

function userData(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.infoStatus = function () {
    console.log(
      `User ${this.userName} has been successfully entered in Data Base.`
    );
  };
  return this;
}
let saqibInfo = new userData("Saqib Amin", 12, true);

let arslanInfo = new userData("Arslan Khan", 2, false);
// console.log(saqibInfo);
// console.log(saqib.infoStatus());
// console.log(saqibInfo.constructor);
// console.log(arslanInfo);

// ---------- Basic Information About "new" Keyword Important Points ----------
// 1 - Jaisay hi aap new keyword user kartay hain to aik empty Object create hota hay. Jis ko ham instance kehtay hain.
// 2 - new Keyword ki wajah say Constructor Funciton call hota hay. Jitnay bhi arguments hain unko pack kar kay aap ko day deta hay.
// 3 - Jo this Keyword hay wo sab us main arguments inject ho jatay hain.
// 4 - Aap ko sab function main mil jata hay.

// ---------- Practice Work ----------

function userInfo(firstName, lastName, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.address = address;
  return this;
}

let user1 = new userInfo("saqib", "amin", 40, "Walton Road, Lahore.");
let user2 = new userInfo("wahaj", "saqib", 17, "Nishat Colony, Lahore.");

console.log(user1);
console.log(user2);
