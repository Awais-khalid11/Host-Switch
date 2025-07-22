import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const MultiCheckboxDropdown = ({ label, options, selectedValues, setSelectedValues, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isGridStyle = label === "Property Types Managed";

  return (
    <div className={`${className} relative w-full mb-7" ref={dropdownRef}`}>
      <label className="block text-[13px] font-bold text-[#252525] mb-2.5">{label}</label>

      <div
        className="relative border border-[#000000CC] h-[48px] rounded-md px-4 cursor-pointer bg-white text-[13px] font-normal text-[#25252580] flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {selectedValues.length > 0 ? selectedValues.join(", ") : `Select ${label}`}
        </span>
        <FaChevronDown
          className={`text-[#252525] text-sm transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white border rounded-md shadow-md w-full p-3 max-h-60 overflow-y-auto">
          <div
            className={`${
              isGridStyle
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2"
                : "flex flex-col gap-2"
            }`}
          >
            {options.map((option, index) => (
              <label key={index} className="flex items-center cursor-pointer ">
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiCheckboxDropdown;
