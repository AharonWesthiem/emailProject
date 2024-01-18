const mongoose = require("mongoose")


const emailSchema = new mongoose.Schema({

    from: {
        type: String,
        required: true
    },

    to: [{
        type: String,
        required: true,

    }],

    title: {
        type: String,
    },

    message: {
        type: String,
    },

    createDate: {
        type: Date,
        default: Date.now

    },

    tags: [{
        email: {
            type: String,
        },
        status: [{
            type: String,
            enum: ["read", "unread", "trash"],
            default: ["unread"]
            
        }],
    }]
})

//  default: ["unread"], // Set default value for the entire array







const emailModel = mongoose.model('email', emailSchema)

module.exports = emailModel;