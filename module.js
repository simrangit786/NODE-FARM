// console.log(arguments);
// console.log(require('module').wrapper)

//module.exports
const C = require('./test-module');
const myCalc = new C();

// console.log(C,myCalc);
console.log(myCalc.add(2,3));
console.log(myCalc.multiply(2,5))

//exports
const c = require('./test-module2');
const calc = new C();

console.log(calc.add(2,3))


//Caching
require("./test-module3")();
require("./test-module3")();
require("./test-module3")();