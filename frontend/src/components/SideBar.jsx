// import { Link } from "react-router-dom";
// import logo from "../images/logo/logo.png";
// import { useState } from "react";
// import { HiChevronDown, HiChevronUp } from "react-icons/hi";

// const Sidebar = ({ isOpen, toggleMenu }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <>
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[250px] bg-[#1a1a1a] shadow-lg z-50 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 md:translate-x-0`}
//       >
//         <img
//           className="w-[150px] mx-auto my-6 object-cover"
//           src={logo}
//           alt="Logo"
//         />
//         <ul className="flex flex-col gap-2 text-left px-4">
//           <li>
//             <Link
//               className="block py-2 transition-all hover:text-blue-500"
//               to="/"
//               onClick={toggleMenu}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="block py-2 transition-all hover:text-blue-500"
//               to="/about"
//               onClick={toggleMenu}
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <button
//               className="w-full flex items-center justify-between py-2 transition-all hover:text-blue-500"
//               onClick={toggleDropdown}
//             >
//               Services{" "}
//               {isDropdownOpen ? (
//                 <HiChevronUp className="text-xl" />
//               ) : (
//                 <HiChevronDown className="text-xl" />
//               )}
//             </button>
//             <ul
//               className={`pl-4 text-sm transition-all duration-300 overflow-hidden ${
//                 isDropdownOpen ? "max-h-[500px]" : "max-h-0"
//               }`}
//             >
//               <li>
//                 <Link
//                   className="block py-1 transition-all hover:text-blue-400"
//                   to="/services/web-development"
//                   onClick={toggleMenu}
//                 >
//                   Web Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="block py-1 transition-all hover:text-blue-400"
//                   to="/services/mobile-development"
//                   onClick={toggleMenu}
//                 >
//                   Mobile Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="block py-1 transition-all hover:text-blue-400"
//                   to="/services/seo"
//                   onClick={toggleMenu}
//                 >
//                   SEO Services
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link
//               className="block py-2 transition-all hover:text-blue-500"
//               to="/contact"
//               onClick={toggleMenu}
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Overlay for Mobile */}
//       <div
//         className={`fixed inset-0 bg-black opacity-50 z-40 ${
//           isOpen ? "block" : "hidden"
//         } md:hidden`}
//         onClick={toggleMenu}
//       ></div>
//     </>
//   );
// };

// export default Sidebar;

import { Link } from "react-router-dom";
import logo from "../images/logo/logo.png";
import { useState, useEffect } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
const Sidebar = ({ isOpen, toggleMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close sidebar on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        toggleMenu(false); // Close sidebar on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toggleMenu]);

  return (
    <>
      {/* Sidebar */}

      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#1a1a1a] shadow-lg z-50 transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <img
          className="w-[150px] mx-auto my-6 object-cover"
          src={logo}
          alt="Logo"
        />
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("isLoggedIn");
            window.location.reload();
          }}
          className="btn mx-16 flex items-center gap-2 m-4 bg-red-500 text-white py-2 px-4 rounded-lg transition-all hover:bg-red-600"
        >
          <FiLogOut size={20} />
          Logout
        </button>

        <ul className="flex flex-col gap-2 text-left px-4">
          <li>
            <Link
              className="block py-2 transition-all hover:text-blue-500"
              to="/"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 transition-all hover:text-blue-500"
              to="/about"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <button
              className="w-full flex items-center justify-between py-2 transition-all hover:text-blue-500"
              onClick={toggleDropdown}
            >
              Services{" "}
              {isDropdownOpen ? (
                <HiChevronUp className="text-xl" />
              ) : (
                <HiChevronDown className="text-xl" />
              )}
            </button>
            <ul
              className={`pl-4 text-sm transition-all duration-300 overflow-hidden ${
                isDropdownOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <li>
                <Link
                  className="block py-1 transition-all hover:text-blue-400"
                  to="/services/web-development"
                  onClick={toggleMenu}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  className="block py-1 transition-all hover:text-blue-400"
                  to="/services/mobile-development"
                  onClick={toggleMenu}
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  className="block py-1 transition-all hover:text-blue-400"
                  to="/services/seo"
                  onClick={toggleMenu}
                >
                  SEO Services
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              className="block py-2 transition-all hover:text-blue-500"
              to="/contact"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for Mobile */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300 
          ${isOpen ? "block" : "hidden"} md:hidden`}
        onClick={toggleMenu}
      ></div>

      {/* Overlay for All Screen Sizes */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300 
    ${isOpen ? "block" : "hidden"}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default Sidebar;
