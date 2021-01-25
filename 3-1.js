const fs = require('fs')

fs.writeFile('newFile.txt', '', function (err) {
    if (err) return err

    // ==================  The async method of exists is depricated ================== 
    fs.exists('newFile.txt', (exists) => {
        if (exists) console.log('file already exists');

    })
})