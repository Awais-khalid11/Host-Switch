import React from "react";

const Button = ({
  children,
  prefixImg,
  suffixImg,
  variant = "gradient",
  className = "",
  onClick,
  type = "button",
  loading = false,
  ...rest
}) => {
  const baseStyles =
    "whitespace-nowrap md:px-6.5 px-3 rounded-[8px] font-bold text-base transition duration-300 flex items-center gap-0.5 md:gap-2 justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    defaultBtn:
      "bg-[#4D72FF] text-white md:h-[55px] w-[160px] font-semibold h-[40px]",
    graybtn: "bg-[#2525251A] text-[#2525254d]",
    whitebtn: "bg-white w-full",
    borderbtn:
      "border border-[#4D72FF] w-full bg-white text-[#4D72FF] font-medium h-[48px]",
    filterbtn:
      "border border-[#E9EAEB] w-[80px] h-[37px] rounded-[4px] font-semibold text-sm",
    greenbtn:
      "border border-[#1A932E] text-[#1A932E] text-[12px] font-medium h-[48px]",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={loading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...rest}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          {prefixImg && <img src={prefixImg} alt="prefix" />}
          {children}
          {suffixImg && <img src={suffixImg} alt="suffix" />}
        </>
      )}
    </button>
  );
};

export default Button;
