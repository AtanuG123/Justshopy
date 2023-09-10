const mongoose = require("mongoose");
const Userschema = new mongoose.Schema({
    Name : String,
    Email: String,
    Password : String,
})
const UserModel = mongoose.model("userdetails",Userschema);
module.exports = UserModel