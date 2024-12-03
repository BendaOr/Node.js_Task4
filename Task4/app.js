const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, 'text');
let line = '';
for (let i = 1, j = 0; i <= 10; i++, j++) {
    let textIn = fs.readFileSync(`${dirPath}/${i}.txt`, 'utf-8');
    let arr = textIn.split('\r\n');

    for (let j = 0; j < i; j++) {
        line += '\n' + arr[j].split(' ');
    }

}

let textOut = line.substring(1);
fs.writeFileSync(`${dirPath}/output.txt`, textOut);