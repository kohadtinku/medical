import React, { useEffect } from "react";
import img from '../assets/D_med.jpg';
import back from '../assets/bg_dir.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="bg-[#e0f2f2] w-full font-[sans-serif] py-10">
        <div className="grid md:grid-cols-2 items-center md:max-h-[475px] overflow-hidden">
          <div className="p-8" data-aos="fade-right">
            <h1 className="sm:text-4xl text-2xl font-extrabold text-black">
              Director<span className="text-orange-400"></span>
            </h1>
            <p className="mt-4 text-sm font-bold text-black">
              Our Director, an expert in the field of medicine import and export, leads our company with a vision to provide seamless global access to medical supplies. With extensive experience in the industry, they ensure that we adhere to the highest standards of quality and efficiency.
            </p>
            <p className="mt-2 text-sm font-bold text-black">
              Under their leadership, we have established a robust network of suppliers and clients worldwide. Their strategic approach and commitment to excellence have been instrumental in our growth and success.
            </p>
            <button
              type="button"
              className="px-6 py-3 mt-8 rounded-md text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600"
            >
              Learn More
            </button>
          </div>
          <img src={img} className="w-[450px] h-[450px] rounded-2xl object-cover shrink-0" alt="Director"  data-aos="zoom-in"/>
        </div>
      </div>
    </>
  );
};

export default Testimonial1;
