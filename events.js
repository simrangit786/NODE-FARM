const EventEmitter =  require('events');
const http = require('http');
const myEmitter = new EventEmitter();

myEmitter.on("myEvent",() => {
    console.log("My first event");
})

myEmitter.on("myEvent",() => {
    console.log("my second event");
})

myEmitter.on("myEvent",stock => {
    console.log(`I have created my ${stock} stocks`)
})

myEmitter.emit("myEvent",9);

// according to es6 js 

// const eventEmitter = require('events');

// class Sales extends eventEmitter {
//     constructor() {
//         super();
//     }
// }

// const myEmitter = new Sales();

// myEmitter.on('mysale',() => {
//     console.log("this is event emitter through the class")
// })

// myEmitter.emit("mysale")

const server = http.createServer();

server.on("request",(req,res) => {
    console.log("request received");
    res.end("request received");
})

server.on("request",(req,res) => {
    console.log("another request");
    // res.end("another request");
})

server.on("close",(req,res) => {
    console.Console.log("server closed");
})

server.listen(8000,'127.0.0.1',() => {
    console.log('waiting for response....');
})







