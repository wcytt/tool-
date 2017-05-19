// 引入 express 创建实例赋值给 app
const express = require('express')
const app = express()
// 引入其他的库
const fs = require('fs')
const bodyParse = require('body-parser')
// 定义 log 函数
const log = console.log.bind(console, '@debug@')

const todoList = [
    {
        id: 1,
        task: 'hahaha',
    },
    {
        id: 2,
        task: 'heihei',
    }
]

// 配置静态文件目录
app.use(express.static('static'))
// 把前端发来的数据 用 json 解析
app.use(bodyParse.json())

const sendHtml = function(path, response) {
    const options = {
        encoding: 'utf-8'
    }
    fs.readFile(path, options, function(err, data) {
        if(err === null) {
            log('send data', data)
            // 发送数据到浏览器
            response.send(data)
        } else {
            log('sendHtml 读取文件 err', err)
        }
    })
}

const todoAdd = function(todo) {
    if(todoList.length === 0) {
        todo.id = 1
    } else {
        todo.id = todoList[todoList.length - 1].id + 1
    }
    todoList.push(todo)
    return todo
}

const todoUpdate = function(todo) {
    const id = todo.id
    for(let i = 0; i < todoList.length; i++) {
        let t = todoList[i]
        if(t.id === id) {
            t.task = todo.task
            return t
        }
    }
    // 没找到 返回 todo
    return todo
}

const todoDelete = function(id) {
    id = Number(id)
    let index = -1
    for(let i = 0; i < todoList.length; i++) {
        let t = todoList[i]
        if(t.id === id) {
            index = i
            break
        }
    }
    if(index > -1) {
        let todo = todoList.splice(index, 1)
        return todo[0]
    } else {
        // 没找到 返回 null
        return null
    }
}

const sendJson = function(response, obj) {
    let data = JSON.stringify(obj, null, 2)
    response.send(data)
}

app.get('/', function(request, response) {
    const path = 'index.html'
    const options = {
        encoding: 'utf-8'
    }
    fs.readFile(path, options, function(err, data) {
        if(err === null) {
            // 发送数据到浏览器
            response.send(data)
        } else {
            log('sendHtml 读取文件 err', err)
        }
    })
})

app.get('/todo/all', function(request, response) {
    let r = JSON.stringify(todoList, null, 2)
    response.send(r)
})

app.post('/todo/add', function(request, response) {
    // log('apptodoadd', request.body)
    let todo = request.body
    let t = todoAdd(todo)
    sendJson(response, t)
})

app.post('/todo/update/:id', function(request, response) {
    let id = request.params.id
    // log('todo update id', request.body, id)
    let todo = request.body
    let t = todoUpdate(todo)
    sendJson(response, t)
})

app.get('/todo/delete/:id', function(request, response) {
    let id = request.params.id
    let t = todoDelete(id)
    sendJson(response, t)
})

const server = app.listen(9000, function() {
    let host = server.address().address
    let port = server.address().port
    log('host and port', host, port)
})
