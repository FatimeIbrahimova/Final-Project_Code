import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../../../context/ContextProvider'
import "../FirstCard/FirstCard.scss"

const Beauty2 = () => {
  const {login,setLogin}=useContext(MainContext)
  const {socialNetworks,setSocialNetworks}=useContext(MainContext)
  const handleClick=()=>{
    if(!login){
      setSocialNetworks("visible")
    }
    else{
      setSocialNetworks("hidden")
    }
  }
  return (
  <>
    <div className='first-card'>
      <div className='container'>
        <div className='first-card_desc'>
          <h1>What’s in your makeup drawer</h1>
          <h2>BEAUTY</h2>
          <span>26 MAY, 2019</span>
        </div>
        <div className='first-card_img'>
           <img src='https://storyhub-beauty-redq.vercel.app/static/7e1fa5ac3d06e65804b3ec7d00b5b93b/5681e/preview.webp' alt="img"/>
        </div>
        <div className='first-card_message'>
          <p>
          An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds came to its term. The machines of the industrial world finally took over the handicrafts.

The typography of this industrial age was no longer handcrafted. Mass production and profit became more important. Quantity mattered more than the quality. The books and printed works in general lost a part of its humanity. The typefaces were not produced by craftsmen anymore. It was the machines printing and tying the books together now. The craftsmen had to let go of their craft and became a cog in the process. An extension of the industrial machine.

But the victory of the industrialism didn’t mean that the craftsmen were completely extinct. The two worlds continued to coexist independently. Each recognising the good in the other — the power of industrialism and the humanity of craftsmanship. This was the second transition that would strip typography of a part of its humanity. We have to go 500 years back in time to meet the first one.

A similar conflict emerged after the invention of the first printing press in Europe. Johannes Gutenberg invented movable type and used it to produce different compositions. His workshop could print up to 240 impressions per hour. Until then, the books were being copied by hand. All the books were handwritten and decorated with hand drawn ornaments and figures. A process of copying a book was long but each book, even a copy, was a work of art.

Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What typeface should we use and why? Does the typeface match the message and what we want to communicate with it? What will be the leading and why? Will there be more typefaces in our design? On what ground will they be combined? What makes our design unique and why? This is the part of humanity that is left in typography. It might be the last part. Are we really going to give it up?

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.

Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
          </p>
        </div>
        <div className='first-card_social-icons'>
           <ul>
            <li><i class="fa-brands fa-square-facebook" /></li>
            <li><i class="fa-brands fa-twitter" /></li>
            <li><i class="fa-brands fa-linkedin" /></li>
            <li><i class="fa-brands fa-reddit-alien"></i></li>
           </ul>
        </div>
        <hr/>
        <div className='first-card_switch'>
          <div></div>
          <div>
          <i class="fa-solid fa-border-all"></i>
          </div>
          <div className='first-card_switch-next'>
            <Link to="/beauty2"><h3>Next</h3><i class="fa-solid fa-greater-than"></i></Link>
          </div>
        </div>
        <hr/>
        <div className='comments'>
          <div className='comments_top'>
            <div>
              <span>0</span> <span>Comments</span>
            </div>
            <div className='login'>
            <div className='login-notification'>
           <a href="https://disqus.com" target="_blank"> <i class="fa-solid fa-comment"></i>
            <span>1</span></a>
            </div>
            <div className='login-part' onClick={()=>handleClick()}>
            <h3>Login</h3>
            <i class="fa-solid fa-caret-down"></i>
            </div>
            </div>
         </div>
         <div className={socialNetworks}>
         <div className='social-icons'>
             <ul>
              <li><a href='https://disqus.com/next/login/?forum=test-qrcecc5znu&evs=bmV0d29ya19kZWZhdWx0X2hpZGRlbjpmYWxsdGhyb3VnaDpkeW5hbWlj#!auth%3Astart'>Disqus</a></li>
              <li><a>Facebook</a></li>
              <li><a>Twitter</a></li>
              <li><a>Google</a></li>
             </ul>
            </div>
         </div>
         <div className='comments-add'>
           <div className='comments-add_top'>
              <div className='comments-add_top-title'>
               <h1>G</h1>
              </div>
              <div className='comments-add_top-write_comment'>
                <input className='input' placeholder='Start the discussion'/>
                <div className='comments-add_bottom'>
                  <div className='comments-add_bottom-style'>
                  <i class="fa-solid fa-images"></i>
                  <i class="fa-regular fa-image"></i>
                  <h3>B</h3>
                  <h3 className='cursive'>I</h3>
                  <h3 className='underline'>U</h3>
                  <h3 className='line-through'>S</h3>
                  <i class="fa-solid fa-link"></i>
                  <i class="fa-solid fa-eye-slash"></i>
                  <div>
                  <i class="fa-solid fa-less-than"></i>/<i class="fa-solid fa-greater-than"></i>
                  </div>
                  <i class="fa-solid fa-quote-left"></i>
                  </div>
                  <button className='comment-btn'>Comment</button>
                </div>
                <div className='login-comment'>
                  <div className='login-comment-icons'>
                   <h4>Log in with</h4>
                   <div className="login-comment-icons_icon">
                      <h3>D</h3>
                   <i class="fa-brands fa-facebook-f"></i>
                   <i class="fa-brands fa-twitter"></i>
                   <i class="fa-brands fa-google"></i>
                  </div>
                  </div>
                  <div className='login-comment-inputs'>
                    <h4>Or sign up with discuss</h4>
                    <input placeholder='Name'/>
                    <input placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                     <span>Please access our <a href="https://help.disqus.com/en/articles/1717103-disqus-privacy-policy" target="_blank">Privacy Policy</a> to learn what personal data Disqus collects and your choices about how it is used. All users of our service are also subject to our <a href='https://help.disqus.com/en/articles/1717102-terms-of-service' target="_blank">Terms of Service</a>.</span>
                  </div>
                </div>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
           </div>
         </div>
         <div className='comments_post-top'>
           <div className='comments_post-top-leftside'>
           <i class="fa-regular fa-bookmark"></i>
           <div className='comments_post-top-leftside-share'>
           <h5>Share</h5>
           <ul>
            <li><a><i class="fa-brands fa-twitter"></i></a></li>
            <li><a><i class="fa-brands fa-facebook-f"></i></a></li>
           </ul>
           </div>
           </div>
           <div className='comments_post-top-rightside-sort'>
           <h5>Best</h5>
           <h5>Newest</h5>
           <h5>Oldest</h5>
           </div>
         </div>
         <div className='comments_post-bottom'>
           <div className='comments_post-bottom-comment'>
             <div className='user-profile'>
             <img src='https://c.disquscdn.com/uploads/users/2534/640/avatar92.jpg?1590753847' alt="img"/>
             </div>
             <div className='comments_post-bottom-comment-rightside'>
               <div className='username'>
                <h3>oomyim</h3>
                <i class="fa-solid fa-user-plus"></i>
               </div>
               <div className='date'>
               <i class="fa-regular fa-clock"></i>
               <span>  3 years ago edited</span>
               </div>
               <div className='comment'>
                <p>Nice</p>
               </div>
               <div className='feedback'>
               <div className='feedback-likes'>
               <i class="fa-regular fa-thumbs-up"></i>
               <span> 0</span>
               </div>
               <div className='feedback-likes'>
               <i class="fa-regular fa-thumbs-down"></i>
               <span> 0</span>
               </div>
               <div>
                <ul>
                  <li>Reply</li>
                  <li>Share</li>
                </ul>
               </div>
               </div>
             </div>
           </div>
         </div>
         <hr/>
         <div className='comments-part-end'>
           <div className='comments-part-end-leftside'>
            <div className='comments-part-end-leftside-elements'>
            <a href='https://disqus.com/profile/login/?forum=test-qrcecc5znu&next=https%3A%2F%2Fdisqus.com%2Fnext%2Flogin%2F&evs=bmV0d29ya19kZWZhdWx0X2hpZGRlbjpmYWxsdGhyb3VnaDpkeW5hbWlj' target="_blank">
            <i class="fa-solid fa-square-envelope"></i>
              <h4>Subscribe</h4>
            </a>
            </div>
            <div className='comments-part-end-leftside-elements'>
            <a href='https://help.disqus.com/en/articles/1717103-disqus-privacy-policy' target="_blank">
              <i class="fa-solid fa-lock"></i>
              <h4>Privacy</h4>
            </a>
            </div>
            <div className='comments-part-end-leftside-elements excl'>
           <a href='https://disqus.com/data-sharing-settings/' target="_blank">
           <i class="fa-solid fa-exclamation"></i>
              <h4>Do Not Sell My Data</h4>
           </a>
            </div>
           </div>
           <div className='comments-part-end-rightside'>
             <h2><a href="https://disqus.com">Disqus</a></h2>
           </div>
         </div>
        </div>
      </div>
    </div>
  </>

  )
}

export default Beauty2