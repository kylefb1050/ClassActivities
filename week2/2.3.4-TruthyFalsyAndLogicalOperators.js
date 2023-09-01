// Logical Operators
// what do you expect each line to print?
console.log(true && false);
//False

console.log(true || false);
//True

console.log(!true);
//True

console.log(!(true && false));
//True

console.log(false || !false);
//False

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null);
//undefined
console.log(!``);
//
console.log(!(1 && "false"));
//False

console.log(NaN || !"true");
//True

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age = 20;

if (age > 10) {
    console.log("Full Menu");
} else {
    console.log("Kids Menu");
}

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0; 

if (!num) {
    console,log("the number is zero");
} else {
    console.log("the number is not zero"); {
    }