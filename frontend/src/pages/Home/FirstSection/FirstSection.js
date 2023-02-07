import React from 'react'
import "./FirstSection.scss"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FirstSection = () => {
  return (
    <>
     <div className='first-section'>
      <div className='container'>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
       <img src="https://storyhub-beauty-redq.vercel.app/static/b05520375116fe062ba264aa78de8d7f/2f199/preview.jpg"/>
       <div className='first-section__swipper-desc'>
       <h2>Beauty itself is but the sensible image of the Infinite</h2>
       <p>An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict between two worlds  came to its term. The machines of the industrial world finally took over the handicrafts.</p>
       <button className='first-section__swipper-desc-btn'>Read More</button>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://storyhub-beauty-redq.vercel.app/static/b9b35f8d467e871dbd43fbcc64406587/36980/preview.png"/>
      <div className='first-section__swipper-desc'>
       <h2>I have often said that the lure of flying is the lure of beauty</h2>
       <p>Wow! I love blogging so much already. Did you know that “despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and…</p>
       <button className='first-section__swipper-desc-btn'>Read More</button>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://storyhub-beauty-redq.vercel.app/static/2c49ef889edcc5876f9805abe0979f1f/36980/preview.png"/>
      <div className='first-section__swipper-desc'>
       <h2>What the imagination seizes as beauty must be truth</h2>
       <p>An Essay on Typography by Eric Gill takes the reader back to the year 1930. The year when a conflict…</p>
       <button className='first-section__swipper-desc-btn'>Read More</button>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://storyhub-beauty-redq.vercel.app/static/465bb28f9e9b5bf5327e09eacba1a9f7/36980/preview.png"/>
      <div className='first-section__swipper-desc'>
       <h2>It's a good thing that beauty is only skin deep</h2>
       <p>Given the discourse around this issue, it can be easy to either overestimate the scope of this…</p>
       <button className='first-section__swipper-desc-btn'>Read More</button>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://storyhub-beauty-redq.vercel.app/static/bcbf431fca61421f1b21562063d8307f/36980/preview.png"/>
      <div className='first-section__swipper-desc'>
       <h2>Never ask a girl with winged eyeliner why she’s late</h2>
       <p>Wow! I love blogging so much already. Did you know that “despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and…</p>
       <button className='first-section__swipper-desc-btn'>Read More</button>
       </div>
      </SwiperSlide>
    </Swiper>
      </div>
     </div>
    </>
  )
}

export default FirstSection