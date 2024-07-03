// import React, { useEffect, useState } from "react";
// import Top from "./Top";

// const Header = () => {
//   const [percent, setPercent] = useState(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       const winScroll =
//         document.body.scrollTop || document.documentElement.scrollTop;
//       const height =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       const scrolled = Math.round((winScroll / height) * 100);
//       setPercent(scrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <>
//       {/* <div className="container">
//         <div className="logo">
//             <img src="img" alt="logo" />
//         </div>



//     </div> */}

//       <div className="flex flex-col items-center justify-center  z-999">
//         <div className="flex flex-col">
//           {/* Page Scroll Progress */}
//           <div
//             className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 "
//             style={{ width: `${percent}%` }}
//           ></div>

//           {/* Navbar */}
//           <nav className="flex justify-around py-4 bg-white/80 backdrop-blur-md z-50 shadow-md w-full fixed top-0 left-0 right-0 ">
//             {/* Logo Container */}
//             <div className="flex items-center border-r-black">
//               {/* Logo */}
//               <div>
//                 <a className="cursor-pointer">
//                   <h3 className="text-2xl font-medium text-blue-500">
//                     <img
//                       className="h-10 object-cover"
//                       src="f"
//                       alt="Store Logo"
//                     />
//                   </h3>
//                 </a>
//               </div>
//             </div>

//             {/* Links Section */}
//             <div className="items-center hidden space-x-8 lg:flex">
//               <a className="flex text-black hover:text-blue-500 cursor-pointer transition-colors duration-300 uppercase">
//                 Home
//               </a>
//               <a className="flex text-black cursor-pointer transition-colors duration-300  uppercase hover:text-blue-600">
//                 Services
//               </a>
//               <a className="flex text-black uppercase hover:text-blue-500 cursor-pointer  transition-colors duration-300">
//                 Products
//               </a>
//               <a className="flex text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 Contact us
//               </a>
//               <a className="flex text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 Blog
//               </a>
//               <a className="flex text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 About Us
//               </a>
//             </div>

//             {/* Icon Menu Section */}
//             <div className="flex items-center space-x-5">
//               {/* Register */}
//               <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 <svg
//                   className="fill-current h-5 w-5 mr-2 mt-0.5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   xmlnsXlink="http://www.w3.org/1999/xlink"
//                   version="1.1"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
//                 </svg>
//                 Register
//               </a>

//               {/* Login */}
//               <a className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold hover:text-blue-600">
//                 <svg
//                   className="fill-current h-5 w-5 mr-2 mt-0.5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   xmlnsXlink="http://www.w3.org/1999/xlink"
//                   version="1.1"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
//                 </svg>
//                 Login
//               </a>
//             </div>
//           </nav>
//         </div>
      
//       </div>
//     </>
//   );
// };

// export default Header;




// import React, { useEffect, useState } from "react";
// import Top from "./Top";

// const Header = () => {
//   const [percent, setPercent] = useState(0);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const winScroll =
//         document.body.scrollTop || document.documentElement.scrollTop;
//       const height =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       const scrolled = Math.round((winScroll / height) * 100);
//       setPercent(scrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center z-999">
//         <div className="flex flex-col">
//           {/* Page Scroll Progress */}
//           <div
//             className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5"
//             style={{ width: `${percent}%` }}
//           ></div>

//           {/* Navbar */}
//           <nav className="flex justify-between py-4  backdrop-blur-md z-50 shadow-md w-full fixed top-0 left-0 right-0 px-4 lg:px-8">
//             {/* Logo Container */}
//             <div className="flex items-center border-r-black">
//               <a className="cursor-pointer">
//                 <h3 className="text-2xl font-medium text-blue-500">
//                   <img
//                     className="h-10 object-cover"
//                     src="f"
//                     alt="Store Logo"
//                   />
//                 </h3>
//               </a>
//             </div>

//             {/* Links Section for larger screens */}
//             <div className="items-center hidden space-x-8 lg:flex">
//               <a className="text-black hover:text-blue-500 cursor-pointer transition-colors duration-300 uppercase">
//                 Home
//               </a>
//               <a className="text-black cursor-pointer transition-colors duration-300 uppercase hover:text-blue-600">
//                 Services
//               </a>
//               <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 Products
//               </a>
//               <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 Contact Us
//               </a>
//               <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 Blog
//               </a>
//               <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 About Us
//               </a>
//             </div>

//             {/* Hamburger Icon for smaller screens */}
//             <div className="lg:hidden flex items-center">
//               <button
//                 onClick={toggleSidebar}
//                 className="text-gray-600 hover:text-blue-500 focus:outline-none"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   ></path>
//                 </svg>
//               </button>
//             </div>

