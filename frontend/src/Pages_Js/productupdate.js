import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios"
import "../component/productdetails/uploadadmin.css";
import { toast } from 'react-toastify';
const Productupdate = () => {
    const navigate = useNavigate();

    const [Name, SetName] = useState("null");
    const [Descrip, SetDescrip] = useState("null");
    const [Catagory, Setcatagory] = useState("null");
    const [Subcatagory, Setsubcatagory] = useState("null");
    const [Brand, Setbrand] = useState("Unkown");
    const [Img1, Setimg1] = useState(null);
    const [Img2, Setimg2] = useState(null);
    const [Img3, Setimg3] = useState(null);
    const [Img4, Setimg4] = useState(null);
    const [Img5, Setimg5] = useState(null);
    const [Price, SetPrice] = useState(0);
    const [Discount, Setdiscount] = useState(0);
    const [Customid, Setcustomid] = useState(null);
    const [size, setsize] = useState("null");
    const [Sizelist, setsizelist] = useState([]);
    // let sizelist =[];




    const handleonclick3 = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_PORT}/productupdate`, { Customid, Sizelist })
            .then(result => {
                console.log(result)
                toast.info("updated",{
                    autoClose:2000,
                    position:"top-right"
                })
            })
            .catch(err => console.log(err));
    }

    const addsize = () => {
        console.log(1)
        console.log("before", Sizelist)
        let a = Sizelist.concat(size);
        setsizelist(a)
        // document.getElementById("updatedetails").innerText="",
        console.log(Sizelist)
    }

    return (
        <div style={{ marginTop: "80px" }}>
            <div className="heading">
                <h3>ADMIN PAGE --update product</h3>
            </div>
            <div className="mainbody">
                <div className="formpart">
                    <form className="productform"
                        onSubmit={handleonclick3}>
                        <div style={{ display: "flex" }}>
                            <div>
                                <div style={{ display: "flex", marginLeft: "30px" }}>
                                    <input id="updatedetails" type="text" style={{ width: "390px" }} placeholder="size" onChange={(e) => { setsize(e.target.value) }} />
                                    <p style={{ cursor: "pointer", padding: "10px 17px", backgroundColor: "red", width: "fit-content" }} onClick={addsize}>+</p>
                                </div>


                            </div>
                            <div>
                                <input type="text" placeholder="Custom id" onChange={(e) => { Setcustomid(e.target.value) }} />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="formsubmit">update</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Productupdate;