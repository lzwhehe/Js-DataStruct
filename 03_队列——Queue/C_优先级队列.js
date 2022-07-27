const Queue = require("./A_Array_queue");

// 队列中的单一元素
class pqItem {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
class PriorityQueue extends Queue {
  constructor() {
    super();
  }
  enqueue(element, priority) {
    // 实例化一个待插入对象
    let queueItem = new pqItem(element, priority);
    // 判断队列是否为空
    // 空 -> 直接插入
    if (this.items.length == 0) {
      this.items.push(queueItem);
    } else {
      // 非空 -> 对比优先级
      // items中找到一个大于自己优先级的数字 -> 在找到的这个数字前插入自己
      let flag = false;
      this.items.some((item, index) => {
        if (item.priority > queueItem.priority) {
          this.items.splice(index, 0, queueItem)
          flag = true;
          return true;
        }
      })
      // items中没有比自己小的数字，直接插入队列末尾
      if (!flag) {
        this.items.push(queueItem);
      }
    }
  }
  toString() {
    let res = '';
    this.items.forEach(item => {
       res += item.element + ' ';
    });
    return res;
  }

}
var pg = new PriorityQueue();
pg.enqueue('a', 11);
pg.enqueue('c', 14);
pg.enqueue('b', 1);
pg.enqueue('d', 111);
// b a c d
console.log(pg.toString());
