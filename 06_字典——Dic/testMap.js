// 1. Map的遍历
let newMap = new Map([['lzw',22],['wzj',21]])
newMap.forEach((value,key,map)=> {
   console.log(value,key,map);
})
for(map of newMap){
  console.log(map);
}

// 2. Obj的遍历
let newObj =  {
  'lzw':22,
  'wzj':21,
}
let keyArr = Object.keys(newObj);
console.log(keyArr);
let valueArr = Object.values(newObj);
console.log(valueArr);
let entries = Object.entries(newObj);
console.log(entries);

