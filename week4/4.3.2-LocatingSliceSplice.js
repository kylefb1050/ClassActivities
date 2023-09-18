const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const firstA = arr.indexOf("a");
const firstB = arr.indexOf("b");
const firstC = arr.indexOf("c");

console.log(firstA);
console.log(firstB);
console.log(firstC);

// find the last index of "a", "b", and "c"
const lastA = arr.indexOf("a");
const lastB = arr.indexOf("b");
const lastC = arr.indexOf("c");

console.log(lastA);
console.log(lastB);
console.log(lastC);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

while (multipleAs) {
    let firstAIndex = arr.indexOf("a");
    let lastAIndex = arr.lastIndexOf("a");

    multipleAs = firstAIndex !== lastAIndex;
        arr.splice(lastAIndex, 1);
}