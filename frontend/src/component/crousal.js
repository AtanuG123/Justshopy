import React, { Component } from "react";
import Slider from "react-slick";
import "./crousal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import suc1 from "./images/suc1.jpg"
import wel1 from "./images/wel1.jpg"
import sale from "./images/sale.jpg"
export default function Crousal() {
 
  const settings = {
  
    infinite: true,
    dots: true,
   
    slidecount:Infinity,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="slider-wrapper">
        <Slider {...settings}>
          

          {/* <div>
            <img src={sale2} className="car-pic" />
          </div>
          <div>
            <img src={sale3} className="car-pic" />
          </div> */}
          
          <div>
            <img src={wel1} className="car-pic" />
          </div>
          <div>
            <img src={suc1} className="car-pic" />
          </div>
          <div>
            <img src={sale} className="car-pic" />
          </div>

        

         
        </Slider>
      </div>
    </>
  );
}
