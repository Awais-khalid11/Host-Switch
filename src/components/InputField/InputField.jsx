import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const InputField = ({
  label = "",
  id = "",
  type = "text",
  placeholder = "",
  value,
  onChange,
  icon: IconComponent,
  gray,
  asterisk,
  fieldName,
  InputClass,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const handleToggle = () => setShowPassword((prev) => !prev);

  return (
    <div className={`mb-4 ${fieldName || ""}`}>
      {label && (
        <div className="flex">
          <label
            htmlFor={id}
            className="block mb-3.5 text-[#323232] text-sm  font-bold leading-[100%] "
          >
            {label}
          </label>
          {asterisk && <span className="text-red-500 ml-1 -mt-1">*</span>}
        </div>
      )}
      <div className="relative">
        <input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-[48px] mb-3.5 bg-[#FBFCFD] border border-[#2525251A] rounded-[8px] px-4 text-sm font-normal text-[#1A1A1A] placeholder:text-gray-500 focus:outline-none ${InputClass}`}
          {...rest}
        />

        {IconComponent && !isPassword && (
          <div className="absolute right-3 top-5  cursor-pointer">
            <IconComponent size={18} color="#25252580" />
          </div>
        )}

        {isPassword && (
          <div className="absolute right-3 top-5 cursor-pointer">
            {showPassword ? (
              <IoEyeOutline size={18} onClick={handleToggle} color="#292D32" />
            ) : (
              <IoEyeOffOutline
                size={18}
                onClick={handleToggle}
                color="#292D32"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
