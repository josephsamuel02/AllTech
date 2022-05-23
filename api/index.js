const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productsRouter = require("./routes/products");
const CartRouter = require("./routes/Cart");
const OrderRouter = require("./routes/Order");
const PayStack = require("./routes/PayStack");

const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.DB_URL).then(() => console.log("db is connected"));

app.use("/payment", PayStack);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/products", productsRouter);
app.use("/cart", CartRouter);
app.use("/order", OrderRouter);

app.get("/", (req, res) => {
    res.send("hellow Coder!");
});

app.listen(process.env.PORT || 7000, () => console.log("server connected"));
