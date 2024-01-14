const emailModel = require("../model/email.model");

// require('dotenv').config()
// const DB = require('../model/db')
// DB.conect()

 

async function create(data) {
  return await emailModel.create(data);
}

async function read(filter) {

  return await emailModel.find({ ...filter, status: { $nin: ["trash"] }});
}
async function readOne(filter) {

  return await emailModel.findOne({ ...filter, status: { $nin: ["trash"] }});
}



async function readTrash(email) {
const query =  emailModel.find()
const myQuery = query.or([{to:email, status:"trash"},{from:email, status:"trash"}])
const trash = await myQuery.exec()
     return trash
  
}

async function update(id,data) {
  console.log(data);
  console.log( id);
  return await emailModel.updateOne({_id: id}, {status:  data});
}

const go = () => {
  let messageobj = {
    from: "aharon@gmail.com",
    to: "shmuel@gmail.com",
    title: "first massage",
    message: "this is my first message",
  };
  const newNassage = create(messageobj);
};

// go()
readTrash("aharon@gmail.com" )

module.exports = {
  create,
  read,
  readOne,
  readTrash,
  update,
};
