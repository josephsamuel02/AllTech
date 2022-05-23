const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const Cart = require("../models/Cart");

//ADD TO CART

router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json("somthing went wrong");
    }
});

//UPDATE CART

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );

        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE CART
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);

        res.status(200).json("Item has been delete successfuly");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET USER CART SUMTOTAL
router.get("/cartsum/:userId", async (req, res) => {
    try {
        // const cart = await Cart.find({ userId: req.params.userId });
        // res.status(200).json(cart);
        const userId = req.params.userId;
        const cartSum = await Cart.aggregate([
            {
                $match: {
                    $and: [{ userId: userId }],
                },
            },
            {
                $project: {
                    price: 1,
                    quantity: 1,
                },
            },
            {
                $group: {
                    _id: "Default",
                    total: {
                        $sum: { $multiply: ["$price", "$quantity"] },
                    },
                },
            },
        ]);

        res.status(200).json(cartSum);
    } catch (err) {
        res.status(500).json("somthing went wrong");
    }
});

// GET USER CART
router.get("/:userId", async (req, res) => {
    try {
        const cart = await Cart.find({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json("somthing went wrong");
    }
});

//GET ALL CARTS

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();

        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
