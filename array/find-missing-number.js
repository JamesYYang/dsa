let findMissingNumber = (numbers, count) => {
  if (!numbers || numbers.length === 0) {
    return;
  }

  let allNumbers = Array(count);
  numbers.forEach((n) => {
    allNumbers[n - 1] = n;
  });

  console.log(`Missing numbers in array [${numbers}], with total number ${count} is `)
  for (let i = 0; i < count; i++) {
    if (!allNumbers[i]) {
      console.log(i + 1);
    }
  }
}

findMissingNumber([1, 2, 3, 4, 6], 6); // expected: 5

findMissingNumber([1, 2, 3, 4, 6, 9, 8], 10); //expected: 5, 7, 10

findMissingNumber([1, 2, 3, 4, 9, 8], 10); //expected: 5, 6, 7, 10