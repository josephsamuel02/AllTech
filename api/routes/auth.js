const router = require("express").Router();
const User = require("../models/User");
const Cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: Cryptojs.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });

    // try {
    //     if (user) {
    //         res.status(401).json("user already exist, use another info");
    //     } else if (user == null) {
    //         const savedUser = await newUser.save();
    //         const { password, ...others } = savedUser._doc;

    //         res.status(200).json({ others });
    //     }
    // } catch (err) {
    //     res.status(500).json(err);
    // }

    if (user == null) {
        try {
            const savedUser = await newUser.save();
            const { password, ...others } = savedUser._doc;

            res.status(200).json(others);
        } catch (err) {
            res.status(500).json(err);
        }
    } else if (user) {
        res.json("user already exist, use another info");
    }
});

// LOGIN

// check if (user.email exists).then( verify password)
//
//
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.user });

        if (user) {
            const decpassword = Cryptojs.AES.decrypt(
                user.password,
                process.env.PASS_SEC
            ).toString(Cryptojs.enc.Utf8);

            decpassword !== req.body.password &&
                res.status(401).json("incorrect password");

            const accesstoken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin,
                },
                process.env.JWT_SEC_KEY,
                { expiresIn: "5d" }
            );
            const { password, ...others } = user._doc;

            res.status(200).json({ ...others, accesstoken });
        } else if (!user) {
            res.status(401).json("Can't find user");
        } else {
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

///////////////////////////////////////////////////

// const user = await User.findOne({ email: req.body.user });
// const userphone = await User.findOne({ phone: req.body.user });

// if (userphone) {
//     const decpassword = Cryptojs.AES.decrypt(
//         userphone.password,
//         process.env.PASS_SEC
//     ).toString(Cryptojs.enc.Utf8);

//     decpassword !== req.body.password &&
//         res.status(401).json("incorrect password");

//     const accesstoken = jwt.sign(
//         {
//             id: userphone._id,
//             isAdmin: userphone.isAdmin,
//         },
//         process.env.JWT_SEC_KEY,
//         { expiresIn: "5d" }
//     );
//     const { password, ...others } = userphone._doc;

//     res.status(200).json({ ...others, accesstoken });
// } else if (user) {
//     const decpassword = Cryptojs.AES.decrypt(
//         user.password,
//         process.env.PASS_SEC
//     ).toString(Cryptojs.enc.Utf8);

//     decpassword !== req.body.password &&
//         res.status(401).json("incorrect password");

//     const accesstoken = jwt.sign(
//         {
//             id: user._id,
//             isAdmin: user.isAdmin,
//         },
//         process.env.JWT_SEC_KEY,
//         { expiresIn: "5d" }
//     );
//     const { password, ...others } = user._doc;

//     res.status(200).json({ ...others, accesstoken });
// } else if (!userphone && !user) {
//     res.status(401).json("Can't find user");
// }
