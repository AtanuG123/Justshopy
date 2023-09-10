const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcryptjs = require("bcryptjs");

const UserModel = require("./models/Userdetails.js");
const ProductModel = require("./models/productupload.js");


const app = express();
app.use(express.json());
app.use(cors());




mongoose.connect(`mongodb+srv://atanu2004ghosh:vG9k5kkqhgYbDBFi@cluster0.r37vth3.mongodb.net/?retryWrites=true&w=majority`);

app.post('/login',(req,res)=>{
    const {Email,Password}= req.body;
    UserModel.findOne({Email:Email})
    .then(async user =>{
        if (user){
            if (await bcryptjs.compare(Password,user.Password)){
                res.json(user);
            }
            else{
                res.json("invalid");
            }
        }
        else{
            res.json("invalid");
        }
    })
})



app.post('/signup',async(req,res)=>{
    
    let {Name,Email,Password} = req.body;
   let isregister = "";
   isregister =  await UserModel.findOne({Email:Email})
    if (isregister !==null){
        res.json("user_exist");
    }
    else{
        const salt = await bcryptjs.genSalt();
        let Passwordhashed = await bcryptjs.hash(Password,salt);
        Password = Passwordhashed.toString();
        UserModel.create({Name,Email,Password})
        .then(result =>res.json(result));
    }
 })
 
 


 app.post('/admin',(req,res)=>{
    ProductModel.create(req.body)
     .then(result=> res.json(result))
     .catch(err=> res.json(err))
 })



app.post('/product/',(req,res)=>{
    const {Customid} = req.body;
    ProductModel.findOne({Customid:Customid})
    .then(product=>res.json(product))
    .catch(err=>res.json(err))
})

 app.post('/productlist/',(req,res)=>{
    const {Catagory,Flag} = req.body;
    
    if (Flag===true){
    
    ProductModel.find({Catagory:Catagory})
    .then(product =>res.json(product))
    .catch(err=> res.json(err))
    }
    else{
        ProductModel.find({Subcatagory:Catagory})
        .then(product =>res.json(product))
        .catch(err=> res.json(err))
        } 
     }
)


 app.listen(3002,()=>{
     console.log("success");
 })