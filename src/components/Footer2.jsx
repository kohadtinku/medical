import React from "react";
import logo from '../assets/bg.png'
const Footer2 = () => {
  return (
    <>
      <footer class="bg-[#f2eded] font-sans tracking-wide">
        <div class="py-12 px-12">
          <div class="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
            <div>
              <a href="javascript:void(0)">
                <img
                  src={logo}
                  alt="logo"
                  class="w-16 "
                />
              </a>
            </div>

            <ul class="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-black hover:underline text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-black hover:underline text-base"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-black hover:underline text-base"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-black hover:underline text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <hr class="my-6 border-gray-500" />

          <p class="text-center text-black text-base">
            Copyright © 2023
            All Copyrights Reserved | Design & Development by Royals WebTech Pvt. Ltd.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
