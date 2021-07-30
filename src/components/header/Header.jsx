import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to</span>
        <span className="headerTitleLg">BloggyNox</span>
      </div>
      <div className="headerImg"></div>
    </div>
  );
}

export default Header;
