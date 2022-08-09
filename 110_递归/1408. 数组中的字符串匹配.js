
// 输入：words = ["leetcode","et","code"]
// 输出：["et","code"]
// 解释："et" 和 "code" 都是 "leetcode" 的子字符串。

// 1. 双指针解决 n^2
var stringMatching = function (words) {
  // 双指针
  let count = words.length;
  let newContainer = [];
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      // 需要进行正反检测
      if (words[i].includes(words[j])) newContainer.push(words[j]);
      if (words[j].includes(words[i])) newContainer.push(words[i]);
    }
  }
  // 对返回的数组进行去重
  return Array.from(new Set(newContainer));;
};
// test
let words = ["leetcoder","leetcode","od","hamlet","am"];
let newWords = stringMatching(words);
console.log(newWords);


