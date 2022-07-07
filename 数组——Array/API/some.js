// 定义数组
let names = ["abc", "cb", "mba", "dna"]

// 判断数组中是否some包含有a字符的字符
var bool1 = names.some(elment => {
  // 找到一个有a的就停，增加效率
  if (elment.includes('a')) {
    return true;
  }
})


