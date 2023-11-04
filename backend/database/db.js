const mongoose = require("mongoose");
const port = "mongodb+srv://sugamganachary:qk5K5dwp85tX2ZGA@loanai.6snyonc.mongodb.net/?retryWrites=true&w=majority"
const mongoURI = port
const connectmongodb = async () => {
    await mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectmongodb;