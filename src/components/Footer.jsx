


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <footer className="bg-[#f2eded] py-12 px-10 font-sans tracking-wide">
      <div className="lg:max-w-[50%] mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800" data-aos="zoom-in">
          Stay Connected
        </h3>
        <p className="text-sm mt-6 text-gray-500" data-aos="fade-right">
          Subscribe to our newsletter to receive updates, news, and insights on
          global healthcare trends, regulatory updates, and industry insights.
          Join our community today!
        </p>

        <div
          className="bg-[#dddddd] flex px-2 py-1.5 rounded-full text-left mt-10"
          data-aos="fade-down"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none bg-transparent text-sm pl-4"
          />
          <button
            type="button"
            className="bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-full px-5 py-2.5 ml-4 transition-all"
          >
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-gray-300 my-12" />

      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
        <div data-aos="fade-down">
          <h4 className="text-lg font-bold mb-6 text-gray-800">About Us</h4>
          <p className="text-gray-500 mb-2 text-sm">
          We are dedicated to facilitating the global supply chain of medical
            products through efficient import and export solutions. Our mission
            is to ensure quality healthcare reaches every corner of the world.
          </p>
        </div>

        <div data-aos="fade-down">
          <h4 className="text-lg font-bold mb-6 text-gray-800">Services</h4>
          <ul className="space-y-4">
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Medicine Import
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Medicine Export
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Regulatory Compliance
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Global Distribution
              </a>
            </li>
          </ul>
        </div>

        <div data-aos="fade-down">
          <h4 className="text-lg font-bold mb-6 text-gray-800">Resources</h4>
          <ul className="space-y-4">
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Webinars on Healthcare Trends
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Regulatory Guidelines Ebook
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Medicine Import Templates
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Supply Chain Management Tutorials
              </a>
            </li>
          </ul>
        </div>

        <div data-aos="fade-down">
          <h4 className="text-lg font-bold mb-6 text-gray-800">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Contact Information
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Partner with Us
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-gray-500 hover:text-gray-800 text-[15px]"
              >
                Customer Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
