import React from "react";
import Feature from "../components/Feature";
import Contact from "../components/Contact";
import Ad4 from "../components/Ad4";
import Testimonial1 from "../components/Testimonial1";
import Import_Export from "../components/Import_Export";

import MainSlider from "../components/MainSlider";

const Home = () => {
  return (
    <>
      <MainSlider />
      <Import_Export />
      <Testimonial1 />
      <Feature />
      <Ad4 />

      <Contact />
    </>
  );
};

export default Home;
