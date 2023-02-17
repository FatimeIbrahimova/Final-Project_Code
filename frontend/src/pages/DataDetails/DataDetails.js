import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import "./DataDetails.scss"
import { loginFormSchema } from '../../schema/formSchema';
import { MainContext } from '../../context/ContextProvider';
import axios from 'axios';

const DataDetails = () => {
  //details
    const {id}=useParams();
    const [data,setData]=useState({})

    useEffect(() => {
      axios.get(`http://localhost:8080/products/${id}`)
      .then((res)=>setData(res.data))
      console.log(data);
    }, [id]);
    useEffect(() => {
      axios.get(`http://localhost:8080/products2/${id}`)
      .then((res)=>setData(res.data))
      console.log(data);
    }, [id]);
    useEffect(() => {
      axios.get(`http://localhost:8080/productsAdd1/${id}`)
      .then((res)=>setData(res.data))
      console.log(data);
    }, [id]);
    useEffect(() => {
      axios.get(`http://localhost:8080/productsAdd2/${id}`)
      .then((res)=>setData(res.data))
      console.log(data);
    }, [id]);
    useEffect(() => {
      axios.get(`http://localhost:8080/slider/${id}`)
      .then((res)=>setData(res.data))
      console.log(data);
    }, [id]);
    useEffect(() => {
      axios.get(`http://localhost:8080/filter/${id}`)
      .then((res)=>setData(res.data))
    }, [id]);
  //
    const {login,setLogin}=useContext(MainContext)
    const {socialNetworks,setSocialNetworks}=useContext(MainContext)
    const handleClick=()=>{
      setSocialNetworks(socialNetworks==="hidden" ? "visible" :"hidden")
    }
    const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm({
      resolver: yupResolver(loginFormSchema),
  });
    
  return (
    <>
    <div className='first-card'>
      <div className='container'>
        <div className='first-card_desc'>
          <h1>{data.title}</h1>
          <h2>{data.name}</h2>
          <span>{data.date}</span>
        </div>
        <div className='first-card_img'>
           <img src={data.url} alt="img"/>
        </div>
        <div className='first-card_message'>
          <p>{data.allDesc}</p>
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
                  <button className='comment-btn' onClick={handleSubmit()}>Comment</button>
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
                    <input placeholder='Name' {...register("name")}/>
                    {errors.name ? (
                      <span style={{ color: "white",backgroundColor:"red",fontWeight:600,padding:5}}>{errors.name.message}</span>
                    ) : (
                      <></>
                    )}
                    <input placeholder='Email' {...register("email")}/>
                    {errors.email ? (
                      <span style={{ color: "white",backgroundColor:"red",fontWeight:600,padding:5}}>{errors.email.message}</span>
                    ) : (
                      <></>
                    )}
                    <input type="password" placeholder='Password' {...register("password")}/>
                    {errors.password ? (
                      <span style={{ color: "white",backgroundColor:"red",fontWeight:600,padding:5}}>{errors.password.message}</span>
                    ) : (
                      <></>
                    )}
                     <span>Please access our <a href="https://help.disqus.com/en/articles/1717103-disqus-privacy-policy" target="_blank">Privacy Policy</a> to learn what personal data Disqus collects and your choices about how it is used. All users of our service are also subject to our <a href='https://help.disqus.com/en/articles/1717102-terms-of-service' target="_blank">Terms of Service</a>.</span>
                  </div>
                </div>
                <i class="fa-solid fa-arrow-right" onClick={handleSubmit()}></i>
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
         {/* <div className='comments_post-bottom'>
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
         </div> */}
         <span className='no-comment'>Be the first to comment</span>
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
        <div className='related-posts'>
          <h1>Related Posts</h1>
          <div className='card-wrapper'>
            <div className='card-wrapper_card'>
              <div className='card-wrapper_card-img'>
                <img src="https://storyhub-beauty-redq.vercel.app/static/350b1e64ba3459bb3898791aa5b26eb0/a5f21/preview.webp" alt="img"/>
              </div>
              <div className='card-wrapper_card-desc'>
                <h2>What’s in your makeup drawer</h2>
                <p>An Essay on Typography by Eric Gill takes the reader back to the year 1930. The…</p>
                <div className='card-wrapper_card-desc_btn'>
              <button>
              <a href="/63eb3bae422b4ac03aeec2e9">Read More</a>
              </button>
              </div>
              </div>
            </div>
            <div className='card-wrapper_card'>
              <div className='card-wrapper_card-img'>
                <img src="https://storyhub-beauty-redq.vercel.app/static/b05520375116fe062ba264aa78de8d7f/a5f21/preview.webp" alt="img"/>
              </div>
              <div className='card-wrapper_card-desc'>
                <h2>Beauty itself is but the sensible image of the</h2>
                <p>An Essay on Typography by Eric Gill takes the reader back to the year 1930. The…</p>
                <div className='card-wrapper_card-desc_btn'>
              <button>
              <a href="/63eb3d7a422b4ac03aeec2ec">Read More</a>
              </button>
              </div>
              </div>
            </div>
            <div className='card-wrapper_card'>
              <div className='card-wrapper_card-img'>
                <img src="https://storyhub-beauty-redq.vercel.app/static/b9b35f8d467e871dbd43fbcc64406587/a5f21/preview.webp" alt="img"/>
              </div>
              <div className='card-wrapper_card-desc'>
                <h2>I have often said that the lure of flying is the lure of</h2>
                <p>Wow! I love blogging so much already. Did you know that “despite its name…</p>
              <div className='card-wrapper_card-desc_btn'>
              <button>
              <a href="/63eb3e73422b4ac03aeec2ef">Read More</a>
              </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DataDetails