import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/105813/pexels-photo-105813.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="Header"
      />
    </div>
  );
}

export default Header;
