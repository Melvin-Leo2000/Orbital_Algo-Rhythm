import React from "react";
import Post from "../specificpost/specificpost"
import "./postholder.css"

export default function Posts({ posts }) {
    return (
      <div className="postholder">
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    );
  }