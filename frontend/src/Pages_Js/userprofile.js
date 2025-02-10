import { useDispatch } from "react-redux";
import { profile } from "../state/userprofile";
import { remove } from "../state/cart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import "../Pages_css/userprofile.css"

import LoadingSpinner from "../component/loader";

export default function Userprofile() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.data);
    const Emailid = user.Email
    const [allorder, setallorder] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    useEffect(() => {
        document.getElementById("orderhead").style.display = "none";
        // document.getElementById("product_r").style.display = "none";
        setisLoading(true);
        axios.post(`${process.env.REACT_APP_PORT}/user/`, { Emailid })
            .then(result => {
                const reversedData = [...result.data].reverse();
                setallorder(reversedData)
                // if (allorder.length===0) {
                //     document.getElementById("orderhead").style.display="none";
                // }
            })
            .catch(err => console.log(err));
            document.getElementById("orderhead").style.display = "block";
            // document.getElementById("product_r").style.display = "none";
            setisLoading(false);
    }
    , [Emailid])

    const logoutnotify = () => {
        toast.success("logout succesfull", {
            autoClose: 1500,
        });
    }
    const removeuser = () => {
        dispatch(profile("invalid"));
        dispatch(remove());
        navigate("/");
        logoutnotify();
    }
    
    return (
        <section>

            <div class="col-lg-4 userd">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex flex-column align-items-center text-center">
                            <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="Admin"
                                class="rounded-circle p-1 bg-warning" width="110" />
                            <div class="mt-3">
                                <h4>{user.Name}</h4>
                                <p class="text-secondary mb-1">{user.Email}</p>
                                <p class="text-muted font-size-sm">{user.Address}</p>
                                <p class="text-secondary mb-1">{user.Pin}</p>
                            </div>
                        </div>
                        <div class="list-group list-group-flush text-center mt-4 " >

                            {/* <a href="#" class="list-group-item list-group-item-action border-0" >Orders</a> */}


                            <a href="#" class="button-6 logbtnpro" onClick={removeuser}> Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading ? <LoadingSpinner /> : null}
            <div id="orderhead">
                <div>
                    <h4>Past Order Details</h4>
                    <br></br>
                </div>
                <div id='tablebox'>
                    <table >
                        <tr id='detailhead'>
                            <td>Status</td>
                            <td>Details</td>
                            <td>Amount</td>  
                            <td >Date</td>
                        </tr>
                        {allorder.map((items) => {
                                return (
                                    <tr id='orderitems'>
                                        <td> 
                                            <button className="btn btn-success">Ordered</button>
                                        </td>
                                        <td><a onClick={()=>navigate(`/orderdetails/`+items.Orderid)} className="">View Order</a></td>
                                        <td>{items.Amount}</td>
                                        <td>{items.Datetime}</td>                                   
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </section>

        

    );
}