const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    orderId: {
        type: String,
    },
    method: {
        type: String
    },
    amount: {
        type: String,
    },
    status: {
        type: String,
    },
}, {timestamps: true})

const Payment = mongoose.model('payment', paymentSchema);

module.exports = Payment;