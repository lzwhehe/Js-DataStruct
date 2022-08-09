// 搜索树的节点
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Bst {
  // 初始化树
  constructor() {
    this.root = null;
  }
  // method1 - 前进的比较data，直到左右节点为空
  insert(data) {
    // 1.创建节点
    let newNode = new Node(data);
    // 2.1 判断根节点的存在
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  // 递归函数 -> 函数内部会调用自己的一类函数
  // 递归函数类似一种会通过每次传递的参数自动前进的while
  // 递归调用本质是一种循环
  insertNode(node, newNode) {
    //向左查找
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        // 将左节点当做当前的节点进行比较
        this.insertNode(node.left, newNode)
      }
    } else {
      // 向右边查找
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }

    }
  }
  // 树的遍历
  // method2 - 先序遍历
  preOrderTraversal(handler) {
    this.preOrderTraversalNode(this.root, handler); 
  }
  preOrderTraversalNode(node, handler) {
    if (node != null) {
      // 首先处理节点，而后往后查找 -> 先序遍历
      // 什么时候处理root  -> 先序遍历
      handler(node.data);
      this.preOrderTraversalNode(node.left, handler);
      this.preOrderTraversalNode(node.right, handler);
    }
  }

}

let b1 = new Bst();
b1.insert(5);
b1.insert(3);
b1.insert(2);

let res = '';
b1.preOrderTraversal(key => {
  res += key + " ";
})
console.log(res);
