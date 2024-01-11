const emailModel = require("../model/email.model")

// require('dotenv').config()
// const DB = require('../model/db')
// DB.conect()


async function read(){
  return await emailModel.find()
}

async function create(data) {
    return await emailModel.create(data)
  }

  async function read(filter){
    // console.log(filter);
     return await emailModel.find({...filter, "status":{$nin:["trash"]}})
  }

  async function updateMesage(id){
     return await emailModel.updateOne()
  }

const go = () => {
    
 let messageobj = {
    from: "aharon@gmail.com",
    to: "shmuel@gmail.com",
    title: "first massage",
    message: "this is my first message"
 }
 const newNassage = create(messageobj)
}

// go()

module.exports = {
  create,
  read,
  updateMesage}