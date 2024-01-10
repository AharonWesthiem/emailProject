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

    status:{
        type: Boolean,
        default : false
    },
    
    isActive : {
        type: Boolean,
        default : false
    }


})

const emailModel = mongoos.model('email', emailSchema)

module.exports = emailModel;