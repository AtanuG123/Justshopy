const mongoose = require("mongoose");
const Orderschema = new mongoose.Schema({
    Emailid:String,
    Name: String,
    // Orderimg : String,
    Orderid : String,
    Amount:Number,
})
const OrderModel = mongoose.model("orderupload",Orderschema);
module.exports = OrderModel