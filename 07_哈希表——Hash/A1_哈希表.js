// target - storage [ bucket1 [[k,v],[k,v]] bucket2 [[k,v],[k,v]]  ]

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
  //method - 判断素数
  isPrime(n) {
    // 任何一个可进行因数分解的数字，那么两个数字一个是小于等于sqrt(n) , 一个是大于等于sqrt(n)
    if (n < 2) return false;
    else {
      for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        if (n % i == 0) {
          return false
        } else {
          continue;
        }
      }
      return true;
    }
  }
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
    this.limit = newLimit;
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
    if (this.length > this.limit * 0.75) {
      let tarLimit = this.limit * 2 + 1;
      while (true) {
        if (this.isPrime(tarLimit)) {
          this.scale(tarLimit);
          break;
        } else {
          tarLimit += 1;
          continue;
        }
      }
    }
  }
  //method - 增加元素
  put(key, value) {
    let hashCode = this.hashFunc(key, this.limit);
    let bucket = this.storage[hashCode];
    // 有元素 = 可能需要更新,  无元素 = 直接添加 , 很多时候初态都是单独拿出来讨论的。 
    if (bucket == null) {
      // 先初始化一个数组
      // 而后通过bucket重新指向于该数组对其进行操作
      // 1.创建桶
      this.storage[hashCode] = [];
      // 2. 向填充元素
      bucket = this.storage[hashCode];
      bucket.push([key, value]);
      this.length++;
      this.isScale();
    } else {
      // 如果key相同则是更新
      let flag = bucket.some(element => {
        if (element[0] == key) {
          return element[1] = value;
        }
      });
      // 否则就是添加元素
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
    // 3. 遍历bucket , find that res
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
    // 缩小容量
    if (this.limit > 7 && this.length < this.limit * 0.25) {
      let tarLimit = Math.floor(this.limit / 2)  + 1;
      while (true) {
        if (this.isPrime(tarLimit)) {
          this.scale(tarLimit);
          break;
        } else {
          tarLimit += 1;
          continue;
        }
      }
    }
  }
  // method - 判断是否为空
  isEmpty() {
    return !this.length;
  }
}


h1 = new HashTable();
// 设置字典中的含义对照
h1.put('get', '拿到')
h1.put('put', '推')
// 根据对应单词拿到对应的翻译
console.log(h1);

// 如果是传统数组则 Arr [get , 拿到] , 而后比对 Arr[0] ?= get , 如果是这种做法的话，就会导致效率非常低
// 相比于哈希表，当我拿到get的时候，其实就拿到了他位于Arr的索引，而后直接访问Arr[index]，即可获取对应的单词含义
