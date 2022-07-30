class HashTable {
  constructor() {
    //属性
    //初始状态下的几个大桶
    this.storage = [];
    this.count = 0;
    //将数组长度设置为质数
    this.limit = 7;
  }
  //方法
  //method - 哈希化
  hashFunc(str, size) {
    let hashCode = 0;
    for (let i of str) {
      // 使用霍曼法则对*37进行优化，将多组*37
      hashCode = i.charCodeAt() + hashCode * 37;
    }
    return hashCode % size;
  }
  //method - 增加元素
  put(key) {
    // 1. 将key转换为value
    let value = this.hashFunc(key,this.limit);
    // null->制造/ !null -> 选出bucket中元素修改 
    // 2.1 指定index造桶, 如果桶为空，造桶
    let bucket = this.storage[value]
    if (bucket == null) {
      bucket = [];
      bucket.push(key,value);
      this.storage[value] = bucket;
      this.count += 1;
      // 2.2 非空选出桶中的kv,针对kv进行对比修改或者添加
    } else {
      // 通过some来判断是否一个元素是相同的
      let flag = bucket.some(kv => {
        if (kv[0] == key) {
          kv[1] = value;
          // 有一个修改则true，退出
          return true;
        }
      });
      // 否则kv新元素直接添加 
      if(flag==false){
        bucket.push(key,value);
        this.count += 1;
      }

    }

  }
  // 获取方法



}


let h1 = new HashTable();
h1.put('abc');
h1.put('a');
console.log(h1);


