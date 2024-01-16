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
     },
     tag: {
        read: [{
          type: String,
          required: true,
        }],
        unread: [{
          type: String,
          required: true,
        }],
        trashRead: [{
          type: String,
          required: true,
        }],
        trashUnRead: [{
          type: String,
          required: true,
        }],
      },
})


const userModel = mongoos.model('users', emailUserSchema)

module.exports = userModel;