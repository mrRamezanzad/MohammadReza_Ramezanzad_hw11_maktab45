const fs = require('fs')

let from = fs.readFileSync('from.txt')
fs.writeFileSync('to.txt', from)
let append = fs.readFileSync('append.txt')
fs.writeFileSync('to.txt', append, {
    flag: 'a'
})