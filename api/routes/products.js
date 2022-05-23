const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");
const Product = require("../models/Product");

const User = require("../models/User");

//CREATE PRODUCT
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json("somthing went wrong");
    }
});

//UPDATE PRODUCTS

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );

        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json("Product has been delete successfuly");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET PRODUCT
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json("somthing went wrong");
    }
});

//GET ALL PRODUCTS

router.get("/", async (req, res) => {
    const qCategory = req.query.category;
    const qLimit = req.query.limit;
    const qPage = req.query.page;
    const qSort = req.query.sort;

    try {
        let sortBy;
        let products;

        qSort == "newest" ? (sortBy = { createdAt: -1 }) : null;
        qSort == "oldest" ? (sortBy = { createdAt: 1 }) : null;
        qSort == "highestPrice" ? (sortBy = { price: -1 }) : null;
        qSort == "lowestPrice" ? (sortBy = { price: 1 }) : null;

        if (qCategory && qSort) {
            products = await Product.find({
                category: {
                    $in: [qCategory],
                },
            })
                .limit(parseInt(qLimit))
                .skip(parseInt((qPage - 1) * qLimit))
                .sort(sortBy);
        } else if (qPage) {
            products = await Product.find()
                .limit(parseInt(qLimit))
                .skip(parseInt((qPage - 1) * qLimit))
                .sort({ createdAt: -1 });
        } else if (qCategory) {
            products = await Product.find({
                category: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
