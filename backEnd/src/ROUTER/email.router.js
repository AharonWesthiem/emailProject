const express = require("express")
const router = express.Router()
const emailServies = require("../SERVICES/email.servies")
const auth = require('../autn/autn')
 

router.post("/", auth.authentication,async (req,res) =>{
    try {
        const newMessage = await emailServies.addNewMassage(req.body)
        res.status(200).send(newMessage)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
    
})

// router.get("/", async(req,res)=> {
//     let data = await emailServies.getAllMessages()
//     res.send(data)
// })

router.get('/:type',auth.authentication ,async(req,res)=>{
    const type = req.params.type
    const email = req.body.user
    console.log(type, email);
    let data = await emailServies.getMessage(type,email)
    res.send(data)
})
// async function handelstatus(){
//     // let status= req.params.status


// }



router.put('/:messageId/:status', auth.authentication, async (req,res) => {
    const masId = req.params.messageId
    const stasus =req.params.status
    const email = req.body.user

    try {
        const updateMessage = await emailServies.MessageToUpdata(masId,email,stasus)
          console.log("tesst",updateMessage)
            
        res.send(updateMessage)
    } catch (error) {
        res.status(460).send(error)
    }
})


module.exports = router