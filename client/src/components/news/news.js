import React, { useEffect, useState } from 'react'
import Post from "../../components/body/specificpost/specificpost"
import "./news.css"
import axios from "axios";


export default function News() {
const [posts, setPosts] = useState([]);



useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      console.log(res)
      console.group(res.data)
      setPosts(res.data)
      
    };
    fetchPosts();
  }, []);
  console.log(posts)
  console.log(Array.isArray(posts))

  

  return (
    <div ClassName="news">
        {posts?.map(p => {
          return(
          <Post
             _id={p._id}
             title={p.title}
             photo={p.photo}
             name={p.name}
             createdAt={p.createdAt}  

             />
          )
        })}
    </div>
  )
}

