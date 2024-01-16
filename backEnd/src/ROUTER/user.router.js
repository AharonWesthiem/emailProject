const express = require("express")
const router = express.Router()
const userServis  = require("../SERVICES/user.servies")

 

// router.post("/",(req,res) =>{
//     try {
//         const newMessage = emailServies.addNewMassage(req.body)
//         res.send(newMessage)
//     } catch (error) {
//         res.status(400).send(error)
//     }
    
// })



router.get("/", async(req,res)=> {
    let data = await emailServies.getAllMessages()
    res.send(data)
})