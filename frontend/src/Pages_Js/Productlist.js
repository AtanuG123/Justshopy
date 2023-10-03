import "../Pages_css/productlist.css";

import Itembox from '../component/box';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../component/loader";
import Navber from "../component/navber";
import Copyright from "../component/Footer";
import Filter from "../component/filter";
export default function Productlist() {
    const { id } = useParams();
    const [listpro, setlistpro] = useState([]);
    const [isLoading, Setisloading] = useState(false);
    const Catagory = id;
    const navigate = useNavigate();

    useEffect(() => {
        Setisloading(true);
        document.getElementById("productlist").style.display = "none";

        // axios.post(`${process.env.REACT_APP_PORT}/productlist`
        axios.post("http://localhost:3002/productlist"

            , {})
            .then(res => {
                console.log(res.data)
                let a = [];
                res.data.map(items => {
                    if (items.Catagory.includes(Catagory)||items.Sizelist.includes(Catagory)||items.Brand===Catagory||(items.Price<=Catagory && Catagory>=100)) {
                        // console.log("1s/t")
                        a.push(items)
                    }
                    if(Catagory>=50 && Catagory<=100 && items.Discount>=Catagory){
                        // console.log(items.Discount)
                        a.push(items);
                    }
                    
                })
                a.sort((a,b)=>a.Price-b.Price);
                setlistpro(a.reverse());
                Setisloading(false);
                if (a.length==0){
                    navigate("/notfound");
                }
                else{

                    document.getElementById("productlist").style.display = "flex";
                }
            })
    }, [])


    return (
        <>
            {/* <Navber/> */}
            {isLoading ? <LoadingSpinner /> : null}
            <div id='productlist'>
                <div id='productlist1'>
                    <div className="filter1">
                        <Filter/>
                    </div>
                    <div>
                       
                        <div id="boxs">

                            {listpro.map(items => {
                                return (
                                    <Itembox key={items._id}
                                        customid={items.Customid}
                                        name={items.Name}
                                        img1={items.Img1}
                                        img2={items.Img2}
                                        img3={items.Img3}
                                        img4={items.Img4}
                                        img5={items.Img5}
                                        discount={items.Discount}
                                        description={items.Descrip}
                                        price={items.Price}
                                        brand={items.Brand}
                                        size={items.Sizelist}
                                    />
                                )
                            }
                            )
                            }
                        </div>
                        </div>
                        </div>
                        
                        <Copyright />
                    </div>
                </>
                )
}
