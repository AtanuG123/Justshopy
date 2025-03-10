import Crousal from "../component/crousal";
import Crousal2 from "../component/crousal2";
import { useNavigate } from "react-router-dom";
import "../Pages_css/home.css";
import Copyright from "../component/Footer";
import home1 from "../component/images/home1.jpg"
import home2 from "../component/images/home2.jpg"
import home3 from "../component/images/home3.jpg"
import home4 from "../component/images/homesmall4.jpg"
import Navber from "../component/navber";
import { useEffect } from "react";
import Customerreview from "../component/customerreview";
export default function Home() {
    const navigate = useNavigate();


    function switchonclick(Catagory) {
        navigate("/productlist/" + Catagory);
    };



    useEffect(() => {
        
        const checkBoxes = () => {
            const triggerBottom = (window.innerHeight / 5) * 4;
            document.querySelectorAll(".feedimg").forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("show");
            }
            else {
                box.classList.remove("show");
              }
            });
          };
        window.addEventListener("scroll", checkBoxes);
        checkBoxes();
        return () => window.removeEventListener("scroll", checkBoxes);
      }, []);

   
    return (
        <div id="mainhome" >
            <div class="scroll-watcher"></div>
            <div className="home1">
                <p className="homep1">WELCOME TO</p>
                <p  className="homep2">GHOSH HARDWARE</p>
                <p  className="homep3">One Destination For Your Fishery Products</p>
                <p  className="homep4">
                <i class="fa-solid fa-location-dot" ></i>
                    Rajendrapur , Naihati , Near Blind School , 743166</p>
                {/* <img src={home1}></img> */}
            </div>


            <div id="featuredpro">
                <div id="featureheading">
                    <p>On Sale </p>

                   

                </div>
                <div id="featuredmain">
                    <div>
                        <img onClick={() => switchonclick("fishmedicine")} className="featuredmain11" src={"https://geturpet.com/wp-content/uploads/2021/03/Meriquin-500-ml-2.jpg"}></img>
                        <div>
                            <h4>Fish Medicines</h4>
                            {/* <p>Starting at <span>100</span></p> */}
                        </div>
                    </div>
                    <div>
                        <img onClick={() => switchonclick("basket")} className="featuredmain12" src={"https://i.postimg.cc/Hn36Nq9B/chupri.jpg"}></img>
                        <div>
                            <h4>Basket</h4>
                            {/* <p>Starting at <span>80</span></p> */}
                        </div>
                    </div>
                    <div>
                        <img onClick={() => switchonclick("footvalve")} className="featuredmain21" src={"https://i.postimg.cc/vH8M3jRK/telfish.jpg"}></img>
                        <div>
                            <h4>Footvalve</h4>
                            {/* <p>Starting at <span>150</span></p> */}
                        </div>
                    </div>
                    <div>
                        <img className="featuredmain22" onClick={() => switchonclick("basin")} src={"https://i.postimg.cc/FzpbT0VS/tajbucket.jpg"}></img>
                        <div>
                            <h4>Bucket</h4>
                        </div>
                    </div>
                </div>
                <div className="viewbtn">
                <button class="button-6" onClick={()=>navigate('/allproduct')}role="button">View all 
                <i class="fa-solid fa-arrow-right"></i>
                </button>

                </div>
                {/* <button class="button-6" role="button">View all</button> */}

            </div>


            
            <div className="saltsection">
                <div className="saltbanner">
                    <img onClick={() => switchonclick("salt")} src={home2}></img>
                </div>
                <div className="saltitems">
                    <Crousal />
                </div>
            </div>


            <div id="feedsection">
                <div className="feedimg" >
                    <img src={"https://5.imimg.com/data5/SELLER/Default/2021/7/LB/FQ/DZ/5788133/growfin-fish-feed.png"}></img>
                </div>
                <div className="feedimg">
                    <p>Premium Collection</p>
                    <h2>Growel Fish Food Floating
                        Pellets for Koi Fish, Gold Fish,Edible Fish,Pond Fish ,All Life Stages</h2>
                    <button class="button-53" role="button" onClick={() => navigate('/product/fishfeed12')}>Quick view
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>


            <div className="saltsection">
                <div className="saltbanner">
                    <img onClick={() => switchonclick("pipe")}src={home3}></img>
                </div>
                <div className="saltitems">
                    <Crousal2 />
                </div>
            </div>


            <div id="feedsection">
                <div className="feedimg">
                    <img src={"https://www.vetoquinol.in/sites/incountry/files/styles/product_detail__photo_popup/public/meriquin_0.jpg?itok=edMkr4Wghttps://5.imimg.com/data5/SELLER/Default/2021/7/LB/FQ/DZ/5788133/growfin-fish-feed.png"}></img>
                </div>
                <div className="feedimg">
                    <p>Limited Time Deal</p>
                    <h2>Treats mixed bacterial infections. Second generation fluroquinilone.</h2>
                    <button class="button-53" role="button" onClick={() =>navigate('/product/Vetoquinol-Meriquin-500ml')}>Quick view
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>



            </div>
            <Customerreview/>
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
