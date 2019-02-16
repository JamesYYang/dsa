let selectionSort = (nums) => {
  if (!nums || nums.length <= 1) {
    return;
  }
  let length = nums.length;
  let minIndex;
  let minValue;
  for(let i = 0; i < length -1; i++){
    minIndex = i;
    minValue = nums[minIndex];
    //查找最小值
    for(let j = i + 1; j < length; j++){
      if(nums[j] < minValue){
        minIndex = j;
        minValue = nums[minIndex];
      }
    }
    //交换
    if(minIndex !== i){
      let temp = nums[i];
      nums[i] = minValue;
      nums[minIndex] = temp;
    }
  }
}

let test = [4, 5, 6, 3, 2, 1];
console.log(`before sort: ${test}`);
selectionSort(test);
console.log(`after sort: ${test}`);