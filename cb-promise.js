const fs = require('fs');
const fsPromises = fs.promises;// NODE 封装的支持promise的fs版本
const util = require('util');

fs.readFile('./package.json', (err, data) => {
    if(err) return console.log(err);
    data = JSON.parse(data);
    console.log('111', data.name)
})

fsPromises.readFile('./package.json')
    .then(data => console.log('222',data))
    .catch(err => console.log(err))

async function readFile (path) {
    try {
        const result = await fsPromises.readFile(path);
        console.log('333', JSON.parse(result));
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
    .then(data => console.log('444', data))
    .catch(err => console.log(err));

const readFileUtil = util.promisify(fs.readFile);
readFileUtil('./package.json')
    .then(JSON.parse)
    .then(data => console.log('555',data))
    .catch(err => console.log(err));


// .then(JSON.parse) ：注意这种写法
