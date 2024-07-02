import React from "react";
import img from '../assets/D_med.jpg'
import img1 from '../assets/D_med1.jpg'
const Testimonial1 = () => {
  return (
    <>
     <div class="bg-gray-800 w-full font-[sans-serif] py-10">
      <div class="grid md:grid-cols-2 items-center md:max-h-[475px] overflow-hidden">
        <div class="p-8">
          <h1 class="sm:text-4xl text-2xl font-bold text-white">Director<span class="text-orange-400"></span></h1>
          <p class="mt-4 text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nuncet
            tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.</p>
          <p class="mt-2 text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nuncet
            tempus blandit, metus mi consectetur nibh.</p>
          <button type="button"
            class="px-6 py-3 mt-8 rounded-md text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Get started</button>
        </div>
        <img src={img} class="w-full h-full object-cover shrink-0" />
      </div>
    </div>
    </>
  );
};

export default Testimonial1;
