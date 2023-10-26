// ------------ Call ------------
// Current Execution context dosray funciton ko pass kar deta hay.
// reference ko hold karta hay. or context ko pass karna.

// function setUserName(userName) {
//   this.userName = userName;
// }
// function createUser(userName, email, password) {
//   setUserName.call(this, userName);
//   this.email = email;
//   this.password = password;
// }

// let user1 = new createUser("saqib", "saqib@googe.com", "Pakistan@123");
// console.log(user1);

// ------------ Call - Practice ------------

// Verify userNames
function studentDetails(userName) {
  this.userName = userName;
}
// Create User with passing reference from one function to another.
function createStudent(userName, email, password) {
  studentDetails.call(this, userName);
  this.email = email;
  this.password = password;
}
let studentOne = new createStudent("Muhammad Saqib", "saqib@fb.com", 123456);
console.log(studentOne);
