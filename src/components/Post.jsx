import React from "react";
import POSTS from "../utils/post.json";

function Post() {
  return (
    <div style={{ margin: "50px" }}>
      {POSTS.map((post) => (
        <div style={{ padding: "20px", backgroundColor: "" }}>
          <h2>{post.title}</h2> <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;
