class Node {
  constructor(data) {
    this.pre = null;
    this.next = null;
    this.data = data;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // 常见的方法封装 
  // method1 - 尾部插入元素 
  append(element) {
    // 1. 创建元素
    let node = new Node(element);
    // 2.  添加元素  
    // 2.1 如果是第一个元素
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;
    } else {
      // 2.2 如果是存在多个元素的追加
      node.pre = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.length += 1;
    }

  }
  // method2 - 正向遍历取出元素
  forwardString() {
    let current = this.head;
    let flag = 1;
    let stringData = '';
    while (flag <= this.length) {
      stringData += current.data;
      current = current.next;
      flag += 1;
    }
    return stringData;
  }
  // method2 - 反向遍历元素
  backwordString() {
    let current = this.tail;
    let linkString = '';
    while (this.length--) {
      linkString += current.data;
      current = current.pre;
    }
    return linkString;
  }
  // method3 - 获取对应位置的元素
  get(position) {
    // postion越界检查
    if (position < 0 || position > this.length) return false;
    if (position <= this.length / 2) {
      let current = this.head;
      let count = position - 1
      while (count--) {
        current = current.next;
      }
      return current.data;
    } else {
      let current = this.tail;
      let count = this.length - position;
      while (count--) {
        current = current.pre;
      }
      return current.data;
    }
  }
  // method4 - 获取元素索引
  indexOf(element) {
    let current = this.head;
    let flag = 1;
    while (flag <= this.length) {
      if (current.data === element) {
        return flag;
      } else {
        // move the current
        current = current.next;
        flag += 1;
      }
    }
  }
  // method5 - 修改某个位置的元素
  update(position, element) {
    // postion越界检查
    if (position < 0 || position > this.length) return false;
    if (position <= this.length / 2) {
      let current = this.head;
      let count = position - 1
      while (count--) {
        current = current.next;
      }
      current.data = element;
    } else {
      let current = this.tail;
      let count = this.length - position;
      while (count--) {
        current = current.pre;
      }
      current.data = element;
    }
  }
  // method6 - 移除特定位置元素
  removeAt(position) {
    // postion越界检查
    if (position < 0 || position > this.length) return false;
    if (position <= this.length / 2) {
      let current = this.head;
      let count = position - 1
      while (count--) {
        current = current.next;
      }
      current.pre.next = current.next;
      current.next.pre = current.pre;
      this.length -= 1;
    } else {
      let current = this.tail;
      let count = this.length - position;
      while (count--) {
        current = current.pre;
      }
      current.pre.next = current.next;
      current.next.pre = current.pre;
      this.length -= 1;
    }
  }
  // method7 - 检查列表是否为空
  isEmpty() {
    if (this.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  // method8 - 检查元素个数
  size() {
    return this.length
  }

}

let dll = new DoubleLinkedList();

dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
dll.append(5);

console.log(dll.forwardString());
console.log(dll.backwordString());






