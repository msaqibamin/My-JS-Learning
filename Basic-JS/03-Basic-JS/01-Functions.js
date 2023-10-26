// ------------ Functions ------------

// Functions ko kis tarha banana hay.
// function greet() {
// }
// greet()

// function sumTwoNumbers(a,b) {
//     console.log(a + b);
// }

// function sumTwoNumbers(a,b) {
//     return a+b
// }
// // sumTwoNumbers(5,5)

// let result = sumTwoNumbers(5,5)
// console.log(result);


// function sumTwoNumbers(a, b) {
//     let result = a + b // result is in Function Scope.
//     return result
// }
// let result = sumTwoNumbers(5, 5) // Result is in Global Scope.
// console.log(result);


// function loginUserMessage(userName) {
//     // if (userName === undefined) {
//     //     console.log("Please enter a name.");
//     //     return
//     // }

//     if (!userName) { // Agar user name nahi hay to ya khali choor dia hay.
//         console.log("Please enter a name.");
//         return
//     }
//     return `${userName} just logged in.`
// }
// console.log(loginUserMessage());
// console.log(loginUserMessage("saqib"));

// ------------ Functions Parameter default value ------------

// function loginUserMessage(userName = "New user") {
//     // if (userName === undefined) {
//     //     console.log("Please enter a name.");
//     //     return
//     // }

//     // if (!userName) { // Agar user name nahi hay to ya khali choor dia hay.
//     //     console.log("Please enter a name.");
//     //     return
//     // }
//     return `${userName} just logged in.`
// }
// console.log(loginUserMessage("saqib"));


// ------------ Functions Rest Operator "(...a)" ------------
// ------------ Add multiple value in arguments ------------

// function calculateCartPrice(...a) {
//     return a
// }
// console.log(calculateCartPrice(3, 4, 5, 6, 7, 8, 9, 10));

// ------------ Object ki value fuction parameter main pass karna ------------

// let user = {
//     userName: "Saqib",
//     age: 40
// }

// function handleObject(anyObject) {
//     console.log(`User name is ${anyObject.userName} and their age is ${anyObject.age}.`);
// }
// handleObject(user)


// Second Method - Funciton kay arguments main object pass karna.
// handleObject({
//     userName: "Amin",
//     age: 60
// })


// ------------ Arrays ki values ko fuction parameter main pass karna ------------


// let price = [200, 300, 400, 500, 600]
// function putSecondPrice(anyPrice) {
//     return anyPrice[1]
// }
// console.log(putSecondPrice(price));
// Second Method - Funciton kay arguments main array pass karna.
// console.log(putSecondPrice([2, 3, 4, 5, 6, 7, 8]));



// ------- Function kay parameter main kisi bhi object ki value ko pass karna.
// let user = {
//     userName: "Saqib",
//     price: 600
// }
// function getUserValue(anyObject) {
//     return `${anyObject.userName} has purchased a ball with Rs. ${anyObject.price}.`
// }
// console.log(getUserValue(user));

// ------- Function kay parameter main kisi bhi array ki value ko pass karna.
// let myArr = [200, 300, 400, 500, 600]
// function getArrValue(getArr) {
//     return getArr[2]
// }
// console.log(getArrValue(myArr));

