import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../../../context/ContextProvider'
import "./Beauty.scss"
import "../../../../pages/DataDetails/DataDetails"

const Beauty = () => {
   const {filter,setFilter}=useContext(MainContext)
   const {count,setCount}=useContext(MainContext)
   useEffect(()=>{
    axios.get(`http://localhost:8080/allProductt`)
    .then((res)=>setFilter(res.data))
  },[])

   const changeCount=()=>{
    setCount(count)
   }

  return (
    <>
     <div className='category'>
       <div className='container'>
         <div className='category-title'>
          <h1>beauty</h1>
          <p>A collection of {count} post</p>
         </div>
         <hr/>
        <div className='second-section__products'>
        {filter && filter
         .filter((data)=>{
          return data.name.toLowerCase()==="beauty" ? data : data.name.toLowerCase().includes("beauty")
        })
        .map((product)=>(
          
          <>
           <div className="second-section__products-first">
           <img
             src={product.url}
             alt="img"
           />
           <div className="second-section__products-first_desc">
             <h2>{product.title}</h2>
             <p>
             {product.desc}
             </p>
             <button className="second-section__products-first_desc-btn">
             <a href={`${product._id}`}>Read More</a>
             </button>
           </div>
         </div>
           </>
        ))
      }
        
        </div>
       </div>
     </div>
    </>
  )
}

export default Beauty