const userModel = require("../model/user.model")
require('dotenv').config()
const DB = require('../model/db')
DB.conect()



async function create(data) {
    return  userModel.create(data);
  }

const go = async () => {
    
   const newUser = await create(user)
   return newUser
}

go()