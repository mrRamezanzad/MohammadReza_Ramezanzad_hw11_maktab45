// mapping based on id's 
// Example: mohammad's phone numbers are 09111111, 093332423
// TODO:
// 1- read files & make them as objects
// 2- merge based on id 
// 3- save into information.txt

let fs = require('fs'),
    usersObj = [],
    numbersObj = [],
    informations = []

// read files
fs.readFile('names.txt', 'utf8', function (err, res) {
    if (err) return err
    var names = res
    fs.readFile('numbers.txt', 'utf8', function (err, res) {
        if (err) return err
        var numbers = res
        convertToObject(names, numbers)
        mergeInfo()
        saveInformation()

    })
})

function convertToObject(names, numbers) {

    var strNames = names.split('\n'),
        strNumbers = numbers.split('\n'),
        users = [],
        numbers = []

    for (var i = 0; i < strNames.length; i++) {
        var user = {}

        users.push(strNames[i].split('-'))
        user.uid = parseInt(users[i][0])
        user.name = users[i][1].replace('\r', '')
        if (!isNaN(user.uid)) usersObj.push(user)
    }

    for (var i = 0; i < strNumbers.length; i++) {
        var user = {}
        numbers.push(strNumbers[i].split('-'))
        user.uid = parseInt(numbers[i][0])
        user.number = parseInt(numbers[i][1])
        if (!isNaN(user.uid)) numbersObj.push(user)

    }

}

function mergeInfo() {
    informationS = [...usersObj]
    numbersObj.forEach(el => {
        let userIndex = informationS.findIndex(user => user.uid === el.uid)
        if (informationS[userIndex].numbers) informationS[userIndex].numbers.push(el.number)
        else informationS[userIndex].numbers = [el.number]
    })
}

function saveInformation() {
    let processedInfo = ''

    informationS.forEach(user => {

        processedInfo += typeof user.numbers == 'undefined' ? `${user.name} hasn't any phone number. ` :
            user.numbers.length > 1 ? `${user.name}'s phone numbers are ${user.numbers}\n` :
            `${user.name}'s phone number is ${user.numbers}\n`
    });
    console.log(processedInfo);

    // save the processed info
    fs.writeFile('information.txt', processedInfo, function (err) {
        if (err) return err
    })
}