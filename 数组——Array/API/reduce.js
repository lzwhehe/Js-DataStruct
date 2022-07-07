var arr = [1, 2, 3, 4, 5];
var sum = 0;
var total = 0;
// for实现累加
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
// console.log(sum);

//forEach 简化累加
arr.forEach(element => {
  total += element;
});
// console.log(total);

// reduce 简化累加
let and = arr.reduce((pre,cur) => {
   return pre + cur;
})
console.log(and);
