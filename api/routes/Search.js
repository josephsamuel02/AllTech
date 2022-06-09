const router = require("express").Router();

const Product = require("../models/Product");
// SEARCH FOR PRODUCTS

router.get("/", async (req, res) => {
    const searchtext = req.query.searchtext;
    try {
        const searchproducts = await Product.find({
            title: { $regex: `${searchtext}`, $options: "i" },
        });
        res.status(200).json(searchproducts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
