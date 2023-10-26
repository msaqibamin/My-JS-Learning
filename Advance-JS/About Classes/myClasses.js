// ------------ Class ------------
// Class main ham properties bhi add kar saktay hain or funcitons bhi. Sab say important hota hay class main constructor.

// ------------ Create Class Object ------------
// class CreateUser {
//   constructor(userName, email, Password) {
//     this.userName = userName;
//     this.email = email;
//     this.Password = Password;
//   }

//   changePassword() {
//     return `Your password is #915${this.Password}@abc`;
//   }
//   changeUserNameCase() {
//     return `${this.userName.toUpperCase()}`;
//   }
// }

// let user1 = new CreateUser("saqib", "saqib@gmail.com", "123");
// console.log(user1);

// ------------ Create with Funcitons same like Class ------------
// function createUser(userName, email, Password) {
//   this.userName = userName;
//   this.email = email;
//   this.Password = Password;
// }

// createUser.prototype.encryptPassword = function () {
//   return `Password after Encryption is: %fT4${this.Password}xA56 `;
// };
// createUser.prototype.changeCaseWithLength = function () {
//   return `Your userName is: ${this.userName} and letters count is ${
//     this.userName.toUpperCase().length
//   }.`;
// };

// let userOne = new createUser("saqib", "saqib@fb.com", "Lahore@1");
// console.log(userOne);
// console.log(userOne.encryptPassword());
// console.log(userOne.changeCaseWithLength());

// ------------ Practice on Class ------------

class productList {
  constructor(name, count, catetory, price, isAvailable) {
    this.name = name;
    this.count = count;
    this.catetory = catetory;
    this.price = price;
    this.isAvailable = isAvailable;
  }

  productRateComparision() {
    if (this.price > 299) {
      console.log();
      return `Price is greater then Rs. 299/-.`;
    } else {
      return `Price is less then Rs. 299/-.`;
    }
  }

  productDeliveryCharges() {
    return `Actual Price is: ${
      this.price
    }, after adding Delivery charges Rs. 50/- price is: ${this.price + 50}. `;
  }
}

let productOne = new productList(
  "Apple I-Phoen 15 Pro",
  5,
  "Mobile Phone",
  399,
  true
);
console.log(productOne.productRateComparision());
console.log(productOne.productDeliveryCharges());
console.log(productOne);
