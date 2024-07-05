import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "../assets/home_bg.jpg";
// import img2 from "../assets/home_bg1.jpg";
import img3 from "../assets/home_bg2.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
const MainSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 425);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative mt-24">
      <Swiper
        cssMode={false}
        navigation={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="img" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img" src={img1} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="absolute inset-0 flex items-center justify-center text-start z-30 c_main ">
        <div className="text-white p-4 bg-black bg-opacity-70 rounded-md c_main1" data-aos="zoom-in">
          <h2 className="text-3xl text-red-500 font-bold" data-aos="fade-right">Welcome to Cordium</h2>
          <p className="mt-2 text-white font-bold text-lg c_p " data-aos="fade-left">Our company specializes in the global trade of pharmaceuticals, ensuring the seamless import and export of high-quality medicines. We adhere to international regulations and standards, providing timely and safe delivery of essential medications. Our extensive network and robust logistics guarantee efficient supply chain management, catering to diverse healthcare needs worldwide.</p>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
