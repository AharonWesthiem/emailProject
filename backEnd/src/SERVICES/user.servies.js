const emailController = require('../dal/controller/email.controller')
const userController = require('../dal/controller/user.controller')


async function getUser(data){
    return userController.readOne(data)
}







async function exisingMessage(data){
    const messageExist = await emailController.readOne({_id: data.id})
    console.log({_id: data.id});
  if(!messageExist){
    throw new Error("Message not found")
  } 
  return data.body
}

async function tagToUpdate(data){
    exisingMessage(data)
    const userTugToUpdate = data.to
     userController.tagToUpdate(userTugToUpdate)
}

module.exports ={
     tagToUpdate
    
    }