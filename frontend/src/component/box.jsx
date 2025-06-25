import React, { useState } from "react";
import "./box.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addtocart } from "../state/cart";
import { useDispatch } from "react-redux";

export default function ProductCard(props) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProductClick = () => {
    navigate(`/product/${props.customid}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    
    if (!isAddedToCart) {
      setIsAddedToCart(true);
      dispatch(
        addtocart({
          id: props.customid,
          img: props.img1,
          description: props.description,
          price: props.price,
          name: props.name,
          discount: props.discount,
          size: "free",
          qty: 1,
        })
      );
      
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.info("Product already in cart!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    
    if (!isWishlisted) {
      toast.success("Added to wishlist!", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.info("Removed from wishlist!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const calculateOriginalPrice = () => {
    if (props.discount && props.discount > 0) {
      return Math.round((100 * props.price) / (100 - props.discount));
    }
    return null;
  };

  const originalPrice = calculateOriginalPrice();

  return (
    <div className="product-card" onClick={handleProductClick}>
      <ToastContainer />
      
      {/* Product Image */}
      <div className="product-image-container">
        <img 
          src={props.img1} 
          alt={props.name}
          className="product-image"
        />
        
        {/* Product Badges */}
        <div className="product-badges">
          {props.discount > 0 && (
            <span className="product-badge badge-sale">
              {props.discount}% OFF
            </span>
          )}
        </div>
        
        {/* Wishlist Button */}
        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlist}
          aria-label="Add to wishlist"
        >
          <i className={`fa-${isWishlisted ? 'solid' : 'regular'} fa-heart`}></i>
        </button>
        
        {/* Hover Overlay */}
        <div className="product-overlay">
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <i className="fa-solid fa-cart-plus"></i>
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Product Content */}
      <div className="product-content">
        {/* Brand */}
        {props.brand && (
          <div className="product-brand">{props.brand}</div>
        )}
        
        {/* Product Title */}
        <h3 className="product-title">
          {props.name ? props.name.slice(0, 60) : "Product Name"}
        </h3>
        
        {/* Product Description */}
        {props.description && (
          <p className="product-description">
            {props.description.slice(0, 80)}...
          </p>
        )}
        
        {/* Product Rating */}
        <div className="product-rating">
          <div className="rating-stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <span className="rating-count">(4.2)</span>
        </div>
        
        {/* Product Sizes */}
        {props.size && props.size.length > 0 && (
          <div className="product-sizes">
            {props.size.slice(0, 3).map((size, index) => (
              <span key={index} className="size-option">
                {size.toUpperCase()}
              </span>
            ))}
          </div>
        )}
        
        {/* Product Pricing */}
        <div className="product-pricing">
          <div className="price-container">
            <span className="current-price">₹{props.price}</span>
            {originalPrice && (
              <span className="original-price">₹{originalPrice}</span>
            )}
          </div>
          {props.discount > 0 && (
            <span className="discount-badge">{props.discount}% OFF</span>
          )}
        </div>
        
        {/* Product Actions */}
        <div className="product-actions">
          <button 
            className="action-btn btn-primary"
            onClick={handleAddToCart}
          >
            <i className="fa-solid fa-cart-plus"></i>
            Add to Cart
          </button>
          <button 
            className="action-btn btn-secondary"
            onClick={(e) => {
              e.stopPropagation();
              handleProductClick();
            }}
          >
            <i className="fa-solid fa-eye"></i>
            View
          </button>
        </div>
      </div>
    </div>
  );
}