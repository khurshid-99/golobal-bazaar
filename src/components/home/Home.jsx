import React from "react";
import Hero from "./hero/Hero";
import Payment from "./payment/Payment";
import PostByRequirement from "./postBuyRequirement/PostByRequirement";
import Category from "./category/Category";
import TrandingPlant from "./trandingPlant/TrandingPlant";
import Recommender from "./recommender/Recommender";
import TutorialVideo from "./tutorialVideo/TutorialVideo";
import WorkPlace from "./work&place/WorkPlace";
import ClientSays from "./clientSays/ClientSays";
import PopularProduct from "./popularProduct/PopularProduct";
import ContactUs from "./contactUs/ContactUs";
import StayContact from "./stayContact/StayContact";

const Home = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <Hero />
      <Payment />
      <PostByRequirement />
      <Category />
      <TrandingPlant />
      <Recommender />
      <TutorialVideo />
      <WorkPlace />
      <ClientSays />
      <PopularProduct />
      <ContactUs />
      <StayContact />
    </div>
  );
};

export default Home;
