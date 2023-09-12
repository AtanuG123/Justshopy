import { useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Pages_css/cart.css";

import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart, reduceCart } from '../state/cart';
export default function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartproduct = useSelector(state => state.cart.data);
    const subtotal = useSelector(state => state.cart.subprice);
    // console.log("he he", cartproduct)
    const makepayment = async () => {
        if (Math.round(subtotal) !== 0) {
            const stripe = await loadStripe("pk_test_51NopitSJ60SygxplnqXdvdBzZ88SA9g1eLhATSLGgZrPNHNYWebcb4FStx1aqEoDWlSz7GGIKkhmDEh4FBNLm1BZ00c35qlSzc");
            const body = {
                products: Math.round(subtotal + ((subtotal * 5) / 100))
            }
            const headers = {
                "Content-Type": "application/json"
            }
            const response = await fetch(`${process.env.REACT_APP_PORT}/api/create-checkout-session`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            });

            const session = await response.json();
            console.log(session)
            const result = stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                console.log(result.error);
            }



        }
        else {
            toast.info("your cart is empty", {
                autoclose: 2000,
                position: "top-right"
            });
        }
    }
    const reduceitem = (id1, price1) => {
        dispatch(reduceCart({ id: id1, price: price1 }))
    }
    const increseitem = (item) => {
        dispatch(addtocart(item))
    }


    return (
        <>
            <div className="cart">
                <div className="listitem">
                    <table>
                        <tr id='cartheading'>
                            <td>PRODUCT</td>
                            <td>QUANTITY</td>
                            <td>PRICE</td>
                            <td>SIZE</td>
                            <td>TOTAL</td>
                        </tr>
                        {
                            cartproduct.map(item => (
                                <tr id='producthead'>
                                    <td><img className="imgonly" onClick={() => navigate("/product/" + item.id)} src={item.img}></img></td>
                                    <td><div className="quantity">
                                        <p className="btnp" onClick={() => reduceitem(item.id, item.price)}>-</p>
                                        <p id="quan">{item.qty}</p>
                                        <p className="btnp" onClick={() => increseitem(item)}>+</p>
                                    </div>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.size}</td>
                                    <td>{item.price * item.qty}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
                <div className="checkout">
                    <div>
                        <div>
                            <h4>Cart Summary</h4>
                        </div>
                        <div>
                            <p>Merchandise:</p>
                            <p>{subtotal}</p>
                        </div>
                        <div>
                            <p>Est. Tax(10%):</p>
                            <p>{((subtotal * 10) / 100)}</p>
                        </div>
                        <div>
                            <p>Est. Shipping & Handling:</p>
                            <p>00.00</p>
                        </div>
                        <div className="discount">
                            <p >Special Discount(5%):</p>
                            <p>-{((subtotal * 5) / 100)}</p>
                        </div>
                        <hr></hr>
                        <div>
                            <p>Total:</p>
                            <p>{subtotal + ((subtotal * 5) / 100)}</p>
                        </div>
                    </div>
                    <div className="chkout">
                        <button onClick={makepayment}>CHECKOUT NOW</button>
                    </div>


                </div>

            </div>
        </>
    );
}
