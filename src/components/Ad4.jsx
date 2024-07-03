import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../assets/med.jpg';

const Ad4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="bg-gray-100 px-6 py-12 font-[sans-serif]">
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div data-aos="fade-right">
              <img
                src={img}
                alt="Medicine Import-Export"
                className="rounded-md object-cover w-full md:w-[700px] h-[300px] md:h-[400px]"
                style={{ maxWidth: '100%' }} // Ensures image doesn't exceed container width
              />
            </div>
            <div data-aos="fade-down">
              <h2 className="text-3xl font-extrabold text-purple-700 mb-4">
                Empowering Global Healthcare Solutions
              </h2>
              <p className="text-gray-700 text-sm leading-6">
                At the forefront of medicine import-export, we are dedicated to bridging the gap between supply and demand, ensuring that quality healthcare products reach every corner of the globe. Our comprehensive services and expertise in logistics make us a trusted partner in the industry.
              </p>
              <ul className="list-disc text-sm text-gray-700 space-y-2 pl-4 mt-6">
                <li>Secure and efficient import-export processes.</li>
                <li>Extensive network of reliable suppliers and clients.</li>
                <li>Compliance with international health regulations.</li>
                <li>Customized solutions tailored to your needs.</li>
              </ul>
              <div className="mt-6">
                <a href="javascript:void(0);" className="text-purple-600 text-sm font-semibold hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ad4;
