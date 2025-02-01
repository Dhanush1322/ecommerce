import React, { useState } from "react";
import "../css/header.css";
import logo from "../assets/logo.png";
import { FaSearch, FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaUser, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="top-header">
        <div className="left-side">
          <span>Email: support@example.com</span>
        </div>
        <div className="right-side">
          <FaFacebook className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="nav1">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Search Section */}
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch />
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu Section */}
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          {/* Close Button at the top right */}
          {menuOpen && (
            <li className="close-sidebar" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </li>
          )}

          {/* Navigation Links */}
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/">Home</Link> {/* Link to Home */}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/products">Products</Link> {/* Link to Shop */}
          </li>
          <li
            className="category-menu"
            onMouseEnter={() => setShowSubmenu(true)}
            onMouseLeave={() => setShowSubmenu(false)}
          >
            Category
            {showSubmenu && (
              <ul className="submenu">
                <li onClick={() => setMenuOpen(false)}>
                  <Link to="/category/electronics">Electronics</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link to="/category/fashion">Fashion</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link to="/category/home-kitchen">Home & Kitchen</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link to="/category/books">Books</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                  <Link to="/category/beauty">Beauty & Personal Care</Link>
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/login">Login</Link> {/* Link to Login */}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/register">Register</Link> {/* Link to Register */}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link to="/contact">Contact Us</Link> {/* Link to Contact Us */}
          </li>

          {/* Profile, Cart, and Watchlist Icons */}
          <div className="user-icons">
            <li className="user-icon">
              <FaUser />
            </li>
            <li className="user-icon">
              <FaShoppingCart />
            </li>
            <li className="user-icon">
              <FaRegHeart />
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Header;
