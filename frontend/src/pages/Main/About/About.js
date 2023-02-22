import React from 'react'
import { Helmet } from 'react-helmet'
import "./About.scss"

const About = () => {
  return (
    <>
    <Helmet>
        <title>About Page</title>
      </Helmet>
    <div className='about'>
     <div className='container'>
      <div className='about_page-desc'>
        <h1>About StoryHub</h1>
        <p>StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website.</p>
      </div>
      <div className='about_page-img'>
      <img src="https://storyhub-beauty-redq.vercel.app/static/653c0632ece5d5e9f457ea515248b26b/49aac/about.jpg" alt="img"/>
      </div>
      <div className='about_page-message'>
         <h2>Hey there, what’s up?</h2>
         <p>RedQ Team is a creative agency specializing in building scalable, high-performance web & mobile application. Our main concern is creating more value into the application so that can help our customers to grow their business.</p>
         <p>RedQ Team is a creative agency specializing in building scalable, high-performance web & mobile application. Our main concern is creating more value into the application so that can help our customers to grow their business.</p>
         <hr/>
         <ul>
              <li>
                <a href="https://www.facebook.com/redqinc/">
                  <i class="fa-brands fa-square-facebook" />
                </a>
              </li>
              <li>
                <a className="social-icon" href="https://www.instagram.com/redqinc/">
                  <i class="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a className="social-icon" href="https://twitter.com/redqinc">
                  <i class="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a className="social-icon" href="https://www.linkedin.com/company/redqinc/">
                  <i class="fa-brands fa-linkedin" />
                </a>
              </li>
            </ul>
      </div>
     </div>
    </div>
    </>
  )
}

export default About