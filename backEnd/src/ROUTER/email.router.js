const express = require("express")
const router = express.Router()
const emailServies = require("../SERVICES/email.servies")
const auth = require('../autn/autn')
 

router.post("/", auth.authentication,async (req,res) =>{
   
    try {
        const newMessage = await emailServies.addNewMassage(req.body)
        
        res.send(newMessage)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
    
})

router.get("/", async(req,res)=> {
    let data = await emailServies.getAllMessages()
    res.send(data)
})

router.get('/:type',auth.authentication ,async(req,res)=>{
    
    const type = req.params.type
    const email = req.body.user

    let data = await emailServies.getMessage(type,email)
    res.send(data)
})



router.put('/:messageId',auth.authentication, async (req,res) => {
    
    try {
        const updateMessage = emailServies.MessageToUpdata(req.params.messageId, req.query.status)
        console.log(req.query.status);
        res.send(updateMessage)
    } catch (error) {
        res.status(400).send(error)
    }
})
router

module.exports = router