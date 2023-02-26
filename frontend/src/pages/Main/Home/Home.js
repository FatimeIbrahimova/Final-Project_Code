import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection'

const Home = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth"
    })
   },[])
  return (
    <>
    <Helmet>
        <title>Home Page</title>
      </Helmet>
   <FirstSection/>
   <SecondSection/>
    </>
  )
}

export default Home