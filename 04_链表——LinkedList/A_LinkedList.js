class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    // 默认 -> 头节点 + 长度
    // 1. 头节点 -> 默认为空
    this.head = new Node(null);
    // 2. 长度
    this.length = 0;
  }
  // method1 -> 追加方法
  append(data) {
    let node = new Node(data);
    if (this.length == 0) {
      // 添加第一个节点 -> 1.create 2.link
      this.head.next = node;
    } else {
      // 添加第二个节点 -> 1.create 2.link
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length += 1;
  }
  // method2 -> toString
  toString() {
    let current = this.head.next;
    let linkedString = '';
    while (current) {
      linkedString += current.data + ' ';
      current = current.next;
    }
    return linkedString;
  }
  // method3 -> insert
  insert(position, data) {
    // 对输入的position进行越界判断
    if (position < 0 || position > this.length) return false;
    // 1. 创建节点
    let node = new Node(data);
    // 2. 通过current移动指针找到对应position 
    let current = this.head;
    let flag = 1;
    while (true) {
      // 如果未找到对应的位置
      if (flag !== position && position - 1 != 0) {
        current = current.next;
        flag += 1;
      } else {
        // 先右边再左边，对current.next下一个位置进行保留
        node.next = current.next;
        current.next = node;
        return true;
      }
    }
  }
  //method4 -> get
  get(position) {
    // 对输入的position进行越界判断
    if (position < 0 || position > this.length) return false;
    // 通过current移动指针找到对应position 
    let current = this.head;
    let flag = 1;
    while (true) {
      // 如果未找到对应的位置
      if (flag !== position && position - 1 != 0) {
        current = current.next;
        flag += 1;
      } else {
        return current.next.data;
      }
    }
  }
  //method5 -> update
  update(position, element) {
    // 对输入的position进行越界判断
    if (position < 0 || position > this.length) return false;
    // 通过current移动指针找到对应position 
    let current = this.head;
    let flag = 1;
    while (true) {
      // 如果未找到对应的位置
      if (flag !== position && position - 1 != 0) {
        current = current.next;
        flag += 1;
      } else {
        current.next.data = element;
        return true;
      }
    }
  }
  //method6 -> removeAtPostion
  removeAt(position) {
    // 对输入的position进行越界判断
    if (position < 0 || position > this.length) return false;
    // 通过current移动指针找到对应position 
    let current = this.head;
    let flag = 1;
    while (true) {
      // 如果未找到对应的位置
      if (flag !== position && position - 1 != 0) {
        current = current.next;
        flag += 1;
      } else {
        if (current.next.next) {
          current.next = current.next.next;
          return true
        } else {
          current.next = null;
          return true;
        }
      }
    }
  }
  // method7 -> 判断是否为空
  isEmpty() {
    if (this.head.next === null) {
      return true;
    } else {
      return false;
    }
  }
  // method8 -> 判断大小
  size() {
    let current = this.head;
    let count = 0;
    while (true) {
      // 如果未找到对应的位置
      if (current.next) {
        current = current.next;
        count += 1;
      } else {
        return count;
      }
    }
  }
  // method9 -> 判断元素的index
  indexOf(element) {
    let current = this.head;
    let flag = 0;
    while (true) {
      // 如果未找到对应的位置
      if (element !== current.data) {
        current = current.next;
        flag += 1;
      } else {
        return flag;
      }
    }

  }
  // method10 - 指定元素移除一项
  remove(element) {
    let current = this.head;
    while (true) {
      // 如果未找到对应的位置
      if (element !== current.next.data) {
        current = current.next;
      } else {
        if (current.next.next) {
          current.next = current.next.next;
          return true;
        } else {
          current.next = null;
          return true;
        }
      }
    }
  }


}


let link = new LinkedList();
link.append('a')
link.append('b')
link.append('c')
link.remove('c');
console.log(link.toString());








