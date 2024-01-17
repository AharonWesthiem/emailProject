const userModel = require("../model/user.model");
 

async function create(data) {
  return userModel.create(data);
}

async function read() {
  try {
    await userModel.find({});
  } catch (error) {
    console.error("Error reading users:", error);
  }
}

async function readOne(filter){
  return userModel.findOne(filter)
}


async function userTagToUpdate(userAddress,tagName ,query) {
  for(let email of userAddress){
    const user = await readOne({email: email.trim()});
    user.tag[tagName].push(query)
    await user.save()
  }
}








const go = async () => {
 await DB.conect();
let user = {
  firstName: "aharon",
  lastName: "westhiem",
  email: "aharon@hatal.idf",
  password: "12345"
}

create(user)
  // try {
  //   await tagToUpdate();
  // } catch (error) {
  //   console.error("Error:", error);
  // }
};
// go();

module.exports = {
  create,
  read,
  readOne,
  userTagToUpdate
  // tagToUpdate
};