//             {/* Icon Menu Section */}
//             <div className="hidden lg:flex items-center space-x-5">
//               <a className="text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 flex items-center">
//                 <svg
//                   className="fill-current h-5 w-5 mr-2 mt-0.5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   xmlnsXlink="http://www.w3.org/1999/xlink"
//                   version="1.1"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
//                 </svg>
//                 Register
//               </a>
//               <a className="text-gray-600 cursor-pointer transition-colors duration-300 font-semibold hover:text-blue-600 flex items-center">
//                 <svg
//                   className="fill-current h-5 w-5 mr-2 mt-0.5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   xmlnsXlink="http://www.w3.org/1999/xlink"
//                   version="1.1"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
//                 </svg>
//                 Login
//               </a>
//             </div>
//           </nav>

//           {/* Sidebar for smaller screens */}
//           <div
//             className={`fixed inset-0 z-40 transform ${
//               sidebarOpen ? "translate-x-0" : "-translate-x-full"
//             } transition-transform duration-300 ease-in-out bg-white shadow-lg lg:hidden`}
//           >
//             <div className="flex justify-between items-center p-4 bg-white shadow-md">
//               <h3 className="text-2xl font-medium text-blue-500">
//                 <img
//                   className="h-10 object-cover"
//                   src="f"
//                   alt="Store Logo"
//                 />
//               </h3>
//               <button
//                 onClick={toggleSidebar}
//                 className="text-gray-600 hover:text-blue-500 focus:outline-none"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="flex flex-col p-4 space-y-4">
//               <a className="text-black hover:text-blue-500 cursor-pointer transition-colors duration-300 uppercase">
//                 Home
//               </a>
//               <a className="text-black cursor-pointer transition-colors duration-300 uppercase hover:text-blue-600">
//                 Services
//               </a>
//               <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 Products
//               </a>
//               <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 Contact Us
//               </a>
//               <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 Blog
//               </a>
//               <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
//                 About Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;




import React, { useEffect, useState } from "react";
import Top from "./Top";
import bg from '../assets/bg.png'

const Header = () => {
  const [percent, setPercent] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = Math.round((winScroll / height) * 100);
      setPercent(scrolled);

      // Update isScrolled state
      setIsScrolled(winScroll > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center z-999">
        <div className="flex flex-col">
          {/* Page Scroll Progress */}
          <div
            className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5"
            style={{ width: `${percent}%` }}
          ></div>

          {/* Navbar */}
          <nav
            className={`flex justify-between py-4  backdrop-blur-md z-50 shadow-md w-full fixed top-0 left-0 right-0 px-4 lg:px-8 ${
              isScrolled ? "bg-slate-300" : ""
            }`}
          >
            {/* Logo Container */}
            <div className="flex items-center border-r-black">
              <a className="cursor-pointer">
                <h3 className="text-2xl font-medium text-blue-500">
                  <img className="h-16 object-cover" src={bg} alt="Store Logo" />
                </h3>
              </a>
            </div>

            {/* Links Section for larger screens */}
            <div className={`items-center hidden space-x-8 lg:flex ${isScrolled?"text-black":"text-white"}`}>
              <a className=" hover:text-blue-500 cursor-pointer transition-colors duration-300 uppercase">
                Home
              </a>
              <a className=" cursor-pointer transition-colors duration-300 uppercase hover:text-blue-600">
                Services
              </a>
              <a className=" uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
                Products
              </a>
              <a className=" uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
                Contact Us
              </a>
              <a className=" uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
                Blog
              </a>
              <a className=" uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
                About Us
              </a>
            </div>

            {/* Hamburger Icon for smaller screens */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-blue-500 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Icon Menu Section */}
            <div className={`hidden lg:flex items-center space-x-5 ${isScrolled?"text-black":"text-white"}`}>
              <a className=" hover:text-blue-500 cursor-pointer transition-colors duration-300 flex items-center">
                <svg
                  className="fill-current h-5 w-5 mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
                </svg>
                Register
              </a>
              <a className=" cursor-pointer transition-colors duration-300 font-semibold hover:text-blue-600 flex items-center">
                <svg
                  className="fill-current h-5 w-5 mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
                </svg>
                Login
              </a>
            </div>
          </nav>

          {/* Sidebar for smaller screens */}
          <div
            className={`fixed inset-0 z-40 transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out bg-white shadow-lg lg:hidden`}
          >
            <div className="flex justify-between items-center p-4 bg-white shadow-md">
              <h3 className="text-2xl font-medium text-blue-500">
                <img className="h-10 object-cover" src="f" alt="Store Logo" />
              </h3>
              <button
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-blue-500 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col p-4 space-y-4 mt-5">
              <a className="text-black hover:text-blue-500 cursor-pointer transition-colors duration-300 uppercase">
                Home
              </a>
              <a className="text-black cursor-pointer transition-colors duration-300 uppercase hover:text-blue-600">
                Services
              </a>
              <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
                Products
              </a>
              <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
                Contact Us
              </a>
              <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
                Blog
              </a>
              <a className="text-black uppercase hover:text-blue-500 cursor-pointer transition-colors duration-300">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
