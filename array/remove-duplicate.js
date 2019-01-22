let removeDuplicates = (numbers) => {
  if (!numbers || numbers.length === 0) {
    return;
  }
  //先对数组排序，使得重复数字都在一起
  numbers.sort();

  let results = Array(numbers.length);
  let previous = numbers[0];
  results[0] = previous;

  for (let i = 1; i < numbers.length; i++) {
    let num = numbers[i];
    if(previous !== num){ //不重复的就加入结果数组
      results[i] = num;
    }
    previous = num;
  }
  return results;
}

let tests = [
  [1, 1, 2, 2, 3, 4, 5],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 1, 1, 1, 1, 1]
]

tests.forEach((t) => {
  console.log(`test array: ${t}`);
  console.log(`after remove duplicates: ${removeDuplicates(t)}`);
})


