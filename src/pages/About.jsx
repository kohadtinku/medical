import React, { useEffect } from "react";
import img from "../assets/family.jpg";
import img1 from "../assets/family1.jpg";
import img2 from "../assets/mision.jpg";
import img3 from "../assets/vision.jpg";
import back from "../assets/back_import.jpg";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/aggregate.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

import cord from "../assets/cord.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <>
      <div class="bg-gradient-to-r from-green-600 to-green-700 font-[sans-serif] mt-28">
        <div class="relative overflow-hidden">
          <div class="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
            <div class="relative z-10 text-center lg:text-left">
              <div className="custom_about">
                <div className="c-about">
                  <h1
                    class="text-4xl tracking-tight leading-10 font-extrabold w-[27vw] text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl"
                    data-aos="zoom-in"
                  >
                    Welcome to
                    <br class="xl:hidden" />
                    <img src={cord} className="w-[300px]" alt="" />
                  </h1>
                </div>

                <p
                  class="mt-4 max-w-md mx-auto text-lg font-bold font-mono text-black sm:text-xl md:mt-5 md:max-w-3xl S_P"
                  data-aos="zoom-in"
                >
                  M/S Cordium Pharmaceuticals Private Limited is a leading
                  pharmaceutical company dedicated to improving global health
                  through innovative and accessible medications. Since our
                  establishment in 2024, we have expanded our reach to serve
                  patients in all countries.
                </p>
              </div>
              <div
                class="mt-12 sm:flex sm:justify-center lg:justify-start"
                data-aos="zoom-in"
              >
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
          <div
            class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
            data-aos="zoom-in"
          >
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
            <h2 class="text-4xl font-extrabold mb-6" data-aos="fade-down">
              ABOUT CORDIUM
            </h2>
            <p class="mb-4 text-sm" data-aos="zoom-in">
              With a global network of partners and distribution channels, we
              are committed to delivering life-saving medications to patients in
              need, regardless of geographic location. Our dedication to
              excellence and innovation drives us to continuously expand our
              product portfolio and improve health outcomes globally.
            </p>
            <p class="mb-4 text-sm" data-aos="zoom-in">
              Cordium Pharmaceuticals Pvt. Ltd. has a dedicated team of
              experienced professionals who work tirelessly to develop
              innovative medicines that improve patients’ lives. Their
              commitment to quality, affordability, and accessibility has made
              them a trusted name in the pharmaceutical industry
            </p>

            <div
              class="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-12"
              data-aos="zoom-in"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  class="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 class="text-base font-semibold ml-4">Customization</h6>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  class="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 class="text-base font-semibold ml-4">Security</h6>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  class="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 class="text-base font-semibold ml-4">Support</h6>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  class="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 class="text-base font-semibold ml-4">Performance</h6>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  class="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 class="text-base font-semibold ml-4">Global Reach</h6>
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  class="fill-green-500 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h6 class="text-base font-semibold ml-4">Communication</h6>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center" data-aos="zoom-in">
            <img
              src={img1}
              alt="Placeholder Image"
              class="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div class="w-full text-[#333] font-[sans-serif] my-4">
        <div class="mt-16 px-10 py-10 bg-slate-200 w-full">
          <div class="grid md:grid-cols-2 items-center gap-16">
            <div data-aos="zoom-in">
              <img
                src={img3}
                class="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
              />
            </div>
            <div data-aos="zoom-in">
              <h3 class="text-2xl font-extrabold mb-4">Our Vision: </h3>
              <p class="text-xl">
                To be a global leader in healthcare, providing innovative
                solutions that improve lives worldwide.
              </p>
              <button
                type="button"
                class="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
              >
                Read More
              </button>
            </div>
            <div class="max-md:order-1" data-aos="zoom-in">
              <h3 class="text-2xl font-extrabold mb-4">Our Mission: </h3>
              <p class="text-xl">
                To make a lasting impact on global health by developing and
                delivering effective pharmaceuticals across diverse markets.
              </p>
              <button
                type="button"
                class="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
              >
                Read More
              </button>
            </div>
            <div data-aos="fade-down">
              <img
                src={img2}
                class="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#F7F7F7] font-[sans-serif]">
        <div class="max-w-6xl mx-auto py-16 px-4">
          <h2
            class="text-gray-800 text-4xl font-extrabold text-center mb-16"
            data-aos="zoom-in"
          >
            Our Core values
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
            <div
              class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              data-aos="zoom-in"
            >
              <div class="p-8">
                <img src={icon1} className="w-10" alt="" />
                <h3 class="text-gray-800 text-xl font-semibold mb-3">
                  Innovation
                </h3>
                <p class="text-gray-500 text-sm leading-relaxed">
                  Pioneering new treatments and therapies for a healthier
                  future.
                </p>
              </div>
            </div>

            <div
              class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              data-aos="zoom-in"
            >
              <div class="p-8">
                <img src={icon2} className="w-10" alt="" />
                <h3 class="text-gray-800 text-xl font-semibold mb-3">
                  Accessibility
                </h3>
                <p class="text-gray-500 text-sm leading-relaxed">
                  Making our products available to patients worldwide.
                </p>
              </div>
            </div>

            <div
              class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              data-aos="zoom-in"
            >
              <div class="p-8">
                <img src={icon3} className="w-10" alt="" />
                <h3 class="text-gray-800 text-xl font-semibold mb-3">
                  Quality
                </h3>
                <p class="text-gray-500 text-sm leading-relaxed">
                  Ensuring the highest standards in every product we
                  manufacture.
                </p>
              </div>
            </div>
            <div
              class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              data-aos="zoom-in"
            >
              <div class="p-8">
                <img src={icon4} className="w-10" alt="" />
                <h3 class="text-gray-800 text-xl font-semibold mb-3">
                  Integrity
                </h3>
                <p class="text-gray-500 text-sm leading-relaxed">
                  Building trust through ethical practices and transparency.
                </p>
              </div>
            </div>
            <div
              class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              data-aos="zoom-in"
            >
              <div class="p-8">
                <img src={icon6} className="w-10" alt="" />
                <h3 class="text-gray-800 text-xl font-semibold mb-3">
                  Compliance
                </h3>
                <p class="text-gray-500 text-sm leading-relaxed">
                  We adhere to all regulatory requirements and ethical
                  guidelines.{" "}
                </p>
              </div>
            </div>
            <div
              class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              data-aos="zoom-in"
            >
              <div class="p-8">
                <img src={icon5} className="w-10" alt="" />
                <h3 class="text-gray-800 text-xl font-semibold mb-3">
                  Commitment
                </h3>
                <p class="text-gray-500 text-sm leading-relaxed">
                  Dedicated to making a difference in the lives of patients and
                  their families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
