import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const UserDetail = () => {
    const [data,setData]=useState({})
        axios.post("http://localhost:8080/auth/userData")
        .then((data)=>console.log(data,"userData"))
        window.localStorage.getItem("token")
    axios.get("http://localhost:8080/auth/login").then((res)=>setData(res.data))
  return (
    <div style={{marginTop:200}}>
        <h1>{data.email}</h1>
    </div>
  )
}

export default UserDetail