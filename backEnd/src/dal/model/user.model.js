const mongoos = require('mongoose')


const UserSchema = new mongoos.Schema({
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
     },
    img: {
        type :String,
        required:false
    } 
     
})


const userModel = mongoos.model('userMail', UserSchema)

module.exports = userModel;