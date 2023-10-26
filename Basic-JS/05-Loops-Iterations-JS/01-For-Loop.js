// ---------- For Loops ----------

// for (let i = 1; i <= 6; i++) {
//     if(i == 5){
//         console.log("5 is best number");
//     }
//     console.log(i);
// }

// ---------- Nested For Loops ----------

// for (let i = 0; i <= 10; i++) {
//     console.log("################################# " +  i);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop value ${i}`);
//     }
// }

for (let i = 1; i <= 10; i++) {
  // console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop ${j}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// ---------- For Loop on Array ----------

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  // console.log(element);
}

// ---------- Break & Continue ----------

// Break. End of loop
for (let i = 1; i <= 20; i++) {
  if (i == 10) {
    // console.log("Detected value 10");
    break;
  }
  // console.log(i);
}
// continue. Skip the value and continue the loop.
for (let i = 1; i <= 20; i++) {
  if (i == 10) {
    // console.log("Skip the value 10");
    continue;
  }
  // console.log(i);
}
