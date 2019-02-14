let bubbleSort = (nums) => {
  if (!nums || nums.length === 0) {
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    let flag = false; //提前退出循环的标志

    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) { //交换
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        flag = true; //有交换
      }
    }
    if (!flag) { //提前退出
      console.log(`no swap for ${i + 1} loop`);
      break; 
    }
  }
}

let test = [4, 5, 6, 3, 2, 1];
console.log(`before sort: ${test}`);
bubbleSort(test);
console.log(`after sort: ${test}`);
console.log('----------------------')
test = [3, 5, 4, 1, 2, 6];
console.log(`before sort: ${test}`);
bubbleSort(test);
console.log(`after sort: ${test}`);

