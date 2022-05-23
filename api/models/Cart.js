const mongoose = require("mongoose");

const cartShema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        productId: { type: String, required: true },
        title: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, default: 1 },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", cartShema);
