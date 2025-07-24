import React from "react"; 
import { DownarrowSVG } from "../../Constants/Icons";

const SelectField = ({ label, options = [], value, onChange, name, id ,selectClass,className}) => {
  return (
    <div className={` relative ${selectClass}`}>
      {label && (
        <label htmlFor={id || name} className={` ${className} block mb-2 font-bold text-sm text-[#323232]`}>
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full px-4 py-3 h-[48px]  border border-[#2525251A] rounded-lg text-sm text-[#25252580] appearance-none"
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <img
          src={ DownarrowSVG}
          alt="dropdown arrow"
          className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
        />
      </div>
    </div>
  );
};

export default SelectField;
