const jwt = require('koa-jwt')
const Router = require('koa-router')
const { secret } = require('../config')
const router = new Router({prefix:'/users'})
const { find, findById, create, update, delete: del,
    login, checkOwner,
    listFollowing, listFollowers, checkUserExist, follow, unfollow,
    listFollowingTopics, followTopic, unfollowTopic,
    listQuestions
} = require('../controllers/users')

const { checkTopicExist} = require('../controllers/topics')

/*
认证登录中间件
1.自己编写 
// const auth = async (ctx,next) => {
//     // 使用短路语法将没有传递authorization字段即authorization字段为undefined的情况去除
//     const { authorization = '' } = ctx.request.header
//     // 取出token
//     const token = authorization.replace('Bearer ', '')
//     try {
//         const user = jsonwebtoken.verify(token, secret)
//         ctx.state.user = user
//     } catch (err) {
//         ctx.throw(401,err.message)
//     }
//     await next()
// }
2.使用koa-jwt库
*/
const auth = jwt({secret})

router.get('/',find)

router.post('/', create)

router.get('/:id',findById)

// patch可以更新多个字段
router.patch('/:id',auth,checkOwner,update)

router.delete('/:id',auth,checkOwner, del)

// 登录接口
router.post('/login', login)

// 获取关注接口
router.get('/:id/following', listFollowing)
// 获取粉丝接口
router.get('/:id/followers',listFollowers)

// 关注某人
router.put('/following/:id',auth,checkUserExist,follow)
// 取消关注
router.delete('/following/:id', auth, checkUserExist,unfollow)


// 话题接口
router.get('/:id/followingTopics', listFollowingTopics)

// 关注话题接口
router.put('/followingTopics/:id', auth, checkTopicExist, followTopic)
// 取消关注话题接口
router.delete('/followingTopics/:id', auth, checkTopicExist,unfollowTopic)

// 获取问题接口
router.get('/:id/questions', listQuestions)



module.exports = router;