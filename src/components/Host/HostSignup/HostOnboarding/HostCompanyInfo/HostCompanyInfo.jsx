import React from "react";
import HostOnboardingStepper from "../HostOnboardingStepper";
import HostCompanyInfoForm from "./HostCompanyInfoForm";
import { LogoSVG } from "../../../../../constants/Icons";
import { HostcompanyPNG } from "../../../../../constants/Imgs";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../constants/Routes";

const HostCompanyInfo = () => {
  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-between md:p-5 md:!pr-10 gap-[30px]">
      <div className="hidden md:block md:w-1/2 w-full">
        <img src={HostcompanyPNG} alt="loginImg" className="rounded-2xl w-full lg:h-[759px]" />
      </div>
      <div className="md:w-1/2 w-full hide-scrollbar md:h-[759px] md:overflow-y-auto">
        <img src={LogoSVG} alt="logoImg" className="md:max-w-[285px] max-w-[180px] mx-auto min-h-[29px] mb-5 md:mb-10" />
        <HostOnboardingStepper/>
        <h2 className="lg:text-[30px] md:text-[25px] text-[22px] font-bold mb-4 text-center">
          Let’s Get Started
        </h2>
        <HostCompanyInfoForm />
        <h4 className="text-sm font-normal text-[#777777] text-center">If you are already a member, please <Link to={ROUTES.LOGIN} className="text-sm text-black font-bold cursor-pointer"> Login</Link></h4>
      </div>
    </div>
  );
};

export default HostCompanyInfo;
