const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
app.use(express.json())
// const hashed = bcrypt.hashSync("br1111", 10);
// console.log(hashed);
// const match = bcrypt.compareSync("br1111", hashed);
// console.log(match);





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
    }
}

app.get("/todos", authentication, (req, res) => {
    res.json(todos.filter((todo) => todo.userId === req.user.id));
});

app.post("/users/login", async (req, res) => {
    //validation
    try {
        let error = false;
        const user = users.find((user) => user.username === req.body.username);
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
});

app.post("/users", async (req, res) => {
    //validation
    try {
        const hashed = await bcrypt.hash(req.body.password, 10);
        users.push({
            username: req.body.username,
            password: hashed,
            age: req.body.age,
            id: usersId++,
        });
        res.status(201).send();
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});