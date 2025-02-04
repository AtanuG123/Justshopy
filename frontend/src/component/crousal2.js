import React, { useRef } from "react";
import Slider from "react-slick";
import "./crousal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function PreviousNextMethods() {
  let sliderRef = useRef(null);
  // const next = () => {
  //   sliderRef.slickNext();
  // };
  // const previous = () => {
  //   sliderRef.slickPrev();
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover:true,
    

  };
  return (
    <div className="slider-container">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div key={1}>
        <img src={"https://i.postimg.cc/GmWV7kc4/eco-flex.jpg"}  />
        <p>Starting at 10/kg</p>
        </div>
        <div key={2}>
        <img src={"https://i.postimg.cc/7ZTk6t5t/supersakti.jpg"} />
        <p>Starting at 10/kg</p>
        </div>
        <div key={3}>
        <img src={"https://i.postimg.cc/13c7sM6h/IMG-20241006-124758.jpg"} />
        <p>Starting at 25/kg</p>
        </div>
       
      </Slider>
      {/* <div style={{ textAlign: "center" }}>
        <button className="button" onClick={previous}>
        <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button className="button" onClick={next}>
        <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div> */}
    </div>
  );
}

// export default PreviousNextMethods;



// import React, { Component } from "react";
// import Slider from "react-slick";
// import "./crousal.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import suc1 from "./images/suc1.jpg"
// import wel1 from "./images/wel1.jpg"
// import sale from "./images/sale.jpg"
// export default function SimpleSlider() {
 
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <>
//       <div className="slider-container">
//         <Slider {...settings}>
//           <div className="crousalimg">
//             <img src={"https://i.postimg.cc/g0fx8s1J/salt.jpg"}  />
//           </div>
//           <div>
//             <img src={"https://i.postimg.cc/DyHrbGrj/IMG-20241006-130127.jpg"} />
//           </div>
//           <div>
//             <img src={"https://i.postimg.cc/4N2b2yJG/IMG-20241005-095812.jpg"} />
//           </div>
//         </Slider>
//       </div>
//     </>
//   );
// }
