// ------------ Objects - Keys & Values ------------

// Singleton
// let studentsData = new Object()
// console.log(studentsData);

// Object.create. // Through constructor.
// let mySym = Symbol("Saqib");
// let user = new Object();
// console.log(user);

// user.id = 1;
// user["First Name"] = "Muhammad Saqib";
// user["Last Name"] = "Muhammad Amin";
// user[mySym] = "Saqib";
// user.age = 40;
// console.log(user);

// let user = {
//   email: "asdf@gmail.com",
//   fullName: {
//     fname: "Saqib",
//     lname: "Amin",
//   },
// }

// console.log(user);
// console.log(user.fullName.fname);

// ------------ Spread Operator / Object.Assign in Object ------------
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// let obj3 = { e: 5, f: 6 };

// With Object.assign().
// let combineObj = Object.assign({}, obj1, obj2, obj3);
// console.log(combineObj);

// With Spread Operators.
// let combineObj1 = { ...obj1, ...obj2, ...obj3 };
// console.log(combineObj1);

// ------------ Data from Database in Object ------------

// let user = [
//   {
//     id: 1,
//     userName: "saqib.amin",
//     password: "Lahore@1",
//   },
//   {
//     id: 2,
//     userName: "amin.ali",
//     password: "Pakistan123",
//   },
// ];

// console.log(Object.keys(user)); // hamain keys mil jaieen gi.
// console.log(Object.values(user)); // hamain values mil jaieen gi.
// console.log(user.hasOwnProperty("userName"));
// console.log(Object.entries(user)); // Buhat kam use karain gay.

// console.log(Object.values(user));
// console.log(user);

// ------------ 2nd ways to extract items in Object ------------
// ------------ Object Destructuring ------------

// let course = {
//   courseName: "Java",
//   courseFee: 10000,
//   courseInstructor: "Muhammad Saqib",
// };
// console.log(course.courseInstructor);

// Object ki values ko destructured karna
// Object ki values ko extrct karnay ka aik or tareeqa. Jo ziada use karain gay.

// let { courseInstructor: instructor } = course; // agar name lamba hay to us ko short form bana lain
// console.log(instructor);

// Object ki values ko destructured karna
// Object ki values ko extrct karnay ka aik or tareeqa. Jo ziada use karain gay.
// let { fee } = course;
// console.log(fee);

// console.log(course.courseInstructor);
// let {courseInstructor:instr} = course
// console.log(instr);

// let students = new Object()
// students["firstName"] = "Muhammad Saqib"
// students.age = 45
// console.log(students);

// let {firstName:name} = students
// console.log(`${name}`);

// let {courseName} = course
// let {courseInstructor:instructor} = course

// console.log(courseName);
// console.log(instructor);


// ------------ API's ------------

// Json Format
// {
//   "name":"Saqib",
//   "course":"Java",
//   "price":"Free"
// }


// [
//   {
//     "name":"Saqib",
//     "course":"Java",
//     "price":"Free"
//   }
// ]

