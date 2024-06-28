import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Ad = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
<>
<div class="bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 ">
      <div class="container mx-auto flex flex-col justify-center items-center text-center" data-aos="zoom-in">
        <h2 class="text-white sm:text-4xl text-3xl font-bold mb-4">Discover Our New Collection</h2>
        <p class="text-white text-base text-center mb-8">Elevate your style with our latest arrivals. Shop now and enjoy exclusive discounts!</p>

        <button type="button" class="bg-white text-sm text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100">
          Get Started
        </button>
      </div>
    </div>
</>  )
}

export default Ad