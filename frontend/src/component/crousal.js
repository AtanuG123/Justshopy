// import { Component, useState } from "react";
import "./crousal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
export default function Crousal() {
  const images = [
    {
      id: 1,
      src: require("./images/sale1.jpg"),
      alt: "img1",
    },
    {
      id: 2,
      src: require("./images/sale2.jpg"),
      alt: "img2",
    },
    {
      id: 3,
      src: require("./images/ad.jpg"),
      alt: "img3",
    },
    {
      id: 2,
      src: require("./images/sale4.jpg"),
      alt: "img2",
    }
  ];

  const settings = {
    infinite: true,
    dots: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // lazyLoad: true,
    slidecount:Infinity,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: (
    //   <div>
    //     <div className="next-slick-arrow"> <i class="fa-solid fa-angle-right"></i></div>
    //   </div>
    // ),
    // prevArrow: (
    //   <div>
    //     <div className="prev-slick-arrow"> <i class="fa-solid fa-angle-left"></i></div>
    //   </div>
    
  };
  return (
    <>
      <div className="slider-wrapper">
      
        <Slider {...settings}>
          {images.map((slide) => (
            <div className="slick-slide" key={slide.id}>
            {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
            <img className="slick-slide-image" alt="photo" src={slide.src} />
            {/* <label className="slick-slide-label">{slide.label}</label> */}
          </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
