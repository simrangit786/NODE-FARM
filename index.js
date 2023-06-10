const fs = require('fs');
const http = require('http');
const path = require('path');
const ngrok = require('ngrok');
var cors = require('cors');



const Hello = "Hello Node";

(async function() {
    const url = await ngrok.connect();
  })();


//Synchronus way or blocking
// const data = fs.readFileSync('./txt/input.txt','utf-8')
// console.log(data)

// const file = `This is our output data ${data}/n Created by - ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',file);


// Asynchronus way or non-blocking
// fs.readFile('./txt/input.txt','utf-8',(err,data) => {
//     console.log(data,"first")
//     fs.readFile('./txt/readThis.txt','utf-8',(err,data1) => {
//         console.log(data1,"second")
//         fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) => {
//             console.log(data2,"third")
//             fs.writeFile('./txt/output-new1.txt',`${data2}\n${data}`,'utf-8',(err) => {
//                 console.log("your file has been written");
//             })
//         })
//     })
// })

// console.log("checking precedence")

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8')
// console.log(data)
const dataObj = JSON.parse(data)

const server = http.createServer((req,res) => {
    console.log(req.url)
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview') {
        res.end("This is overview")
    } else if(pathName === '/product'){
        res.end("This is product view")
    } else if(pathName === '/api') {
        console.log("enter")
        // fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(err,data) => {
        //     const product = JSON.parse(data)
        //     console.log(product);
        // })
        res.writeHead(200,{
            'content-type': "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            "Access-Control-Allow-Headers":"Content-Type",
            'Access-Control-Allow-Credentials': true
        })
        res.end(data)

    } else {
        res.writeHead(400,{
            'content-type': 'text/html',
            'my-own-header': "Hello-Node"
        })
        res.end('<h1>Page Not Found...!</h1>')
    }
    // res.end("Hello from the server !");
})

server.listen(8000,'127.0.0.1',() => {
    console.log('Listening to request on port 8000...');
})




