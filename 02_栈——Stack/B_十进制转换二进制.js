const Stack = require("./A_Array_Stack");
function decTobin(num) {
  let remainders = new Stack();
  // 循环终结条件: res = 0
  while (num / 2 !== 0) {
    // 将余数入栈,同时更新被除数
    remainders.push(num % 2);
    num = Math.floor(num / 2);
  }
  return remainders.toString();
}
let theBin = decTobin(100);
console.log(theBin);



