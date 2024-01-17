const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userServies  = require("../SERVICES/user.servies");
const auth = require('../autn/autn')

// router.post("/", async (req,res) => {
//     try {
//         const newUser = await userServies.addNeeUser(req.body)
//         res.send(newUser)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })


router.get("/",auth.authentication,  async(req,res)=> {
    const user =await userServies.getUser( req.user)
    res.send(user);
})





router.post("/login",  async(req,res)=> {
    const error = false
    try {
        const user =await userServies.getUser(req.body.email);
        console.log(user);
        //בדיקת קיימות היוזר 
        if (!user) { 
            error = true;
        } else {
            // בדיקת סיסמא
            const match = await bcrypt.compare(
                req.body.password,
                user.password
                
            );console.log(match)
            if (!match) {
                error = true;
            }
        }if(error){
            return res.status(401).send();
        }
        //יוזר קיים וסיסמא תואמת 
        const token = jwt.sign({email: user.email}, process.env.TOKEN_SECRET);
        res.send(token);

    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
        
})


router.post("/signup", async(req,res)=> {
    try {
        const hashed = await bcrypt.hash(req.body.password, 10);
        const user=({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password: hashed,
        });
         const createUser = await userServies.addNeeUser(user)
        res.status(201).send(createUser);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});   

module.exports=router


router.put("/user/",  async(req,res)=> {

})



