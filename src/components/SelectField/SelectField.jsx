import React from "react";
import { DownarrowSVG } from "../../Constants/Icons";

const SelectField = ({
  label,
  options = [],
  value,
  onChange,
  name,
  id,
  selectClass,
  className,
  isCheckbox = false,
  selectedValues = [],
  setSelectedValues = () => {},
}) => {
  const handleCheckboxChange = (optionValue) => {
    if (selectedValues.includes(optionValue)) {
      setSelectedValues(selectedValues.filter((v) => v !== optionValue));
    } else {
      setSelectedValues([...selectedValues, optionValue]);
    }
  };

  return (
    <div className={`relative ${selectClass}`}>
      {label && (
        <label
          htmlFor={id || name}
          className={`${className} block mb-2 font-bold text-sm text-[#323232]`}
        >
          {label}
        </label>
      )}

      {!isCheckbox ? (
        <div className="relative">
          <select
            id={id || name}
            name={name}
            value={value}
            onChange={onChange}
            className="block w-full px-4 py-3 h-[48px] border border-[#2525251A] rounded-lg text-sm text-[#25252580] appearance-none"
          >
            {options.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <img
            src={DownarrowSVG}
            alt="dropdown arrow"
            className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
        </div>
      ) : (
        // ✅ Checkbox Dropdown
        <div className="border border-[#2525251A] rounded-lg p-3 flex flex-col gap-2 max-h-60 overflow-y-auto">
          {options.map((opt, idx) => (
            <label key={idx} className="flex items-center text-sm text-[#252525]">
              <input
                type="checkbox"
                checked={selectedValues.includes(opt.value)}
                onChange={() => handleCheckboxChange(opt.value)}
                className="mr-2 cursor-pointer"
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectField;


// import React, { useState, useEffect, useRef } from "react";
// import { DownarrowSVG } from "../../Constants/Icons";

// const SelectField = ({
//   label,
//   options = [],
//   value,
//   onChange,
//   name,
//   id,
//   selectClass,
//   className,
//   isCheckbox = false,
//   selectedValues = [],
//   setSelectedValues = () => {},
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleCheckboxChange = (optionValue) => {
//     if (selectedValues.includes(optionValue)) {
//       setSelectedValues(selectedValues.filter((v) => v !== optionValue));
//     } else {
//       setSelectedValues([...selectedValues, optionValue]);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className={`relative ${selectClass}`} ref={dropdownRef}>
//       {label && (
//         <label
//           htmlFor={id || name}
//           className={`${className} block mb-2 font-bold text-sm text-[#323232]`}
//         >
//           {label}
//         </label>
//       )}

//       {!isCheckbox ? (
//         // ✅ Normal Dropdown
//         <div className="relative">
//           <select
//             id={id || name}
//             name={name}
//             value={value}
//             onChange={onChange}
//             className="block w-full px-4 py-3 h-[48px] border border-[#2525251A] rounded-lg text-sm text-[#25252580] appearance-none"
//           >
//             {options.map((opt, idx) => (
//               <option key={idx} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </select>
//           <img
//             src={DownarrowSVG}
//             alt="dropdown arrow"
//             className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
//           />
//         </div>
//       ) : (
//         // ✅ Dropdown-style checkbox list
//         <div>
//           <div
//             onClick={() => setIsOpen(!isOpen)}
//             className="cursor-pointer border border-[#2525251A] rounded-lg p-3 flex justify-between items-center"
//           >
//             <span className="text-sm text-[#25252580]">
//               {selectedValues.length
//                 ? `${selectedValues.length} selected`
//                 : "Select options"}
//             </span>
//             <img
//               src={DownarrowSVG}
//               alt="dropdown arrow"
//               className={`w-4 h-4 transform transition-transform ${
//                 isOpen ? "rotate-180" : ""
//               }`}
//             />
//           </div>

//           {isOpen && (
//             <div className="absolute z-10 bg-white mt-2 w-full border border-[#2525251A] rounded-lg p-3 max-h-60 overflow-y-auto grid grid-cols-2 gap-2 shadow-lg">
//               {options.map((opt, idx) => (
//                 <label
//                   key={idx}
//                   className="flex items-center text-sm text-[#252525]"
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selectedValues.includes(opt.value)}
//                     onChange={() => handleCheckboxChange(opt.value)}
//                     className="mr-2 cursor-pointer"
//                   />
//                   {opt.label}
//                 </label>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectField;
