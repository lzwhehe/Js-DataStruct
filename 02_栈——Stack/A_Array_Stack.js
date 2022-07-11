// 封装栈类
 function Stack() {
  // 栈中的属性 - Array 
  this.items = []

  // 栈的相关操作
  // 1. 压栈
  // 为实例添加方法
  /*  this.push = function(){
      
   } */
  // 直接为类添加方法 - 节省内存，new的新对象直接通过原型链的方式去找到目标方法
  Stack.prototype.push = function (element) {
    this.items.push(element);
  }
  // 2. 从栈中取出元素
  Stack.prototype.pop = function () {
    return this.items.pop();
  }

  // 3. 查看一下栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }

  // 4. 判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  }
  // 5. 获取栈中的元素个数
  Stack.prototype.size = function () {
    return this.items.length;
  }
  // 6. toString方法
  Stack.prototype.toString = function () {
    // 20 10 12 8 7
    return this.items.reverse().join('');
  }

}
module.exports = Stack;
/* // 栈的使用
// new => return一个新的对象，并且执行[[prototype]]连接，最后将其中的this绑定于新产生的对象上 。
var s = new Stack()

s.push(20);
s.push(10);
s.push(30);
s.push(40);

s.pop();
s.pop();
console.log(s.peek());
console.log(s.toString()); */
