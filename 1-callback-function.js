function info(firstName, lastName, callback) {
  let result = firstName+" "+ lastName
  mergeText(result)
}


info("Ali", "Ahmadi", mergeText)

function mergeText(str) {
    console.log(`full name: ${str}`);
}