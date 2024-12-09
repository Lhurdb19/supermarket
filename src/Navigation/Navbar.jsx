import React, { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { IoPersonAddOutline } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import './Navbar.css';
import Logo from "../Spinner/Logo";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isCategory, setIsCategory] = useState(false)
  const [isUserDrop, setIsUserDrop] = useState(false);

  const handleMenu = ()=> {
    setIsMobile(!isMobile)
  };

  const handleCategory = () => {
    setIsCategory(!isCategory)
  };

  const handlesUserDrop = ()=> {
    setIsUserDrop(!isUserDrop)
  }

  return (
    <Fragment>
        <div className="topnav-container">
          <Link to={'/'}>
          <Logo/>
          </Link>
          <div className="search">
            <input type="text" placeholder="search..." />
            <button> <IoSearch /> </button>
          </div>
          <div className="favorite-profile">

          <div className="toggle-menu" onClick={handleMenu}>
            {isMobile ? <HiMiniXMark /> : <MdMenu />}
        </div>

            <Link> <GrFavorite /> </Link>

            <Link>
            <div className="user" onClick={()=> setIsUserDrop(!isUserDrop)}>
            <p> <IoPersonAddOutline /> </p>
            {isUserDrop && (
                <div className="user-card">
                <Link to="/signin" onClick={ ()=> setIsMobile(!isMobile)}>Log in</Link>
                <Link to="/signup" onClick={()=> setIsMobile(!isMobile)}>Signup</Link>
                </div>
            )}
          </div>
            </Link>

            {/* Cart */}
            <Link> <BsCart4 /> </Link>
          </div>
        </div>
      <div className="navbar-component" >

        <div className="category-container" onClick={handleCategory}>
        <div className="all-category" >
          <p><BiMenuAltLeft/></p> 
          <h5 style={{fontSize: '20px'}}>All Categories</h5>
        </div>
        {
          isCategory && (
            <div className="category-card">
        <Link to='/' onClick={()=> setIsCategory(false)}>Beveragies</Link>
        <Link to='/' onClick={()=> setIsCategory(false)}>Foodgrains & Oil</Link>
        <Link to='/about' onClick={()=> setIsCategory(false)}>Personal Care</Link>
        <Link to='/contact' onClick={()=> setIsCategory(false)}>Pet Care</Link>
        <Link to='/' onClick={()=> setIsCategory(false)}>Vegetables & Fruits</Link>
         </div> 
         )}
        </div>

        <div className={`nav-link ${isMobile ? "mobile active" : ""}`} onClick={() => setIsMobile(false)}>

          <Link to="/" onClick={ ()=>setIsMobile(!isMobile)}>
            Home</Link>
          <Link to="/about" onClick={ ()=>setIsMobile(!isMobile)}>
            Shop</Link>
          <Link to="/" onClick={ ()=>setIsMobile(!isMobile)}>
            Vegetables & Fruits</Link>
          <Link to="" onClick={ ()=>setIsMobile(!isMobile)}>
            Foodgrains & Oil</Link>
          <Link to="/about" onClick={ ()=>setIsMobile(!isMobile)}>
            Dairy Products</Link>
          <Link to="/contact" onClick={ ()=> setIsMobile(!isMobile)}>
            Contact Us</Link>

            <div className="category-container" >
        <div className="mobile-category" onClick={()=> setIsCategory(!isCategory)}>
          <p><BiMenuAltLeft/></p> 
          <h5 style={{fontSize: '20px'}}>All Categories</h5>
        </div>
        {
          isCategory && (
            <div className="mobile-category-card">
        <Link to='/' onClick={()=> setIsCategory(false)}>Beveragies</Link>
        <Link to='/' onClick={()=> setIsCategory(false)}>Foodgrains & Oil</Link>
        <Link to='/about' onClick={()=> setIsCategory(false)}>Personal Care</Link>
        <Link to='/contact' onClick={()=> setIsCategory(false)}>Pet Care</Link>
        <Link to='/' onClick={()=> setIsCategory(false)}>Vegetables & Fruits</Link>
         </div> 
         )}
        </div>
        </div>
        {/* <div className="toggle-menu" onClick={handleMenu}>
            {isMobile ? <HiMiniXMark /> : <MdMenu />}
        </div> */}
                  <div className="mobile-search">
            <input type="text" placeholder="search..." />
            <button> <IoSearch /> </button>
          </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
