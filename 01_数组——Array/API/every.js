// 定义数组
let names = ["abc", "cb", "mba", "dna"]

// 判断数组的元素是否都包含a字符
var bool = names.every(element=>{
   if(element.includes('a')){
    return true;
   }else {
    // false => break => 不是every都含有'a'
    return false;
   }
})
console.log(bool);
