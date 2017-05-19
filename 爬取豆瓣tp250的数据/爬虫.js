// 引入库
const request = require('sync-request')
const cheerio = require('cheerio')
const fs = require('fs')

// debugger 函数
const log = console.log.bind(console, '### debugger ###')

// 创建类
class Movie {
    constructor() {
        this.name = ''
        this.score = 0
        this.quote = ''
        this.ranking = 0
        this.coverUrl = ''
        this.ratings = 0
    }
}

// 缓存网页
const cachedUrl = function(url) {
    let path = url.split('?')[1] + '.html'
    let exists = fs.existsSync(path)
    log('cached url exists ', exists)
    if(exists) {
        let data = fs.readFileSync(path, 'utf8')
        return data
    } else {
        let r = request('GET', url)
        // log('moviesFromUrl de r ', r)
        // body 就是服务器返回的 response
        let body = r.getBody('utf-8')
        // 写入文件
        fs.writeFileSync(path, body, 'utf8')
        return body
    }
}

// 分析网页的结构来获取想要的数据
const moviesFromDiv = function(div) {
    let e = cheerio.load(div)
    // 创建实例
    let movie = new Movie()
    movie.name = e('.title').text()
    movie.score = e('.rating_num').text()
    movie.quote = e('.inq').text()
    let pic = e('.pic')
    movie.ranking = pic.find('em').text()
    movie.coverUrl = pic.find('img').attr('src')
    movie.ratings = e('.star').find('span').last().text().slice(0, -3)
    // log('moviesFromDiv', movie.ratings)
    return movie
}

// 从 url 中获取
const moviesFromUrl = function(url) {
    let body = cachedUrl(url)
    // cheerio.load 会把 html 文本解析成一个可以操作的 dom
    // 可以使用 e 来操作 dom
    let e = cheerio.load(body)
    // 用 dom 把想要的信息得到
    let movieDivs = e('.item')
    let movies = []
    for(var i = 0; i < movieDivs.length; i++) {
        let div = movieDivs[i]
        let d = e(div).html()
        // log('moviesFromUrl, ', d)
        let m = moviesFromDiv(d)
        movies.push(m)
    }
    return movies
}

// 保存成 json 格式
const saveMovies = function(movies) {
    let s = JSON.stringify(movies, null, 2)
    let path = 'douban.json'
    fs.writeFileSync(path, s)
}

// 主程序入口
const __main = function() {
    let movies = []
    for(var i = 0; i < 10; i++) {
        let start = i * 25
        let url = 'https://movie.douban.com/top250?start=' + start
        let ms = moviesFromUrl(url)
        movies = movies.concat(ms)
    }
    // saveMovies(movies)
    let utils = require('./utils')
    utils.save('dmyy123.json', movies)
}
__main()

// 下载封面图
// request 库
// request(url).pipe(fs.createWriteStream(path))
