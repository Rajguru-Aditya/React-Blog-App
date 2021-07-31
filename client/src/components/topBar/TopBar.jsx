import React from "react";
import { Link } from "react-router-dom";
import "./topBar.css";

function TopBar() {
  const user = false;
  return (
    <div className="topBar">
      <div className="topLeft">
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-github-square"></i>
        <i className="topIcon fab fa-linkedin"></i>
      </div>
      <div className="topCentre">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://reach-me-apollonox.netlify.app/images/circle-croppedME.png"
            alt="Profile Pic"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
