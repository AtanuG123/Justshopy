import { useState } from "react";
import "./box.css";

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addtocart } from "../state/cart";
import { useDispatch } from "react-redux";

export default function Itembox(props) {
  const [photo, setphoto] = useState(props.img1);
  const [flag, setflag] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const switchonclick = (e) => {
    navigate("/product/" + props.customid);
    window.location.reload(true);
  };
  const addednotify = (massage) => {
    toast.info(massage, {
      autoClose: 2000,
      position: "top-right",
      theme: "colored",
      className: "toast-message",
    });
  };
  const fordispatch = (e) => {
    if (flag === 0) {
      setflag(1);

      dispatch(
        addtocart({
          id: props.Customid,
          img: props.Img1,
          description: props.Descrip,
          price: props.Price,
          name: props.Name,
          discount: props.Discount,
          size: "free",
          qty: 1,
        })
      );
    } else if (flag === 1) {
      addednotify("already added");
    }
  };
  // const changeimg=()=>{
  //   setphoto(props.img2)
  // }
  // const changeprev=()=>{
  //   setphoto(props.img1)
  // }

  return (
    <div className="box">
      <ToastContainer />
      <div className="imgdiv">
        {/* <img id="img"src={photo} alt="productimg" onMouseLeave ={changeprev} onMouseEnter={changeimg} onClick={switchonclick}></img> */}
        <img
          id="img"
          src={photo}
          alt="productimg"
          onClick={switchonclick}
        ></img>
        {/* <div className="boxtocart">
          
        <button className="btn btn-primary" onClick={fordispatch}>Add to cart</button>
          </div> */}
      </div>
      <div className="box2" onClick={switchonclick}>
        <h5 className="productname" id="proname">
          {props.name ? props.name.slice(0, 48) : ""}
        </h5>
        {/* <p className="descrip">
          {props.description ? props.description.slice(0, 30) : " "}...
        </p> */}
        <div className="box2_1">
          <div>
            <p className="price">₹{props.price}</p>
            {/* <p className="discount2">{props.discount}% Off</p> */}
          </div>
          {/* <p className="mrp2">
          ₹{Math.round((100*props.price)/(100-props.discount))}
          </p> */}
        </div>
        {/* <div>
          {props.size.map((size) => {
            return <span id="size">{size.toUpperCase()}</span>
          })}
        </div> */}
      </div>
    </div>
  );
}
