import React, { useEffect, useState } from 'react'
import Post from "../../components/body/specificpost/specificpost"
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
  console.log(posts)

  return (
    <div ClassName="news">
        {posts.map(p => {
          return(
            <div>
              <h1>{p.title}</h1>
            </div>
          )
        })}
    </div>
  )
}

