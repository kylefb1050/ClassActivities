// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function functionWithTwoParams(parma1 = 10, param2 = 20) {
  console.log(parma1);
  console.log(param2);
  return parma1 + param2;
}

// invoke the function and pass in two numbers

functionWithTwoParams(1, 2);

// invoke the function and pass in more than two numbers

functionWithTwoParams(1, 2, 3, 4, 5);

// invoke the function and pass in only one number

functionWithTwoParams(1);

// change the function to set default values for the parameters

// ! Check question 1!

// again, invoke the function and pass in only one number

functionWithTwoParams(2);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParam(parma1 = 10, param2 = 20, ...restParam) {
  console.log(parma1);
  console.log(param2);
  console.log(restParam);
  return parma1 + param2;
}

// again, invoke the function and pass in more than two numbers
console.log("below is function with rest param");
console.log(functionWithRestParam(1, 2, 50, 59));
console.log("-------Setting returned value to variable");
let restParamReturn = functionWithRestParam(1, 2, 50, 50);
console.log(restParamReturn);
