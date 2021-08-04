import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.image ? (
        <img className="postImg" src={post.image} alt={post.title} />
      ) : (
        <img
          className="postImg"
          src="https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
          alt={post.title}
        />
      )}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((category) => (
            <span className="postCategory">{category.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
