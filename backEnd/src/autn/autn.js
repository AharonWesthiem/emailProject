const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


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
        console.log(token);
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        // const user = userServies.getUser(decoded.email);
        req.body.user = decoded.email;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).send();
    }
}
module.exports= {
    authentication
}