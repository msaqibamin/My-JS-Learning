// ----------------- Premitive & Non Premitive Data Types -----------------

/*
Premitive Data Types - 7 Types. 
 In data types main jo orignal value hay wo save rehti hay or agar ham us ko refer karain to us ka copy banta hay na kay original value main change iay.

 Strings, Number, Boolean, null, undefined, symbol, bigint

*/

/*
Reference Data Types - Other than Premitive all are Reference data types.
 In data types main jo orignal value hay us ka new value main reference ban jata hay.

 Objects, Arrays, functions

*/

// JS is dynamic type language hay. is main ham variable ko declear kartay hoay is ki type nahi bata rahay JS khood hi check kar laita hay.

// let score = 100.587444
// console.log(score, typeof score)

// let sym = Symbol("123");
// console.log(sym, typeof sym);

// Reference Data Types

// Arrays Examples.
// let a = [1,2,3,4,5,6,7]
// let b = a
// b[0] = 0
// console.log(`The value of b array is ${b}.`);
// console.log(`The value of a array is ${a}.`);

// Object Examples.
// let a = {
//     name:"Muhammad Saqib",
//     age: 25
// }
// console.log(a.name);

// Simple Function Example.
// let myFunc = function (){
//     console.log("Hello World");
// }
// myFunc()

// With Arrow Function.
// let myFunc = () => {
//   console.log("Hello World");
// };
// myFunc();

// Ham kisi bhi variable ki data type check karnay kay liay use kartay hain keyword "typeof".
// let a = 5
// console.log(typeof a);

// ----------------- Memory -----------------
// Stack Memory (Premitive) jis main Copy return kia jata hay. - Strings, Number, Boolean, null, undefined, symbol, bigint.
// Heap (Reference) jis main Reference return kia jata hay. -  Objects, Arrays, functions
