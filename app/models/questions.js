const mongoose = require('mongoose')
// 解决 Mongoose 的 useFindAndModify 警告
mongoose.set('useFindAndModify', false)

const { Schema ,model} = mongoose

// 问题
const questionSchema = new Schema({
    _v: { type: Number, select: false },
    title: { type: String, required: true },
    description: { type: String },
    question: { type: Schema.Types.ObjectId, ref: 'User', required: false, select: false },
    
})

module.exports = model('Question',questionSchema)