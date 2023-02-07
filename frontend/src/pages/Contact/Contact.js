import React from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
    <>
   <div className='contact-page'>
     <div className='container'>
          <div className='contact-page_desc'>
            <h1>Contact</h1>
            <p>StoryHub theme comes with a contact form built-in. You can use this form with Gatsbay Js service and get up to 50 submissions for free per form per month. Also, you can easily switch to another service if you want.</p>
          </div>
          <div className='form'>
           {/* <form> */}
          <div className='form_inputs'>
          <div className='form_inputs-name'>
          <label for="name">Name</label><br/>
            <div className='input-name'>
            <input id="name"/>
            </div>
          </div>
            <div className='form_inputs-email'>
            <label for="email">Email</label><br/>
            <div className='input-email'>
            <input id="email"/>
            </div>
            </div>
          </div>
          <div className='form-text'>
            <label>Message</label><br/>
           <textarea/>
          </div>
          <button className='form_button-submit'>Submit</button>
           {/* </form> */}
          </div>
    
     </div>
   </div>
    </>
  )
}

export default Contact