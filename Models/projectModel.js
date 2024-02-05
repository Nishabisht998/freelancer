const {Schema,model} = require('../connection');
const mySchema=new Schema({
    name:'String',
})
module.exports=model('project',mySchema)