const emailController = require("../dal/controller/email.controller");
const userController = require("../dal/controller/user.controller");

// async function exisingMessage(data){
//     const messageExist = await emailController.readOne({_id: data.id})
//   if(!messageExist){
//     throw new Error("Message not found")
//   }
//   return messageExist
// }

async function addNeeUser(data) {
  const newUser = {
    firstName: data.firstName,
    lastname: data.lastname,
    password: data.password
  };
  const addNewUser = await userController.create(newUser)
  return addNeeUser
}

async function tagToUpdate(user, messageId) {
  // exisingMessage(user)

  const update = await userController.userTagToUpdate(
    user,
    "trashRead",
    messageId
  );
  return update;
}

module.exports = {
  addNeeUser,
  tagToUpdate,
};