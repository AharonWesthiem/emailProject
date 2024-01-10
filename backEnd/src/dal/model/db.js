const mongoose = require('mongoose')
const  url_mongo = process.env.MONGO_URL



const conect  = () => {
    mongoose.connect(url_mongo)
.then((_ => {
    console.log('conection to DB - sucsess');
}))
.catch(err => {
    console.error('DB coonect error :' ,err );
    throw err
})
}

module.exports = {conect}