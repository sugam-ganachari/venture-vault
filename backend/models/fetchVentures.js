const mongoose = require("mongoose");

const ventureSchema = new mongoose.Schema({
    Data: {
        type: String,
    }
})

module.exports = mongoose.model("ventureDetails", ventureSchema);