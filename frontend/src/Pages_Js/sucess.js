import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { ordercreate, remove } from "../state/cart";
import { useEffect } from "react";
import "../Pages_css/userprofile.css"

export default function Success(){
    const dispatch = useDispatch();
    const order = useSelector(state=>state.cart.copydata)
    const subtotal =  useSelector(state => state.cart.copyprice);
    // console.log(Math.round(subtotal))
    useEffect(()=>{
       
        dispatch(remove());
        dispatch(ordercreate(order))
    })
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
                            <td>ORDER ID</td>
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
                            <td>ATANU GHOSH </td>
                            <td>SDFSDFSDFSD</td>
                            <td id="sub">{Math.round(subtotal + ((subtotal * 5) / 100))}</td>
                        </tr>
                    </table>
                </div>
            </div> 
        </div>
    )
}