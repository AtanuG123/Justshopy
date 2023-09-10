const mongoose = require("mongoose");
const Productschema = new mongoose.Schema({
    Customid :String,
    Name : String,
    Descrip: String,
    Catagory:String,
    Subcatagory:String,
    Brand:String,
    Img1:String,
    Img2:String,
    Img3:String,
    Img4:String,
    Img5:String,
    Price : Number,
    Discount : Number
})
const ProductModel = mongoose.model("productdetails",Productschema);
module.exports = ProductModel