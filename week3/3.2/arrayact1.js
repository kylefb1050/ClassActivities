// Array Activity 1
// Create an Array called students that contains the names of 5 students
let myArray = ["Mark", "Alex", "Zaid", "Nathan", "Lavonte"];

// Use bracket notation to access and print the name of the 4th student in the list, then print the name of the student in the 2nd index.

const fourthStudent = myArray[3];
const secondStudent = myArray[1];

// Loop over the students Array to print out each name
for (let name of myArray) {
  console.log(name);
}

// Array Activity 2
// Create a variable called roster and assign it the value of the string below
// "These are the students in the list: "
let roster = "These are the students on the list: ";
// Loop over the students Array again, but this time each iteration of the loop should add the value to the end of the roster string AND a blank space
for (let n of myArray) {
  roster += n + " ";
}

// After the loop, print roster
console.log(roster);
// The expected output should look like this:
// "These are the students in the list: name1 name2 name3 name4 name5"
