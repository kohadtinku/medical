import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../assets/med1.jpg'
import back from '../assets/back4.jpg'
import bg from '../assets/medication-d.jpg'

const Feature = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
    
  return (
<>
<div className="mx-auto text-white text-4xl w-full font-[sans-serif] py-10 c-feature" style={{ backgroundImage: `url(${bg})`, height:"100%",width:"100%" }}>
      <div className="text-center max-w-2xl mx-auto" data-aos="zoom-in">
        <h2 className="text-4xl font-extrabold text-center mb-4">Our Business: Medicine Import-Export</h2>
        <p className="text-sm">We specialize in the import and export of pharmaceuticals, ensuring the highest quality and compliance with global standards. Discover how our services can support your needs in the medical industry.</p>
      </div>
      <div className="mt-14 bg-transparent lg:p-10 p-6 rounded-md">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-extrabold mb-4">Our Services</h3>
            <p className="text-sm">We provide a comprehensive range of services in the pharmaceutical import-export sector, ensuring safe and timely delivery of medical products worldwide.</p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                </svg>
                Regulatory Compliance
              </li>
              <li className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                </svg>
                Global Logistics
              </li>
              <li className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                </svg>
                Quality Assurance
              </li>
              <li className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                </svg>
                Customer Support
              </li>
            </ul>
          </div>
          <img src={img} className="w-full object-contain rounded-md" data-aos="fade-down"/>
        </div>
      </div>
    </div>
</>  )
}

export default Feature
