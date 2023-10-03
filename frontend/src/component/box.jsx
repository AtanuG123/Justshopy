import { useState } from "react";
import "./box.css";

import { useNavigate } from "react-router-dom";

export default function Itembox(props) {
  const [photo, setphoto] = useState(props.img1);
  const navigate = useNavigate();
  const switchonclick = (e) => {
    navigate("/product/" + props.customid);
  };

  // const changeimg=()=>{
  //   setphoto(props.img2)
  // }
  // const changeprev=()=>{
  //   setphoto(props.img1)
  // }

  return (
    <div className="box">
      <div>
        {/* <img id="img"src={photo} alt="productimg" onMouseLeave ={changeprev} onMouseEnter={changeimg} onClick={switchonclick}></img> */}
        <img
          id="img"
          src={photo}
          alt="productimg"
          onClick={switchonclick}
        ></img>
        <p>{props.brand}</p>
      </div>
      <div className="box2">
        <h5 className="productname" id="proname">
          {props.name}
        </h5>
        <p className="descrip">
          {props.description ? props.description.slice(0, 25) : " "}...
        </p>
        <div className="box2_1">
          <p className="price">₹{props.price}</p>
          <p className="mrp1">
            {Math.round((100 * props.price) / (100 - props.discount)) +
              props.price}
          </p>
          <p className="discount1">{props.discount}% Off</p>
        </div>
        <div>
          {/* <span>Size :</span> */}
          {props.size.map((size) => {
            return <span id="size">{size.toUpperCase()}</span>
          })}
        </div>
      </div>
    </div>
  );
}
