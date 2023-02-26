import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../../Admin/Navbar/Navbar.scss"

const Navbar = () => {
    const [isMenuClicked,setIsMenuClicked]=useState(false)
    const [nav_list,setMenuClass]=useState("hidden")
    const handleClick=()=>{
        if(!isMenuClicked){
            setMenuClass("menu visible")
        }else{
            setMenuClass("menu hidden")
        }
        setMenuClass(nav_list==="hidden" ? "visible" :"hidden")
    }
    //login user profile
    const [data,setData]=useState("")
    fetch("http://localhost:8080/auth/adminUser",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token:JSON.parse(window.localStorage.getItem("user")),
      })
      
    })
    .then(res=>res.json())
    .then((data)=>{
      console.log(data,"adminUser");
      setData(data.data)
    })
  return (
   <>
   <div className='nav'>
    <div className='container'>
    <i class="fa-solid fa-bars" onClick={()=>handleClick()}></i>
    <h1>Dashboard</h1>
    <div></div>
    </div>
    <div className={nav_list}>
     <div className='nav-list'>
       <div className='admin-user'>
        <img src='https://static.thenounproject.com/png/1743560-200.png' alt="img"/>
        <h1>{data.username} {data.surname}</h1>
       </div>
      <div className='list'>
       <ul>
        <NavLink to="/admin/dashboard/products"><li>Products</li></NavLink>
        <NavLink to="/admin/dashboard/categories"><li>Categories</li></NavLink>
        <NavLink to="/admin/dashboard/comments"><li>Comments</li></NavLink>
        <NavLink to="/admin/dashboard/user"><li>User Profile</li></NavLink>
       </ul>
      </div>
     </div>
    </div>
   </div>
   </>
  )
}

export default Navbar