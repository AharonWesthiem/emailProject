const emailController = require("../dal/controller/email.controller");

async function getAllMessages() {
  return await emailController.read();
}

async function addNewMassage(data) {
  let massageObj = {
    from: data.from,
    to: data.to,
    title: data.title,
    message: data.message,
    createDate: new Date(),
  };
  const newMassage = emailController.create(massageObj);
  return newMassage;
}
 
async function getMessage(type, email) {
  if (type === "from" ||  type === "to") {
    return emailController.read({ [type]: email });
  }
   
  if (type === "trash") {
    return emailController.readTrash( email);
  }
  }
     

   

async function MessageToUpdata(id, status) {
  // let message = await emailController.readOne({_id: id})
  let messageToUodate = await emailController.update({_id:id}, status);
  return messageToUodate;
}

module.exports = {
  getAllMessages,
  addNewMassage,
  getMessage,
  MessageToUpdata,
};
