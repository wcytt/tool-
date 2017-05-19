// 数组的去重
var quis = function(arr) {
    var res = []
    for(var i = 0; i < arr.length; i++) {
        if(!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
var q = [1,3,4,6,8,3,1,5,6,4]
// console.log(quis(q))
// 数组去重的其他方法
var quis1 = function(arr) {
    var obj = {}
    for(var i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0
    }
    return Object.keys(obj)
}
// console.log(quis1(q))

var quis2 = function(arr) {
    var obj = {}
    for(var i of arr) {
        obj[i] = 0
    }
    return Object.keys(obj)
}
// console.log('quis2', quis2(q))

// Array.from() 可以转换成数组
// new Set(arr) 可以把 arr 转换成 Set 类型
// 利用 Set （没有重复元素的特性）
var array = Array.from(new Set(q))
// console.log('array 的去重', array)

// 闭包 每次调用加一
var foo = function() {
    var count = 0
    return function addone() {
        count++
        console.log(count)
    }
}
var add = foo()
// 每次调用 add() 会加一并返回
add()

// 数组的深拷贝
// 可以使用  JSON.stringify() 和 JSON.parse()
// 或者使用 slice() 和 concat() 来实现

// 对象的深拷贝
var deepCopy = function(obj) {
    var res = {}
    for(var key in obj) {
        if(typeof obj[key] === 'object') {
            res[key] = deepCopy(obj[key])
        } else {
            res[key] = obj[key]
        }
    }
    return res
}


// 利用递归，把任意深度的字符串找出来
// typeof 区分 string number object function null undefined
// 注意 typeof 不能区分 Array 和 Object
// 而 instenceof 可以区分 Array 和 Object
// 例 arr instenceof Array 返回的是 true
// 而  instenceof Object 返回的是 false
var data = {
    'data1' : '123',
    'data2' : '234',
    'data3' : '456',
    'data4' : ['345', '121233', '12sdf3'],
    'data5' : ['12323', '12356'],
    'data6' : {
        'data7' : '128563',
        'data8' : '134523',
    }
}
var result = []
var getStr = function(data) {
    var type = typeof(data)
    if(type === 'string') {
        result.push(data)
    } else if(type === 'object') {
        if(data instanceof Array) {
            data.forEach((elt) => {
                getStr(elt)
            })
        } else if(data instanceof Object) {
            var keys = Object.keys(data)
            keys.forEach((key) => {
                getStr(data[key])
            })
        }
    }
}
// getStr(data)
// console.log('getStr', result)

// 产生随机数（20 - 50） 之间的数
// 返回一个对象，对象的 key 是随机数，value 是随机数出现的次数
var num = function() {
    var r = Math.floor(Math.random() * 31 + 20)
    return r
}
var test_num = function(cishu) {
    var res = {}
    for(var i = 0; i < cishu; i++) {
        var n = num()
        if(res[n] === undefined) {
            res[n] = 0
        }
        res[n]++
    }
    return res
    // return Object.assign({}, res)
}
// test_num(20)

//
class formatter {
    constructor(list) {
        this.list = list
    }
    convert(form) {
        var list = this.list
        for (var key in list) {
            if(key === form) {
                return list[key]
            }
        }
    }
}
var week = {
    '1': '星期一',
    '2': '星期二',
    '3': '星期三',
    '4': '星期四',
}
var f = new formatter(week)
// f.convert(2)

// 字符串的 substring 和 substr 的区别，都是对字符串的 截取
// substring 的第一个参数是字符串 开始下标，第二个参数是 结束下标（不包含）
// substr 的第一个参数是字符串 开始下标，第二个参数是 长度
substring(star, end)
substr(str, lenght)

// 数组排序 sort方法
var smallToLarge = function(arr) {
    var arr1 = arr.slice(0)
    var difference = function(a, b) {
        return a - b
    }
    return arr.sort(difference)
}
var arr = [2,5,1,3,7,5,9,0,6]
smallToLarge(arr)
// 返回的是 [0, 1, 2, 3, 5, 5, 6, 7, 9]arr

// js 中判断数据类型的三种方法
/*
1、用 typeof , 不能判断 Array 和 Object 返回的都是 Object
   typeof 可以区分 number string null undefined bollean function
2、用 instanceof 使用来判断 A 是否是 B 的实类
    可以用来判断是否 arr 和 obj
3、通用的方法
    Object.prototype.toString.call() 参数是需要判断的数据
    返回的是 [object String] ```第二个是 Number,Boolean,Undefined,
    Null,Function,Date,Array,Object,RegExp,Error等
*/

// 斐波那契数
var fib = function(n) {
    if(n === 1 || n ===2) {
        return 1
    } else {
        return fib(n-2) + fib(n-1)
    }
}


// es7 的 async await
const testAsync = async () => {
    try {
        const t1 = await f1()
        console.log(t1)
        const t2 = await f2()
        console.log(t2)
    } catch (err) {
        console.log(err)
    }
}

// 萧大的写法
const 后台调用 = function(函数) {
    setTimeout(function() {
        函数()
    }, 0)
}

后台调用(function() {
    const t1 = await f1()
    console.log(t1)
    const t2 = await f2()
    console.log(t2)
})

// HTTP 协议
/*
* 协议，主机，端口，路径
* 服务器的端口是确定的（向操作系统申请的，因为别人要访问，所以是确定的）
* 客户端的端口是随机的（操作系统随机分配的，一个程序是可以用多个端口的）
*/

// 群里的问题，块级作用域
// 写法 1
for(var i = 0; i < message_ids.length; i++) {
    (function(i) {
        get_message_by_id(message_ids[i], function(err, message) {
            if(err) return next(err)
            message[i] = message
            proxy.trigger('message_ready')
        })
    })(i)
}

// 写法 2
for(var i = 0; i < message_ids.length; i++) {
    get_message_by_id(message_ids[i], function(err, message) {
        if(err) return next(err)
        message[i] = message
        proxy.trigger('message_ready')
    })
}
// 写法 3
var a = function(i) {
    get_message_by_id(message_ids[i], function(err, message) {
        if(err) return next(err)
        message[i] = message
        proxy.trigger('message_ready')
    })
}
for(var i = 0; i < message_ids.length; i++) {
    a(i)
}

// 闭包产生独立作用域, 这样回调就不会都拿到最后一个 i
// 然而用 let 就好了
// 把第二种里 235 行的 var 改成 let, 就跟第一种一模一样
// 测试一下
const fs = require('fs')

var testA = function() {
    for(var i = 0; i < 5; i++) {
        (function(i) {
            fs.readFile('aa.txt', function(err, data) {
                if(err) {
                    console.log('in testA: ', i)
                }
            })
        })(i)
    }
}

var testB = function() {
    for(var i = 0; i < 5; i++) {
        fs.readFile('aa.txt', function(err, data) {
            if(err) {
                console.log('in test b:', i)
            }
        })
    }
}

var testC = function() {
    for(let i = 0; i < 5; i++) {
        fs.readFile('aa.txt', function(err, data) {
            if(err) {
                console.log('in test c:', i)
            }
        })
    }
}

testA()
testB()
testC()

// aa.txt 不存在，就会 err 这里只是测试 i 的值
// 输出的结果是
// testA 的输出是 0 1 2 3 4
// testB 的输出是 5 5 5 5 5
// testC 的输出是 0 1 2 3 4
// testC 是把 testB 里面的 var 换成了 let

// ajax 的封装
var ajax = function(method, path, headers, data, callback) {
    var r = new XMLHttpRequest()
    r.open(method, path, true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function() {
        if(r.readyState === 4 && r.status === 200) {
            callback(r.response)
        }
    }
    r.send(data)
}

// BOM
/*
* location     管理 URL
* navigator    管理浏览器（用来查询浏览器信息的）
* history      管理历史记录
* screen       管理屏幕
* window       管理浏览器所有的东西
*
* location.reload()         刷新当前页面
* location.replace('/')     有参数（），替换当前页面
* navigator.userAgent       浏览器版本（字符串）
* navigator.platform        操作系统（字符串）
* history.length            历史列表里 url 的数量
* history.back()            后退
* history.forward()         前进
* history.go(-2)            点击 2 次后退
*
* history.pushState(null, 'title', '/profile')
* 改变 url 不进行跳转，并生成历史记录
* 可以用来做单页应用（spa）
* 三个参数分别是
    * 自定义对象，
    * 新页面的标题（还没有实现,其实可以用（document.title = ''）实现），
    * 新页面的地址
* var state = {
*     page: 'settings'
* }
* history.pushState(state, 'settings', '/settings')
* state 可以在以下得到
* 用户在点击 前进 后退的按钮 会触发 window 的 popstate 事件
* window.addEventListener('popstate', function(e) {
*       var state = e.state
*       console.log(' pop state', state)
*       // 这里的 state 就是 history.pushState() 的第一个参数
* })
*
* replaceState 和 pushState 一样，只是不生成一条历史记录
*
* 他们只能在同域名下
* 可以使用 querystring
* 主要来做单页应用（spa）
*  */


// 类的主要优势是 可批量制造 object 和 可封装方法
// es5 的写法
var Student = function(name, height) {
    this.name = name
    this.height = height
}
Student.prototype.greeting = function() {
    console.log(`hello, i am ${this.name}`)
}
Student.prototype.update = function(name, age) {
    this.name = name
    this.age = age
}
var s1 = new Student('hua', 169)

// es6 的类的写法
class Student {
    // 初始化的套路
    constructor(name, height) {
        this.name = name
        this.height = height
    }

   // 方法
    greeting() {
        console.log(`hello, i am ${this.name}`)
    }
    update(name, age) {
        this.name = name
        this.age = age
    }
}
// s1 new 的时候可以有参数，可以没有参数（undefined）
var s1 = new Student('hua', 169)
// 如果要加方法还是要用 protocol


// this 以及 3 个关联的函数
// this 是在函数里面的 是在运行的时候才确定的
// 谁调用了函数谁就是 this
// 仔细看下面的例子
var gre = function() {
    console.log(`hi `, this.name)
}
var o1 = {
    name: 'huhuhu',
}
var o2 = {
    name: 'hahaha',
}
o1.hi = gre
o2.hi = gre
o1.hi()
o2.hi()
// 直接调用 gre() 的话调用者是全局对象
// 浏览器的全局对象是 window
// node.js 里面的全局对象是 global

// apply call bind 三个函数
// 他们的 第一个参数 都是用来指定函数里面的 this
// apply 第二个参数 是要传给函数的参数列表（arguments）
// call 第 2、3、4 ... 个参数会依次传递进去
// bind 返回的一个函数， 第二个参数 是被调用的时候会优先传入的参数


// var str = 'a=2&d=5&e=4&f=6'
// const foo = function(str) {
//     let res = {}
//     let s = str.split('&')
//     for(var i = 0; i < s.length; i++) {
//         const [k, v] = s[i].split('=')
//         res[k] = v
//     }
//     return res
// }
// foo(str)
// 或者用 map
// const foo1 = function(str) {
//     let res = {}
//     let s = str.split('&')
//     s.map((key) => {
//         let [k, v] = key.split('=')
//         res[k] = v
//     })
//     return res
// }