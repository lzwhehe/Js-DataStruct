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
    if (newNode.data < node.data) {
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
  // method3 - 中序遍历
  midOrderTraversal(handler) {
    this.midOrderTraversalNode();
  }
  midOrderTraversalNode(node, handler) {
    if (node != null) {
      // 先递归到左的节点，而后进行处理
      this.midOrderTraversalNode(node.left, handler);
      handler(node.key);
      this.midOrderTraversalNode(node.right, handler);
    }
  }
  // method4 - 后序遍历
  postOrderTraversal(handler) {
    this.preOrderTraversal()
  }
  postOrderTraversalNode(node, handler) {
    if (node != null) {
      // 先递归最后对数据进行处理
      this.postOrderTraversalNode(node.left, handler);
      this.postOrderTraversalNode(node.right, handler);
      handler(node.key);
    }
  }
  // method5 - 获取最大值
  max() {
    // 直接遍历到右子树的右节点
    let objNode = this.root;
    while (objNode.right != null) {
      objNode = objNode.right;
    }
    return objNode.data;
  }
  // method6 - 获取最小值
  min() {
    let objNode = this.root;
    while (objNode.left != null) {
      objNode = objNode.left;
    }
    return objNode.data;
  }
  // method7 - 搜索特定的节点
  searchValue(value) {
    let objNode = this.root;
    return this.search(value, objNode);
  }
  search(value, objNode) {
    // 未找到的终止
    if (objNode == null) {
      return false;
    }
    if (value < objNode.data) {
      // 小于向左查找
      objNode = objNode.left;
      return this.search(value, objNode);
    } else if (value > objNode.data) {
      // 大于向右查找 
      objNode = objNode.right;
      return this.search(value, objNode);
    } else {
      // 找到的终止
      return true;
    }
  }

}

let b1 = new Bst();
b1.insert(5);
b1.insert(3);
b1.insert(2);


console.log(b1.searchValue(1));


