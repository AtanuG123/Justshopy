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
export default function Userprofile() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.data);
    const Emailid = user.Email
    const [allorder, setallorder] = useState([]);
    useEffect(() => {
        axios.post(`${process.env.REACT_APP_PORT}/user/`, { Emailid })
            .then(result => {
                const reversedData = [...result.data].reverse();
                setallorder(reversedData)
                // if (allorder.length===0) {
                //     document.getElementById("orderhead").style.display="none";
                // }
            })
            .catch(err => console.log(err));

    }, [Emailid])

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
        <div style={{ marginTop: "80px"}}>

            <div id="orderhead">
                <div className="userdetail"style={{textAlign:"left",padding:"30px"}}>
                    <h4>User Name : {user.Name}</h4>
                    <h4>User Email : {user.Email}</h4>
                    <h4>User Address : {user.Address}</h4>
                    <h4>User Pincode : {user.Pin}</h4>

                </div>
                <div>
                    <h4>Past Order Details</h4>
                    <br></br>
                </div>
                <div id='tablebox'>
                    <table >
                        <tr id='detailhead'>
                            <td>ORDER</td>
                            <td>SHIP TO </td>
                            <td >ORDER ID</td>
                            <td>TOTAL AMOUNT</td>
                            <td>DATE & TIME</td>
                        </tr>



                        {/* <tr id='orderitems'> */}
                        {
                            allorder.map((items) => {
                                return (
                                    <tr id='orderitems'>
                                        <td>
                                            <div>
                                                <img src={items.Orderimg}></img>
                                                <span
                                                    style={{ translate: "-70% 120%",backgroundColor: "grey",fontSize:"12px" }}
                                                    class="  badge rounded-pill"
                                                >  +{items.Orderlen-1}
                                                </span>
                                               
                                            </div>
                                        </td>
                                        <td>{items.Name}</td>
                                        <td>{items.Orderid}</td>
                                        <td>{items.Amount}</td>
                                        <td>{items.Datetime}</td>
                                    </tr>
                                )
                            })
                        }
                       
                    </table>
                   
                </div>
            </div>
            <br></br>
            <button className="btn btn-primary" onClick={removeuser}>
                Logout

            </button>
        </div>

    );
}