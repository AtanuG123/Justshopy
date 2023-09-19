import "../Pages_css/productlist.css";

import Itembox from '../component/box';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import LoadingSpinner from "../component/loader";
import Navber from "../component/navber";
import Copyright from "../component/Footer";
export default function Productlist() {
    const { id } = useParams();
    const [listpro, setlistpro] = useState([]);
    const [isLoading, Setisloading] = useState(false);
    const Catagory = id;
    

    useEffect(()=> {
        Setisloading(true);
        document.getElementById("productlist").style.display = "none";
       
        axios.post(`${process.env.REACT_APP_PORT}/productlist`, {})
            .then(res => {
                console.log(res.data)
                let a =[];
                res.data.map(items=>{
                    if(items.Catagory.includes(Catagory)){
                       a.push(items)
                }
            })
            
                setlistpro(a);
                Setisloading(false);
                document.getElementById("productlist").style.display = "flex";
            })
    }, [])


    return (
        <> 
        {/* <Navber/> */}
            {isLoading ? <LoadingSpinner /> : null}
            <div id='productlist'>
                <div><h2> {Catagory.toUpperCase()}</h2></div>
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
                            />
                        )
                    }
                    )
                    }
                </div>
                <Copyright/>
            </div>
        </>
    )
}
