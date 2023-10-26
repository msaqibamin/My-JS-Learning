// Arrays. Collection of multiple items in variable. they are resizeable with different data types. copy the reference of original arrays.

// --------------- Concatinate Method ---------------
// Concate return karta hay new array ko merge karnay kay baad.

// let classOne = ["Anwar", "Sajjad", "Hashim"];
// let classTwo = ["Ibrahim", "Kamal", "Akbar"];
// console.log(classOne.push(classTwo)); // Agar ham push kay sath concate karnay ki koshish karain gay to array main array ban jiay ga jo sahi tareeqa nahi hay.
// console.log(classOne);

// let mergeArray = classOne.concat(classTwo);
// console.log(mergeArray);

// --------------- Spread Operator ---------------

// let mergeArray = [...classOne, ...classTwo];
// console.log(mergeArray);

// --------------- Flat Array ---------------

// let numArr1 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5]]];
// let flatArray = numArr1.flat(Infinity);
// console.log(flatArray);

// --------------- Conversion into Array ---------------

// console.log(Array.isArray("Muhammad")); // Check the value is array or not.
// console.log(Array.from("Muhammad")); // Convert into arrays from any data type.
// console.log(Array.from({name:"Saqib"})); // Create an empty Array if the data type is object.

// mukhtlif variables ki values ko array main convert karnay kay liay ham Array.of ka use kartay hain.
// let score = 10;
// let score1 = 20;
// let score2 = 30;
// console.log(Array.of(score, score1, score2));
