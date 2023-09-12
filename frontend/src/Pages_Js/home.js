import Crousal from "../component/crousal";
import { useNavigate } from "react-router-dom";
import "../Pages_css/home.css";
import { productlist, flag } from "../state/productlist";
import { useDispatch } from "react-redux";
import Copyright from "../component/Footer";
import { useParams } from "react-router-dom";
import Navber from "../component/navber";
export default function Home() {
    let { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function switchonclick(Catagory, flag1) {
        // console.log(typeof (Catagory));
        dispatch(flag(flag1));
        navigate("/productlist/" + Catagory);
    };


    return (





        <div id="mainhome">
            {/* <Navber /> */}
            <Crousal />
            <div id="catagory">
                <div id="catagoryheading">
                    <h2>Shop by Catagory</h2>
                </div>
                <ul>
                    <li >
                        <img src={require("../component/images/mencloth.jpg")} alt="loading"></img>
                        <div className="seedetails">
                            <h3>Men`s Collection</h3>
                            <a onClick={() => switchonclick("Man", true)}               >view products </a>
                        </div>
                    </li>
                    <li>
                        <img src={require("../component/images/collrectionwoman.jpg")} alt="loading" ></img>
                        <div className="seedetails">
                            <h3>Woman`s Collection</h3>
                            <a onClick={() => switchonclick("Woman", true)}> view products </a>
                        </div>
                    </li>
                    <li >
                        <img src={require("../component/images/watchglass.jpeg")} alt="loading"></img>
                        <div className="seedetails">
                            <h3>style's Collection</h3>
                            <a onClick={() => switchonclick("Sunglass", false)} >view products </a>
                        </div>
                    </li>

                </ul>
            </div>

            <div id="featuredpro">
                <div id="featureheading">
                    <h2>FEATURED PRODUCTS</h2>
                </div>
                <div id="featuredmain">
                    <div>

                        <div>
                            <img className="featuredmain11" src={require("../component/images/hoodie.jpeg")}></img>
                            <div>
                                <h4>Hoodies</h4>
                                <p>Starting at <span>399</span></p>
                            </div>

                        </div>
                        <div>

                            <img onClick={() => switchonclick("Tshirt", false)} className="featuredmain12" src={require("../component/images/tshirt.jpeg")}></img>
                            <div>
                                <h4>T-shirt</h4>
                                <p>Starting at <span>199</span></p>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div>
                            <img onClick={() => switchonclick("Jeans", false)} className="featuredmain21" src={require("../component/images/jeans.jpeg")}></img>
                            <div>
                                <h4>Jeanspant</h4>
                                <p>Starting at <span>699</span></p>
                            </div>
                        </div>
                        <div>
                            <img onClick={() => switchonclick("Blazer", false)} className="featuredmain32" src={require("../component/images/blazer.jpeg")}></img>
                            <div>
                                <h4>Blazer</h4>
                                <p>Starting at <span>999</span></p>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div>
                            <img className="featuredmain22" onClick={() => switchonclick("Kurta", false)} src={require("../component/images/playsuit.jpeg")}></img>
                            <div>
                                <h4>Kurta</h4>
                                <p>Starting at <span>249</span></p>
                            </div>

                        </div>
                        {/* <div>
                            <img className="featuredmain22" onClick={() => switchonclick("Kurta", false)} src={require("../component/images/playsuit.jpeg")}></img>
                            <div>
                                <h4>Kurta</h4>
                                <p>Starting at <span>249</span></p>
                            </div>

                        </div> */}
                    </div>
                  
                </div>
            </div>
            <div id="ad">
                <img src={require("../component/images/ad.jpg")} alt="ad"></img>
            </div>
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