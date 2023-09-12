import { useDispatch } from "react-redux";
import { profile } from "../state/userprofile";
import { remove } from "../state/cart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navber from "../component/navber";
import { useSelector } from 'react-redux';
import "../Pages_css/userprofile.css"
export default  function Userprofile() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
        <div style={{ marginTop: "100px" }}>
            <button className="btn btn-primary" onClick={removeuser}>
                Logout
            </button>
        </div>
    );
}