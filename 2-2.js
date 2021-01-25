const fs = require('fs')



let from = fs.readFileSync('from.txt', 'utf8')
fs.writeFileSync('to.txt', from)