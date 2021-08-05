import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sideBar.css";

const SideBar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/06/8e/65/068e6571-3c3f-691e-0573-0c834112820c/pr_source.png/512x512bb.jpg?w=200"
          alt="Bear"
        />
        <p>
          lorem ipsum dolor sit amet, consectetur adip lorem, sed diam
          nonumyAute laborum elit aliqua est excepteur. Veniam cupidatat nostrud
          sunt voluptate. Eiusmod velit aliqua mollit consectetur. Id aute qui
          consequat proident qui. Eu sint exercitation nostrud non reprehenderit
          ipsum sint aliqua fugiat et commodo aute. Lorem nulla veniam ut
          consectetur.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-github-square"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
