const emailController = require("../dal/controller/email.controller");
const userController = require("../dal/controller/user.controller");

// async function exisingMessage(data){
//     const messageExist = await emailController.readOne({_id: data.id})
//   if(!messageExist){
//     throw new Error("Message not found")
//   }
//   return messageExist
// }

async function addNewUser(data) {
  // const newUser = {
  //   firstName: data.firstName,
  //   lastname: data.lastname,
  //   password: data.password
  // };
  const addUser = await userController.create(data)
  return addUser
}
async function getUser(filter) {
  console.log(filter)
  const user = await userController.readOne({email:filter})
  return user
}





async function tagToUpdate(user, messageId) {
  // exisingMessage(user)

  // const update = await userController.userTagToUpdate(
  //   user,
  //   "trashRead",
  //   messageId
  // );
//   return update;
}

module.exports = {
  addNewUser,
  tagToUpdate,
  getUser
};