import React, { useContext } from 'react'
import { MainContext } from '../../../../../context/ContextProvider'
import "../Beauty/Beauty.scss"

const Products = () => {
  const {filter,setFilter}=useContext(MainContext)
  const {count,setCount}=useContext(MainContext)
  return (
    <>
    <div className='category'>
      <div className='container'>
        <div className='category-title'>
         <h1>tips</h1>
         <p>A collection of {count} post</p>
        </div>
        <hr/>
       <div className='second-section__products'>
       {filter && filter
        .filter((data)=>{
         console.log(data.count);
         return data.name.toLowerCase()==="tips" ? data : data.name.toLowerCase().includes("tips")
       })
       .map((product,index)=>(
         
         <>
          <div className="second-section__products-first" key={index}>
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

export default Products