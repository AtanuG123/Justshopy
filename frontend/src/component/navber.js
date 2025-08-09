import React, { useState, useEffect } from "react";
import "./navber.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { profile } from "../state/userprofile";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const user = useSelector(state => state.profile.data);
  const cartItems = useSelector(state => state.cart.data);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setIsScrolled(scrollTop > 50);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/productlist/${searchQuery.toLowerCase().trim()}`);
      setSearchQuery("");
      setIsSearchExpanded(false);
    }
  };

  // Handle profile navigation
  const handleProfileClick = () => {
    if (user === "invalid") {
      navigate('/signup');
    } else {
      navigate(`/user/${user.Name}`);
    }
  };

  // Handle cart navigation
  const handleCartClick = () => {
    if (cartItems.length === 0) {
      toast.info("Your cart is empty!", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      navigate('/cart');
    }
  };

  // Toggle search
  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (!isSearchExpanded) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  // Check if link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img 
              src={require("./images/logo2.png")} 
              alt="Ghosh Hardware Logo"
            />
            <h1 className="navbar-brand">Ghosh Hardware</h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="navbar-nav">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/allproduct" 
                className={`nav-link ${isActiveLink('/allproduct') ? 'active' : ''}`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/aboutus" 
                className={`nav-link ${isActiveLink('/aboutus') ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contactus" 
                className={`nav-link ${isActiveLink('/contactus') ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Actions */}
          <div className="navbar-actions">
            {/* Search */}
            <div className="search-container">
              <form onSubmit={handleSearch}>
                <input
                  id="search-input"
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`search-input ${isSearchExpanded ? 'expanded' : ''}`}
                />
                <button 
                  type="button" 
                  className="search-btn"
                  onClick={toggleSearch}
                  aria-label="Search"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>

            {/* Profile */}
            <button 
              className="action-btn"
              onClick={handleProfileClick}
              aria-label="Profile"
            >
              <i className="fa-solid fa-user"></i>
            </button>

            {/* Cart */}
            <button 
              className="action-btn"
              onClick={handleCartClick}
              aria-label="Shopping Cart"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItems.length > 0 && (
                <span className="cart-badge">{cartItems.length}</span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav">
            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/allproduct" className="mobile-nav-link">Products</Link>
            <Link to="/aboutus" className="mobile-nav-link">About</Link>
            <Link to="/contactus" className="mobile-nav-link">Contact</Link>
            
            <div className="mobile-actions">
              <button 
                className="action-btn"
                onClick={handleProfileClick}
                aria-label="Profile"
              >
                <i className="fa-solid fa-user"></i>
              </button>
              <button 
                className="action-btn"
                onClick={handleCartClick}
                aria-label="Shopping Cart"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                {cartItems.length > 0 && (
                  <span className="cart-badge">{cartItems.length}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ToastContainer />
    </>
  );
}