const emailController = require("../dal/controller/email.controller");
const { tagToUpdate } = require("./user.servies");
const userController = require('../dal/controller/user.controller')





async function getAllMessages() {
  return await emailController.read();
}




async function addNewMassage(data) {
  let arr =  data.to
  if (data.to.includes(",")){
    arr = data.to.split(",")

  }

  let users = await userController.readList(arr)
  console.log(users)

  let massageObj = {
    from: data.user,
    to: users,
    title: data.title,
    message: data.message,
    createDate: new Date(),
    tags: []

  }
  let fromtag = {
    email: data.user,
    status:"read"
  }
  massageObj.tags.push(fromtag)
  for (let user of users) {
    let tag = {
      email: user,
      status: "unread"
    }
    console.log(tag)
    massageObj.tags.push(tag)
  }


  const addNewMessage = await emailController.create(massageObj);
  return addNewMessage;
}


// tagToUpdate(addNewMessage.to,addNewMessage._id)
// const tagToUpdate = 
// const update = await userController.tagToUpdate(newMassage.to,"unread",  tagToUpdate)



// async function tagToUpdate(user, messageId){
//   const update =  await userController.tagToUpdate(user, "unread", messageId)
//   return update
// }

async function getMessage(type, email) {
  if (type === "from" || type === "to") {
    //צריך לחפש מה הסטטוס של ההודעה 
    return emailController.read({ [type]: email });

  }
  if (type === "trash"||type === "unread") {
    
    return emailController.readTresh(email,type);
  }
}




async function MessageToUpdata(id, email, update) {
  console.log(id, email, update)

  let user = await emailController.readToUpdate(id, email, update)

  console.log(user)
  return user
}
// try {
//  const exisingMessage = await emailController.readOne({_id: id})
// //  console.log({_id: id});
// if(!exisingMessage){
//   throw new Error("Message not found")
// } 
// let updateMassage = await emailController.update({_id:id},status);
// return updateMassage
// // } catch (error) {
//   console.error("Error updating message:", error.message)
//   throw error
// }


module.exports = {
  getAllMessages,
  addNewMassage,
  getMessage,
  MessageToUpdata,

};
