
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "../assets/home_bg.jpg";
// import img2 from "../assets/home_bg1.jpg";
import img3 from "../assets/home_bg2.jpg";

const MainSlider = () => {
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
      <Swiper
        cssMode={false}
        navigation={true}
        autoplay={{ delay: 3000 }} 
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-24"
      >
        <SwiperSlide>
          <img className="img" src={img1} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img className="img" src={img2} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img className="img" src={img3} alt="" />
        </SwiperSlide>

      </Swiper>
  );
};

export default MainSlider;

