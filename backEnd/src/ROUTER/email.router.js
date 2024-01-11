const express = require("express")
const router = express.Router()
const emailServies = require("../SERVICES/email.servies")

 

router.post("/",(req,res) =>{
    try {
        const newMessage = emailServies.addNewMassage(req.body)
        res.send(newMessage)
    } catch (error) {
        res.status(400).send(error)
    }
    
})

router.get("/", async(req,res)=> {
    let data = await emailServies.getAllMessages()
    res.send(data)
})

router.get('/:type/:email', async(req,res)=>{
     
    const type = req.params.type
    const email = req.params.email
    let data = await emailServies.getMesage(type,email)
    console.log(data);
    res.send(data)
})



router.put('/:id', async (req,res) => {
    try {
        const updateMessage = emailServies.updateMesage(req.params.id, req.body)
        res.send(updateMessage)
    } catch (error) {
        res.status(400).send(error)
    }
})
router

module.exports = router