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
        <h1>Fatime Ibrahimova</h1>
       </div>
      <div className='list'>
       <ul>
        <NavLink to="/admin/products"><li>Products</li></NavLink>
        <NavLink to="/admin/categories"><li>Categories</li></NavLink>
       </ul>
      </div>
     </div>
    </div>
   </div>
   </>
  )
}

export default Navbar