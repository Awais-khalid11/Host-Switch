import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FilterDropdown = ({ button, options = [], onSelect, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={` inline-block ${className}`}>
      <div ref={buttonRef} onClick={() => setIsOpen((prev) => !prev)}>
        {button}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            ref={dropdownRef}
            className="absolute -top-2 right-20 mt-2 w-[155px] z-50 bg-white border border-gray-200 shadow-md rounded-md"
          >
            {options.map((opt, index) => (
              <button
                key={index}
                onClick={() => {
                  opt.onClick?.();          // optional click
                  onSelect?.(opt.value);    // <-- THIS IS THE IMPORTANT LINE
                  setIsOpen(false);         // close dropdown
                }}
                className="w-full cursor-pointer text-left flex items-center gap-2 px-3 py-2 text-sm text-[#252525] hover:bg-gray-100"
              >
                {opt.icon}
                <i>{opt.label}</i>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown;
