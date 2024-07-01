import React from "react";
import img from '../assets/D_med.jpg'
import img1 from '../assets/D_med1.jpg'
const Testimonial1 = () => {
  return (
    <>
     <div class="mt-4 font-[sans-serif] py-10">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 items-center md:gap-16 gap-8">
          <div class="space-y-4 bg-green-100 rounded-3xl py-8 px-4">
            <div class="flex items-center ml-auto p-6 bg-white shadow-md rounded-3xl max-w-md">
              <img src={img} class="w-20 h-20 rounded-full" />

              <div class="ml-4">
                <h4 class="text-gray-800 text-base font-bold">John Doe</h4>
                <p class="text-sm text-gray-500 mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
              </div>
            </div>

            <div class="flex items-center p-6 bg-white shadow-md rounded-3xl max-w-md">
              <div class="mr-4">
                <h4 class="text-gray-800 text-base font-bold">Mark Adair</h4>
                <p class="text-sm text-gray-500 mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.</p>
              </div>
              <img src={img1} class="w-20 h-20 rounded-full ml-auto" />
            </div>
          </div>

          <div class="max-md:-order-1">
            <h6 class="text-xl font-bold text-gray-300">Testimonials</h6>
            <h2 class="text-gray-800 text-4xl font-extrabold mt-4">We are loyal with our customer</h2>
            <p class="text-sm text-gray-500 mt-4 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Testimonial1;
