import React from 'react'
import { useLoaderData, useNavigate } from "react-router-dom";
import "./PostDetails.css"
import { FaArrowLeft } from "react-icons/fa";

function PostDetails() {
    const data = useLoaderData();
    const navigate = useNavigate()
  return (
    <div className='container'>
       <span onClick={() => navigate(-1)} style={{display:"flex", flexDirection:"row", alignItems:"center", columnGap:"1rem", cursor:"pointer" }}><FaArrowLeft   size="32px" /><p style={{color: "royalblue"}}>Go Back</p></span> 
       <h1>Post Details</h1>
        <p>user-id: {data.userId}</p>
        <p>id: {data.id}</p>
        <p>title: {data.title}</p>
        <p>body: {data.body}</p>
    </div>
  )
}

export default PostDetails