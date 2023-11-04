const jwt = require("jsonwebtoken")
const JWT_Secret = "Thisisthesecret"

const fetchuser = (req, res, next) => {
    let token = req.header("auth-token")
    let success = false
    jwt.verify(token, JWT_Secret, (err, data) => {
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