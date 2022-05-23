const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");
const Order = require("../models/Order");

//GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));

    const thisYear = new Date(date.setFullYear(date.getFullYear()));

    const months = new Date(thisYear.setMonth(date.getMonth()));
    const previousMonth = new Date(
        new Date().setMonth(lastMonth.getMonth() - 1)
    );

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: months } } },

            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET USER ORDERS
router.get("/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json("somthing went wrong");
    }
});

//UPDATE ORDER
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );

        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE ORDER
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);

        res.status(200).json("Order has been delete successfuly");
    } catch (err) {
        res.status(500).json(err);
    }
});

//CREATE ORDER
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL ORDERS

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();

        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
