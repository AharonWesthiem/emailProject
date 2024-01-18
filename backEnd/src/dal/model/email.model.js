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

    title : {
        type: String,
    },

    message: {
        type: String,
    },

    createDate: {
        type: Date,
        default: Date.now




    // tag: {
    //     read: [{
    //       email: {
    //         type: String,
    //         required: true,
    //       },
    //       status: {
    //         type: String,
    //         enum: ["unread", "read", "trash"],
    //         default: "unread",
    //       },
    //     }],
    //     trash: [{
    //       email: {
    //         type: String,
    //         required: true,
    //       },
    //       status: {
    //         type: Boolean,
    //         default: false,
    //       },
    //     }],
    //   },
    // });




const emailModel = mongoose.model('email', emailSchema)

module.exports = emailModel;