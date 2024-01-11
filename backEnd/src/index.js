const express = require('express')
const app = express()
const emailRouter = require("./ROUTER/email.router")
require('dotenv').config()

const DB = require('./dal/model/db')
DB.conect()

const cors = require('cors');
app.use(cors());
app.use(express.json())

app.use('/email', emailRouter )

app.listen(2500, "0.0.0.0", () => {console.log('server is up');})
