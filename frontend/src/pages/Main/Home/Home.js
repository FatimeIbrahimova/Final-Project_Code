import React from 'react'
import { Helmet } from 'react-helmet'
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection'

const Home = () => {
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