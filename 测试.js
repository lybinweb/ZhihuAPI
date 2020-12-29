const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
    if (ctx.url === '/') {
        ctx.body = '主页'
    } else if (ctx.url === '/users') {
        if (ctx.method === 'GET') {
            ctx.body = '用户列表'
        } else if (ctx.method === 'POST') {
            ctx.body = '创建用户'
        } else {
            ctx.stat = 405
        }
        
    } else if (ctx.url.match(/\/users\/(\w+)/)[1]) {
        const userid = ctx.url.match(/\/users\/(\w+)/)[1]
        ctx.body = `这是用户id：${userid}`
        ctx.state = 404
    }
})



app.listen(4000)