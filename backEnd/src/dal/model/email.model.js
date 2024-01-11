const mongoos = require("mongoose")


const emailSchema = new mongoos.Schema({

    from: {
        type: String,
        required: true
    },

    to: [{
        type: String,
        required: true,
    }],

    title : {
        type: String,
    },

    message: {
        type: String,
    },

    createDate: {
        type : Date,
        default: Date.now
    },


    status:[{
        type: String,
        enum: ["read", "unread", "trash"],
        default: "unread"
    }],
   


})

const emailModel = mongoos.model('email', emailSchema)

module.exports = emailModel;