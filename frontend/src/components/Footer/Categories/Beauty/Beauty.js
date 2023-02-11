import React from 'react'
import { Link } from 'react-router-dom'
import "./Beauty.scss"

const Beauty = () => {
  return (
    <>
     <div className='beauty'>
       <div className='container'>
         <div className='beauty-title'>
          <h1>beauty</h1>
          <p>A collection of 8 post</p>
         </div>
         <hr/>
        <div className='second-section__products'>
        <div className="second-section__products-leftside">
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/350b1e64ba3459bb3898791aa5b26eb0/d8441/preview.webp"
              alt="img"
            />
           <div className="second-section__products-leftside-first_desc">
              <h2>What’s in your makeup <span>drawer</span></h2>
              <p>
              An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts. The typography of this industrial age was no longer handcrafted. Mass production and…
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
              <Link to="/firstCard">Read More</Link>
              </button>
            </div>
          

          </div>
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/b05520375116fe062ba264aa78de8d7f/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>Beauty itself is but the sensible image of the Infinite</h2>
              <p>
              An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts. The typography of this industrial age was no longer handcrafted. Mass production and…
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/465bb28f9e9b5bf5327e09eacba1a9f7/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>It's a good thing that beauty is only skin deep</h2>
              <p>
              Given the discourse around this issue, it can be easy to either overestimate the scope of this problem, or discount solving it as irrelevant to the libraries’ mission. Recent studies have shown that the scale and impact of fake news is less significant than much of the initial reporting would…
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
          <div className="second-section__products-leftside-first product">
              <img
                src="https://storyhub-beauty-redq.vercel.app/static/bcbf431fca61421f1b21562063d8307f/d8441/preview.webp"
                alt="img"
              />
              <div className="second-section__products-leftside-first_desc products">
                <h2>Never ask a girl with winged eyeliner why she’s late</h2>
                <p>
                Wow! I love blogging so much already. Did you know that “despite its name, salted duck eggs can also be made from chicken eggs, though the taste and texture will be somewhat different, and the egg yolk will be less rich.”? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra…
                </p>
                <button className="second-section__products-leftside-first_desc-btn">
                  Read More
                </button>
              </div>

            </div>
           
         
            
        </div>
        <div className="second-section__products-rightside">
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/7e1fa5ac3d06e65804b3ec7d00b5b93b/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>I think permitting the game to become too physical takes away a little bit of the beauty</h2>
              <p>
              An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts. The typography of this industrial age was no longer handcrafted. Mass production and…
              </p>
              <button className="second-section__products-leftside-first_desc-btn">
                Read More
              </button>
            </div>

          </div>
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/2c49ef889edcc5876f9805abe0979f1f/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>What the imagination seizes as beauty must be truth</h2>
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
          <div className="second-section__products-leftside-first">
            <img
              src="https://storyhub-beauty-redq.vercel.app/static/cd708d69721e79c0da0f18148e3205f4/d8441/preview.webp"
              alt="img"
            />
            <div className="second-section__products-leftside-first_desc">
              <h2>Your favorite skincare products</h2>
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
          <div className="second-section__products-leftside-first product">
              <img
                src="https://storyhub-beauty-redq.vercel.app/static/34ed5ef02af3b249256c4152efffc2aa/d8441/preview.webp"
                alt="img"
              />
              <div className="second-section__products-leftside-first_desc products">
                <h2>Foundation should unify tone, but it shouldn’t take away the individuality of the skin</h2>
                <p>
                Wow! I love blogging so much already. Did you know that “despite its name, salted duck eggs can also…
                </p>
                <button className="second-section__products-leftside-first_desc-btn">
                  Read More
                </button>
              </div>

            </div>     
           <div className="second-section__products-leftside-first product">
              <img
                src="https://storyhub-beauty-redq.vercel.app/static/d436b841b5bbad3bd8156678d595b46a/d8441/preview.webp"
                alt="img"
              />
              <div className="second-section__products-leftside-first_desc products">
                <h2>Beauty arises out of human inspiration</h2>
                <p>
                Technology companies can do more, but as long as these trends continue, there will be incentives for…
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

export default Beauty