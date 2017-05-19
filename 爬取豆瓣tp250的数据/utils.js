const saveJSON = function(path, json) {
    const fs = require('fs')
    const s = JSON.stringify(json, null, 2)
    fs.writeFile(path, s, function(err) {
        if(err !== null) {
            console.log('写入错误', err)
        } else {
            console.log('写入成功')
        }
    })
}

exports.save = saveJSON