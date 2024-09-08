import "./signup.css";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../../state/userprofile";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const [Email, SetEmail] = useState(null);
  const [Password, SetPassword] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginnotify = () => {
    toast.success("succesfully logged in", {
      autoClose: 1500,
      theme: "colored",
    });
  };
  const notfound = () => {
    toast.info("user not found", {
      autoClose: 1500,
      theme: "colored",
      position:"top-right"
    });
  };
  const handleonclick2 = (e) => {
    e.preventDefault();
    document.getElementById("loader").style.display = "inline";
    
    axios
      .post(`${process.env.REACT_APP_PORT}/login`, { Email, Password })
      .then((result) => {
        if (result.data !== "invalid") {
          // console.log(result.data);
          dispatch(profile(result.data));
          loginnotify();
          document.getElementById("loader").style.display = "none";
          navigate("/");
        } else {
          notfound();
          document.getElementById("loader").style.display = "none";
        }
       
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="body">

      <div className="main">
      <img className="logo_auth" src={require("../images/logo.png")}></img>

        <div className="signup">
          <form className="signform" onSubmit={handleonclick2}>
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
              required=""
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            />
            <button type="submit" className="signbtn">
              Login
            </button>
          </form>
          <div id="logpage">
            <p>New to Justshopy ? </p>
            <a className="logbtn" onClick={() => navigate("/signup")}>
              Signup here
            </a>
          </div>
        </div>
        <div className="backhome">
          <i class="fa-solid fa-arrow-left"></i>
          <a href="/">Back to Home</a>
       
    
        </div>
          <img id="loader" style={{width:"80px",marginTop:"0px"}} src={require("../images/loader2.gif")} alt="loader"></img>
      </div>
      <ToastContainer/>
    </div>
  );
}
