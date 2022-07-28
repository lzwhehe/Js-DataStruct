let a = [1, 2, 3, 4];

function dy5(item) {
  return item > 5;
}
// 需要全部数字都是 >5 的数字返回true , 否则
res = a.some(item => dy5(item));

console.log(res);
