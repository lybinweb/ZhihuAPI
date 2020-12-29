const mongoose = require('mongoose')
// 解决 Mongoose 的 useFindAndModify 警告
mongoose.set('useFindAndModify', false)

const { Schema ,model} = mongoose

// 话题
const topicSchema = new Schema({
    _v: { type: Number, select: false },
    name: { type: String, required: true },
    // 头像
    avatar_url: { type: String },
    introduction:{type:String,select:false},
})

module.exports = model('Topic',topicSchema)