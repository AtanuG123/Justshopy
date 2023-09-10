import "./box.css";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { product } from "../state/product";

export default function Itembox(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const switchonclick = (e) => {
    // dispatch(product({
    //   id: props.id,
    //   img1: props.img1,
    //   img2: props.img2,
    //   img3: props.img3,
    //   img4: props.img4,
    //   img5: props.img5,
    //   description:props.description,
    //   discount:props.discount,
    //   price: props.price,
    //   name: props.name,
    //   brand :props.brand
    // }));
    navigate("/product/" + props.customid);
  };

  return (
    <div className="box">
      <div>
        <img src={props.img1} alt="fgh" onClick={switchonclick}></img>
        <p>{props.brand}</p>
      </div>
      <div className="box2">
        <h5 className="productname" id="proname">
          {props.name}
        </h5>
        <p className="rating">{props.description ?props.description.slice(0,25):" "}...</p>
        <div className="box2_1">
          <h6 className="price">₹{props.price}</h6>
          <h6>
            {Math.round((100 * props.price) / (100 - props.discount)) + props.price}
          </h6>
          <p className="p">{props.discount}% Off</p>
        </div>
        <div>Free Delivery</div>
      </div>
    </div>
  );
}
