import React, { useEffect } from "react";
import img1 from "../assets/img.jpg";
import img2 from "../assets/img1.jpg";
import img3 from "../assets/img2.jpg";
import img4 from "../assets/img3.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div class="bg-white font-[sans-serif] p-4 mt-24">
        <div class="max-w-6xl max-md:max-w-lg mx-auto">
          <div>
            <h2 class="text-3xl font-extrabold text-[#333] inline-block" data-aos='zoom-in'>
              OUR PRODUCTS
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300" data-aos='zoom-in' >
              <img
                src={img1}
                alt="Blog Post 1"
                class="lg:w-3/5 min-h-[250px] h-full object-cover"
              />
              <div class="p-6 lg:w-3/5">
                <h3 class="text-xl font-bold text-[#333]">
                  Telmisartan & Chlorthalidone Tables I.P
                </h3>
                <span class="text-sm block text-gray-400 mt-2">
                  Telicor-CT 6.25/40{" "}
                </span>
                <p class="text-sm mt-4">
                  Usage instructions :- For the management of Hypertention
                </p>
                <a
                  href="javascript:void(0);"
                  class="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300" data-aos='zoom-in'>
              <img
                src={img2}
                alt="Blog Post 2"
                class="lg:w-3/5 min-h-[250px] h-full object-cover"
              />
              <div class="p-6 lg:w-3/5">
                <h3 class="text-xl font-bold text-[#333]">
                  Telmisartan Tablets I.P{" "}
                </h3>
                <span class="text-sm block text-gray-400 mt-2">
                  Telicor-40{" "}
                </span>
                <p class="text-sm mt-4">
                  Usage instructions :- For the management of Hypertention
                </p>
                <a
                  href="javascript:void(0);"
                  class="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300" data-aos='zoom-in'>
              <img
                src={img3}
                alt="Blog Post 2"
                class="lg:w-3/5 min-h-[250px] h-full object-cover"
              />
              <div class="p-6 lg:w-3/5">
                <h3 class="text-xl font-bold text-[#333]">
                  Telmisartan & Chlortalidone Tablets{" "}
                </h3>
                <span class="text-sm block text-gray-400 mt-2">
                  Telicor-CT 40/12.5mg{" "}
                </span>
                <p class="text-sm mt-4">
                  Usage instructions :- For the management of Hypertention
                </p>
                <a
                  href="javascript:void(0);"
                  class="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div class="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300" data-aos='zoom-in'>
              <img
                src={img4}
                alt="Blog Post 2"
                class="lg:w-3/5 min-h-[250px] h-full object-cover"
              />
              <div class="p-6 lg:w-3/5">
                <h3 class="text-xl font-bold text-[#333]">
                  Telmisartan & Amlodipine Tablets{" "}
                </h3>
                <span class="text-sm block text-gray-400 mt-2">
                  Telicor-AM 40/5{" "}
                </span>
                <p class="text-sm mt-4">
                  Usage instructions :- For the management of Hypertention
                </p>
                <a
                  href="javascript:void(0);"
                  class="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="font-[sans-serif] relative before:absolute before:w-full before:h-1/2 max-lg:before:h-1/4 before:bg-gradient-to-r before:from-gray-700 before:via-purple-700 before:to-gray-700 before:z-10">
        <div class="max-w-6xl max-md:max-w-xl mx-auto py-10 px-4 relative z-20">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-white mb-2" data-aos='zoom-in'>
              Choose a Subscription
            </h2>
            <p class="text-sm text-white">
              choose a plan tailored to your needs
            </p>
          </div>

          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12" data-aos='zoom-in'>
            <div class="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-95">
              <div class="flex items-start">
                <h3 class="text-lg text-gray-800 font-bold border-b-2 border-blue-600 pb-1">
                  Starter
                </h3>
                <div class="ml-auto">
                  <h3 class="text-gray-800 text-lg font-bold">Free</h3>
                  <p class="text-xs text-gray-600 mt-1">Free Sign Up</p>
                </div>
              </div>

              <div class="mt-8">
                <h4 class="text-base text-gray-800 font-bold mb-4">
                  Plan Includes
                </h4>
                <ul class="space-y-4 text-gray-600">
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    50 Image generations
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    500 Credits
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Monthly 100 Credits Free
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Customer Support
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Dedicated Server
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Priority Generations
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    50GB Cloud Storage
                  </li>
                </ul>

                <button
                  type="button"
                  class="w-full mt-8 px-2 py-2 text-sm text-gray-800 rounded  border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div class="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-105">
              <div class="flex items-start">
                <h3 class="text-lg text-gray-800 font-bold border-b-2 border-blue-600 pb-1">
                  Business
                </h3>
                <div class="ml-auto">
                  <h3 class="text-gray-800 text-lg font-bold">$45.00/Mon</h3>
                  <p class="text-xs text-gray-600 mt-1">7-Day Free Trial</p>
                </div>
              </div>

              <div class="mt-8">
                <h4 class="text-base text-gray-800 font-bold mb-4">
                  Plan Includes
                </h4>
                <ul class="space-y-4 text-gray-600">
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    600 Image generations
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    4000 Credits
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Monthly 2000 Credits Free
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Customer Support
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Dedicated Server
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Priority Generations
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    1000GB Cloud Storage
                  </li>
                </ul>

                <button
                  type="button"
                  class="w-full mt-8 px-2 py-2 text-sm text-gray-800 rounded  border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div class="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-95">
              <div class="flex items-start">
                <h3 class="text-lg text-gray-800 font-bold border-b-2 border-blue-600 pb-1">
                  Pro
                </h3>
                <div class="ml-auto">
                  <h3 class="text-gray-800 text-lg font-bold">$20.00/Mon</h3>
                  <p class="text-xs text-gray-600 mt-1">7-Day Free Trial</p>
                </div>
              </div>

              <div class="mt-8">
                <h4 class="text-base text-gray-800 font-bold mb-4">
                  Plan Includes
                </h4>
                <ul class="space-y-4 text-gray-600">
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    300 Image generations
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    2000 Credits
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Monthly 1000 Credits Free
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Customer Support
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Dedicated Server
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Priority Generations
                  </li>
                  <li class="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    500GB Cloud Storage
                  </li>
                </ul>

                <button
                  type="button"
                  class="w-full mt-8 px-2 py-2 text-sm text-gray-800 rounded  border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 font-[sans-serif] py-10">
        <div class="max-w-6xl mx-auto">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-gray-800 text-3xl font-extrabold" data-aos='zoom-in'>
              What our happy client say
            </h2>
            <p class="text-sm text-gray-800 mt-6 leading-relaxed" data-aos='zoom-in'>
              Veniam proident aute magna anim excepteur et ex consectetur velit
              ullamco veniam minim aute sit. Elit occaecat officia et laboris
              Lorem minim. Officia do aliqua adipisicing ullamco in.
            </p>
          </div>

          <div class="grid md:grid-cols-3 md:gap-6 max-md:gap-10 max-md:justify-center mt-16">
            <div class="max-w-[350px] h-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] lg:p-8 p-4 rounded-md bg-white relative" data-aos='zoom-in'>
              <div class="bg-[#ff0000] flex items-center justify-center w-16 h-16 max-lg:w-14 max-lg:h-14 rounded-full absolute -top-5 -right-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 fill-white"
                  viewBox="0 0 475.082 475.081"
                >
                  <path
                    d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>

              <div class="flex items-center">
                <img
                  src="https://readymadeui.com/team-1.webp"
                  class="w-14 h-14 rounded-full shadow-xl border-2 border-white"
                />

                <div class="ml-4">
                  <h4 class="text-sm font-extrabold">John Doe</h4>
                  <div class="flex space-x-1 mt-2">
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <p class="text-sm leading-relaxed">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt. Elit occaecat officia et laboris
                  Lorem minim. Officia do aliqua adipisicing ullamco in.
                </p>
              </div>
            </div>

            <div class="max-w-[350px] h-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] lg:p-8 p-4 rounded-md bg-white relative" data-aos='zoom-in'>
              <div class="bg-[#ff0000] flex items-center justify-center w-16 h-16 max-lg:w-14 max-lg:h-14 rounded-full absolute -top-5 -right-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 fill-white"
                  viewBox="0 0 475.082 475.081"
                >
                  <path
                    d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>

              <div class="flex items-center">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  class="w-14 h-14 rounded-full shadow-xl border-2 border-white"
                />

                <div class="ml-4">
                  <h4 class="text-sm font-extrabold">Mark Adair</h4>
                  <div class="flex space-x-1 mt-2">
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <p class="text-sm leading-relaxed">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt. Elit occaecat officia et laboris
                  Lorem minim. Officia do aliqua adipisicing ullamco in.
                </p>
              </div>
            </div>

            <div class="max-w-[350px] h-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] lg:p-8 p-4 rounded-md bg-white relative py-10" data-aos='zoom-in'>
              <div class="bg-[#ff0000] flex items-center justify-center w-16 h-16 max-lg:w-14 max-lg:h-14 rounded-full absolute -top-5 -right-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 fill-white"
                  viewBox="0 0 475.082 475.081"
                >
                  <path
                    d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>

              <div class="flex items-center" >
                <img
                  src="https://readymadeui.com/team-3.webp"
                  class="w-14 h-14 rounded-full shadow-xl border-2 border-white"
                />

                <div class="ml-4">
                  <h4 class="text-sm font-extrabold">Simon Konecki</h4>
                  <div class="flex space-x-1 mt-2">
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#ff0000]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-4 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <p class="text-sm leading-relaxed">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt. Elit occaecat officia et laboris
                  Lorem minim. Officia do aliqua adipisicing ullamco in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
