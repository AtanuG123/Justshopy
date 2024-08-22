import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { remove } from "../state/cart";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Pages_css/userprofile.css"

export default function Success(){
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const order = useSelector(state=>state.cart.copydata)
    const subtotal =  useSelector(state => state.cart.copyprice);
    const user = useSelector(state=>state.profile.data);
    const order_id = useSelector(state=>state.order.data);
    // const[Name,setName] = useState("");
    // const[Email,setEmail] = useState("");
    // const[Amount,setAmount] = useState(0);
    // const[Orderid1,setOrderid1] = useState("");
    // setName(user.name)
    // setEmail(user.Email)
    // setOrderid1(order_id.orderid.slice(9,20));
    // setAmount(Math.round(subtotal + ((subtotal * 5) / 100)))
    const Name = user.Name;
    const Emailid =user.Email;
    const Amount = Math.round(subtotal + ((subtotal * 5) / 100));
    const Orderid = order_id.orderid.slice(9,20);
    useEffect(()=>{
        
        dispatch(remove());
        // dispatch(ordercreate(order))
    })
    const gotoprofile=(e)=>{
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_PORT}/paymentsuccess`, { Emailid,Name,Orderid,Amount})
        .then(result => {
            // console.log(result)
            navigate("/user/"+user.Name);
        })
        .catch(err => console.log(err));
    }
    return(
        <div  style={{marginTop:"80px"}}>
           <h4 style={{color:"green",fontWeight:"600"}}>YOUR ORDER PLACED</h4>
           <div  id="orderhead">
                <div>
                    <h4>ORDER DETAILS</h4>
                    <br></br>
                </div>
                <div id='tablebox'>
                    <table >
                        <tr id='detailhead'>
                            <td>ORDER PLACED</td>
                            <td>SHIP TO </td>
                            <td >ORDER ID</td>
                            <td>TOTAL AMOUNT</td>
                        </tr>
                        <tr id='orderitems'>

                            <td>{
                               order.map(item => {
                                    return (
                                        <span>
                                            <img src={item.img}></img>
                                        </span>
                                    )
                                })
                            }</td>

                            <td>{user.Name} </td>

                            

                            <td >{order_id.orderid.slice(9,20)}</td>
                            <td id="sub">{Math.round(subtotal + ((subtotal * 5) / 100))}</td>
                        </tr>
                    </table>
                    <button onClick={gotoprofile}>Profile</button>
                </div>
            </div> 
        </div>
    )
}
