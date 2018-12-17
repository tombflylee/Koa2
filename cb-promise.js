const fs = require('fs');
const fsPromises = fs.promises;// NODE 封装的支持promise的fs版本

fs.readFile('./package.json',(err,data) => {
    if(err) return console.log(err)
    data = JSON.parse(data);
    console.log(data.name)
})

fsPromises.readFile('./package.json')
    .then(data => console.log(data))
    .catch(err => console.log(err))

async function readFile (path) {
    try {
        const result = await fsPromises.readFile(path);
        console.log(JSON.parse(result));
    }catch(err) {
        console.log(err)
    }
}
readFile('./package.json')

// 自己实现的fsPromise
function myFsPromise (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (data, err) => {
            if(err) reject(err);
            else resolve(data)
        })
    })
}
myFsPromise('./package.json')
    .then(data => console.log(data))
    .catch(err => console.log(err))