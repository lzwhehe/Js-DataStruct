function insertionSort(arr) {
  let len = arr.length;
  let current, preIndex;
  // 外层 - 1 - n
  for (let i = 1; i < len; i++) {
    current = arr[i];
    preIndex = i - 1;
    // 内层 - 将大于当前元素的后移
    while (current < arr[preIndex] && preIndex >= 0) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    // 如果小于，则需要将current插入前一个元素的右边 
    arr[preIndex + 1] = current;
  }
}

let a = [100, 3, 2, 4, 7, 3];
let b = insertionSort(a);
console.log(a);

// 理解的本质: 就是总结出一种简单的的思考方式以此解决抽象的麻烦问题

// 而如何总结，就必须通过重复去建立一个好的思维模式
