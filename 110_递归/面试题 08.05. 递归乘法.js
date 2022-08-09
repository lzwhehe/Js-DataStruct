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
  // 构成多个A相加 = 乘 = A + A + A + A + 0
  // 所以现在需要做的就是如何控制次数
  // 通过 B-- , 如果为0终止直接返回function值
  if (A == 0 || B == 0) {
    return 0;
  }
  if(A > B) {
    return A + sellCallMultiply(A, B - 1);
  }else {
    return B + sellCallMultiply(A - 1,B);
  }
}
console.log(sellCallMultiply(3, 4));

