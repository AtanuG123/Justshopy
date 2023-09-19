import "./uploadadmin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
export default function Product() {
const ref = useRef(null);
const ref1 = useRef(null);
    const navigate = useNavigate();

    const [Name, SetName] = useState("null");
    const [Descrip, SetDescrip] = useState("null");
    const [Catagory, Setcatagory] = useState([]);
    
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
    const [cata, setcata] = useState("null");
  
    const [Sizelist, setsizelist] = useState([]);



    const handleonclick3 = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_PORT}/productupload`, { Name, Descrip, Catagory, Brand, Img1, Img2, Img3, Img4, Img5, Price, Discount, Customid, Sizelist })
            .then(result => {
                // console.log(result)
                navigate("/")
            })
            .catch(err => console.log(err));
    }

    const addsize = () => {
        let a = Sizelist.concat(size.toLowerCase());
        setsizelist(a)
        ref1.current.value = "";
    }
    const addcata = () => {
        let a = Catagory.concat(cata.toLowerCase());
        Setcatagory(a)
        ref.current.value = "";
    }



    return (
        <div style={{ marginTop: "80px" }}>
            <div className="heading">
                <h3>ADMIN PAGE -- Add product</h3>
            </div>
            <div className="mainbody">
                <div className="formpart">
                    <form className="productform"
                        onSubmit={handleonclick3}>
                        <div style={{ display: "flex" }}>
                            <div>
                                <input type="text" name="txt" placeholder="Product name" onChange={(e) => { SetName(e.target.value) }} required />
                                <input type="text" name="description" placeholder="Description" onChange={(e) => { SetDescrip(e.target.value) }} required/>
                                
                                <input type="number" name="Mrp" placeholder="MRP" onChange={(e) => { SetPrice(e.target.value) }}required />
                                <input type="number" placeholder="Discount in %" onChange={(e) => { Setdiscount(e.target.value) }} required/>
                                <div className="arrinput" >
                                    <input type="text" placeholder="size" ref={ref1} onChange={(e) => { setsize(e.target.value) }} />
                                    <p onClick={addsize}>+</p>
                                </div>
                                <div className="showsizelist">
                                    {
                                        Sizelist.map(item => {
                                            return (
                                                <p>{item}</p>
                                            )
                                        })
                                    }
                                </div>
                                <div className="arrinput" >
                                    <input type="text" placeholder="catagory" ref={ref} onChange={(e) => { setcata(e.target.value)}} />
                                    <p onClick={addcata}>+</p>
                                </div>
                                <div className="showsizelist">
                                    {
                                        Catagory.map(item => {
                                            return (
                                                <p>{item}</p>
                                            )
                                        })
                                    }
                                </div>
                                

                            </div>
                            <div>
                                <input type="text" placeholder="Brand" onChange={(e) => { Setbrand(e.target.value) }} />
                                <input type="text" placeholder="img link1" onChange={(e) => { Setimg1(e.target.value) }} required />
                                <input type="text" placeholder="img link 2" onChange={(e) => { Setimg2(e.target.value) }} />
                                <input type="text" placeholder="img link 3" onChange={(e) => { Setimg3(e.target.value) }} />
                                <input type="text" placeholder="img link 4" onChange={(e) => { Setimg4(e.target.value) }} />
                                <input type="text" placeholder="img link 5" onChange={(e) => { Setimg5(e.target.value) }} />
                                <input type="text" placeholder="Custom id" onChange={(e) => { Setcustomid(e.target.value) }} required/>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="formsubmit">ADD</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
