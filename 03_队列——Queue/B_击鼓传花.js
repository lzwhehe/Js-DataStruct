const Queue = require("../03_队列——Queue/A_Array_queue");
// 当objNum === num 时 ， 淘汰此num

// 制定目标数字
const objNum = 3;
const childs = ['l', 'w', 'z'];

// 指定存放小朋友的容器 
// 对象 - 不知道咋表现出人员之间的先后顺序 
// solve : 人员顺序是通过规定人员的数组来表现的，所以压根不用考虑这个问题，this is not a problem

// 数组 - 不知道咋表现出人员数数的动作
// solve: 直接通过将人员往队列末尾存的一次循环反应



// 指定游戏逻辑
let games = function (childs, objNum) {
  // 1. startGameReadyThing - 小朋友存入队列
  let gameContent = new Queue();
  childs.forEach(item => {
    gameContent.enqueue(item);
  })
  // 2. StartGame
  // 循环次数 = 小朋友的报数 = objNum , 所以直接开始for循环
  // 循环's dothing = 将未被删除的小朋友们转移到队列末尾,删除目标小朋友
  while (gameContent.size() > 1) {
    for (let i = 0; i < objNum - 1; i++) {
      gameContent.enqueue(gameContent.dequeue());
    }
    gameContent.dequeue();
  }
  return gameContent.font();
}

console.log(games(childs, objNum));

