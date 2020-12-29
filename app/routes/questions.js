const jwt = require('koa-jwt')
const Router = require('koa-router')
const { secret } = require('../config')
const router = new Router({prefix:'/questions'})
const { find, findById, create, update, delete: del,
    checkQuestioner, checkQuestionExist }
    = require('../controllers/questions')

/*
认证登录中间件
使用koa-jwt库
*/
const auth = jwt({secret})


router.get('/',find)

router.post('/',auth, create)

router.get('/:id',checkQuestionExist,findById)

// patch可以更新多个字段
router.patch('/:id',auth,checkQuestionExist,checkQuestioner,update)

router.delete('/:id',auth, checkQuestioner,del)


module.exports = router;