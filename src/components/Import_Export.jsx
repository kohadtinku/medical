import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Import_Export = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div class="bg-[#F7F7F7] text-[#333] font-[sans-serif] c_import">
        <div class="max-w-6xl mx-auto py-16 px-4">
          <h2 class="text-4xl font-extrabold text-center mb-16 text-gray-950" data-aos="zoom-in">
            Discover Our Exclusive Features
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-md:max-w-md mx-auto">
            <div class="bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-300 rounded-lg overflow-hidden shadow-lg" data-aos="fade-down">
              <div class="p-6" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-8 mb-4"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                    data-original="#000000"
                  />
                  <path
                    d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                    data-original="#000000"
                  />
                </svg>
                <h3 class="text-xl text-orange-600 font-bold mb-2">Import</h3>
                <p class="text-white text-sm">
                  Importing medicines involves obtaining necessary licenses and
                  registrations from health authorities, such as an import
                  license and a drug registration certificate. Importers must
                  prepare essential documents like a proforma invoice,
                  certificate of analysis, and bill of lading. Compliance with
                  local labeling regulations, including details about active
                  ingredients, manufacturer information, and expiration dates,
                  is crucial. Quality control testing and inspections ensure the
                  medicines meet local standards.
                </p>
              </div>
            </div>

            <div class="bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-300 rounded-lg overflow-hidden shadow-lg" data-aos="fade-down">
              <div class="p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-8 mb-4"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                  </defs>
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="40"
                    clip-path="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                      data-original="#000000"
                    />
                    <path
                      d="M178 271.894 233.894 216 334 316.105"
                      data-original="#000000"
                    />
                  </g>
                </svg>
                <h3 class="text-xl text-orange-600 font-bold mb-2">Security</h3>
                <p class="text-white text-sm">
                  Ensuring security in medicine importation involves stringent
                  regulatory compliance, including obtaining licenses and
                  registrations from health authorities. Importers must maintain
                  accurate documentation, such as proforma invoices and
                  certificates of analysis, to verify the authenticity and
                  quality of medicines. Adherence to local labeling regulations
                  and rigorous quality control testing help prevent counterfeit
                  products from entering the market. Customs declarations and
                  inspections further ensure that only approved medicines are
                  imported
                </p>
              </div>
            </div>
            <div class="bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-300 rounded-lg overflow-hidden shadow-lg" data-aos="fade-down">
              <div class="p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-8 mb-4"
                  viewBox="0 0 24 24"
                >
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path
                      d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                      data-original="#000000"
                    />
                    <path
                      d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                      data-original="#000000"
                    />
                    <path
                      d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                      data-original="#000000"
                    />
                  </g>
                </svg>
                <h3 class="text-xl text-orange-600 font-bold mb-2">Export</h3>
                <p class="text-white text-sm">
                  Ensuring security in medicine exportation involves strict
                  adherence to regulatory requirements, including obtaining
                  export licenses and necessary certifications. Accurate and
                  comprehensive documentation, such as certificates of analysis
                  and origin, helps verify the quality and authenticity of the
                  medicines. Compliance with international labeling standards
                  and rigorous quality control testing prevents counterfeit
                  products from entering the global market.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Import_Export;
