// 直接导出的函数名，而不是导出的对象，所以不需要结构赋值，直接赋值即可
// require() = module.exports 
const dic = require('../06_字典——Dic/A_Map.js')
const Queue = require('../03_队列——Queue/A_Array_queue.js');
class Graph {
  constructor() {
    // 1. 定义一个能够代表该数据结构的容器 - 从语言原始的数据结构中寻找合适的容器描述'一张图'结构
    // 1.1 顶点 - Arr
    this.vertexes = [];
    // 1.2 表示顶点有多少边 - dic 
    this.edges = new dic();
  }
  // 2. 添加合适的方法( 能够将你想要放入的数据存入该数据结构的方法)
  // 2.1  添加顶点
  addVertex(val) {
    // 添加元素  
    this.vertexes.push(val);
    // 设置节点对应的对边节点集合以此来反应边关系
    this.edges.set(val, []);
  }
  // 2.2  添加边
  addEdge(v1, v2) {
    // 注意要设置为双向的
    this.edges.get(v1).push(v2);
    this.edges.get(v2).push(v1);
  }
  // 3. 直接展示图结构
  toString() {
    // 定义容器
    let resString = '';
    let edgeString = '';
    // 首先拿到顶点
    this.vertexes.forEach(vertex => {
      // 通过对应顶点，拿到边
      this.edges.get(vertex).forEach(edge => {
        edgeString += edge;
      })
      resString += vertex + '->' + edgeString + '\n';
      edgeString = '';
    })
    return resString;
  }
  // 4. 遍历
  // ready: 赋予节点状态 - white , grey , black
  initColor() {
    // 规定状态集
    let colors = {};
    // fill
    this.vertexes.forEach(item => {
      // white -> not do
      colors[item] = 'white';
    })
    return colors;
  }
  // bfs
  bfs(firV, handler) {
    // 入队 = 访问
    // 得到边节点 = 探测

    // 1. 初始化节点颜色
    let colors = this.initColor();
    // 2. 创建队列
    let queue = new Queue();
    // 将顶点放入队列
    queue.enqueue(firV);
    while (!queue.isEmpty()) {
      // 1. 出队 
      let rVertex = queue.dequeue();
      // 2. 得到边上的节点 + 入队
      let vList = this.edges.get(rVertex)
      // 3. 探测完毕 - 修改颜色
      colors[rVertex] = 'grey';
      // 4. 进行入队
      vList.forEach(item => {
        if (colors[item] === 'white') {
          colors[item] = 'grey';
          queue.enqueue(item);
        }
      })
      // 3. 访问顶点
      handler(rVertex);
      // 4. 修改顶点颜色为黑色
      colors[rVertex] = 'black';

    }


  }
}

let g = new Graph();
let myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
myVertexes.forEach(item => {
  g.addVertex(item);
})

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('C', 'D')
g.addEdge('C', 'G')
g.addEdge('D', 'G')
g.addEdge('D', 'H')
g.addEdge('B', 'E')
g.addEdge('B', 'F')
g.addEdge('E', 'I')

let res = '';
g.bfs(g.vertexes[0],function(v){
  res += v;
})
console.log(res);
