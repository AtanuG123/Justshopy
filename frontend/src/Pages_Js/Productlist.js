import "../Pages_css/productlist.css";

import Itembox from '../component/box';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../component/loader";

import Copyright from "../component/Footer";
import Filter from "../component/filter";
export default function Productlist() {
    const { id } = useParams();
    const [listpro, setlistpro] = useState([]);
    const [copylistpro, setcopylistpro] = useState([]);
    const [isLoading, Setisloading] = useState(false);
    const Catagory = id;
    const navigate = useNavigate();
    const [optionn, setoptionn] = useState("New");
    const [state, setstate] = useState(false);
    useEffect(() => {
        Setisloading(true);
        document.getElementById("productlist").style.display = "none";
        axios.post(`${process.env.REACT_APP_PORT}/productlist`
            , {})
            .then(res => {
                // console.log(res.data)
                let a1 = [];
                res.data.map(items => {
                    if (items.Catagory.includes(Catagory) || items.Sizelist.includes(Catagory) || items.Brand === Catagory || (items.Price <= Catagory && Catagory >= 100)) {
                        a1.push(items)
                    }
                    if (Catagory >= 50 && Catagory <= 100 && items.Discount >= Catagory) {
                        // console.log(items.Discount)
                        a1.push(items);
                    }

                })
                // a.sort((a, b) => a.Price - b.Price);
                setlistpro(a1);
                setcopylistpro(a1.reverse());
                Setisloading(false);
                if (a1.length === 0) {
                    navigate("/notfound");
                }
                else {

                    document.getElementById("productlist").style.display = "flex";
                }
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
    // console.log("option",optionn)
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
    const homenavi = () => {
        navigate("/");
    }
    return (
        <>
            {isLoading ? <LoadingSpinner /> : null}
            <div id='productlist'>
                <div id='productlist1'>
                    {/* <div className="navigation">
                        <h5>

                            <span onClick={homenavi}>Home  </span> {'>'}
                            <span >{Catagory.toUpperCase()}  </span>
                        </h5>
                      
                    </div> */}
                    {/* <h2>
                        {Catagory.toUpperCase()}
                    </h2> */}
                    {/* <div className="filter1">
                        <div className='sorting'>

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
                        <Filter /> 
                    </div> */}
                    <div>
                        <h4 style={{fontWeight:"bolder"}}>{Catagory.toUpperCase()}</h4>
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
