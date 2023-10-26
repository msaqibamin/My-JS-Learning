// ------------ Inheritance in Class ------------

// class user {
//   constructor(userName) {
//     this.userName = userName;
//   }

//   loggedMe() {
//     return `Your User Name is: ${this.userName}`;
//   }
// }

// let userOne = new user("saqib");
// console.log(userOne.loggedMe());

// class teacher extends user {
//   constructor(userName, email, password) {
//     super(userName);
//     this.email = email;
//     this.password = password;
//   }
//   addCourse() {
//     console.log(`Course was added by ${this.userName}`);
//   }
// }

// let course = new teacher("saqib", "email@email.com", 123);
// console.log(course.addCourse());
// let courseOne = new teacher("amin", "amin@amin.com", "ABC123");
// console.log(courseOne.addCourse());
// console.log(courseOne.loggedMe());

// ------------ Practice - Inheritance in Class ------------

class createUser {
  constructor(userName) {
    this.userName = userName;
  }
  displayName() {
    console.log(`User Name is added: ${this.userName}`);
  }
}

class userAccess extends createUser {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }
  grantAccess() {
    console.log(`Access is added against UserName: ${this.userName}`);
  }
}

let accessOne = new userAccess("saqib", "saqib@saqib.com", "Lahore@1");
let accessTwo = new userAccess("amin", "amin@amin.com", "Pakistan@25524");

let createOne = new createUser("saqib");

createOne.displayName();
accessOne.grantAccess();
accessOne.displayName();
