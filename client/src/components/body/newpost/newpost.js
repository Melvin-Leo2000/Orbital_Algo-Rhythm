import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import "./newpost.css"
import axios from "axios";
import Header from "../../header/Header"
import {showSuccessMsg, showErrMsg} from '../../utils/notification/Notification'

export default function Newpost() {
  const initialState = {
    err: '',
    success: ''
}

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const auth = useSelector(state => state.auth)
  const [data, setData] = useState(initialState)
  const {err, success} = data

  const {user} = auth
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      name: user.name,
      title,
      desc,
    };
    if(!file) return setData({...data, err: "No files were uploaded." , success: ''})

    if (file) {
      if(file.size > 1024 * 1024)
        return setData({...data, err: "Size too large." , success: ''})

      if(file.type !== 'image/jpeg' && file.type !== 'image/png')
        return setData({...data, err: "File format is incorrect." , success: ''})

      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      
      try {
        const response = await axios.post("/upload/upload_image", data, {
          headers: {'content-type': 'multipart/form-data'}
      });

      newPost.photo = response.data.url

      } catch (err) {
        setData({...data, err: err.response.data.msg , success: ''})
      }
    }
    try {
      const res = await axios.post("/posts/news", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      setData({...data, err: err.response.data.msg , success: ''})
    }
  };

  return (
  <div>
    <Header />
    <div className="write">
    {err && showErrMsg(err)}
    {success && showSuccessMsg(success)}
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="What's on your mind today?"
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          PUBLISH
        </button>
      </form>
    </div>
  </div>
  )
}
