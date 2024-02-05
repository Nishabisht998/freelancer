const {Schema, model }  = require('../connection');
const mySchema=new Schema({
    title: String,
    description: String,
    skills: String,
    money: Number,
    createdAt: Date,
})
module.exports=model('job', mySchema)