import React from 'react'

const Tips = () => {
  return (
    <>
<div className='life-style'>
       <div className='container'>
         <div className='life-style_title'>
          <h1>tips</h1>
          <p>A collection of 1 post</p>
         </div>
         <hr/>
        <div className='second-section__products'>
       <div className='second-section__products-leftside'>
       <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/2c278d57a60460fa70e0f790a7381e0b/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>Anyone who keeps the ability to see beauty never grows old</h2>
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
       </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default Tips