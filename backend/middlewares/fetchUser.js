const jwt = require("jsonwebtoken")

const fetchuser = (req, res, next) => {
    let token = req.header("auth-token")
    // console.log(token)
    let success = false
    jwt.verify(token, process.env.JWT_Secret, (err, data) => {
        if (data) {
            req.user = data.username
            next();
        }
        else {
            return res.json({ success, message: "Invalid Token - Cannot Fetch User Details" })
        }
    })
}

module.exports = fetchuser