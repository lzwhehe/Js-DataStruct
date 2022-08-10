// 普通解法 
var multiply = function (A, B) {
  // 优化 - 减少循环次数
  function compare(a, b) {
    let res = 0;
    for (let i = 0; i < a; i++) {
      res += B;
    }
    return res;
  }
  if (A == 0 || B == 0) {
    return 0;
  } else {
    if (A > B) {
      let res = compare(A, B);
      return res
    } else {
      let res = compare(B, A)
      return res;
    }
  }
};
// 递归解法 -> 通过多次内部重新调用自身建立循环关系
// A - 3 B -4 return 12
var sellCallMultiply = function (A, B) {
  let res = 0;
  if (A == 0 || B == 0) {
    return res;
  }
  if (A < B) {
    // B + 2B = 3B
    res = B + sellCallMultiply(A - 1, B);
  } else {
    res = A + sellCallMultiply(A, B - 1);
  }
  return res;
}
console.log(sellCallMultiply(3, 4));

