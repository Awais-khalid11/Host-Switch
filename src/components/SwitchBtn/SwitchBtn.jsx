import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const SwitchBtn = ({ isOnDefault = false, onToggle }) => {
  const [isOn, setIsOn] = useState(isOnDefault);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div
      onClick={handleToggle}
      className={`w-[68px] h-[30px] flex items-center rounded-full cursor-pointer px-1 transition-colors duration-300 
        ${isOn ? "bg-[#0EA363]" : "bg-gray-300 hover:bg-pink-200"} group`}
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md flex items-center justify-center text-xs transition-all duration-300
          ${isOn
            ? "bg-white text-green-500 translate-x-[38px]"
            : "bg-white text-gray-400 translate-x-0 group-hover:bg-pink-700 group-hover:text-white"
          }`}
      >
        {isOn ? <FaCheck /> : <FaTimes />}
      </div>
    </div>
  );
};

export default SwitchBtn;
