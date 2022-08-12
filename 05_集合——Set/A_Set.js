class Set {
  constructor() {
    // 属性
    this.items = {};
  }
  add(value) {
    // kv false
    if (this.has(value)) {
      return false;
    }
    // kv add success
    this.items[value] = value;
    return true;
  }
  // method - has
  // describe:judge the key in obj
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  // method - remove
  remove(value) {
    // 1. judge the value in Obj
    if (this.has(value)) {
      // 2. remove
      delete this.items[value];
      return true;
    }
    return false;
  }
  // method - clear
  clear() {
    this.items = {}
    return true;
  }
  // method - size
  size() {
    return Object.keys(this.items).length
  }
  // method - 获取集合中所有的值
  values() {
    return Object.keys(this.items);
  }
  // method - union
  union(otherSet) {
    let newSet = new Set();
    function bl(obj) {
      for (let i in obj) {
        newSet.add(obj[i])
      }
    }
    bl(this.items);
    bl(otherSet.items);
    return newSet;
  }
  // method - unite
  unite(otherSet) {
    let newSet = new Set();
    let keys = Object.keys(otherSet.items);
    keys.forEach(key => {
      if (this.has(this.items[key])) {
        newSet.add(this.items[key]);
      }
    })
    return newSet;

  }
  // method - diffence
  diffence(otherSet) {
    // this.items -> A  
    // otherSet.items -> B
    let keys = Object.keys(otherSet.items);
    keys.forEach(key => {
      if (this.has(otherSet.items[key])) {
        this.remove(otherSet.items[key]);
      }
    })
    return this;
  }
  // method - inclued
  inclued(otherSet) {
    let keys = Object.keys(otherSet.items);
    let res  = keys.every(key => {
      return this.has(otherSet.items[key])
    })
    return res;
  }
}


s1 = new Set();
s2 = new Set();
s1.add('a');
s1.add('b');
s1.add('c');
s2.add('a');
s2.add('b');
s2.add('d');


let s3 = s1.inclued(s2);
console.log(s3);
module.exports = Set;

