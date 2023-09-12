const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_PRIVATE);

const UserModel = require("./models/Userdetails.js");
const ProductModel = require("./models/productupload.js");


const app = express();
app.use(express.json());
app.use(cors());



mongoose.connect(process.env.REACT_APP_KEY);

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
app.post('/allproduct',(req,res)=>{
    
    ProductModel.find()
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

app.post("/api/create-checkout-session",async(req,res)=>{
    const {products}=req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        shipping_address_collection: {
            allowed_countries: ["IN"],
          },
        shipping_options: [
            {
              shipping_rate_data: {
                type: "fixed_amount",
                fixed_amount: {
                  amount: 0,
                  currency: "inr",
                },
                display_name: "Free shipping",
                // Delivers between 5-7 business days
                delivery_estimate: {
                  minimum: {
                    unit: "business_day",
                    value: 5,
                  },
                  maximum: {
                    unit: "business_day",
                    value: 7,
                  },
                },
              },
            },
            {
              shipping_rate_data: {
                type: "fixed_amount",
                fixed_amount: {
                  amount: 1500,
                  currency: "inr",
                },
                display_name: "Next day air",
                // Delivers in exactly 1 business day
                delivery_estimate: {
                  minimum: {
                    unit: "business_day",
                    value: 1,
                  },
                  maximum: {
                    unit: "business_day",
                    value: 1,
                  },
                },
              },
            },
          ],
        line_items: [ 
            { 
              price_data: { 
                currency: "inr", 
                product_data: { 
                  name: "Payble Amount", 
                }, 
                unit_amount: products * 100, 
              }, 
              
              quantity:1 
            }, 
          ], 
        mode:"payment",
        success_url:"https://justshopy.vercel.app/paymentsuccess",
        cancel_url:"https://justshopy.vercel.app/paymentcancel",
    })

    res.json({id:session.id})
})





 app.listen(3002,()=>{
     console.log("success");
 })
