import React from "react";
import img from "../assets/family.jpg";
import img1 from "../assets/family1.jpg";
import img2 from "../assets/mision.jpg";
import img3 from "../assets/vision.jpg";
import back from '../assets/back_import.jpg'
import '../App.css'
const About = () => {
  return (
    <>
      <div class="bg-gradient-to-r from-green-600 to-green-700 font-[sans-serif] mt-24">
        {/* <h1 className='text-5xl text-center text-white '>About Us </h1> */}
        <div class="relative overflow-hidden">
          <div class="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
            <div class="relative z-10 text-center lg:text-left">
              <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
                Welcome to
                <br class="xl:hidden" />
                <span class="text-indigo-400"> CORDIUM</span>
              </h1>
              <p class="mt-4 max-w-md mx-auto text-lg font-bold font-mono text-black sm:text-xl md:mt-5 md:max-w-3xl">
                M/S Cordium Pharmaceuticals Private Limited is a leading
                pharmaceutical company dedicated to improving global health
                through innovative and accessible medications. Since our
                establishment in 2024, we have expanded our reach to serve
                patients in all countries.
              </p>
              <div class="mt-12 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <button class="w-full flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-indigo-600 bg-white hover:text-indigo-500 hover:bg-indigo-100 transition duration-150 ease-in-out">
                    Get Started
                  </button>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-4">
                  <button class="w-full flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition duration-150 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={img}
              alt="Delicious Food"
            />
          </div>
        </div>
      </div>

      <div class="font-[sans-serif] text-gray-800 bg-gray-100 px-6 py-12">
      <div class="grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl mx-auto">
        <div class="text-left">
          <h2 class="text-4xl font-extrabold mb-6">ABOUT CORDIUM</h2>
          <p class="mb-4 text-sm">With a global network of partners and distribution channels, we are committed to delivering life-saving medications to patients in need, regardless of geographic location. Our dedication to excellence and innovation drives us to continuously expand our product portfolio and improve health outcomes globally.</p>
          <p class="mb-4 text-sm">Cordium Pharmaceuticals Pvt. Ltd. has a dedicated team of experienced professionals who work tirelessly to develop innovative medicines that improve patients’ lives. Their commitment to quality, affordability, and accessibility has made them a trusted name in the pharmaceutical industry</p>

          <div class="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-12">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Customization</h6>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Security</h6>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Support</h6>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Performance</h6>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Global Reach</h6>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 class="text-base font-semibold ml-4">Communication</h6>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <img src={img1} alt="Placeholder Image" class="rounded-lg object-cover w-full h-full" />
        </div>
      </div>
    </div>

    <div class="w-full text-[#333] font-[sans-serif] my-4">
    
      <div class="mt-16 px-10 py-10 bg-slate-200 w-full" >
        <div class="grid md:grid-cols-2 items-center gap-16">
          <div>
            <img src={img3} class="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
          </div>
          <div>
            <h3 class="text-2xl font-extrabold mb-4">Our Vision: </h3>
            <p class="text-xl">To be a global leader in healthcare, providing innovative solutions that improve lives worldwide.</p>
            <button type="button"
              class="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
              Read More
            </button>
          </div>
          <div class="max-md:order-1">
            <h3 class="text-2xl font-extrabold mb-4">Our Mission: </h3>
            <p class="text-xl">To make a lasting impact on global health by developing and delivering effective pharmaceuticals across diverse markets.</p>
            <button type="button"
              class="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
              Read More
            </button>
          </div>
          <div>
            <img src={img2} class="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
