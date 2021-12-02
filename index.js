const express = require("express");
const app = new express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

// require to access .env file
const { parsed: config } = dotenv.config();

const port = process.env.PORT || 5000;

// connection to database
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));

// enable us to send json on post request
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

// app listening port
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
