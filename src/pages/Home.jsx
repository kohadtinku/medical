import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HeroSlider from "../components/HeroSlider";
import Info from "../components/Info";
import Stats1 from "../components/Stats1";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Feature from "../components/Feature";
import Ad from "../components/Ad";
import Top from "../components/Top";
import Contact from "../components/Contact";
import Ad2 from "../components/Ad2";
import Ad3 from "../components/Ad3";
import Blog from "../components/Blog";
import Ad4 from "../components/Ad4";
import Testimonial1 from "../components/Testimonial1";
import Import_Export from "../components/Import_Export";

const Home = () => {
  return (
    <>
      {/* <Top /> */}
      <Header />
      {/* <Top/> */}
      <Hero />
      {/* <Ad2 /> */}
      <Stats />
      <Import_Export/>
      <Testimonial1/>
      <Feature />
      {/* <HeroSlider /> */}
      {/* <Ad /> */}
      {/* <Info /> */}
      <Ad4 />
      <Testimonial />
      {/* <Stats1 /> */}
      <Blog />
      {/* <Ad3 /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
