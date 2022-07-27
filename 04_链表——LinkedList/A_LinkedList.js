// 说明: 这里初始化的时候，是初始化了一个头节点，而不是一个头指针
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
      let objNodePre = this.head;
      while (objNodePre.next) {
        objNodePre = objNodePre.next;
      }
      objNodePre.next = node;
    }
    this.length += 1;
  }
  // method2 -> toString
  toString() {
    let objNodePre = this.head.next;
    let linkedString = '';
    while (objNodePre) {
      linkedString += objNodePre.data + ' ';
      objNodePre = objNodePre.next;
    }
    return linkedString;
  }
  // method3 -> insert
  insert(position, data) {
    // 对输入的position进行越界判断
    if (position < 0 || position > this.length) return false;
    // 1. 创建节点
    let node = new Node(data);
    // 2. 通过objNodePre移动指针找到对应position 
    let objNodePre = this.head;
    let flag = 1;
    while (true) {
      // 如果未找到对应的位置
      if (flag !== position && position - 1 != 0) {
        objNodePre = objNodePre.next;
        flag += 1;
      } else {
        // 先右边再左边，对objNodePre.next下一个位置进行保留
        node.next = objNodePre.next;
        objNodePre.next = node;
        return true;
      }
    }
  }
  //method4 -> get
  get(position) {
    // 对输入的position进行越界判断
    if (position < 0 || position > this.length) return false;
    // 通过objNodePre移动指针找到对应position 
    let objNodePre = this.head;
    let flag = 1;
    while (true) {
      // 如果未找到对应的位置
      if (flag !== position && position - 1 != 0) {
        objNodePre = objNodePre.next;
        flag += 1;
      } else {
        return objNodePre.next.data;
      }
    }
  }
  //method5 -> update
  update(position, element) {
    // 对输入的position进行越界判断
    if (position < 0 || position > this.length) return false;
    // 通过objNodePre移动指针找到对应position 
    let objNodePre = this.head;
    let flag = 1;
    while (true) {
      // 如果未找到对应的位置
      if (flag !== position && position - 1 != 0) {
        objNodePre = objNodePre.next;
        flag += 1;
      } else {
        objNodePre.next.data = element;
        return true;
      }
    }
  }
  //method6 -> removeAtPostion
  removeAt(position) {
    // 对输入的position进行越界判断
    if (position < 0 || position > this.length) return false;
    // 通过objNodePre移动指针找到对应position 
    let objNodePre = this.head;
    // flag是一个标志物，start -> 实际第一个node , 通过flag和postion的关系，映射寻找目标的过程，从而牵动objNodePre指针的前进，让其指向目标的上一个 
    // objNodePre是一个指针，start -> headNode
    let flag = 1;
    while (true) {
      // 如果未找到对应的位置
      if (flag !== position && position - 1 != 0) {
        objNodePre = objNodePre.next;
        flag += 1;
      } else {
        if (objNodePre.next.next) {
          objNodePre.next = objNodePre.next.next;
          return true
        } else {
          objNodePre.next = null;
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
    let objNodePre = this.head;
    let count = 0;
    while (true) {
      // 如果未找到对应的位置
      if (objNodePre.next) {
        objNodePre = objNodePre.next;
        count += 1;
      } else {
        return count;
      }
    }
  }
  // method9 -> 判断元素的index
  indexOf(element) {
    let objNodePre = this.head;
    let flag = 0;
    while (true) {
      // 如果未找到对应的位置
      if (element !== objNodePre.data) {
        objNodePre = objNodePre.next;
        flag += 1;
      } else {
        return flag;
      }
    }

  }
  // method10 - 指定元素移除一项
  remove(element) {
    let objNodePre = this.head;
    while (true) {
      // 如果未找到对应的位置
      if (element !== objNodePre.next.data) {
        objNodePre = objNodePre.next;
      } else {
        if (objNodePre.next.next) {
          objNodePre.next = objNodePre.next.next;
          return true;
        } else {
          objNodePre.next = null;
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








