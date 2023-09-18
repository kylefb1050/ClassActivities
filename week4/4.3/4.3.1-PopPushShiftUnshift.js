const nums = [6, 5, 2, 3, 4, 1, 0];

// remove each of the last two items with pop(), saving each item to a variable

const pop1 = nums.pop();
const pop2 = nums.pop();

console.log(`pop1: ${pop1}, pop2: ${pop2}, nums: ${nums}`);

// remove each of the first two items with shift(), saving each item to a variable

const shift1 = nums.shift();
const shift2 = nums.shift();

console.log(`shift1: ${shift1}, shift2: ${shift2}, nums: ${nums}`);

// use push and unshift to add the variables back to the array in numerical order, 0-6

nums.unshift(pop2);
nums.unshift(pop1);
nums.push(shift2);
nums.push(shift1);

console.log(`nums after reassembling: ${nums}`);
