import React, { useState } from "react";
import { RiMenu3Fill,RiCloseFill } from "react-icons/ri";

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
    </div>
  );
}

export default Header;
