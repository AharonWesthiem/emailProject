const mongoos = require('mongoose')


const emailUserSchema = new mongoos.Schema({
    firstName : {
        type :String,
        required: true
    },
    lastName : {
        type :String,
        required: true
    },
    email : {
        type :String,
        required: true,
        unique : true
    },
    password : {
        type :String,
        required: true,
        
    },
    createdDate : {
        type : Date,
        default : Date.now
     }
})


const userModel = mongoos.model('userE', emailUserSchema)

module.exports = userModel;