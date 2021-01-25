const fs = require('fs')

// ============== solution 1 ============
// fs.readFile('from.txt', function (err, res) {
//     if (err) return err
//     fs.writeFile('to.txt', res, function (err) {
//         if (err) return err
//         fs.readFile('append.txt', function (err, res) {
//             if (err) return err
//             fs.writeFile('to.txt',res, {flag: 'a'}, function (err) {
//                 if (err) return err
//             })
//         })

//     })
// })

// ============== solution 2 ===========
fs.readFile('from.txt', 'utf8', function (err, res) {
    if (err) return err
    fs.writeFile('to.txt', res, function (err) {
        if (err) return err
        fs.readFile('append.txt', 'utf8', function (err, res) {
            if (err) return err
            fs.appendFile('to.txt', res, function (err) {
                if (err) return err
            })
        })

    })
})