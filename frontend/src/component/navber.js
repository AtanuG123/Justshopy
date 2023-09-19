// import { useState } from "react";
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
  const {id} = useParams();
  const [logpos, setlogpos] = useState("login");
  const navigate = useNavigate();
  const user = useSelector(state => state.profile.data);
  const cartitem1 = useSelector(state => state.cart.data);
  const[searchinput,setsearchinput] = useState();

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
      
      navigate("/user/"+user.Name);
    }
  }


  const shownav=()=>{


     const k =document.getElementById("smallwrap");
     const k1 =document.getElementById("bars");
     const k2 =document.getElementById("cross");
     
     if (k.style.display ==="flex"){
      k.style.display="none";
      k2.style.display="none";
       k1.style.display="block";
       
    }
    else{
       k.style.display="flex";
       k1.style.display="none";
       k2.style.display="block";
      

     }
  }
  const showinput=()=>{
    const k =document.getElementById("searchin");
    k.style.display="block";
  }


  return (
    <div className="navber" id="nav">
      <div className="leftnav" >
        <ul className="logo ">
          <li>

            <img src={require("./images/logo.png")} alt="logo"></img>
          </li>
        </ul >
        <ul className="nav_main">
          <li className="nav_li"><Link to={"/"}>Home</Link> </li>
          <li className="nav_li"><Link to={"/allproduct"}>Products</Link> </li>
          <li className="nav_li"><Link to={"/aboutus"}>About Us</Link> </li>
          <li className="nav_li"><Link to={"/aboutus"}>Contact us</Link> </li>
          {/* <li className="nav_li"><Link to={"/"}>Home</Link> </li> */}
          {/* <li className="nav_li"><Link to={"/"}>Home</Link> </li> */}


        </ul>
      </div>
      <div className="rightnav">
        <ul>
          <li >
            <form className="" >
              <div className="search">
                <input type="search" id="searchin" placeholder="Search" onChange={(e)=>{setsearchinput(e.target.value)}}/>
                <button onClick={()=>navigate("/productlist/"+searchinput)} ><i onPointerEnter={showinput} className="fa-solid fa-magnifying-glass"></i></button>
              </div>

            </form>
          </li>
          <li className="nav_li">

            <div className="profile-dropdown">
              <i className="fa-solid fa-user" onClick={showlogpage}></i>
              <ToastContainer/>
              <div className="prodrop" >
                {/* <li><button className="" onClick={() => navigate("/signup")} >signup</button></li> */}
                {/* <li><button className="" >{logpos}</button></li> */}
              </div>
            </div>
          </li>
          {/* <li className="nav_li"><a href="https://www.google.co.in/"><i className="fa-regular fa-heart"></i></a></li> */}
          <li className="nav_li"><a onClick={() => navigate("/cart")}>
          <i class="fa-solid fa-cart-shopping"></i><span className="position-absolute  translate-middle badge rounded-pill  " style={{ color: "black" }}>{cartitem1.length}</span>
          </a></li>
          <li className="navwrap">
            <div onClick={shownav}>
            <i id="bars" class="fa-solid fa-bars"></i>
            <i id="cross"class="fa-solid fa-xmark"></i>
            </div>
          </li>

        </ul>
      </div>
      <div>

        <ul className="navsmall" id="smallwrap">
          <li className="nav_small"><Link to={"/"}>Home</Link> </li>
          <li className="nav_small"><Link to={"/allproduct"}>Products</Link> </li>
          <li className="nav_small"><Link to={"/aboutus"}>About Us</Link> </li>
          <li className="nav_small"><Link to={"/aboutus"}>Contact us</Link> </li>
          {/* <li className="nav_li"><Link to={"/"}>Home</Link> </li> */}
          {/* <li className="nav_li"><Link to={"/"}>Home</Link> </li> */}


        </ul>
       
      </div>
    </div>
  );
}

