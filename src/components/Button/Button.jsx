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
    "whitespace-nowrap px-6.5  rounded-[8px] font-bold text-base transition duration-300 flex items-center gap-2 items-center justify-center cursor-pointer";

  const variants = {
    // headerbtn: "bg-[#D4AF37] text-[white] py-[12px] px-[26px]",
    // default: "bg-[#D4AF37] text-[white] py-[12px]",
    // blur: `text-white bg-[#FFFFFF1A] py-[12px]`,
    // black: "bg-[#2F3542] text-[white] py-[12px]",
    // grey: "bg-[#EFEFEF] text-[#2F3542] w-full py-[12px]",
    // outline: "border border-[#2F3542] text-[#2F3542] bg-transparent py-[12px]",
    defaultBtn:
      "bg-[#4D72FF] text-[#ffffff] cursor-pointer py-[12px]",
      graybtn: "bg-[#2525251A] text-[#2525254d]"
    // blueBtn: "bg-[#2F3542] text-white cursor-pointer py-[12px]",
    // transparentBtn:
    //   "bg-transparent border border-[#E9EAEB] py-[7.5px] px-[14.5px]",
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
