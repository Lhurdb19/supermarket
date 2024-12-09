import React, { Fragment, useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../ContentApi/AuthContextApi';
import { useNavigate } from 'react-router-dom';
import { IoIosPower } from "react-icons/io";
import "./Navbar.css";
import Logo from '../Spinner/Logo';

function Sidenavbar() {
    const {Logout} = useContext(AuthContext);
    const [isMobile, setIsMobile] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const navigate = useNavigate()

    const handleSideBar = ()=> {
        setIsMobile(!isMobile)
    }

    const handleProfile = ()=> {
        setIsProfile(!isProfile)
    };

    const handleLogout = ()=> {
        Logout();
        navigate('/signin')
    }

  return (
        <Fragment>
    <div className='sidenavbar-component'>
      <Link to='/'>
        <Logo/>
      </Link>
      <div className="mobile-logo">ARIDUNNU</div>
      <div className={`sidenav-link ${isMobile ? 'mobile active' : '' }`} onClick={()=> setIsMobile(false)}>
        
        <ul>
        <Link to={'/'} onClick={()=> setIsMobile(!isMobile)}>Available Items</Link>
        <Link to={'/foodstuff'} onClick={()=> setIsMobile(!isMobile)}>Foodstuffs</Link>
        <Link to={'/provision'} onClick={()=> setIsMobile(!isMobile)}>Provisions</Link>
        </ul>
      </div>
        <div className="toggle-button" onClick={handleSideBar}>
        &#9776;
        </div>
        
        <div className="logout">
        <IoIosPower className='icons' style={{fontSize:'24px', color:'white'}} onClick={handleProfile}/>
        {isProfile && (
            <>
            <Link to={'/'}>My Profile</Link>
            <Link onClick={handleLogout}>Log Out</Link>
            </>
        )}

        </div>
    </div>
    <Outlet/>
    </Fragment>
  )
}

export default Sidenavbar;
