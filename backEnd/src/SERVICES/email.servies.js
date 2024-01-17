const emailController = require("../dal/controller/email.controller");
const { tagToUpdate } = require("./user.servies");
const userController = require('../dal/controller/user.controller')
async function getAllMessages() {
  return await emailController.read();
}

async function addNewMassage(data) {
  let massageObj = {
    from: data.from,
    to:data.to,
    title: data.title,
    message: data.message,
    createDate: new Date(),
  };
  const addNewMessage = await emailController.create(massageObj);
  tagToUpdate(addNewMessage.to,addNewMessage._id)
  // const tagToUpdate = 
  // const update = await userController.tagToUpdate(newMassage.to,"unread",  tagToUpdate)
  // return {newMassage, update};
}

// async function tagToUpdate(user, messageId){
//   const update =  await userController.tagToUpdate(user, "unread", messageId)
//   return update
// }
 
async function getMessage(type, email) {
  if (type === "from" ||  type === "to") {
    return emailController.read({ [type]: email });
  }
   

   
  if (type === "trash") {
    return emailController.readTrash( email);
  }
  }
     

   

async function MessageToUpdata(id, status) {
  try {
   const exisingMessage = await emailController.readOne({_id: id})
  //  console.log({_id: id});
  if(!exisingMessage){
    throw new Error("Message not found")
  } 
  let updateMassage = await emailController.update({_id:id}, status);
  return updateMassage
  } catch (error) {
    console.error("Error updating message:", error.message)
    throw error
  }
}

module.exports = {
  getAllMessages,
  addNewMassage,
  getMessage,
  MessageToUpdata,
  tagToUpdate
};
