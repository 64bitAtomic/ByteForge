import { Link } from "react-router-dom";
import logo from "../images/logo/logo3.png";
import { useState, useEffect } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { api_base_url } from "../helper";
const Sidebar = ({ isOpen, toggleMenu }) => {
  const [tutorials, setTutorials] = useState([]); // Store tutorials from API
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState({}); // Track expanded tutorial topics
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

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const res = await fetch(`${api_base_url}/api/tutorials/all`);
        if (!res.ok) {
          throw new Error("Failed to fetch tutorials");
        }
        const data = await res.json();
        console.log("API Response:", data); // Debugging
        setTutorials(data.tutorial ?? []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching tutorials:", error);
      }
    };
    fetchTutorials();
  }, []);

  const toggleTopic = (tutorialId) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [tutorialId]: !prev[tutorialId],
    }));
  };

  return (
    <>
      {/* Sidebar */}

      {/* <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#1a1a1a] shadow-lg z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      > */}
      <div
        className={`sidebar fixed top-0 left-0 h-full w-[250px] bg-[#1a1a1a] shadow-lg z-50 transform transition-transform duration-300
    ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900`}
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
              to="/ide"
              onClick={toggleMenu}
            >
              💻 IDE
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
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              📖 Tutorials
              {isDropdownOpen ? (
                <HiChevronUp className="text-xl" />
              ) : (
                <HiChevronDown className="text-xl" />
              )}
            </button>

            {/* Tutorials List */}
            <ul
              className={`pl-4 text-sm transition-all duration-300 overflow-hidden ${
                isDropdownOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              {tutorials.map((tut) => (
                <li key={tut._id} className="mt-2">
                  {/* Main Tutorial Name */}
                  <button
                    className="w-full flex items-center justify-between py-1 text-white transition-all hover:text-blue-400"
                    onClick={() => toggleTopic(tut._id)}
                  >
                    {tut.name}
                    {expandedTopics[tut._id] ? (
                      <HiChevronUp className="text-lg" />
                    ) : (
                      <HiChevronDown className="text-lg" />
                    )}
                  </button>

                  {/* Subtopics */}
                  {expandedTopics[tut._id] && (
                    <ul className="pl-4 mt-1">
                      {tut.topics.map((topic) => (
                        <li key={topic._id}>
                          <Link
                            className="block py-1 text-gray-300 transition-all hover:text-blue-300"
                            to={"/:" + tut.name + "/:" + topic.title}
                            onClick={toggleMenu}
                          >
                            - {topic.title}
                          </Link>
                        </li>
                      ))}
                      <li className="text-gray-500 text-sm italic mt-1">
                        More...
                      </li>
                    </ul>
                  )}
                </li>
              ))}
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

// import { Link } from "react-router-dom";
// import logo from "../images/logo/logo3.png";
// import { useState, useEffect } from "react";
// import { HiChevronDown, HiChevronUp, HiMenuAlt2 } from "react-icons/hi";
// import { FiLogOut } from "react-icons/fi";
// import { BiSearch } from "react-icons/bi";
// import { api_base_url } from "../helper";

// const Sidebar = ({ isOpen, toggleMenu }) => {
//   const [tutorials, setTutorials] = useState([]); // Store tutorials from API
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState(""); // Search input for tutorials
//   const [isCollapsed, setIsCollapsed] = useState(false); // Sidebar collapse state
//   const [expandedTopics, setExpandedTopics] = useState({}); // Track expanded tutorial topics

//   useEffect(() => {
//     const fetchTutorials = async () => {
//       try {
//         const res = await fetch(`${api_base_url}/api/tutorials/all`);
//         if (!res.ok) {
//           throw new Error("Failed to fetch tutorials");
//         }
//         const data = await res.json();
//         console.log("API Response:", data); // Debugging
//         setTutorials(data.tutorial ?? []); // Ensure it's an array
//       } catch (error) {
//         console.error("Error fetching tutorials:", error);
//       }
//     };
//     fetchTutorials();
//   }, []);

//   // Toggle individual tutorial sections
//   const toggleTopic = (tutorialId) => {
//     setExpandedTopics((prev) => ({
//       ...prev,
//       [tutorialId]: !prev[tutorialId],
//     }));
//   };

//   return (
//     <>
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-[#1a1a1a] shadow-lg z-50 transition-all duration-300 ${
//           isCollapsed ? "w-[10px]" : "w-[250px]"
//         } ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex items-center justify-between px-4 py-3">
//           <img
//             className={`object-cover transition-all ${
//               isCollapsed ? "w-[40px]" : "w-[150px]"
//             }`}
//             src={logo}
//             alt="Logo"
//           />
//           <button
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             className="text-white text-2xl p-2 hover:bg-gray-700 rounded-md"
//           >
//             <HiMenuAlt2 />
//           </button>
//         </div>

//         {/* Logout Button */}
//         {!isCollapsed && (
//           <button
//             onClick={() => {
//               localStorage.removeItem("token");
//               localStorage.removeItem("isLoggedIn");
//               window.location.reload();
//             }}
//             className="mx-4 flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg transition-all hover:bg-red-600"
//           >
//             <FiLogOut size={20} />
//             Logout
//           </button>
//         )}

//         {/* Sidebar Links */}
//         <ul className="flex flex-col gap-2 text-left px-4 mt-4">
//           <li>
//             <Link
//               className="block py-2 transition-all hover:text-blue-500"
//               to="/"
//               onClick={toggleMenu}
//             >
//               📌 Home
//             </Link>
//           </li>

//           {/* Tutorials Section */}
//           <li>
//             <button
//               className="w-full flex items-center justify-between py-2 transition-all hover:text-blue-500"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               📖 Tutorials
//               {isDropdownOpen ? (
//                 <HiChevronUp className="text-xl" />
//               ) : (
//                 <HiChevronDown className="text-xl" />
//               )}
//             </button>

//             {/* Tutorials List */}
//             <ul
//               className={`pl-4 text-sm transition-all duration-300 overflow-hidden ${
//                 isDropdownOpen ? "max-h-[500px]" : "max-h-0"
//               }`}
//             >
//               {tutorials.map((tut) => (
//                 <li key={tut._id} className="mt-2">
//                   {/* Main Tutorial Name */}
//                   <button
//                     className="w-full flex items-center justify-between py-1 text-white transition-all hover:text-blue-400"
//                     onClick={() => toggleTopic(tut._id)}
//                   >
//                     {tut.name}
//                     {expandedTopics[tut._id] ? (
//                       <HiChevronUp className="text-lg" />
//                     ) : (
//                       <HiChevronDown className="text-lg" />
//                     )}
//                   </button>

//                   {/* Subtopics */}
//                   {expandedTopics[tut._id] && (
//                     <ul className="pl-4 mt-1">
//                       {tut.topics.map((topic) => (
//                         <li key={topic._id}>
//                           <Link
//                             className="block py-1 text-gray-300 transition-all hover:text-blue-300"
//                             to={topic.urlToMarkdown}
//                             onClick={toggleMenu}
//                           >
//                             - {topic.title}
//                           </Link>
//                         </li>
//                       ))}
//                       <li className="text-gray-500 text-sm italic mt-1">
//                         More...
//                       </li>
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </li>

//           <li>
//             <Link
//               className="block py-2 transition-all hover:text-blue-500"
//               to="/ide"
//               onClick={toggleMenu}
//             >
//               🖥️ IDE
//             </Link>
//           </li>

//           <li>
//             <Link
//               className="block py-2 transition-all hover:text-blue-500"
//               to="/saved-projects"
//               onClick={toggleMenu}
//             >
//               ⭐ Saved Projects
//             </Link>
//           </li>

//           <li>
//             <Link
//               className="block py-2 transition-all hover:text-blue-500"
//               to="/settings"
//               onClick={toggleMenu}
//             >
//               ⚙️ Settings
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Overlay for Mobile */}
//       <div
//         className={`fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300 ${
//           isOpen ? "block" : "hidden"
//         } md:hidden`}
//         onClick={toggleMenu}
//       ></div>
//       {/* Overlay for All Screen Sizes */}
//       <div
//         className={`fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300
//      ${isOpen ? "block" : "hidden"}`}
//         onClick={toggleMenu}
//       ></div>
//     </>
//   );
// };

// export default Sidebar;
