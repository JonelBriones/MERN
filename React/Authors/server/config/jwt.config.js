const jwt = require("jsonwebtoken");

module.exports = {
    authenticateUser(req, res, next) {
        jwt.verify(req.cookies.usertoken,
            process.env.JWT_SECRET,
            (err, payload)=>{
                if(err){
                    console.log(err);
                    res.status(401).json({verified:false})
                    console.log("User Only")
                }
                else {
                    console.log(payload);
                    req.jwtpayload = payload; //without having to decode jwt
                    next()
                }
            }
            )
    }
}