const userModel = require("../model/user.model");
require("dotenv").config();
const DB = require("../model/db");

async function create(data) {
  return userModel.create(data);
}

async function read() {
  try {
    const u = await userModel.find({});
    console.log(u);
    return u;
  } catch (error) {
    console.error("Error reading users:", error);
    throw error; // Re-throw the error to handle it at a higher level
  }
}

async function readOne(filter){
     return userModel.findOne(filter)
}
//  mail to push to relevent tag arr
async function tagToUpdate(userEmail) {
  const user = await readOne({email: userEmail});

  // const userToUpdate = user.find((user) => user.email === userEmail);
  console.log(user);

  // console.log(userToUpdate);
  const updatetag = await userModel(
       
  )
}

const go = async () => {
  await DB.conect();

  try {
    await tagToUpdate();
  } catch (error) {
    console.error("Error:", error);
  }
};
go();

module.exports = {
  create,
  read,
  readOne
  // tagToUpdate
};
