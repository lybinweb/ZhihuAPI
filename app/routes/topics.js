const jwt = require('koa-jwt')
const Router = require('koa-router')
const { secret } = require('../config')
const router = new Router({prefix:'/topics'})
const { find, findById, create, update, listFollowers ,checkTopicExist} = require('../controllers/topics')

/*
认证登录中间件
使用koa-jwt库
*/
const auth = jwt({secret})


router.get('/',find)

router.post('/',auth, create)

router.get('/:id',checkTopicExist,findById)

// patch可以更新多个字段
router.patch('/:id',auth,checkTopicExist,update)

// 获取话题粉丝接口
router.get('/:id/followers',checkTopicExist,listFollowers)


module.exports = router;