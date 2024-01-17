const mongoose = require('mongoose')
const  url_mongo = process.env.MONGO_URL



const conect  = async() => {
    try {

      await  mongoose.connect(url_mongo)
      console.log('conection to DB - sucsess');
    } catch(error) {
        console.error('DB coonect error :' ,error );
        // throw error
    }
}

module.exports = {
  conect
}