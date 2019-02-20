let quickSort = (nums) => {
  if (!nums || nums.length <= 1) {
    return;
  }

  quickSortCore(nums, 0, nums.length - 1);
}

let quickSortCore = (nums, left, right) => {
  if (left >= right) return;
  let mid = partition(nums, left, right);
  quickSortCore(nums, left, mid - 1);
  quickSortCore(nums, mid + 1, right);
}

let partition = (nums, left, right) => {
  let pivot = nums[right]; //选取最右边元素为分区点
  let i = left;

  for (let j = left; j < right; j++) {
    if (nums[j] < pivot) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }

  let temp = nums[i];
  nums[i] = nums[right];
  nums[right] = temp;
  return i;
}

let test = [4, 5, 6, 3, 2, 1];
console.log(`before sort: ${test}`);
quickSort(test);
console.log(`after sort: ${test}`);