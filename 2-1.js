const fs = require ('fs')

fs.readFile('from.txt','utf8', function (err, res){
    if(err) return err
    fs.writeFile('to.txt', res, function(err){
        if(err) return err
    })
} )