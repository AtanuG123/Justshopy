import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages_css/home.css";
import Copyright from "../component/Footer";
import Customerreview from "../component/customerreview";

export default function Home() {
  const navigate = useNavigate();
  const observerRef = useRef();

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const navigateToCategory = (category) => {
    navigate(`/productlist/${category}`);
  };

  const navigateToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to<br />
            <span style={{ color: '#22c55e' }}>Ghosh Hardware</span>
          </h1>
          <p className="hero-subtitle">
            Your One-Stop Destination for Premium Fishery Products
          </p>
          <p className="hero-description">
            Discover high-quality fishing equipment, fish feed, medicines, and accessories 
            to enhance your aquaculture experience.
          </p>
          <div className="hero-location">
            <i className="fa-solid fa-location-dot"></i>
            <span>Rajendrapur, Naihati, Near Blind School, 743166</span>
          </div>
          <div className="hero-cta">
            <a href="#featured" className="cta-primary">
              Explore Products
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="/contactus" className="cta-secondary">
              Contact Us
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="hero-floating" style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.1)' }}>
          <i className="fa-solid fa-fish"></i>
        </div>
        <div className="hero-floating" style={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.1)' }}>
          <i className="fa-solid fa-anchor"></i>
        </div>
        <div className="hero-floating" style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.1)' }}>
          <i className="fa-solid fa-water"></i>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="section featured-section">
        <div className="container">
          <div className="section-header scroll-animate">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">
              Discover our most popular and high-quality fishery products
            </p>
          </div>
          
          <div className="featured-grid">
            <div 
              className="featured-card scroll-animate"
              onClick={() => navigateToCategory("fishmedicine")}
            >
              <div className="featured-image">
                <img 
                  src="https://geturpet.com/wp-content/uploads/2021/03/Meriquin-500-ml-2.jpg" 
                  alt="Fish Medicines"
                />
                <div className="featured-overlay">
                  <div className="featured-overlay-content">
                    <h3 className="featured-overlay-title">Premium Quality</h3>
                    <p className="featured-overlay-subtitle">Trusted by professionals</p>
                  </div>
                </div>
              </div>
              <div className="featured-content">
                <h3 className="featured-title">Fish Medicines</h3>
                <p className="featured-description">
                  High-quality veterinary medicines for fish health and disease prevention.
                </p>
                <a href="#" className="featured-action">
                  View Products
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div 
              className="featured-card scroll-animate"
              onClick={() => navigateToCategory("basket")}
            >
              <div className="featured-image">
                <img 
                  src="https://i.postimg.cc/Hn36Nq9B/chupri.jpg" 
                  alt="Fishing Baskets"
                />
                <div className="featured-overlay">
                  <div className="featured-overlay-content">
                    <h3 className="featured-overlay-title">Durable Design</h3>
                    <p className="featured-overlay-subtitle">Long-lasting materials</p>
                  </div>
                </div>
              </div>
              <div className="featured-content">
                <h3 className="featured-title">Fishing Baskets</h3>
                <p className="featured-description">
                  Traditional and modern baskets for efficient fish catching and storage.
                </p>
                <a href="#" className="featured-action">
                  View Products
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div 
              className="featured-card scroll-animate"
              onClick={() => navigateToCategory("footvalve")}
            >
              <div className="featured-image">
                <img 
                  src="https://i.postimg.cc/vH8M3jRK/telfish.jpg" 
                  alt="Foot Valves"
                />
                <div className="featured-overlay">
                  <div className="featured-overlay-content">
                    <h3 className="featured-overlay-title">Reliable Performance</h3>
                    <p className="featured-overlay-subtitle">Tested quality</p>
                  </div>
                </div>
              </div>
              <div className="featured-content">
                <h3 className="featured-title">Foot Valves</h3>
                <p className="featured-description">
                  Essential components for water pumping systems in aquaculture.
                </p>
                <a href="#" className="featured-action">
                  View Products
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div 
              className="featured-card scroll-animate"
              onClick={() => navigateToCategory("basin")}
            >
              <div className="featured-image">
                <img 
                  src="https://i.postimg.cc/FzpbT0VS/tajbucket.jpg" 
                  alt="Plastic Basins"
                />
                <div className="featured-overlay">
                  <div className="featured-overlay-content">
                    <h3 className="featured-overlay-title">Multi-Purpose</h3>
                    <p className="featured-overlay-subtitle">Versatile usage</p>
                  </div>
                </div>
              </div>
              <div className="featured-content">
                <h3 className="featured-title">Plastic Basins</h3>
                <p className="featured-description">
                  Durable plastic containers for various fishery and household needs.
                </p>
                <a href="#" className="featured-action">
                  View Products
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 scroll-animate">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/allproduct')}
            >
              View All Products
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="section category-section">
        <div className="container">
          <div className="section-header scroll-animate">
            <h2 className="section-title">Product Categories</h2>
            <p className="section-subtitle">
              Explore our comprehensive range of fishery products and equipment
            </p>
          </div>
          
          <div className="category-grid">
            <div 
              className="category-card scroll-animate"
              onClick={() => navigateToCategory("salt")}
            >
              <img 
                src={require("../component/images/home2.jpg")} 
                alt="Premium Salt"
                className="category-image"
              />
              <div className="category-content">
                <h3 className="category-title">Premium Salt</h3>
                <p className="category-subtitle">High-quality salt for aquaculture</p>
                <a href="#" className="category-btn">
                  Explore Salt Products
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div 
              className="category-card scroll-animate"
              onClick={() => navigateToCategory("pipe")}
            >
              <img 
                src={require("../component/images/home3.jpg")} 
                alt="Suction Hoses"
                className="category-image"
              />
              <div className="category-content">
                <h3 className="category-title">Suction Hoses</h3>
                <p className="category-subtitle">Durable hoses for water systems</p>
                <a href="#" className="category-btn">
                  View Hose Collection
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="section carousel-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Special Offers</h2>
            <p className="section-subtitle">
              Limited time deals on premium fishery products
            </p>
          </div>
          
          <div className="carousel-container scroll-animate">
            <div className="carousel-track">
              <div 
                className="carousel-item"
                onClick={() => navigateToProduct("fishfeed12")}
              >
                <img 
                  src="https://5.imimg.com/data5/SELLER/Default/2021/7/LB/FQ/DZ/5788133/growfin-fish-feed.png" 
                  alt="Growel Fish Food"
                />
                <h3>Growel Fish Food</h3>
                <p>Premium floating pellets for all life stages of fish. Nutritionally balanced formula.</p>
              </div>
              
              <div 
                className="carousel-item"
                onClick={() => navigateToProduct("Vetoquinol-Meriquin-500ml")}
              >
                <img 
                  src="https://www.vetoquinol.in/sites/incountry/files/styles/product_detail__photo_popup/public/meriquin_0.jpg" 
                  alt="Meriquin Medicine"
                />
                <h3>Vetoquinol Meriquin</h3>
                <p>Second generation fluoroquinolone for treating mixed bacterial infections in fish.</p>
              </div>
              
              <div className="carousel-item">
                <img 
                  src="https://i.postimg.cc/g0fx8s1J/salt.jpg" 
                  alt="Premium Salt"
                />
                <h3>Premium Salt</h3>
                <p>High-purity salt specially processed for aquaculture applications.</p>
              </div>
              
              <div className="carousel-item">
                <img 
                  src="https://i.postimg.cc/GmWV7kc4/eco-flex.jpg" 
                  alt="Eco Flex Hose"
                />
                <h3>Eco Flex Hose</h3>
                <p>Flexible and durable suction hose for water pumping systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section reviews-section">
        <div className="container">
          <div className="section-header scroll-animate">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Trusted by fishery professionals and enthusiasts across the region
            </p>
          </div>
          
          <div className="reviews-grid">
            <div className="review-card scroll-animate">
              <p className="review-content">
                "Excellent quality products and competitive prices! The fish medicines are particularly effective and have helped maintain the health of my fish farm."
              </p>
              <div className="review-author">
                <div className="review-avatar">SG</div>
                <div className="review-info">
                  <h4>Sougata Ghosh</h4>
                  <div className="review-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="review-card scroll-animate">
              <p className="review-content">
                "Outstanding customer service and product quality. The team is knowledgeable and always ready to help with technical queries."
              </p>
              <div className="review-author">
                <div className="review-avatar">MD</div>
                <div className="review-info">
                  <h4>Mithun Das</h4>
                  <div className="review-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="review-card scroll-animate">
              <p className="review-content">
                "Reliable supplier with consistent quality. Their suction hoses have been working perfectly for over two years without any issues."
              </p>
              <div className="review-author">
                <div className="review-avatar">ST</div>
                <div className="review-info">
                  <h4>Sanjay Tiwari</h4>
                  <div className="review-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="scroll-animate">
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="section-subtitle">
              Join thousands of satisfied customers who trust Ghosh Hardware for their fishery needs
            </p>
            <div className="cta-buttons">
              <a href="/allproduct" className="cta-button cta-button-primary">
                Browse Products
                <i className="fa-solid fa-shopping-cart"></i>
              </a>
              <a href="/contactus" className="cta-button cta-button-secondary">
                Get in Touch
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Copyright />
    </div>
  );
}