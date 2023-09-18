// TODO: using the function expressions below, refactor them into function declarations

//rewrite
// const greet = function() {
//   console.log("Hello!");
// };

function greet() {
  console.log("Hello!");
}

//rewrite
// const threeModTwo = function() {
//   console.log(3 % 2);
// };

function threeModTwo() {
  console.log(3 % 2);
}

//rewrite
// let age = 18;
// const checkDrivingAge = function() {
//   if (age >= 16) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

let age = 18;
function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}
