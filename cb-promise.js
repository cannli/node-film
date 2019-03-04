const fs = require('fs')
const util = require('util')
const co = require('co')
// fs.readFile('./package.json', (err, data) => {
//     if (err) return comsole.log(err)
//     data = JSON.parse(data)
//     console.log(data.name)
// })
// 第二阶段 promise
function readFileAsync(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

readFileAsync('./package.json').then(data => {
    data = JSON.parse(data)
    console.log(data.name)
}).catch(err => {
    console.log(err)
})


util.promisify(fs.readFile)('./package.json').then(JSON.parse).then(data => {
    console.log(data.name, ' util')
}).catch(err => {
    console.log(err)
})

// 第三阶段co
co(function *() {
    let data = yield util.promisify(fs.readFile)('./package.json')
    data = JSON.parse(data)
    console.log(data.name, 'co')
})

// 第四阶段 async 统一世界
const readAsync = util.promisify(fs.readFile)
async function init() {
    let data = await readAsync('./package.json')
    data = JSON.parse(data)
    console.log(data.name, 'async')
}
init ()