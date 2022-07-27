
class Queue {
  constructor() {
    this.items = [];
  }
  // 1. 入队 , 直接在原型上添加方法 , 子类直接继承即可
  enqueue(item) {
    this.items.push(item);
  }
  // 2. 出队 and return 
  dequeue() {
    return this.items.shift();
  }
  // 3. 返回队列第一个元素，但是不修改队列 
  font() {
    return this.items[0] || null;
  }
  // 4. 查看队列是否包含元素
  isEmpty() {
    return this.items.length === 0
  }
  // 5. 返回队列包含的元素个数 
  size() {
    return this.items.length;
  }
  // 6. toString
  toString() {
    return this.items.join(' ');
  }
}

module.exports = Queue;
