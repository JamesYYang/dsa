let insertionSort = (nums) => {
  if (!nums || nums.length <= 1) {
    return;
  }

  for (let i = 1; i < nums.length; i++) {
    let value = nums[i];
    let j = i - 1;
    //查找插入位置
    while (j >= 0) {
      if (nums[j] > value) {
        nums[j + 1] = nums[j]; //移动数据
      } else {
        break;
      }
      j--;
    }
    nums[j + 1] = value; //插入数据
  }
}

let test = [4, 5, 6, 3, 2, 1];
console.log(`before sort: ${test}`);
insertionSort(test);
console.log(`after sort: ${test}`);