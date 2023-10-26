// ---------- Lexical Scope ----------
// child can access all variables from parent but parent can not access variables from child.

// Function with in function.
// function outer() {
//   let name = "Outer";
//   function inner() {
//     let myName = "inner";
//     console.log(name);
//   }
//   inner();
//   //   console.log(myName);
// }
// outer();
