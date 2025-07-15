import React from "react";

const Button = ({
  children,
  prefixImg,
  suffixImg,
  variant = "gradient",
  className = "",
  onClick,
  ...rest
}) => {
  const baseStyles =
    "whitespace-nowrap md:px-6.5 px-3 rounded-[8px] font-bold text-base transition duration-300 flex items-center gap-2 items-center justify-center cursor-pointer";

  const variants = {
    defaultBtn: "bg-[#4D72FF] text-[#ffffff] md:h-[55px]  w-[160px] cursor-pointer md:px-[10px] px-0 gap-0 font-semibold  h-[40px]",
    graybtn: "bg-[#2525251A] text-[#2525254d]",
    whitebtn: "bg-white w-full",
    borderbtn: "border border-[#4D72FF] w-full bg-white text-[#4D72FF] font-medium h-[48px]",
    filterbtn: "border border-[#E9EAEB] w-[80px] h-[37px] rounded-[4px] font-semibold font-sm",
    greenbtn: "border border-[#1A932E] text-[#1A932E] font-medium h-[48px]"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...rest}
    >
      {prefixImg && <img src={prefixImg} />}
      {children}
      {suffixImg && <img src={suffixImg} />}
    </button>
  );
};

export default Button;
