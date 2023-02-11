import React from 'react'
import { Link } from 'react-router-dom'
import "./LifeStyle.scss"

const LifeStyle = () => {
  return (
    <>
 <div className='life-style'>
       <div className='container'>
         <div className='life-style_title'>
          <h1>lifestyle</h1>
          <p>A collection of 2 post</p>
         </div>
         <hr/>
        <div className='second-section__products'>
       <div className='second-section__products-leftside'>
       <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/b9b35f8d467e871dbd43fbcc64406587/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>I have often said that the lure of flying is the lure of beauty</h2>
              <p>
                An Essay on Typography by Eric Gill takes the reader back to the year
                {' '}
                <span>1930. The year when a conflict…</span>
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
       </div>
       <div className='second-section__products-rightside'>
       <div className="second-section__products-leftside-first product">
              <img
                src="https://storyhub-beauty-redq.vercel.app/static/02f247d2c0109e288bd216c31650d916/d8441/preview.webp"
                alt="img"
              />
              <div className="second-section__products-leftside-first_desc products">
                <h2>Beauty begins the moment you decide to be yourself</h2>
                <p>
                  An Essay on Typography by Eric Gill takes the reader back to the year
                  {' '}
                  <span>1930. The year when a conflict…</span>
                </p>
                <button className="second-section__products-leftside-first_desc-btn">
                  Read More
                </button>
              </div>
            </div>
       </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default LifeStyle