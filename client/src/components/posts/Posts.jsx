import React from "react";
import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((p, index, array) => (
        <Post post={array[array.length - 1 - index]} />
      ))}
    </div>
  );
};

export default Posts;
