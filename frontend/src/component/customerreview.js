import React from "react";
import Slider from "react-slick";
import "./customerreview.css"
export default function Customerreview() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container customer">
            <h2 style={{padding:"20px"}}>Customer Reviews</h2>
            <Slider {...settings}>
                <div>
                    <div class="card " >
                    {/* <img className="h-5 w-8 m-0"src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="Admin"/> */}
                             <div class="card-body cardcustomer">
                            <h5 class="card-title">Sougata Ghosh</h5>
                            <p class="card-text">"High quality product and worth the money."</p>
                            <span>
                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star-half-stroke"style={{color:"#FFD43B"}} ></i>
                            </span>
                            </div>
                    </div>
                </div>
                <div>
                    <div class="card" >
                    {/* <img className="w-25 m-0 mx-auto card-img-top"src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="Admin"/> */}
                    <div class="card-body cardcustomer">
                            <h5 class="card-title">Mithun Das</h5>
                            <p class="card-text">"Excellent products and competitive prices!"</p>
                            <span>
                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star-half-stroke"style={{color:"#FFD43B"}} ></i>
                            </span>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card">
                    {/* <img className="w-25 m-0 mx-auto card-img-top"src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="Admin"/> */}
                    <div class="card-body cardcustomer">
                            <h5 class="card-title">Sanjay Tiwari</h5>
                            <p class="card-text">"Excellent customer service."</p>
                            <span>
                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-regular fa-star"style={{color:"#FFD43B"}} ></i>
                            </span>
                           
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card" >
                    {/* <img className="w-25 m-0 mx-auto card-img-top"src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="Admin"/> */}
                    <div class="card-body cardcustomer">
                            <h5 class="card-title">Asim Dutta</h5>
                            <p class="card-text">"Shopkepper is very friendly."</p>
                            <span>
                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star-half-stroke"style={{color:"#FFD43B"}} ></i>
                            </span>
                     
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card ">
                    {/* <img className="w-25 m-0 mx-auto card-img-top"src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="Admin"/> */}
                    <div class="card-body cardcustomer">
                            <h5 class="card-title">Amit Das</h5>
                            <p class="card-text">"Highly recomended and will visit again."</p>
                          
                            <span>
                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-regular fa-star"style={{color:"#FFD43B"}} ></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card">
                    {/* <img className=" h-3 mx-auto card-img-top"src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="Admin"/> */}
                    <div class="card-body cardcustomer">
                            <h5 class="card-title">Somnath Ghosh</h5>
                            <p class="card-text">"10/10 recomended!"</p>
                            <span>
                                <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i><i class="fa-solid fa-star-half-stroke"style={{color:"#FFD43B"}} ></i>
                            </span>
                            <p></p>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
}

