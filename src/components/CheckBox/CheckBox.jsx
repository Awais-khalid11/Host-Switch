import React from 'react';


const CheckBox = ({
  id,
  name,
  checked = false,
  onChange,
  label = '',
  className = '',
  labelClass = '',
  disabled = false,
}) => {


  return (
    <div className={`flex  items-center gap-2.5 ${className}`}>
      <input
        type="checkbox"
        id={id || name}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="w-4 h-4 rounded-[50px]  cursor-pointer"
      />
      {label && (
        <label htmlFor={id || name} className={`text-[13px] whitespace-nowrap text-[#252525] ${labelClass}`}>
          {label}
        </label>
      )}
    </div>
  );
};


export default CheckBox;
