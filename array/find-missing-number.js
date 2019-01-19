let findMissingNumber = (numbers, count) => {
  if (!numbers || numbers.length === 0) {
    return;
  }

  //初始化一个完整长度的数组，并把给定的数组填充进对应的位置
  let allNumbers = Array(count);
  numbers.forEach((n) => {
    allNumbers[n - 1] = n;
  });

  console.log(`Missing numbers in array [${numbers}], with total number ${count} is `)
  for (let i = 0; i < count; i++) {
    //如果当前位置没有数据，那说明缺失了
    if (!allNumbers[i]) {
      console.log(i + 1);
    }
  }
}

findMissingNumber([1, 2, 3, 4, 6], 6); // expected: 5

findMissingNumber([1, 2, 3, 4, 6, 9, 8], 10); //expected: 5, 7, 10

findMissingNumber([1, 2, 3, 4, 9, 8], 10); //expected: 5, 6, 7, 10