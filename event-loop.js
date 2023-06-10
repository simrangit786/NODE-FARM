const fs = require('fs');

console.log("Event loop in practice");

fs.readFile('./txt/dataaas.txt',() => {
    console.log("I/O finished");
    console.log("________________________");

    setTimeout(() => console.log("Timer 1 is finished"),0);
    setTimeout(() => console.log("Timer 3 is finished"),3000); // it is comes into callback queue
    setImmediate(() => console.log("Timer 2 is finished"));

    process.nextTick(() => console.log("process nextTick")) // it is comes into microtask queue

})

console.log("Top-level code is finished");
