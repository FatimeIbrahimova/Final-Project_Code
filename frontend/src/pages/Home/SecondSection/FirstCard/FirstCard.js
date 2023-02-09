import React from 'react'
import { Link } from 'react-router-dom'
import "./FirstCard.scss"

const FirstCard = () => {
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
           <img src='https://storyhub-beauty-redq.vercel.app/static/350b1e64ba3459bb3898791aa5b26eb0/5681e/preview.webp' alt="img"/>
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
            <Link to=""><h3>Next</h3><i class="fa-solid fa-greater-than"></i></Link>
          </div>
        </div>
        <hr/>
      </div>
    </div>
    </>
  )
}

export default FirstCard