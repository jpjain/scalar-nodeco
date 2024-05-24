const fs=require('fs')

//let filecontent=fs.readFileSync('1.txt')
//console.log('content of file is' + filecontent)
//fs.writeFileSync('one.txt','This line is added')

//fs.appendFileSync('1.txt','This is appended')
//fs.mkdirSync('mydir1')


let dirpath='C:\\Users\\Jayaprakash\\OneDrive\\Desktop\\Shreya\\mydir'
let folder=fs.readdirSync(dirpath)
console.log('folder content',folder)

let doesexist=fs.existsSync('os.js')
let doe=fs.existsSync('mydir')
console.log(doe)

fs.rmdirSync('mydir1')
