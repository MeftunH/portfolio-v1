import React, { useState } from "react";
import { RiMenu3Fill,RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const path = window.location.pathname;

  return (
    <div className="header">
      {showHeader ? (
        <RiCloseFill 
        className="menu-icon position-fixed top-0 end-0"
        onClick={() => setShowHeader(!showHeader)}
        ></RiCloseFill>
      ) : (
        <RiMenu3Fill 
        className="menu-icon position-fixed top-0 end-0"
        onClick={() => setShowHeader(!showHeader)}
        ></RiMenu3Fill>
      )}
      <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box`}>
      <li className={`${path==='/' && 'active'}`}><Link to='/'>Home</Link></li>
      <li className={`${path==='/career' && 'active'}`}><Link to='/career'>Career</Link></li>
      <li className={`${path==='/courses' && 'active'}`}><Link to='/courses'>Courses</Link></li>
      <li className={`${path==='/contact' && 'active'}`}><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Header;
