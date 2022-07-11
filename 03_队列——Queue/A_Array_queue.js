
function Queue() {
  // 属性
  this.items = [];
  // 方法
  // 1. 入队 , 直接在原型上添加方法 , 子类直接继承即可
  Queue.prototype.enqueue = function (item) {
    this.items.push(item);
  }
  // 2. 出队 and return 
  Queue.prototype.dequeue = function () {
    return this.items.shift();
  }
  // 3. 返回队列第一个元素，但是不修改队列 
  Queue.prototype.font = function () {
    return this.items[0] || null;
  }
  // 4. 查看队列是否包含元素
  Queue.prototype.isEmpty = function () {
     return this.items.length === 0
  }
  // 5. 返回队列包含的元素个数 
  Queue.prototype.size = function() {
     return this.items.length;
  }
  // 6. toString
  Queue.prototype.toString = function () {
    return this.items.join(' ');
  }
}

module.exports = Queue;
