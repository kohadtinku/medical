import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../assets/med1.jpg'
import back from '../assets/back4.jpg'

const Feature = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
    
  return (
<>
<div class=" mx-auto text-white text-4xl w-full font-[sans-serif] py-10 " style={{ backgroundImage: `url(${back})`, height:"100%",width:"100%" }}>
      <div class="text-center max-w-2xl mx-auto" data-aos="zoom-in">
        <h2 class="text-4xl font-extrabold text-center mb-4" >Our Exclusive Features</h2>
        <p class="text-sm">Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.</p>
      </div>
      <div class="mt-14 bg-transparent lg:p-10 p-6 rounded-md">
        <div class="grid md:grid-cols-2 items-center gap-16">
          <div data-aos="fade-right">
            <h3 class="text-2xl font-extrabold mb-4">Customization</h3>
            <p class="text-sm">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur.</p>
            <ul class="space-y-4 mt-8">
              <li class="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                </svg>
                Customizable Styles
              </li>
              <li class="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                </svg>
                Data Export
              </li>
              <li class="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                </svg>
                Data Validation
              </li>
              <li class="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                </svg>
                Security
              </li>
            </ul>
          </div>
          <img src={img} class="w-full object-contain rounded-md" data-aos="fade-down"/>
        </div>
      </div>
    </div>
</>  )
}

export default Feature