import React from "react";
import Post from "../specificpost/specificpost"
import "./postholder.css"

export default function Posts({ posts }) { 
    console.log(posts)
    return (
      <div className="postholder">
        {posts && posts.length && posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    );
  }
