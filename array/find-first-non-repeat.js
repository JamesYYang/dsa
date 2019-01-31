let findNonRepeatedNumber = (numbers) => {
  if (!numbers || numbers.length === 0) {
    return;
  }
  //使用Map来保存每个数字的计数
  let counts = new Map();
  numbers.forEach(n => {
    counts.set(n, counts.has(n) ? counts.get(n) + 1 : 1);
  })

  //遍历Map，取第一个计数为1的数字
  for (let [key, value] of counts.entries()) {
    if (value === 1) {
      return key;
    }
  }
}

let findNonRepeatedNumberWithoutMap = (numbers) => {
  if (!numbers || numbers.length === 0) {
    return;
  }

  let repeated = new Set();//保存重复出现过的数字
  let nonRepeated = new Set();//保存未出现过的数字

  numbers.forEach(n => {
    if (!repeated.has(n)) {
      if (nonRepeated.has(n)) {
        nonRepeated.delete(n);
        repeated.add(n);
      } else {
        nonRepeated.add(n);
      }
    }
  })
  return nonRepeated.keys().next().value;
}

let doFind = (numbers) => {
  console.log(`Given numbers: ${numbers}`);
  console.log(`Find first non-repeated number: ${findNonRepeatedNumber(numbers)}`);
  console.log(`Find first non-repeated number without Map: ${findNonRepeatedNumberWithoutMap(numbers)}`);
}

let numbersWithDuplicates = [2, 4, 2, 5, 6, -2, 4, 6, 8, 9];
doFind(numbersWithDuplicates);