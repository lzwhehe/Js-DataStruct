class Set {
  constructor() {
    // 属性
    this.items = {};
  }
  // method - add
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

}

module.exports = Set;

