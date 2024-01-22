const express = require('express')
const app = express()
const emailRouter = require("./ROUTER/email.router")
const userRouter = require("./ROUTER/user.router")
require('dotenv').config()
const DB = require('./dal/model/db')
DB.connect()



const cors = require('cors');
app.use(cors());
app.use(express.json())

app.use('/email', emailRouter )
app.use('/user',userRouter )

app.listen(2500, () => {console.log('server is up');})
