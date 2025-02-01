import React, { Fragment, useContext, useState } from "react";
import {NavLink as Link, Outlet } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { BiMenuAltLeft } from "react-icons/bi";
import { CartContext } from "../CartContext/cartContext";
import { AuthContext } from "../ContentApi/AuthContextApi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import "./Navbar.css";
import Logo from "../Spinner/Logo";
import Mobilemenu from "./mobilemenu";
import { foodStuff } from "../Jsons/foodstuff";
import { bestProducts } from "../Jsons/bestProduct";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isUserDrop, setIsUserDrop] = useState(false);
  const [isMobileUserDrop, setIsMobileUserDrop] = useState(false);
  const { cartCount } = useContext(CartContext);
  const { isLoggedIn, currentUser, users, Logout } = useContext(AuthContext);
  const [searchProduct, setSearchProduct] = useState("");

  const handleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleCategory = () => {
    setIsCategory(!isCategory);
  };

  const handleUserDrop = () => {
    setIsUserDrop(!isUserDrop);
  };

  const handleMobileUserDrop = () => {
    setIsMobileUserDrop(!isMobileUserDrop);
  };

  const handleProductClick = () => {
    setSearchProduct("");
  };

  const NavLink = ({isActive}) => ({
    color: isActive ? "#D10B0B" : ''
  })

  const filteredFoodstuff = foodStuff.filter((foodstuff) =>
    foodstuff.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const filteredProvisions = bestProducts.filter((provision) =>
    provision.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <Fragment>
      {searchProduct && (
        <div className="search-product-container">
          <div className="result-card">
            {filteredFoodstuff.length > 0 ? (
              filteredFoodstuff.map((foodstuff) => (
                <Link
                  key={foodstuff.id}
                  to={`/foodstuffs/${foodstuff.id}`}
                  onClick={handleProductClick}
                >
                  <h4>{foodstuff.name}</h4>
                </Link>
              ))
            ) : (
              <p>No item found with the specified name!</p>
            )}
            {filteredProvisions.length > 0 ? (
              filteredProvisions.map((provision) => (
                <Link
                  key={provision.id}
                  to={`/provisions/${provision.id}`}
                  onClick={handleProductClick}
                >
                  <h4>{provision.name}</h4>
                </Link>
              ))
            ) : (
              <p>No item found with the specified name!</p>
            )}
          </div>
        </div>
      )}
      <div className="topnav-container">
        <div className="menu-con">
          <div className="toggle-menu" onClick={handleMenu}>
            {isMobile ? (
              <HiMiniXMark className="menu-icons" />
            ) : (
              <MdMenu className="menu-icons" />
            )}
          </div>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchProduct(e.target.value)}
            value={searchProduct}
          />
        </div>

        <div className="favorite-profile">
          {/* Favorite Link */}
          <Link className="fav-icon" to="/favoritelist">
            <GrFavorite />
          </Link>

          {/* User Profile with First Name and Dropdown */}
          <div className="user" onClick={handleUserDrop}>
            {isLoggedIn ? (
              <div className="welcome-drop">
                <p>! Welcome</p>
                <p>
                  {isUserDrop ? (
                    <RiArrowDropUpLine className="drop-icons" />
                  ) : (
                    <RiArrowDropDownLine className="drop-icons" />
                  )}
                </p>
                <p className="user-name">
                  {currentUser.firstName ? currentUser.firstName.slice(0, 3) : currentUser || currentUser}
                </p>
              </div>
            ) : (
              <p className="user-icon">
                <FaRegUser />
              </p>
            )}

            {isUserDrop && (
              <div className="user-card">
                {isLoggedIn ? (
                  <>
                    <Link >My Profile</Link>
                    <Link >Inbox</Link>
                    <Link to="/recentviews">Recent</Link>
                    <Link >Account Management</Link>
                    <Link >Delete Account</Link>
                    <button onClick={Logout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/signin" onClick={() => setIsMobile(false)}>
                      Log in
                    </Link>
                    <Link to="/signup" onClick={() => setIsMobile(false)}>
                      Signup
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
          {/* MOBILE USER  */}
          <div className="mobile-user" onClick={handleMobileUserDrop}>
            {isLoggedIn ? (
              <p>
                <FaRegCircleUser />
              </p>
            ) : (
              <p className="user-icon">
                <FaRegUser />
              </p>
            )}

            {isMobileUserDrop && (
              <div className="mobile-user-card">
                {isLoggedIn ? (
                  <>
                    <p>!Welcome</p>
                    <p className="mobile-user-name">
                      {currentUser.firstName || currentUser}
                    </p>

                    <Link style={NavLink}>My Profile</Link>
                    <Link style={NavLink}>Inbox</Link>
                    <Link to="/recentviews" style={NavLink}>Recent</Link>
                    <Link style={NavLink}>Account Management</Link>
                    <Link style={NavLink}>Delete Account</Link>
                    <button onClick={Logout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/signin" onClick={() => setIsMobile(!isMobile)} style={NavLink}>
                      Log in
                    </Link>
                    <Link to="/signup" onClick={() => setIsMobile(!isMobile)} style={NavLink}>
                      Signup
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to={"/cartview"} className="cart-con">
            <div className="card-1">
              <BsCart4 className="cart-icon" />
              {cartCount > 0 ? <p>{cartCount}</p> : null}
            </div>
          </Link>
        </div>
      </div>

      <div className="navbar-component">
        <div className="category-container" onClick={handleCategory}>
          <div className="all-category">
            <p>
              <BiMenuAltLeft />
            </p>
            <h5 style={{ fontSize: "20px" }}>All Categories</h5>
          </div>
          {isCategory && (
            <div className="category-card">
              <Link to="/beveragies" onClick={() => setIsCategory(false)} style={NavLink}>
                Beveragies
              </Link>
              <Link to="/foodstuff" onClick={() => setIsCategory(false)} style={NavLink}>
                Foodgrains & Oil
              </Link>
              <Link to="/personalcare" onClick={() => setIsCategory(false)} style={NavLink}>
                Personal Care
              </Link>
              <Link to="/petcare" onClick={() => setIsCategory(false)} style={NavLink}>
                Pet Care
              </Link>
              <Link to="/provision" onClick={() => setIsCategory(false)} style={NavLink}>
                Vegetables & Fruits
              </Link>
              <Link to="/cartview" onClick={() => setIsCategory(false)} style={NavLink}>
                Check Cart
              </Link>
            </div>
          )}
        </div>

        <div className={`nav-link ${isMobile ? "mobile active" : ""}`}>
          <div className="nav-link-container">
            <Link to="/about" onClick={() => setIsMobile(!isMobile)} style={NavLink}>
              About
            </Link>
            <Link to="/shop" onClick={() => setIsMobile(!isMobile)} style={NavLink}>
              Shop
            </Link>
            <Link to="/provision" onClick={() => setIsMobile(!isMobile)} style={NavLink}>
              Vegetables & Fruits
            </Link>
            <Link to="/foodstuff" onClick={() => setIsMobile(!isMobile)} style={NavLink}>
              Foodgrains & Oil
            </Link>
            <Link to="/diaryproduct" onClick={() => setIsMobile(!isMobile)} style={NavLink}>
              Daily Products
            </Link>
            <Link to="/contact" onClick={() => setIsMobile(!isMobile)} style={NavLink}>
              Contact Us
            </Link>
          </div>

          <div className="modal">
            <Mobilemenu />
          </div>
        </div>

        <div className="mobile-search">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchProduct(e.target.value)}
            value={searchProduct}
          />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
