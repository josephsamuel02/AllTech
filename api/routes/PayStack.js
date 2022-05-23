// const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// router.post("/payment", async (req, res) => {
//     try {
//         const payment = await stripe.paymentIntents.create({
//             amount: req.body.amount,
//             currency: "usd",
//             payment_method: req.body.tokenId,
//             confirm: true,
//         });

//         // console.log("payment", payment);

//         res.status(200).json(payment);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;

// const PayStack = require("paystack-node");

// const SEC_KEY = process.env.PAYSTACK_SEC_KEY;
// const environment = process.env.NODE_ENV;

// const { body } = PayStack.chargeCard({
//     card: {
//         number: "5399837841116788", // mastercard
//         cvv: "324",
//         expiry_year: "2024",
//         expiry_month: "08",
//     },
//     email: "me.biodunch@xyz.ng",
//     amount: 15600000, // 156,000 Naira in kobo
// });

// const payment = await stripe.paymentIntents.create({
//     amount: req.body.amount,
//     currency: "usd",
//     payment_method: req.body.tokenId,
//     confirm: true,
// });

// PayStack.engageMock();
const router = require("express").Router();

router.get("/verify/:id", async (req, res) => {
    try {
        const payment =
            await `https://api.paystack.co/transaction/verify/${req.params.id}`;

        res.status(200).json(payment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
