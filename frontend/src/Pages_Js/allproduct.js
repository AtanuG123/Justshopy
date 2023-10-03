
import Itembox from '../component/box';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import LoadingSpinner from "../component/loader";
import Copyright from "../component/Footer";
import Filter from '../component/filter';
export default function Allproduct() {
    const { id } = useParams();
    const [listpro, setlistpro] = useState([]);
    const [isLoading, Setisloading] = useState(false);
    const Catagory = id;

    console.log("this is from productlist", id);
    useEffect(() => {
        Setisloading(true);
        document.getElementById("productlist").style.display = "none";
        axios.post(`${process.env.REACT_APP_PORT}/allproduct`, {})
            .then(res => {
                res.data.sort((a,b)=>a.Price-b.Price);
                setlistpro(res.data.reverse());
                // console.log(res.data)
                Setisloading(false);
                document.getElementById("productlist").style.display = "flex";
            })
    }, [])
    return (<>
        {/* <Navber/> */}
        {isLoading ? <LoadingSpinner /> : null}


        <div id='productlist'>
            <div id='productlist1'>
                <div>   
                    <Filter/>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
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
    </>)
}
