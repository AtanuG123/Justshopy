const mongoose = require("mongoose");
const Userschema = new mongoose.Schema({
    Name : String,
    Email: String,
    Password : String,
    Address:String,
    Pin: Number,
})
const UserModel = mongoose.model("userdetails",Userschema);
module.exports = UserModel