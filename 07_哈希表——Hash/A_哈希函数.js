// obj : 将objStr转换为大数字，同时通过给定的size，将待转换的字符串大数通过取余圈定在给定的size中
function hashFunc(str,size) {
  let hashCode = 0;
  for(let i of str){
    // 使用霍曼法则对*37进行优化，将多组*37
    hashCode = i.charCodeAt() + hashCode*37;
  }
  return hashCode % size;
}

let a = hashFunc('abc',7);
let b = hashFunc('ab',7);
let c = hashFunc('a',7);

console.log(a,b,c);
