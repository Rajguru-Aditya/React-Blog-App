import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./singlePost.css";

const SinglePost = function () {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      console.log(res);
    };
    getPost();
  }, [path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1506970845246-18f21d533b20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
          className="singlePostImage"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Aditya</b>
          </span>
          <span className="singlePostDate">1 hr ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          cupiditate at, sequi libero quisquam nostrum vero exercitationem velit
          nulla cumque et molestiae alias rerum officiis nobis deserunt incidunt
          sint a!Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Commodi cupiditate at, sequi libero quisquam nostrum vero
          exercitationem velit nulla cumque et molestiae alias rerum officiis
          nobis deserunt incidunt sint a!Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Commodi cupiditate at, sequi libero quisquam nostrum
          vero exercitationem velit nulla cumque et molestiae alias rerum
          officiis nobis deserunt incidunt sint a!Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Commodi cupiditate at, sequi libero
          quisquam nostrum vero exercitationem velit nulla cumque et molestiae
          alias rerum officiis nobis deserunt incidunt sint a!Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Commodi cupiditate at, sequi
          libero quisquam nostrum vero exercitationem velit nulla cumque et
          molestiae alias rerum officiis nobis deserunt incidunt sint a!Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Commodi cupiditate
          at, sequi libero quisquam nostrum vero exercitationem velit nulla
          cumque et molestiae alias rerum officiis nobis deserunt incidunt sint
          a!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          cupiditate at, sequi libero quisquam nostrum vero exercitationem velit
          nulla cumque et molestiae alias rerum officiis nobis deserunt incidunt
          sint a!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
