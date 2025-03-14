
import React, { useState } from "react";
import "./navber.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { profile } from "../state/userprofile";
import { remove } from "../state/cart";
import { useParams } from "react-router-dom";
export default function Navber() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [logpos, setlogpos] = useState("login");
  const navigate = useNavigate();
  const user = useSelector(state => state.profile.data);
  const cartitem1 = useSelector(state => state.cart.data);
  const [searchinput, setsearchinput] = useState();

  useEffect(() => {
    if (user !== "invalid") {
      setlogpos(user.Name);

    }
  })

  const showlogpage = () => {
    if (user === "invalid") {
      navigate('/signup')
    }
    else {
      navigate("/user/" + user.Name);
    }
  }


  const shownav = () => {

    const k = document.getElementById("smallwrap");
    const k1 = document.getElementById("bars");
    const k2 = document.getElementById("cross");

    if (k.style.display === "flex") {
      k.style.display = "none";
      k2.style.display = "none";
      k1.style.display = "block";
    }

    else {
      k.style.display = "flex";
      k1.style.display = "none";
      k2.style.display = "block";
    }
  }
  const showinput = () => {
    const k = document.getElementById("searchin");
    k.style.display = "block";
  }

  const gotocart = () => {
    if (cartitem1.length == 0) {
      navigate('/notfound');
    }
    else {
      navigate('/cart');
    }
  }
  return (
    <div className="navber" id="nav">
      <div className="leftnav" >
        <ul className="logo ">
          <li>
            <img style={{ cursor: "pointer" }} onClick={() => navigate("/")} src={require("./images/logo2.png")} alt="logo"></img>
          </li>
        </ul >
        <ul className="nav_main">
          <li className="nav_li"><Link to={"/"}>HOME</Link> </li>
          <li className="nav_li"><Link to={"/allproduct"}>PRODUCTS</Link> </li>
          <li className="nav_li"><Link to={"/aboutus"}>ABOUT US</Link> </li>
          <li className="nav_li"><Link to={"/contactus"}>CONTACT</Link> </li>
        </ul>
      </div>
      <div className="rightnav">
        <ul>
          <li >
            <form className="" >
              <div className="search">
                <input type="search" id="searchin" placeholder="Search" onChange={(e) => { setsearchinput(e.target.value) }} />
                <button onClick={() => navigate("/productlist/" + searchinput.toLowerCase())} ><i onPointerEnter={showinput} className="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </form>
          </li>
          <li className="nav_li">
            <div className="profile-dropdown">
              <i className="fa-solid fa-user" onClick={showlogpage}></i>
              <ToastContainer />
              <div className="prodrop" >
              </div>
            </div>
          </li>
          <li className="nav_li"><a onClick={gotocart}>
            <i className="fa-solid fa-cart-shopping"></i><span className="position-absolute  translate-middle badge rounded-pill  " >{cartitem1.length}</span>
          </a></li>
          <li className="navwrap">
            <div onClick={shownav}>
              <i id="bars" className="fa-solid fa-bars"></i>
              <i id="cross" className="fa-solid fa-xmark"></i>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul className="navsmall" id="smallwrap">
          <li className="nav_small"><Link to={"/"}>HOME</Link> </li>
          <li className="nav_small"><Link to={"/allproduct"}>PRODUCTS</Link> </li>
          <li className="nav_small"><Link to={"/aboutus"}>ABOUT US</Link> </li>
          <li className="nav_small"><Link to={"/contactus"}>CONTACT US</Link> </li>
        </ul>
      </div>
    </div>
  );
}

