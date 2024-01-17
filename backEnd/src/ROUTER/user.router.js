const express = require("express")
const router = express.Router()
const userServies  = require("../SERVICES/user.servies");
const { validate } = require("../dal/model/user.model");

router.post("/", async (req,res) => {
    try {
        const newUser = await userServies.addNeeUser(req.body)
        res.send(newUser)
    } catch (error) {
        res.status(400).send(error)
    }
})


function authentication(req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send();
    }
    const token = authorization.split(" ")[1];
    if (!token) {
        return res.status(401).send();
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        const user = userModel.model.find((user) => user.id === decoded.id);
        req.user = user;
        next();
    } catch (error) {
        res.status(403).send();
    }}
 

// router.post("/",(req,res) =>{
//     try {
//         const newMessage = emailServies.addNewMassage(req.body)
//         res.send(newMessage)
//     } catch (error) {
//         res.status(400).send(error)
//     }
    
// })
async function validation(req, res, next) {
    // const user = userServies.getUser((user) => user.email === req.body.email)
// validation
// }
}

router.get("/user/login", authentication, async(req,res)=> {
    try {
        const user = userServies.getUser((user) => user.email === req.body.email);
        if (!user) {
            error = true;
        } else {
            const match = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!match) {
                error = true;
            }
        }
        if (error) {
            return res.status(401).send();
        }
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
        res.json({ id: user.id, username: user.username, token });
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }

    let data = await userServies.getUser(req.email)
    res.send(data)
})





   
//         const user = .find((user) => user.username === req.body.username);
//         if (!user) {
//             error = true;
//         } else {
//             const match = await bcrypt.compare(
//                 req.body.password,
//                 user.password
//             );
//             if (!match) {
//                 error = true;
//             }
//         }
//         if (error) {
//             return res.status(401).send();
//         }
//     let data = await userServis.user()
//     res.send(data)
// })
