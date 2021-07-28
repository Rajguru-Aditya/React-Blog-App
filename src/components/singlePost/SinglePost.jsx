import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1627478584302-18a30a4f5af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80"
          alt=""
          className="singlePostIamge"
        />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit</h1>
      </div>
    </div>
  );
};

export default SinglePost;
