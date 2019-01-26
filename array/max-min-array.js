let findMaxMinNumbers = (numbers) => {
  if (!numbers || numbers.length === 0) {
    return;
  }

  let max = -Number.MAX_VALUE;
  let min = Number.MAX_VALUE;

  numbers.forEach(n => {
    if(n > max){
      max = n;
    }else if(n < min){
      min = n;
    }
  });

  console.log(`Given array: ${numbers}`)
  console.log(`Max number in array is: ${max}`)
  console.log(`Min number in array is: ${min}`)
}

findMaxMinNumbers([-20, 34, 21, -87, 92])
findMaxMinNumbers([1, -1, 0])
findMaxMinNumbers([Number.MAX_VALUE, 200, Number.MAX_VALUE])
findMaxMinNumbers([-Number.MAX_VALUE, 200, -300])
findMaxMinNumbers([Number.MIN_VALUE, 200, -1])