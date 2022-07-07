// 定义数组
var names = ["abc", "cb", "mba", "dna"]
var newNames = []

// 获取names中所有包含'a'字符的元素
// 1. forEach -> 还需要自己去定义一个数组
names.forEach(item=>{
   if(item.includes('a')){
      newNames.push(item)
   }
})
// 2. filter -> 不需要自己定义数组，只需要给出过滤条件即可
newNames = names.filter(item=>{
   if(item.includes('a')){
    // if true => push the item in newArr
      return true;
   }
})

console.log(newNames);
