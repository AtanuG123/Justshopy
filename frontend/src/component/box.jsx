import "./box.css";



import { useNavigate } from "react-router-dom";


export default function Itembox(props) {
  const navigate = useNavigate();
 
  const switchonclick = (e) => {
 
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
