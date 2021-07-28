import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1627478584302-18a30a4f5af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80"
        alt="Post"
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor, sit amet</span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto
        obcaecati blanditiis minima cum voluptatem. Vitae praesentium quidem
        neque ipsum culpa consequatur similique delectus, obcaecati dolore
        voluptatem assumenda dolorum maxime. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nemo iusto obcaecati blanditiis minima cum
        voluptatem. Vitae praesentium quidem neque ipsum culpa consequatur
        similique delectus, obcaecati dolore voluptatem assumenda dolorum
        maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        iusto obcaecati blanditiis minima cum voluptatem. Vitae praesentium
        quidem neque ipsum culpa consequatur similique delectus, obcaecati
        dolore voluptatem assumenda dolorum maxime.
      </p>
    </div>
  );
};

export default Post;
