let mergeSort = (nums) => {
  if(nums.length === 1) return nums; //只剩一个数，结束递归
  //将数组分解为左右两个部分
  let mid = Number.parseInt(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid, nums.length);
  //分别对两半排序
  letf = mergeSort(left);
  right = mergeSort(right);
  //合并排序结果
  let merged = merge(left, right);
  return merged;
}

let merge = (left, right) => {
  left = left || [];
  right = right || [];

  let merged = [];
  let i = 0;
  let j = 0;
  //轮流从两个数组中取出小值放入合并后的数组
  while(i < left.length && j < right.length){
    if(left[i] < right[j]){
      merged.push(left[i]);
      i++;
    }else{
      merged.push(right[j]);
      j++;
    }
  }
  //将某个剩余数组的数字全部放入合并后的数组
  if(i < left.length){
    merged = merged.concat(left.splice(i));
  }else{
    merged = merged.concat(right.splice(j));
  }

  return merged;
}


let test = [4, 5, 6, 3, 2, 1];
console.log(`before sort: ${test}`);
let result = mergeSort(test);
console.log(`after sort: ${result}`);