import React from 'react'
import "./specificpost.css"
import { Link } from "react-router-dom";


export default function Specificpost({post}) {
  return (
    <div>
    <Link to={`/post/${post._id}`} className='post'>
          {post.photo && <img className="postImg" src={post.photo} alt="" />}
      <div className="postInfo">
      <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
      <span className="postTitle">
        <h3>{post.title}</h3>
      </span>
      <hr />
      <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      <p className="postDesc">
      By: {post.name}
    </p>
    </div>

  </Link>
  </div>
  )
}
