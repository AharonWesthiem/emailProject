const express = require('express')
const router = express.Router()
const userServies = require('../SERVICES/user.Servies')


router.post("/", async (req,res) => {
    try {
        const newUser = await userServies.addNeeUser(req.body)
        res.send(newUser)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router