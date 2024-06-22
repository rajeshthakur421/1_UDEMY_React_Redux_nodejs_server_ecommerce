//Next tick
console.log('Start');

process.nextTick(() => {
  console.log('Next tick callback');
});

console.log('Scheduled with nextTick');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

console.log('End');





//setImmediate
console.log('Start');

setImmediate(() => {
  console.log('Immediate callback');
});

console.log('Scheduled with setImmediate');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

console.log('End');
