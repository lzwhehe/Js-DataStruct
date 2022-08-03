const EventEmitter = require('events');
// 1.create a emitter
function monitor(loadFactor) {
  const emitter = new EventEmitter();
  emitter.addListener('change', (args) => {
    // 数组扩容
    console.log('监听到了越界');
  })
  if(loadFactor > 0.75) {
    emitter.emit('crossBorder');
  }
}

monitor(0.2);
