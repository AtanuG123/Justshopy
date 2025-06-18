import React, { useState, useEffect } from "react";
import "./navber.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(state => state.profile.data);
  const cartitem1 = useSelector(state => state.cart.data);
  const [searchinput, setsearchinput] = useState();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (user !== "invalid") {
      setlogpos(user.Name);
    }
  }, [user]);

  const showlogpage = () => {
    if (user === "invalid") {
      navigate('/signup')
    } else {
      navigate("/user/" + user.Name);
    }
  }

  const shownav = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    const k = document.getElementById("smallwrap");
    const k1 = document.getElementById("bars");
    const k2 = document.getElementById("cross");

    if (isMobileMenuOpen) {
      k.classList.remove("show");
      k2.style.display = "none";
      k1.style.display = "block";
    } else {
      k.classList.add("show");
      k.style.display = "flex";
      k1.style.display = "none";
      k2.style.display = "block";
    }
  }

  const showinput = () => {
    const k = document.getElementById("searchin");
    k.style.display = "block";
    k.focus();
  }

  const gotocart = () => {
    if (cartitem1.length === 0) {
      toast.info("Your cart is empty!", {
        position: "top-right",
        autoClose: 2000,
      });
      navigate('/notfound');
    } else {
      navigate('/cart');
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchinput && searchinput.trim()) {
      navigate("/productlist/" + searchinput.toLowerCase().trim());
    }
  }

  return (
    <>
      <div className={`navber ${isScrolled ? 'scrolled' : ''}`} id="nav">
        <div className="leftnav">
          <ul className="logo">
            <li>
              <img 
                style={{ cursor: "pointer" }} 
                onClick={() => navigate("/")} 
                src={require("./images/logo2.png")} 
                alt="logo"
              />
            </li>
          </ul>
          <ul className="nav_main">
            <li className="nav_li">
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="nav_li">
              <Link to={"/allproduct"}>PRODUCTS</Link>
            </li>
            <li className="nav_li">
              <Link to={"/aboutus"}>ABOUT US</Link>
            </li>
            <li className="nav_li">
              <Link to={"/contactus"}>CONTACT</Link>
            </li>
          </ul>
        </div>
        
        <div className="rightnav">
          <ul>
            <li>
              <form onSubmit={handleSearch}>
                <div className="search">
                  <input 
                    type="search" 
                    id="searchin" 
                    placeholder="Search products..." 
                    onChange={(e) => setsearchinput(e.target.value)}
                    value={searchinput || ''}
                  />
                  <button type="submit">
                    <i onPointerEnter={showinput} className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </form>
            </li>
            
            <li className="nav_li">
              <div className="profile-dropdown">
                <i className="fa-solid fa-user" onClick={showlogpage} title="Profile"></i>
                <ToastContainer />
              </div>
            </li>
            
            <li className="nav_li" style={{ position: 'relative' }}>
              <a onClick={gotocart} style={{ cursor: 'pointer' }}>
                <i className="fa-solid fa-cart-shopping" title="Shopping Cart"></i>
                {cartitem1.length > 0 && (
                  <span className="cart-badge">{cartitem1.length}</span>
                )}
              </a>
            </li>
            
            <li className="navwrap">
              <div onClick={shownav}>
                <i id="bars" className="fa-solid fa-bars"></i>
                <i id="cross" className="fa-solid fa-xmark" style={{ display: 'none' }}></i>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <ul className="navsmall" id="smallwrap">
            <li className="nav_small"><Link to={"/"}>HOME</Link></li>
            <li className="nav_small"><Link to={"/allproduct"}>PRODUCTS</Link></li>
            <li className="nav_small"><Link to={"/aboutus"}>ABOUT US</Link></li>
            <li className="nav_small"><Link to={"/contactus"}>CONTACT US</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}