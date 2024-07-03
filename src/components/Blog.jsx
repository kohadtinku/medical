import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../assets/img.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
<>
<div class="bg-white font-[sans-serif] my-4 mt-10 ">
      <div class="max-w-5xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full" data-aos="zoom-in">MEDICINES</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 max-md:max-w-lg mx-auto">
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300" data-aos="fade-right">
            <img src={img} alt="Blog Post 1" class="w-[550px] h-[250px] object-cover" />
            <div class="p-6">
              <span class="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
              <h3 class="text-xl font-bold text-[#333]">Telmisartan & Chlorthalidone Tables I.P</h3>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300" data-aos="fade-up">
            <img src={img1} alt="Blog Post 2" class="w-[550px] h-[250px] object-cover" />
            <div class="p-6">
              <span class="text-sm block text-gray-400 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
              <h3 class="text-xl font-bold text-[#333]">Telmisartan Tablets I.P</h3>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300" data-aos="fade-down">
            <img src={img2} alt="Blog Post 3" class="w-[550px] h-[250px] object-cover" />
            <div class="p-6">
              <span class="text-sm block text-gray-400 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <h3 class="text-xl font-bold text-[#333]">Telmisartan & Chlortalidone Tablets</h3>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300" data-aos="fade-down">
            <img src={img3} alt="Blog Post 3" class="w-[550px] h-[250px] object-cover" />
            <div class="p-6">
              <span class="text-sm block text-gray-400 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <h3 class="text-xl font-bold text-[#333]">Telmisartan & Amlodipine Tablets</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
</>  )
}

export default Blog