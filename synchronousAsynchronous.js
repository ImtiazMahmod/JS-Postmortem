//synchronous and asynchronous
///step by step or serially
console.log('first');
console.log('second');
console.log('third');
console.log('fourth');

// asynchronous==not 
console.log('first');
console.log('second');
setInterval(() => {
    console.log('async')
}, 1000)
