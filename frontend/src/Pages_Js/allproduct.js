
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
    const [copylistpro, setcopylistpro] = useState([]);
    const [optionn, setoptionn] = useState("New");
    const Catagory = id;
    const [state, setstate] = useState(false);
    console.log("this is from productlist", id);
    useEffect(() => {
        Setisloading(true);
        document.getElementById("productlist").style.display = "none";
        axios.post(`${process.env.REACT_APP_PORT}/allproduct`, {})
            .then(res => {
                
                setlistpro(res.data);
                setcopylistpro(res.data.reverse());
                Setisloading(false);
                document.getElementById("productlist").style.display = "flex";
            })
    }, [])

    const showfilter = () => {
        setstate(!state);
        if (state === false) {
            document.getElementById("filter").style.display = "flex";
        }
        else {
            document.getElementById("filter").style.display = "none";

        }
    }  


    const sorting = (el) => {
        console.log(copylistpro)
        setoptionn(el)
        const a = listpro;
        if (el === "New") {
            // a = copylistpro
            setlistpro(copylistpro.reverse())
        }
        else if (el === "priceHigh") {
            a.sort((a, b) => a.Price - b.Price);
            setlistpro(a);
        }
        else if (el === "priceLow") {
            a.sort((a, b) => a.Price - b.Price);
            setlistpro(a.reverse());
        }

        else if (el === "Discount") {
            a.sort((a, b) => a.Discount - b.Discount);
            setlistpro(a.reverse());
        }
       
    }
    return (<>
        {/* <Navber/> */}
        {isLoading ? <LoadingSpinner /> : null}


        <div id='productlist'>
            <div id='productlist1'>
                <div>   
                <div className='sorting'>
                            <button className='filterbtn' id='filterbtn' onClick={showfilter}>Apply Filter</button>
                            <div>
                                <p>SORT BY</p>
                                <select id="sort" onChange={(e) => sorting(e.target.value)}>
                                    <option value="New"  >Random</option>
                                    <option value="priceHigh" >Price:low to high</option>
                                    <option value="priceLow"  >Price:high to low</option>
                                    <option value="Discount" >Discount:High to low</option>
                                </select>
                            </div>
                        </div>
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
