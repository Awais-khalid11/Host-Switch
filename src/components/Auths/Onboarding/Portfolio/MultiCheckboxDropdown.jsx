// import React, { useEffect, useRef } from "react";
// import { FaChevronDown } from "react-icons/fa";

// const MultiCheckboxDropdown = ({
//   label,
//   options,
//   selectedValues,
//   setSelectedValues,
//   className = "",
//   isOpen,
//   setOpenDropdown,
//   dropdownKey,
//   isMulti = true,
//   placeholder,
// }) => {
//   const dropdownRef = useRef(null);
//   const isGridStyle = label === "Property Types Managed";

//   const handleCheckboxChange = (value) => {
//     if (selectedValues.includes(value)) {
//       setSelectedValues(selectedValues.filter((item) => item !== value));
//     } else {
//       setSelectedValues([...selectedValues, value]);
//     }
//   };

//   const handleOptionClick = (value) => {
//     setSelectedValues([value]); // single select
//     setOpenDropdown(null);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       s;
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         if (typeof setOpenDropdown === "function") {
//           setOpenDropdown(null);
//         }
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [setOpenDropdown]);

//   return (
//     <div ref={dropdownRef} className={`relative w-full ${className}`}>
//       <label className="block text-[13px] font-bold text-[#252525] mb-2.5">
//         {label}
//       </label>

//       <div
//         className="relative border border-[#000000CC] h-[48px] rounded-md px-4 cursor-pointer bg-white text-[13px] font-normal flex items-center justify-between"
//         onClick={(e) => {
//           if (e.target.tagName.toLowerCase() === "input") return;
//           setOpenDropdown(isOpen ? null : dropdownKey);
//         }}
//       >
//         <span
//           className={`truncate ${
//             selectedValues.length === 0 ? "text-[#25252580]" : "text-[#252525]"
//           }`}
//         >
//           {selectedValues.length > 0
//             ? selectedValues.join(", ")
//             : placeholder || `Select ${label}`}
//         </span>
//         <FaChevronDown
//           className={`text-[#252525] text-sm transition-transform duration-200 ${
//             isOpen ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </div>

//       {isOpen && (
//         <div
//           className="absolute z-10 mt-2 bg-white border rounded-md shadow-md w-full p-3 max-h-60 overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div
//             className={`${
//               isGridStyle
//                 ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2"
//                 : "flex flex-col gap-2"
//             }`}
//           >
//             {/* {options.map((option, index) => (
//               <label
//                 key={index}
//                 className="flex items-center cursor-pointer text-[13px] text-[#252525]"
//               >
//                 {isMulti ? (
//                   <>
//                     <input
//                       type="checkbox"
//                       checked={selectedValues.includes(option)}
//                       onChange={() => handleCheckboxChange(option)}
//                       className="mr-2 cursor-pointer"
//                     />
//                     {option}
//                   </>
//                 ) : (
//                   <span>{option}</span>
//                 )}
//               </label>
//             ))} */}
//             {options.map((option, index) => (
//               <label
//                 key={index}
//                 className="flex items-center cursor-pointer text-[13px] text-[#252525]"
//               >
//                 {isMulti ? (
//                   <>
//                     <input
//                       type="checkbox"
//                       checked={selectedValues.includes(option)}
//                       onChange={() => handleCheckboxChange(option)}
//                       className="mr-2 cursor-pointer"
//                     />
//                     {option}
//                   </>
//                 ) : (
//                   <span onClick={() => handleOptionClick(option)}>
//                     {option}
//                   </span>
//                 )}
//               </label>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultiCheckboxDropdown;

import React, { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const MultiCheckboxDropdown = ({
  label,
  options,
  selectedValues,
  setSelectedValues,
  className = "",
  isOpen,
  setOpenDropdown,
  dropdownKey,
  isMulti = true,
  placeholder,
}) => {
  const dropdownRef = useRef(null);
  const isGridStyle = label === "Property Types Managed";

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const handleOptionClick = (value) => {
    setSelectedValues([value]);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (typeof setOpenDropdown === "function") {
          setOpenDropdown(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenDropdown]);

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      <label className="block text-[13px] font-bold text-[#252525] mb-2.5">
        {label}
      </label>

      <div
        className="relative border border-[#000000CC] h-[48px] rounded-md px-4 cursor-pointer bg-white text-[13px] font-normal flex items-center justify-between"
        onClick={(e) => {
          // prevent toggle if clicking inside the dropdown content
          const dropdownContent =
            dropdownRef.current?.querySelector(".dropdown-content");
          if (dropdownContent && dropdownContent.contains(e.target)) return;
          setOpenDropdown(isOpen ? null : dropdownKey);
        }}
      >
        <span
          className={`truncate ${
            selectedValues.length === 0 ? "text-[#25252580]" : "text-[#000000]"
          }`}
        >
          {selectedValues.length > 0
            ? selectedValues.join(", ")
            : placeholder || `Select ${label}`}
        </span>
        <FaChevronDown
          className={`text-[#252525] text-sm transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {isOpen && (
        <div
          className="dropdown-content absolute z-10 mt-2 bg-white border rounded-md shadow-md w-full p-3 max-h-60 overflow-y-auto"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div
            className={`${
              isGridStyle
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2"
                : "flex flex-col gap-2"
            }`}
          >
            {options.map((option, index) => (
              <label
                key={index}
                className="flex items-center cursor-pointer font-normal text-sm text-[#25252580s]"
              >
                {isMulti ? (
                  <>
                    <input
                      type="checkbox"
                      checked={selectedValues.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="mr-2 cursor-pointer"
                    />
                    {option}
                  </>
                ) : (
                  <span onClick={() => handleOptionClick(option)}>
                    {option}
                  </span>
                )}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiCheckboxDropdown;
