import React from 'react'
import Hero from './hero/Hero'
import Payment from './hero/Payment'
import PostByRequirement from './postBuyRequirement/PostByRequirement'
import Category from './category/Category'
import TrandingPlant from './trandingPlant/TrandingPlant'
import Recommender from './recommender/Recommender'
import TutorialVideo from './tutorialVideo/TutorialVideo'
import WorkPlace from './work&place/WorkPlace'
import ClientSays from './clientSays/ClientSays'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <Hero />
      <Payment />
      <PostByRequirement />
      <Category />
      <TrandingPlant />
      <Recommender />
      <TutorialVideo />
      <WorkPlace />
      <ClientSays />
    </div>
  )
}

export default Home