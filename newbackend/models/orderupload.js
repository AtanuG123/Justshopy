const mongoose = require("mongoose");
const Orderschema = new mongoose.Schema({
    Emailid : String,
    Name: String,
    Order : Array,
    Amount:Number,
    Orderid:String,
    Datetime : String,
})
const OrderModel = mongoose.model("orderupload",Orderschema);
module.exports = OrderModel