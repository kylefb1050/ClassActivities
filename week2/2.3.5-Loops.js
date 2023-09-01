// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let i = 1;

// 2) create a variable to represent the current total
let totalNumber = 0;

// 3) write a while loop that sums the numbers from 1 to 100

while (i <= 100) {
  totalNumber = totalNumber + i;
  console.log(i);
  i++;
}

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100

for (i = 1; i <= 100; i++) {
  console.log(totalNumber);
  totalNumber = totalNumber + i;
  i++;
}
