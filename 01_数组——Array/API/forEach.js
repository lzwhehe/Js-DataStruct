// 定义数组
var names = ["abc", "cb", "mba", "dna"]

// 检测是否每个都含有a
// only iteration ,  value will no return
names.forEach(function (item) {
    if(!item.includes('a')){
        return false;
    }
    else {
      return true;
    }
})

