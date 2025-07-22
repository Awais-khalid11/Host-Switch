import React, { useState } from "react";

const TextArea = ({ label, rows = 4, value, onChange, placeholder, type, labelClass, placeClass }) => {
  return (
    <div className="w-full mb-2.5">
      
      <label className={`${labelClass} text-[#323232] text-sm font-bold mb-1.5 block`}>{label}</label>
      <textarea
        type={type}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`${placeClass} w-full p-3 border rounded-xl border-gray-300 text-sm font-normal text-[#5B5B5B] resize-none`}
      />
    </div>
  );
};

export default TextArea;
