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
                    <h2>TOP SELLING</h2>
                </div>
                <div className="cata_product">

                <div className="cata_product1">

                    <div>
                        <img onClick={() => switchonclick("pipe")} src={"https://i.postimg.cc/GmWV7kc4/eco-flex.jpg"} alt="loading"></img>
                        {/* <div onClick={() => switchonclick("pipe")} className="seedetails" >
                            <h3>Suction Hose</h3>
                        </div> */}
                    </div>
                    <div >
                        <img onClick={() => switchonclick("fishmedicine")} src={"https://www.vetoquinol.in/sites/incountry/files/styles/product_detail__photo_popup/public/meriquin_0.jpg?itok=edMkr4Wg"} alt="loading" ></img>
                        {/* <div onClick={() => switchonclick("salt")} className="seedetails">
                            <h3>Salt</h3>
                           
                        </div> */}
                    </div>
                </div>

                

                    <div className="cata_product2" >
                        <img onClick={() => switchonclick("fishfeed")} src={"https://5.imimg.com/data5/SELLER/Default/2021/7/LB/FQ/DZ/5788133/growfin-fish-feed.png"} alt="loading"></img>
                        {/* <div onClick={() => switchonclick("basin")} className="seedetails">
                            <h3>Plastic Basin</h3>
                        </div> */}
                    </div>
                
                </div>
            </div>

            <div id="featuredpro">
                <div id="featureheading">
                    <p>FEATURED PRODUCTS</p>
                </div>
                <div id="featuredmain">
                    <div>

                        <div>
                            <img onClick={() => switchonclick("bin")} className="featuredmain11" src={"https://i.postimg.cc/DySGRWF1/Screenshot-2024-09-07-110114.png"}></img>
                            <div>
                                <h4>PLASTIC  BIN</h4>
                                {/* <p>Starting at <span>100</span></p> */}
                            </div>

                        </div>
                        <div>

                            <img onClick={() => switchonclick("busket")} className="featuredmain12" src={"https://i.postimg.cc/Hn36Nq9B/chupri.jpg"}></img>
                            <div>
                                <h4>BASKET</h4>
                                {/* <p>Starting at <span>80</span></p> */}
                            </div>
                        </div>


                        <div>
                            <img onClick={() => switchonclick("footvalve")} className="featuredmain21" src={"https://i.postimg.cc/vH8M3jRK/telfish.jpg"}></img>
                            <div>
                                <h4>FOOTVALVE</h4>
                                {/* <p>Starting at <span>150</span></p> */}
                            </div>
                        </div>
                        <div>
                            <img onClick={() => switchonclick("net")} className="featuredmain32" src={"https://i.postimg.cc/Y2hVD34R/chapa.jpg"}></img>
                            <div>
                                <h4>NET</h4>
                                {/* <p>Starting at <span>70</span></p> */}
                            </div>
                        </div>
                

                        <div>
                            <img className="featuredmain22" onClick={() => switchonclick("salt")} src={"https://i.postimg.cc/vHM35td3/Screenshot-2024-09-07-105255.png"}></img>
                            <div>
                                <h4>SALT</h4>
                            </div>
                        </div>
                        <div>
                            <img className="featuredmain22" onClick={() => switchonclick("pipe")} src={"https://i.postimg.cc/GmWV7kc4/eco-flex.jpg"}></img>
                            <div>
                                <h4>SUCTION HOSE</h4>
                                {/* <p>Starting at <span>4500</span></p> */}
                            </div>

                        </div>
                        <div>
                            <img className="featuredmain22" onClick={() => switchonclick("basin")} src={"https://i.postimg.cc/FzpbT0VS/tajbucket.jpg"}></img>
                            <div>
                                <h4>BUCKET</h4>
                            </div>
                        </div>

                        <div>
                            <img className="featuredmain22" onClick={() => switchonclick("fishfeed")} src={"https://i5.walmartimages.com/asr/b705ae8f-2149-4e06-8685-81d1ef2a4737_1.933f9f3eaf9b9743afba01a12b9050d6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"}></img>
                            <div>
                                <h4>FISH FEED</h4>
                                {/* <p>Starting at <span>500</span></p> */}
                            </div>

                        </div>
                        <div>
                            <img className="featuredmain22" onClick={() => switchonclick("fishmedicine", false)} src={"https://www.loyalpetzone.com/wp-content/uploads/2024/07/merquin-syrup-dogs-birds-800x800.jpg"}></img>
                            <div>
                                <h4>MERIQUEN</h4>
                                {/* <p>Starting at <span>500</span></p> */}
                            </div>

                        </div>
                </div>

                </div>
            </div>
            
            {/* <div id="ad">
                <img src={require("../component/images/ad.jpg")} alt="ad"></img>
            </div> */}
            {/* <div id="benifits">
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
            </div> */}
            <Copyright />
        </div>




    );

}
