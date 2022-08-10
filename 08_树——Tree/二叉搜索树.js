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
  isExist(value) {
    let objNode = this.root;
    return this.search(value, objNode);
  }
  // 所谓的递归就是以某个规律函数不停的执行自己执行下去 + 同时这个规律函数中给出了退出条件
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
  //method8 - 二叉搜索树的删除
  // 1. search需要找的节点
  // 2. 删除节点
  // 2.1 叶子节点  
  remove(data) {
    // find it , save message
    // 0.设置变量
    // current -> 表示当前节点
    // parent -> 当前节点的上一个
    // isLeft -> 表示当前节点是否是父的左节点
    let current = this.root;
    let parent = null;
    let isLeft = true;

    // 1.开始search
    while (current.data != data) {
      parent = current;
      if (data < current.data) {
        isLeft = true;
        current = current.left;
      } else {
        isLeft = false;
        current = current.right;
      }
    }
    if (current == null) {
      return false;
    }
    // 2.对找到的数据进行处理
    // 2.1 无任何子节点
    if (current.left == null && current.right == null) {
      if (current == this.root) {
        this.root = null;
      }
      // 如果是当前的current是左节点
      if (isLeft) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // 2.2 删除的节点有一个子节点
    // 如果current有右节点
    else if (current.right == null) {
      if (current == this.root) {
        this.root = current.left;
      }
      if (isLeft) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
      //如果current有左节点
    }
    else if (current.left == null) {
      if (current == this.root) {
        this.root = current.right;
      }
      if (isLeft) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    }
    // 2.3 删除的节点有两个子节点
    // 比其小一点点的 ， 比其大一点点的
    // 左子树的Max , 右子树的Min
    // 前驱 & 后继 
    else { 
       // 1. 获取后继节点
       let successor = this.getSuccssor(current);
       // 注:   
       if(current == this.root) {
          this.root = successor;
       } else if(isLeft) {
         parent.left =  successor;
       } else {
          parent.right = successor;
       }
    }

  }
  getSuccssor(delNode) {
    // 1.定义变量 ， 保存找到的后继
    let successor = delNode;
    let current = delNode;
    let successorParent = delNode;
    // 2. 循环查找
    while (current != null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }
    // 3. 判断后继节点是否直接就是delNode的right节点
    if(successor != delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  }

}

let b1 = new Bst();
b1.insert(5);
b1.insert(3);
b1.insert(2);


console.log(b1.searchValue(1));


