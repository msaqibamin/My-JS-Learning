// console.log(Date);

// let myDate  = new Date()
// console.log(typeof myDate, myDate);
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 08);
// let myCreatedDate = new Date(2023, 0, 8, 5, 3);
// let myCreatedDate = new Date("2023-01-08");
// let myCreatedDate = new Date("01-14-2023"); // Not working error "Invalid Date".
// console.log(myCreatedDate.toLocaleString());

// let dateTime = new Date();
// console.log(dateTime);
// console.log(dateTime.getHours());
// console.log(dateTime.getMinutes());
// console.log(dateTime.getSeconds());
// console.log(dateTime.getFullYear());

// console.log(Date.now()/1000);
// console.log(Math.round(Date.now()/1000));

let newDate = new Date();
console.log(
  newDate.toLocaleString("Default", {
    dateStyle: "short",
    timeStyle: "short",
  })
);
