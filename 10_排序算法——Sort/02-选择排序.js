function selectionSort(Arr) {
  let len = Arr.length;
  let minIndex, temp;
  // 遍历全部的 len - 1 个元素
  for (let i = 0; i < len; i++) {
    // 选出第i个数字
    minIndex = i;
    // 找出最小的下标值
    for (let j = i + 1; j <= len; j++) {
      if (Arr[minIndex] > Arr[j]) {
        minIndex = j
      }
    }
    // 互换元素位置 
    temp = Arr[i];
    Arr[i] = Arr[minIndex];
    Arr[minIndex] = temp;
  }
}
let a = [100, 3, 2, 4, 7, 3];
let b = selectionSort(a);
console.log(a);

