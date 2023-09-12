import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { subtotal,productremove, removeFromCart, reduceCart } from "../state/cart";
import { useParams } from "react-router-dom";
import "../Pages_css/cart.css";
export default function Cartitem(props) {
    const {id} = useParams();
    const navigate  = useNavigate();
    const dispatch = useDispatch();
    const [qty, setqty] = useState(1);
    const reduceitem=(id)=>{
        dispatch(reduceCart(id));
    }
    const increseitem=()=>{
        if(qty<5){
            setqty(qty+1);
            dispatch(subtotal(props.price));
        }
    }
    return (

        <div className="cartbody">
            <div>
                <img className="cartimg" onClick={()=>navigate("/product/"+props.id)} src={props.img} alt="fgh" ></img>
                
            </div>
            <div className="details">
                <p className="name">
                    {props.name}
                </p>
                <p>
                    {props.description}
                    
                </p>
                <p className="size">
                size :<span>{props.size}</span> 
                </p>
                <p className="price_de">
                    <span className="actualprice">₹{props.price}</span><span className="mrp1">1233</span><span>{props.discount}% Off</span>
                </p>
                
                <div className="quantity">
                    <button onClick={()=>reduceitem(props.id)}>-</button>
                    <p id="itemquan">{props.qty}</p>
                    <button onClick={increseitem}>+</button>
                   
                </div>
                  
                </div>
               
                
            </div>

      
    );
}