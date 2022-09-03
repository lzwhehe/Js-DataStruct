function shellSort(arr) {
  // 1.获取数组的长度
  let len = arr.length;
  // 2. 设置start间隔
  let gap = len / 2
  while (gap >= 1) {
    let current, preIndex;
    // 3. 开始通过gap进行插入排序
    for (let i = gap; i < len; i++) {
      current = arr[i];
      preIndex = i - gap;
      while (current < arr[preIndex] && preIndex >= 0) {
        // 将前一个放到 + gap位置
        arr[preIndex + gap] = arr[preIndex];
        // 而后移动前一个位置继续比较
        preIndex -= gap;
      }
      // 小于 - 将元素放在preIndex的右边位置
      arr[preIndex + gap] = current;
    }
    gap = Math.floor(gap / 2);
  }

}
let a = [100, 3, 2, 4, 7, 3];
let b = shellSort(a);
console.log(a);
// 相对插入就是进行了一层分组
