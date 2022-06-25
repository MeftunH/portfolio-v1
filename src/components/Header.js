import React, { useState } from "react";
import { RiMenu3Fill,RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Header() {
  const [showHeader, setShowHeader] = useState(true);
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
      <li><Link>Home</Link></li>
      <li><Link>Projects</Link></li>
      <li><Link>Courses</Link></li>
      <li><Link>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Header;
