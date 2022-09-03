let a = [1, 3, 2, 4, 7, 3]
function maoPaoSort(Arr) {
  // 局部转换 -> 整体排序
  // 外层 = 控制比较次数 
  let tmp;
  let len = Arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (Arr[j] > Arr[j + 1]) {
        tmp = Arr[j];
        Arr[j] = Arr[j + 1];
        Arr[j + 1] = tmp;
      }
    }
  }
  return Arr;
}

let b = maoPaoSort(a);
console.log(b);
