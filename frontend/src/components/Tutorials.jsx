// import { HiChevronDown, HiChevronUp } from "react-icons/hi";
// import { Link } from "react-router-dom";
// const Tutorials = ({
//   setIsDropdownOpen,
//   isDropdownOpen,
//   tutorials,
//   toggleTopic,
//   expandedTopics,
//   toggleMenu,
// }) => {
//   return (
//     <li>
//       <button
//         className="w-full flex items-center justify-between py-2 transition-all hover:text-blue-500"
//         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//       >
//         📖 Tutorials
//         {isDropdownOpen ? (
//           <HiChevronUp className="text-xl" />
//         ) : (
//           <HiChevronDown className="text-xl" />
//         )}
//       </button>

//       {/* Tutorials List */}
//       <ul
//         className={`pl-4 text-sm transition-all duration-300 overflow-hidden ${
//           isDropdownOpen ? "max-h-[500px]" : "max-h-0"
//         }`}
//       >
//         {tutorials.map((tut) => (
//           <li key={tut._id} className="mt-2">
//             {/* Main Tutorial Name */}
//             <button
//               className="w-full flex items-center justify-between py-1 text-white transition-all hover:text-blue-400"
//               onClick={() => toggleTopic(tut._id)}
//             >
//               {tut.name}
//               {expandedTopics[tut._id] ? (
//                 <HiChevronUp className="text-lg" />
//               ) : (
//                 <HiChevronDown className="text-lg" />
//               )}
//             </button>

//             {/* Subtopics */}
//             {expandedTopics[tut._id] && (
//               <ul className="pl-4 mt-1">
//                 {tut.topics.map((topic) => (
//                   <li key={topic._id}>
//                     <Link
//                       className="block py-1 text-gray-300 transition-all hover:text-blue-300"
//                       to={"/:" + tut.name + "/:" + topic.title}
//                       onClick={toggleMenu}
//                     >
//                       - {topic.title}
//                     </Link>
//                   </li>
//                 ))}
//                 <li className="text-gray-500 text-sm italic mt-1">More...</li>
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </li>
//   );
// };

// export default Tutorials;

import { HiChevronDown, HiChevronUp, HiCode } from "react-icons/hi";
import { Link } from "react-router-dom";

const Tutorials = ({
  setIsDropdownOpen,
  isDropdownOpen,
  tutorials,
  toggleTopic,
  expandedTopics,
  toggleMenu,
}) => {
  return (
    <li className="relative">
      {/* Tutorials Button */}
      <button
        className="flex items-center justify-between w-full px-4 py-2 rounded-lg
                   transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-500 group"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {/* Icon + Text with Gradient */}
        <span className="flex items-center gap-3">
          <HiCode
            className="w-6 h-6 text-blue-500 transition-transform 
                           group-hover:scale-110 group-hover:text-red-500 duration-300"
          />

          {/* IDE Name with Gradient Effect */}
          <span
            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text 
                           text-transparent font-semibold text-lg tracking-wide"
          >
            Tutorials
          </span>
        </span>

        {/* Dropdown Arrow Animation */}
        {isDropdownOpen ? (
          <HiChevronUp
            className="text-xl text-blue-500 
                          group-hover:shadow-blue-500/50 group-hover:shadow-md 
                          transition-all duration-300 scale-110"
          />
        ) : (
          <HiChevronDown
            className="text-xl text-blue-500 
                            group-hover:shadow-blue-500/50 group-hover:shadow-md 
                            transition-all duration-300 scale-110"
          />
        )}
      </button>

      {/* Tutorials List */}
      {/* <ul
        className={`pl-5 text-sm transition-all duration-500 overflow-hidden space-y-2
              ${
                isDropdownOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
      > */}
      <ul
        className={`pl-5 text-sm transition-all duration-500 space-y-2 
    ${isDropdownOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"} 
    overflow-y-auto scrollbar-none`}
      >
        {tutorials.map((tut) => (
          <li key={tut._id} className="mt-2">
            {/* Main Tutorial Name */}
            <button
              className="flex items-center justify-between w-full px-3 py-2 rounded-lg
                   text-gray-200 transition-all hover:text-blue-400 
                   hover:bg-blue-500/10 shadow-sm"
              onClick={() => toggleTopic(tut._id)}
            >
              <span className="flex items-center gap-2">
                <HiChevronDown
                  className={`text-lg transition-transform duration-300 
                        ${
                          expandedTopics[tut._id]
                            ? "rotate-180 text-blue-400"
                            : "text-gray-400"
                        }`}
                />
                <span className="font-semibold text-gray-400 hover:text-blue-300  hover:shadow-blue-500/50 hover:shadow-md transition-all">
                  {tut.name}
                </span>
              </span>
            </button>

            {/* Subtopics with Glassmorphism */}
            {expandedTopics[tut._id] && (
              <ul className="pl-5 mt-1 space-y-1 bg-white/10 backdrop-blur-lg rounded-lg p-2 shadow-md">
                {tut.topics.map((topic) => (
                  <li key={topic._id}>
                    <Link
                      className="block py-1 px-3 rounded-lg font-medium 
                           text-gray-400 transition-all hover:text-blue-300 
                           hover:bg-blue-500/10"
                      to={"/:" + tut.name + "/:" + topic.title}
                      onClick={toggleMenu}
                    >
                      - {topic.title}
                    </Link>
                  </li>
                ))}
                <li className="text-gray-500 text-xs italic mt-1 px-3">
                  More...
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Tutorials;

// <li>
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
//                             to={"/:" + tut.name + "/:" + topic.title}
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
