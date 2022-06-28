import React, { useEffect, useState } from 'react'
import Posts from "../body/postholder/postholder"
import Post from "../body/specificpost/specificpost"
import "./news.css"
import axios from "axios";


export default function News() {
const [posts, setPosts] = useState([]);

useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data)
    };
    fetchPosts();
  }, []);
  return (
    <div ClassName="news">
        <Posts posts={posts} />
    </div>
  )
}
