const path = require('path')
class HomeCtl {
    index(ctx) {
        // 中间件函数
        ctx.body = '<h1>这是主页</h1>'
    }

    // 上传图片接口
    upload(ctx) {
        const file = ctx.request.files.file;
        const basename = path.basename(file.path)
        ctx.body = { url:`${ctx.origin}/uploads/${basename}` };
    }


}

module.exports = new HomeCtl()