const mongoose = require("mongoose");

const productShema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        image: { type: String, required: true },
        category: { type: Array, required: true },
        size: { type: String },
        color: { type: String },
        price: { type: Number, required: true },
        inStock: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productShema);
