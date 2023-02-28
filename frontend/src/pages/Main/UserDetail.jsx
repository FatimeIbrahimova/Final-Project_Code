import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const UserDetail = () => {
    const [data,setData]=useState("")
    fetch("http://localhost:8080/auth/userData",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token:JSON.parse(window.localStorage.getItem("token")),
      })
      
    })
    .then(res=>res.json())
    .then((data)=>{
      // console.log(data,"userData");
      setData(data.data)
    })
   
    useEffect(()=>{
      window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      })
     },[])
  return (
    <div style={{marginTop:200,display:"flex",gap:10,color:"red",justifyContent:"center"}}>
        <h1>{data.username}</h1>
        <h1>{data.surname}</h1>
    </div>
  )
}

export default UserDetail