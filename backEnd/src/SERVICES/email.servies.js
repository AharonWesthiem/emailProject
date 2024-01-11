const emailController = require("../dal/controller/email.controller")

async function getAllMessages(){
  return await emailController.read()
}

async function addNewMassage (data){
  let massageObj = {
    from: data.from,
    to: data.to,
    title: data.title,
    message: data.message,
    status: data.status,
    createDate: new Date()
  }
  const newMassage = emailController.create(massageObj)
  return newMassage
}

async function getMesage(type,email){
  if(type === "from"){
    let messages = emailController.read({from:email})
    return await messages
  } 
  if(type === "to"){
    let messages = await emailController.read({to:email})
  return  messages
  } 
  return
}

async function  updateMesage(id, data){
  let messageToDelete = await emailController.updateMesage(id,data)
  return messageToDelete
}

module.exports = {
  getAllMessages, 
  addNewMassage, 
  getMesage,
  updateMesage}