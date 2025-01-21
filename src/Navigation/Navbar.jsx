import React, { Fragment, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { IoPersonAddOutline } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { CartContext } from "../CartContext/cartContext";
import Favoritelist from "../Routes/FavoriteData/favoritelist";
import { useFavorites } from "../Routes/FavoriteData/favoritecontext";
import "./Navbar.css";
import Logo from "../Spinner/Logo";
import Mobilemenu from "./mobilemenu";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isUserDrop, setIsUserDrop] = useState(false);
  const { cartCount, totalCart } = useContext(CartContext);
  const [searchProduct, setSearchProduct] = useState('');

  const handleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleCategory = () => {
    setIsCategory(!isCategory);
  };

  const handlesUserDrop = () => {
    setIsUserDrop(!isUserDrop);
  };


  return (
    <Fragment>
      <div className="topnav-container">
        <div className="menu-con">
      <div className="toggle-menu" onClick={handleMenu}>
            {isMobile ? <HiMiniXMark className="menu-icons" /> : <MdMenu className="menu-icons" />}
          </div>
        <Link to={"/"}>
          <Logo />
        </Link>
        </div>
        
        <div className="search">
          <input type="text" placeholder="search..." />
          <button>
            <IoSearch />
          </button>
        </div>

        <div className="favorite-profile">

          {/* //favorite link  */}
          <Link className="fav-icon" to='/favoritelist'>
            <GrFavorite />
          </Link>

          <Link>
            <div className="user" onClick={() => handlesUserDrop}>
              
              <p>
                <IoPersonAddOutline />
              </p>

              {isUserDrop && (
                <div className="user-card">
                  <Link to="/signin" onClick={() => setIsMobile(!isMobile)}>
                    Log in
                  </Link>
                  <Link to="/signup" onClick={() => setIsMobile(!isMobile)}>
                    Signup
                  </Link>
                </div>
              )}
            </div>
          </Link>

          {/* Cart */}
          <Link to={'/cartview'} className="cart-con">
          <div className="card-1">
            <BsCart4 className="cart-icon" />
            {cartCount > 0 ? <p>{cartCount}</p> : null }
          </div>
          {/* <div className="card-2">
            {totalCart > 0 ? <p>{totalCart}</p> : null }
          </div> */}
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
              <Link to="/beveragies" onClick={() => setIsCategory(false)}>
                Beveragies
              </Link>
              <Link to="/foodstuff" onClick={() => setIsCategory(false)}>
                Foodgrains & Oil
              </Link>
              <Link to="/personalcare" onClick={() => setIsCategory(false)}>
                Personal Care
              </Link>
              <Link to="/petcare" onClick={() => setIsCategory(false)}>
                Pet Care
              </Link>
              <Link to="/providion" onClick={() => setIsCategory(false)}>
                Vegetables & Fruits
              </Link>
              <Link to="/cartview" onClick={() => setIsCategory(false)}>
                Check Cart
              </Link>
            </div>
          )}
        </div>

        <div className={`nav-link ${isMobile ? "mobile active" : ""}`}>
          <div className="nav-link-container">
            
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

          <div className="modal">
          <Mobilemenu />
          </div>

        </div>

        <div className="mobile-search">
          <input type="text" placeholder="search..." />
          <button>
            <IoSearch />
          </button>
        </div>

      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
