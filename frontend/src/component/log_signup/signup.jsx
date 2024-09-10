import "./signup.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import axios from "axios";
export default function Signup() {

  const [Name, SetName] = useState(null);
  const [Email, SetEmail] = useState(null);
  const [Password, SetPassword] = useState(null);
  const [Address, SetAddress] = useState(null);
  const [Pin, SetPin] = useState(null);
  const navigate = useNavigate();
  const from1 = useRef();
  const user_exist = (data) => {
    toast.info(
      data ,
      {
        autoClose: 2000,
        position: "top-right",
        theme: "colored",
        className: "toast-message",
      }
    );
  };
  const user_success=(success)=>{
    toast.success(success,{
      autoClose:2000,
      position: "top-right",
    })
  }
  const handleonclick1 = (e) => {
    e.preventDefault();
    // document.getElementById("loader").style.display = "inline";
    axios
      .post(`${process.env.REACT_APP_PORT}/signup`, { Name, Email, Password,Address,Pin })
      .then((result) => {
        console.log(result.data);
        if (result.data === "user_exist") {
          user_exist("user already exist");
          document.getElementById("loader").style.display = "none";
        } 
        else {
          document.getElementById("loader").style.display = "none";
          navigate("/login");
          user_success("signup succesfull");
          emailjs.sendForm('service_f0lo43n', 'template_2kwnnnb', from1.current, '58oZ9ibqxclPO-LFI')
            .then((result) => {
              console.log(result.text);
            }
            ,(error) => {
                console.log(error.text);
            });
        }
      })
      .catch((err) => console.log(err));

  };

  return (
    <div className="body">
      <div className="main" id="sign1">
      <img className="logo_auth" src={require("../images/logo.png")}></img>

        <div className="signup">
          <form className="signform" ref={from1} onSubmit={handleonclick1}>
            <ToastContainer/>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="User name"
              onChange={(e) => {
                SetName(e.target.value);
              }}
              required=""
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
              required=""
            />
            <input
              type="password"
              placeholder="Password"
              required=""
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            />
             <input
              type="text"
              name="user_address"
              placeholder="Address"
              onChange={(e) => {
                SetAddress(e.target.value);
              }}
              required=""
            />
            <input
              type="number"
              name="user_pin"
              maxLength={"100000"}
              minLength={"999999"}
              placeholder="Pincode"
              onChange={(e) => {
                SetPin(e.target.value);
              }}
              required=""
            />
            <button type="submit" className="signbtn">
              Sign up
            </button>
          </form>
          <div id="logpage">
            <p>already have account ? </p>
            <a className="logbtn" onClick={() => navigate("/login")}>Login here</a>
          </div>
        <div className="backhome">
        <i class="fa-solid fa-arrow-left"></i>
          <a href="/">Back to Home</a>
        </div>
      <img id="loader" style={{translate:"20px"}} src={require("../images/loader2.gif")} alt="loader"></img>
        </div>
      </div>
    </div>
  );
}
