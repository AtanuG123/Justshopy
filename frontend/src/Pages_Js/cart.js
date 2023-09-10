import { useSelector } from 'react-redux';

import "../Pages_css/cart.css";
import Cartitem from "../component/cartitem";
import Navber from '../component/navber';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
const navigate = useNavigate();
    const cartproduct = useSelector(state => state.cart.data);
    const subtotal = useSelector(state => state.cart.subprice);
    console.log("he he", subtotal)

    return (
        <>
            {/* <Navber/> */}
        <div className="cart">
            <div className="listitem">
                {
                    cartproduct.map(item => {
                        return (

                            <Cartitem name={item.name} discount={item.discount} price={item.price} size={item.size} description={item.description} img={item.img} id={item.id} />
                            )
                        })
                    }
            </div>
            <div className="checkout">
                <div>
                    <div>
                        {/* <i className="fa-solid fa-bag-shopping"></i> */}
                        <h4>Cart Summary</h4>
                    </div>
                    <div>
                        <p>Merchandise:</p>
                        <p>{subtotal}</p>
                    </div>
                    <div>
                        <p>Est. Tax(10%):</p>
                        <p>{((subtotal*10)/100)}</p>
                    </div>
                    <div>
                        <p>Est. Shipping & Handling:</p>
                        <p>00.00</p>
                    </div>
                    <div className="discount">
                        <p >Special Discount(5%):</p>
                        <p>-{((subtotal*5)/100)}</p>
                    </div>
                    <hr></hr>
                    <div>
                        <p>Total:</p>
                        <p>{subtotal+((subtotal*5)/100)}</p>
                    </div>
                </div>
                <div className="chkout">
                    <button onClick={navigate("/checkout")}>CHECKOUT NOW</button>
                </div>
                <div className="paymethod">
                    <p>WE ACCEPTS</p>
                    <img src={require("../component/images/paymethod.jpg")}></img>
                </div>
                <div>
                </div>
            </div>

        </div>
        </>
    );
}