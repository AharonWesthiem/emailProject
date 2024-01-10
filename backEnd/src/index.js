const express = require('express')
require('dotenv').config()
const app = express()

const DB = require('./dal/model/db')
DB.conect()

const cors = require('cors');
app.use(cors());
app.use(express.json())

app.listen(2500, () => {console.log('server is up');})
