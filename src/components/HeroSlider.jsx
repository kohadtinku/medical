import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper/modules";
import sliderData from "../data";
const HeroSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={true}
        loop={true}
      >
        {sliderData.map((item, i) => {
          const { id, title, img, price, desc } = item;
          return (
            <SwiperSlide key={id}>
              <div className="container">
                <div className="hero_item_txt">
                  <h3 className="text-4xl">{title}</h3>
                  {/* <h3 className="text-2xl">{price}</h3> */}
                  <p className="text-3xl">{desc}</p>
                  <button className="bg-orange-400 p-4 w-[150px] rounded-full m-3">Shop Now</button>
                </div>
                <figure className="hero_item_img">
                  <img
                    src={img}
                    alt="product-img"
                    className="h-[fit-content] w-[250px]"
                  />
                </figure>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeroSlider;
