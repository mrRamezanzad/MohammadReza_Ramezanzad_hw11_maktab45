const fs = require('fs')

fs.writeFileSync('newFile.txt', '')
fs.existsSync('newFile.txt') ? console.log("file exists") : console.log("file doesn't exists");