import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Mobilemenu() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);
  const [mobileCategory, setMobileCategory] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(true);
    setMobileCategory(false);
  };

  const handleMobileCategory = () => {
    setMobileMenu(false);
    setMobileCategory(true);
  };

  return (
    <>
      <div className="modal">
        <div className="mobile-switch">
          <button onClick={handleMobileMenu}>Menu</button>
          <button onClick={handleMobileCategory}>All Category</button>
        </div>
        <div className="mobile-switch-info">
          {mobileMenu && (
            <div className="menu-info">
              
              <Link to="/about" onClick={() => setIsMobile(!isMobile)}>
                About
              </Link>
              <Link to="/shop" onClick={() => setIsMobile(!isMobile)}>
                Shop
              </Link>
              <Link to="/provision" onClick={() => setIsMobile(!isMobile)}>
                Vegetables & Fruits
              </Link>
              <Link to="/foodstuff" onClick={() => setIsMobile(!isMobile)}>
                Foodgrains & Oil
              </Link>
              <Link to="/diaryproduct" onClick={() => setIsMobile(!isMobile)}>
                Dairy Products
              </Link>
              <Link to="/contact" onClick={() => setIsMobile(!isMobile)}>
                Contact Us
              </Link>
            </div>
          )}
          {mobileCategory && (
            <div className="menu-info">
              <Link to="/beveragies" onClick={() => setIsMobile(!isMobile)}>
                Beveragies
              </Link>
              <Link to="/foodstuff" onClick={() => setIsMobile(false)}>
                Foodgrains & Oil
              </Link>
              <Link to="/personalcare" onClick={() => setIsMobile(false)}>
                Personal Care
              </Link>
              <Link to="/petcare" onClick={() => setIsMobile(false)}>
                Pet Care
              </Link>
              <Link to="/provision" onClick={() => setIsMobile(false)}>
                Vegetables & Fruits
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
