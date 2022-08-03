// target - [[k,v],[k,v],[k,v],[k,v],[k,v]]
const EventEmitter = require('events');

class HashTable {
  constructor() {
    //属性
    //初始状态下的几个大桶
    this.storage = [];
    this.length = 0;
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
  // method -  扩容
  scale(newLimit) {
    // 1. backups
    let oldStroage = this.storage;
    // 2. init
    this.storage = [];
    this.length = 0;
    this.limit = this.limit * 2;
    // 3. fill
    oldStroage.forEach((bucket) => {
      if (bucket != null) {
        bucket.forEach(element => {
          let index = this.hashFunc(element[0], this.limit);
          this.storage[index] = bucket;
        })
      }
    })
  }
  isScale() {
    if (this.length >  this.limit * 0.75) {
      this.scale(this.limit * 2)
    }
  }
  //method - 增加元素
  put(key, value) {
    let hashCode = this.hashFunc(key, this.limit);
    let bucket = this.storage[hashCode];
    if (bucket == null) {
      // 先初始化一个数组
      // 而后通过bucket重新指向于该数组对其进行操作
      this.storage[hashCode] = [];
      bucket = this.storage[hashCode];
      bucket.push([key, value]);
      this.length++;
      this.isScale();
    } else {
      let flag = bucket.some(element => {
        if (element[0] == key) {
          return element[1] = value;
        }
      });
      if (flag == false) {
        bucket.push([key, value]);
        this.length++;
        this.isScale();
      }
    }
  }
  //method - 获取元素
  get(key) {
    // 1. key -> index
    let index = this.hashFunc(key, this.limit);
    // 2. index -> bucket
    let bucket = this.storage[index];
    // add -> bucket检测
    if (bucket == null) {
      return null;
    }
    // 3. 遍历bucket , find that target
    let target = 0;
    let flag = bucket.some(element => {
      if (element[0] === key) {
        return target = element[1];
      }
    });
    if (flag) return target;
    else return false;
  }
  //method - 删除元素
  delete(key) {
    // remove -> delete arr element
    // 1. find the bucket
    let index = this.hashFunc(key, this.limit);
    let bucket = this.storage[index];
    if (!bucket) return false;
    else {
      bucket.forEach((element, index, arr) => {
        if (element[0] == key) {
          arr.splice(index, 1);
          this.length -= 1;
          return true;
        }
      });
    }


  }
  // method - 判断是否为空
  isEmpty() {
    return !this.length;
  }
}


h1 = new HashTable();
h1.put('lzw', 12)
h1.put('wzj', 13)
h1.put('aa', 13)
h1.put('ss', 13)
h1.put('xx', 13)
h1.put('cc', 13)


console.log(h1);

