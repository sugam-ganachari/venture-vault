const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    venture_id: {
        type: String,
        required: true
    },
    price: {
        type: String,
        require: true,
    },
    quantity:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("purchase", purchaseSchema);