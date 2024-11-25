const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

app.use(express.json());

app.use(cors({
    origin:['http://localhost:5174'],
    credentials:true
}))


const bookRoutes = require('./books/book.route');
const orderRoutes = require('./orders/order.route');
app.use("/api/books",bookRoutes)
app.use("/api/orders",orderRoutes)



async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.get("/", (req, res) => {
        res.send("running");
    });
}
main()
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
