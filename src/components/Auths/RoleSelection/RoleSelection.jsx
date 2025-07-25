import React, { useState, useRef, useEffect } from "react";
import { RolePNG } from "../../../constants/Imgs";
import { LogoSVG } from "../../../Constants/Icons";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/Routes";

const RoleSelection = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const roleContainerRef = useRef(null);

  const handleContinue = () => {
    if (selectedRole === "pm") navigate(ROUTES.COMPANYINFO);
    else if (selectedRole === "host") navigate(ROUTES.HOSTCOMPANYINFO);
  };

  // Clear selection when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        roleContainerRef.current &&
        !roleContainerRef.current.contains(event.target)
      ) {
        setSelectedRole(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-center md:p-5 md:!pr-10 gap-[30px]">
      {/* Left image */}
      <div className="md:w-1/2 w-full">
        <img src={RolePNG} alt="loginImg" className="rounded-2xl w-full" />
      </div>

      {/* Right content */}
      <div className="md:w-1/2 w-full">
        <img
          src={LogoSVG}
          alt="logoImg"
          className="md:max-w-[285px] max-w-[180px] mx-auto min-h-[29px] mb-9 md:mb-14"
        />

        <h2 className="lg:text-[30px] md:text-[30px] max-w-[450px] mx-auto text-[25px] md:leading-10 sm:leading-6 font-bold mb-8 text-center">
          Choose the Option That Best Describes You
        </h2>

        <div ref={roleContainerRef} className="flex flex-col gap-5">
          {/* PM Option */}
          <div
            onClick={() => setSelectedRole("pm")}
            className={`cursor-pointer border p-5 rounded-[12px] transition ${
              selectedRole === "pm"
                ? "border-[#4D72FF] shadow-md bg-[#F0F4FF]"
                : "border-[#E4E5E8] hover:shadow-md"
            }`}
          >
            <p className="text-[16px] font-medium">
              I want to access the <span className="font-bold">PM Dashboard</span>
            </p>
          </div>

          {/* Host Option */}
          <div
            onClick={() => setSelectedRole("host")}
            className={`cursor-pointer border p-5 rounded-[12px] transition ${
              selectedRole === "host"
                ? "border-[#4D72FF] shadow-md bg-[#F0F4FF]"
                : "border-[#E4E5E8] hover:shadow-md"
            }`}
          >
            <p className="text-[16px] font-medium">
              I want to access the <span className="font-bold">Host Dashboard</span>
            </p>
          </div>

          {/* Continue Button */}
          {selectedRole && (
            <button
              onClick={handleContinue}
              className="mt-6 w-full px-5 py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#4D72FF]"
            >
              Continue
            </button>
          )}
        </div>

        {/* Login text */}
        <div className="text-sm text-center font-medium leading-6 text-[#777777] mt-5">
          <p>
            Already have an account?
            <span
              onClick={() => navigate(ROUTES.LOGIN)}
              className="font-bold cursor-pointer ml-1.5 text-[#252525]"
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
