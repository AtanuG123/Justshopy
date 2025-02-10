import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { remove } from "../state/cart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Pages_css/userprofile.css"

export default function Success() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Order,setOrder] = useState([]);
    const Odr = useSelector(state => state.cart.copydata);
    console.log(Odr)
    const subtotal = useSelector(state => state.cart.copyprice);
    const user = useSelector(state => state.profile.data);
    const order_id = useSelector(state => state.order.data);
    
    const Name = user.Name;
    const Emailid = user.Email;
    const Amount = Math.round(subtotal);
    const Orderid = order_id.orderid.slice(9, 20);
    const Datetime=new Date().toLocaleDateString()+ " "+new Date().toLocaleTimeString();
    // const Orderimg = order[0].img;
    // const Orderlen = order.length;
   

    const [timeleft,settimeleft]=useState(10);

    useEffect(() => {
        setOrder(Odr);
        if(timeleft===0){
            axios.post(`${process.env.REACT_APP_PORT}/paymentsuccess`, { Emailid, Name,Order ,Amount ,Orderid,Datetime})
            dispatch(remove());
            navigate("/user/" + user.Name); 
            return;
        }
        const timer = setTimeout(() => {
            settimeleft(timeleft-1);
        }, 1000); 

        return () => clearTimeout(timer); 

    }, [timeleft,navigate]);

   
    return (
        <div style={{ marginTop: "80px" }}>
            <h4 style={{ color: "green", fontWeight: "600" }}>YOUR ORDER PLACED</h4>
            <div id="orderhead">
                <div>
                    <h4>ORDER DETAILS</h4>
                    <br></br>
                </div>
                <div id='tablebox' >
                    <table >
                        <tr id='detailhead'>
                            <td>Product</td>
                            <td>Quantity</td>
                            <td >Price</td>
                            <td>Total</td>
                        </tr>
                            {Odr.map((item) => {
                                    return (
                                        <tr>
                                        <td>
                                            <img src={item.img}></img>
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>{item.price}</td>
                                        <td>{item.qty*item.price}</td>
                                        </tr>
                                    )
                                })
                            }
                            {/* <td>{user.Name} </td>
                            <td >{order_id.orderid.slice(9, 20)}</td>
                            <td id="sub">{Math.round(subtotal + ((subtotal * 5) / 100))}</td> */}
                    </table>
                </div>
            </div>
            <p style={{ textAlign:"center"}}> *Redirecting to your profile in {timeleft}s</p>
        </div>
    )
}
