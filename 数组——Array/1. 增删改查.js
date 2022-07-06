let nums = [1,2,3,4,5];
// 删
nums.shift();
nums.pop()
nums.splice(1,2)

// 增
nums.unshift(1);
nums.push(5)
// params： 位置-数量-需添加的元素
nums.splice(1,0,1,2,3)

// 改- 直接通过索引修改即可

// 查- 直接通过索引值查找即可