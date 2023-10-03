import Crousal from "../component/crousal";
import { useNavigate } from "react-router-dom";
import "../Pages_css/home.css";
import Copyright from "../component/Footer";

import Navber from "../component/navber";
export default function Home() {
    const navigate = useNavigate();


    function switchonclick(Catagory) {
        navigate("/productlist/" + Catagory);
    };


    return (
        <div id="mainhome">

            <Crousal />
            <div id="catagory">
                <div id="catagoryheading">
                    <h2>SHOP BY CATAGORY</h2>
                </div>
                <ul>
                    <li onClick={() => switchonclick("man")} >
                        <img src={require("../component/images/mencloth.jpg")} alt="loading"></img>
                        <div className="seedetails" >
                            <h3>Men's Collection</h3>
                        </div>
                    </li>
                    <li onClick={() => switchonclick("woman")}>
                        <img src={require("../component/images/collrectionwoman.jpg")} alt="loading" ></img>
                        <div className="seedetails">
                            <h3>Woman's Collection</h3>
                           
                        </div>
                    </li>
                    <li onClick={() => switchonclick("style")}>
                        <img src={require("../component/images/watchglass.jpeg")} alt="loading"></img>
                        <div className="seedetails">
                            <h3>Style's Collection</h3>
                        </div>
                    </li>

                </ul>
            </div>

            <div id="featuredpro">
                <div id="featureheading">
                    <h3>FEATURED PRODUCTS</h3>
                </div>
                <div id="featuredmain">
                    <div>

                        <div>
                            <img onClick={() => switchonclick("hoodie")} className="featuredmain11" src={require("../component/images/hoodie.jpeg")}></img>
                            <div>
                                <h4>Hoodies</h4>
                                <p>Starting at <span>399</span></p>
                            </div>

                        </div>
                        <div>

                            <img onClick={() => switchonclick("tshirt")} className="featuredmain12" src={require("../component/images/tshirt.jpeg")}></img>
                            <div>
                                <h4>T-shirt</h4>
                                <p>Starting at <span>199</span></p>
                            </div>
                        </div>


                        <div>
                            <img onClick={() => switchonclick("jeans")} className="featuredmain21" src={require("../component/images/jeans.jpeg")}></img>
                            <div>
                                <h4>Jeans</h4>
                                <p>Starting at <span>699</span></p>
                            </div>
                        </div>
                        <div>
                            <img onClick={() => switchonclick("blazer")} className="featuredmain32" src={require("../component/images/blazer.jpeg")}></img>
                            <div>
                                <h4>Blazer</h4>
                                <p>Starting at <span>999</span></p>
                            </div>
                        </div>
                </div>
                <div>

                        <div>
                            <img className="featuredmain22" onClick={() => switchonclick("kurta")} src={require("../component/images/kurta.jpeg")}></img>
                            <div>
                                <h4>Kurta</h4>
                                <p>Starting at <span>249</span></p>
                            </div>

                        </div>
                        <div>
                            <img className="featuredmain22" onClick={() => switchonclick("sunglass", false)} src={require("../component/images/sunglass.jpeg")}></img>
                            <div>
                                <h4>Sunglass</h4>
                                <p>Starting at <span>199</span></p>
                            </div>

                        </div>


                        <div>
                            <img className="featuredmain22" onClick={() => switchonclick("shoes")} src={require("../component/images/shoes.jpeg")}></img>
                            <div>
                                <h4>Shoes</h4>
                                <p>Starting at <span>349</span></p>
                            </div>

                        </div>
                        <div>
                            <img className="featuredmain22" onClick={() => switchonclick("helmet", false)} src={require("../component/images/helmet.jpg")}></img>
                            <div>
                                <h4>Helmet</h4>
                                <p>Starting at <span>749</span></p>
                            </div>

                        </div>
                </div>

                </div>
            </div>
            {/* <div id="ad">
                <img src={require("../component/images/ad.jpg")} alt="ad"></img>
            </div> */}
            <div id="benifits">
                <div>
                    <i className="fa-solid fa-truck"></i>
                    <div>
                        <p>FREE SHIPPING</p>
                        <p>For all order over ₹499</p>
                    </div>
                </div>
                <div>
                    <i className="fa-solid fa-clock"></i>
                    <div>
                        <p>DELIVERY ON TIME</p>
                        <p>If good have prolems</p>
                    </div>
                </div>
                <div>
                    <i className="fa-regular fa-credit-card"></i>
                    <div>
                        <p>SECURE PAYMENT</p>
                        <p>100% secure payment</p>
                    </div>
                </div>
            </div>
            <Copyright />
        </div>




    );

}
