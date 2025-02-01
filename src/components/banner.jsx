import React from 'react';
import '../css/banner.css'; // Assuming you're creating a separate CSS file for styles

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-heading">Welcome to Our E-Commerce Store</h1>
        <p className="banner-description">
          Discover the best deals on all your favorite products! Shop now and get
          exclusive discounts.
        </p>
        <button className="banner-btn">Shop Now</button>
      </div>
    </div>
  );
}

export default Banner;
