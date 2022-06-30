import React from 'react'
import "./specificpost.css"
import { Link } from "react-router-dom";


export default function Specificpost({_id, title, createdAt, photo, name}) {
  return (
    <Link to={`/post/${_id}`} className='post'>
          {photo && <img className="postImg" src={photo} alt="" />}
      <div className="postInfo">
      <span className="postTitle">
        <h3>{title}</h3>
      </span>
      <hr />
      <span className="postDate">{new Date(createdAt).toDateString()}</span>
      <p className="postDesc">
      By: {name}
    </p>
    </div>

  </Link>
  )
}
