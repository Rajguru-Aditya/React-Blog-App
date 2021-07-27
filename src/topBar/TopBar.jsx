import React from "react";
import "./topBar.css";

function TopBar() {
  return (
    <div className="topBar">
      <div className="topLeft">
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-github-square"></i>
        <i className="topIcon fab fa-linkedin"></i>
      </div>
      <div className="topCentre">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://reach-me-apollonox.netlify.app/images/circle-croppedME.png"
          alt="Profile Pic"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
