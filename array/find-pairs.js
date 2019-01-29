//两层循环，时间复杂度 O(n^2)
let findPairs = (numbers, n) => {
  if (!numbers || numbers.length < 2) {
    return;
  }

  console.log('使用双层循环')
  for (let i = 0; i < numbers.length; i++) {
    let first = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let second = numbers[j];
      if (first + second === n) {
        console.log(`(${first}, ${second})`);
      }
    }
  }
}

//使用map，时间复杂度 O(n)
let findPairsUsingMap = (numbers, n) => {
  if (!numbers || numbers.length < 2) {
    return;
  }

  console.log('使用Map')
  let map = new Map();
  numbers.forEach(item => {
    let target = n - item;

    if(!map.has(target)){
      map.set(item, '');
    }else{
      console.log(`(${item}, ${target})`);
    }
  })
}

//使用两端递进，时间复杂度 O(nlogn)，主要取决于排序算法
let findPairsUsingTwoPoints = (numbers, n) => {
  if (!numbers || numbers.length < 2) {
    return;
  }

  numbers.sort();
  console.log('使用两个指针，两端递进')
  let left = 0;
  let right = numbers.length - 1;
  while(left < right){
    let sum = numbers[left] + numbers[right];
    if(sum === n){
      console.log(`(${numbers[left]}, ${numbers[right]})`);
      left = left + 1;
      right = right - 1;
    }else if(sum < n){
      left = left + 1;
    }else if(sum > n){
      right = right - 1;
    }
  }
}

let doFind = (numbers, n) => {
  console.log(`Given numbers: ${numbers}`);
  console.log(`Given sum: ${n}`);
  findPairs(numbers, n);
  findPairsUsingMap(numbers, n);
  findPairsUsingTwoPoints(numbers, n);
}

let numbers = [2, 4, 3, 5, 7, 8, 9];
let numbersWithDuplicates = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];
doFind(numbers, 7);
doFind(numbersWithDuplicates, 7);

