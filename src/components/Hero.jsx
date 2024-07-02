import React, { useEffect } from "react";
import "../App.css";
import img from "../assets/img1.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="hero-container c_hero">
      <div className="hero-content">
        <div className="hero-heading ">
          <div className="hero-title">
            <h1 className="font-serif text-6xl text-white font-bold" data-aos="fade-right">
              Better Care For Your <br />{" "}
              <span style={{ color: "green" }}>Health</span>
              {/* <span className="text-2xl text-green-500 font-bold ml-5">Import Now</span> */}
            </h1>
          </div>

          <p className="w-[550px] font-serif text-[20px] text-white"  data-aos="fade-right">
          In an increasingly globalized world, the demand for high-quality pharmaceutical products has never been greater. As a leading pharmaceutical exporter, we are dedicated to delivering innovative, safe, and effective medicines to healthcare providers and patients worldwide.
          </p>
        </div>
        {/* <div
          class="relative w-[100vw] max-w-xl mx-auto bg-white rounded-sm c_in"
          data-aos="fade-right"
        >
          <input
            placeholder="Search here..."
            class="rounded-sm w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200"
            type="text"
            name="query"
            id="query"
          />
          <button
            type="submit"
            class="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-sm outline-none right-3 top-3 bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            <svg
              class="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
        </div> */}
      </div>
      <div className="img" data-aos="fade-left">
        {/* <img src={img} alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
