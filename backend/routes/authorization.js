const express = require("express")
var bodyParser = require('body-parser')
const router = express.Router()
const fetchUser = require("../middlewares/fetchUser")
const User = require("../models/User")  
const ventureDetails = require("../models/fetchVentures")  
const bcrypt = require("bcryptjs") 
const jwt = require("jsonwebtoken")
const purchase = require("../models/purchase")
const JWT_Secret = process.env.JWT_Secret;
// const JWT_Secret = "Thisisthesecret";
router.use(express.json())
// router.post("/some", async(req,res)=>{
//     return res.json(req.body)
// })
router.post("/signup", async (req, res) => {
        let success = false
        try {
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({ success, message: "Sorry a user with this email already exists" })
            }
            let salt = bcrypt.genSaltSync(10)
            let secPass = bcrypt.hashSync(req.body.password, salt)
            user = await User.create({
                name: req.body.name,  
                email: req.body.email,
                password: secPass
            })
            const data = {
                username: {
                    id: user.id
                }
            }
            let authToken = jwt.sign(data, JWT_Secret)
            success = true
            return res.status(200).json({ success, authToken })
        }
        catch (err) {
            return res.status(500).json({ success, message: err.message })
        }
    })


router.post("/login", async (req, res) => {
    let success = false
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ success, message: "Incorrect Credentials" })
        }
        const comparePass = bcrypt.compareSync(password, user.password)
        if (!comparePass) {
            return res.status(400).json({ success, message: "Incorrect Credentials" })
        }
        const data = {
            username: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_Secret)
        success = true
        return res.status(200).json({ success, authToken })
    }
    catch (err) {
        return res.status(500).json({ success, message: err.message })
    }
})

router.post("/getuser", fetchUser, async (req, res) => {
    let success = false
    try {
        let id = req.user.id
        const user = await User.findById(id).select("-password")
        success = true
        return res.status(200).json({ success, user })
    }
    catch (err) {
        return res.status(500).json({ success, message: err.message })
    }
})

router.get("/fetchVentures",async(req,res)=>{
    try{
        const ventures= await ventureDetails.find()
        // ventures= JSON.parse(ventures.data)
        // console.log(ventures[1])
        return res.send({ventures})
    }
    catch (err){
        return res.status(500).json({message: err.message})
    }
})
router.get("/fetchVentures/:id", async (req, res) => {
    const id = req.params.id;
    try {
        // const ventures = await ventureDetails.find({
        //     "data1": {
        //       $elemMatch: 
        //       {
        //         "id": Number(id)
        //       }
        //     }
        //   });
          const ventures = await ventureDetails.find(
            { "data1": { $elemMatch: { "id": Number(id) } } },
            { "data1.$": 1 }
          );
      if (!ventures) {
        return res.status(404).json({ success: false, message: "Data not found" });
      }
      return res.status(200).json({ success: true, data: ventures });
    } catch (error) {
      console.error("Error fetching data:", error);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });
  

router.get("/fetchPurchases",fetchUser,async(req,res)=>{
    let success = false
    try {
        let id = req.user.id
        const purchArr = await purchase.find({user: id})
        success = true
        return res.status(200).json({ success, purchArr })
    }
    catch (err) {
        return res.status(500).json({ success, message: err.message })
    }
})

router.post("/addpurchase", fetchUser, async (req, res) => {
        let success = false
        try {
            const { venture_id,price,quantity } = req.body
            const pur = new purchase({
                venture_id, price,quantity, user: req.user.id
            })
            const newPurchase = await pur.save()
            success = true
            return res.status(200).json({ success, newPurchase })
        }
        catch (err) {
            return res.status(500).json({ success, message: err.message })
        }
        // return res.json(req.body)
    })
router.post("/sellpurchase", fetchUser, async (req, res) => {
        const { venture_id,date} = req.body
        let success = false
        try {
            const sell = await purchase.deleteOne({venture_id: venture_id,date:date})
            success = true
            return res.status(200).json({ success ,sell })
        }
        catch (err) {
            return res.status(500).json({ success, message: err.message })
        }
        // return res.json(req.body)
    })
router.post("/test",fetchUser,async(req,res) =>{
    return res.status(500).json({message:"SUCCESS!!!"})
})

module.exports = router