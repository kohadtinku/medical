import React from "react";
import img from '../assets/D_med.jpg';
import img1 from '../assets/D_med1.jpg';

const Testimonial1 = () => {
  return (
    <>
      <div className="bg-gray-800 w-full font-[sans-serif] py-10">
        <div className="grid md:grid-cols-2 items-center md:max-h-[475px] overflow-hidden">
          <div className="p-8">
            <h1 className="sm:text-4xl text-2xl font-bold text-white">
              Director<span className="text-orange-400"></span>
            </h1>
            <p className="mt-4 text-sm text-gray-300">
              Our Director, an expert in the field of medicine import and export, leads our company with a vision to provide seamless global access to medical supplies. With extensive experience in the industry, they ensure that we adhere to the highest standards of quality and efficiency.
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Under their leadership, we have established a robust network of suppliers and clients worldwide. Their strategic approach and commitment to excellence have been instrumental in our growth and success.
            </p>
            <button
              type="button"
              className="px-6 py-3 mt-8 rounded-md text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600"
            >
              Learn More
            </button>
          </div>
          <img src={img} className="w-[450px] h-[450px] object-cover shrink-0" alt="Director" />
        </div>
      </div>
    </>
  );
};

export default Testimonial1;
