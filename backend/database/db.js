const mongoose = require("mongoose");
const port = process.env.MONGO_URL;
const mongoURI = port
const connectmongodb = async () => {
    await mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectmongodb;