const userModel = require("../model/user.model");
 

async function create(data) {
  return userModel.create(data);
}

async function read() {
  try {
    await userModel.find();
  } catch (error) {
    console.error("Error reading users:", error);
  }
}

async function readOne(filter){
  // console.log(filter)
  return userModel.findOne(filter)
}


async function userTagToUpdate(userAddress,tagName ,query) {
  for(let email of userAddress){
    const user = await readOne({email: email.trim()});
    user.tag[tagName].push(query)
    await user.save()
  }
}

async function readList(listOfUsers) {
  const users = await userModel.find({email: {$in: listOfUsers}})
  console.log(users.map(user => user.email));
  return users.map(user => user.email)
}





module.exports = {
  readList,
  create,
  read,
  readOne,
  userTagToUpdate

};
