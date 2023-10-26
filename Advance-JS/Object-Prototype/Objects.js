// ----------- Objects & Prototype -----------
// JS ka defalt behavior Prototypal hay yani kay agar same context main koi value nahi mili to parent context main check karay gi or isi tarha uper check karay gi jab tak Object ki value null na mil jiay. isi say link ho kay "this" and "new" keyword kaam karta hay.
// Function function bhi hay or Object bhi hay. End of the day har cheez Object say ja ja milti hay.
function multiplyBy5(num) {
  return num * 5;
}
multiplyBy5.power = 2;
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
  return this;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is: ${this.score * this.score}`);
};

let user1 = new createUser("saqib", 25);

// Functionality of "new" keyword.
// Object new create hota hay.
// Prototypes link hoti hain new created object kay sath.
// Constructor Function call hota hay.
// Object return hota hay.
