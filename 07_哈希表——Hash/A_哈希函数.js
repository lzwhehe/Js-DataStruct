function hashFunc(str, size) {
  let hashCode = 0;
  for (let i of str) {
    // 使用霍曼法则对*37进行优化，将多组*37
    hashCode = i.charCodeAt() + hashCode * 37;
  }
  return hashCode % size;
}

let hashCode = hashFunc('lzw',5);
console.log(hashCode);


