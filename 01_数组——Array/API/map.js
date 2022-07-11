// 定义数组
let names = ["abc", "cb", "mba", "dna"]

// 在names中所有的元素后面拼接-abc
names.forEach((item) => {
   item += 'abc';
})
// don't change real names 

// so we use the map 
let newArr = names.map(item => {
  return  item += 'abc';
})
console.log(newArr);
