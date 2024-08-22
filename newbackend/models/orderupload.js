const mongoose = require("mongoose");
const Orderschema = new mongoose.Schema({
    Emailid : String,
    Name: String,
    Orderimg : String,
    Orderlen :Number,
    Orderid : String,
    Amount : Number,
    Datetime : String,
})
const OrderModel = mongoose.model("orderupload",Orderschema);
module.exports = OrderModel