// 创建节点
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// 接受Arr,将其转换为链表
class LinkList {
  constructor(Arr) {
    // 1.init - 链表的初始态就是一个空的头指针 + 一个length标识
    this.head = null;
    this.length = 0;
    this.endPointer = null;
    let i = 0;
    let count = Arr.length;
    // 注：永远指向链表的最后一个节点 -> 方便添加值
    // 2.add - 而后就是将元素循环进行添加
    while(count--) {
      // case1 如果是第一个元素
      if (this.head == null) {
        // 1.通过val创建节点
        let newNode = new Node(Arr[i]);
        this.head = newNode;
        this.endPointer = newNode;
        this.length++;
      }
      // case2 不是第一个元素
      else {
        let newNode = new Node(Arr[i])
        this.endPointer.next = newNode;
        this.endPointer = newNode;
        this.length++;
      }
      i++;
    }

  }
}

l1 = new LinkList([1,2,4,5]);
console.log(l1);
