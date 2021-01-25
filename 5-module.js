let math = require('./localModules/calculator')
let a = 2,
    b = 5

console.log(`${a} + ${b} = ${math.sum(a, b)}`)
console.log(`${a} - ${b} = ${math.sub(a, b)}`)
console.log(`${a} × ${b} = ${math.multiply(a, b)}`)
console.log(`${a} ÷ ${b} = ${math.divide(a, b)}`)

