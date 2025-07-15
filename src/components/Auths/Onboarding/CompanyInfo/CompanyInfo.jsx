import React from "react";
import { CompanyPNG } from "../../../../constants/Imgs";
import CompanyInfoForm from "./CompanyInfoForm";
import OnboardingStepper from "../OnboardingStepper"; 
import { LogoSVG } from "../../../../constants/Icons";

const CompanyInfo = () => {
  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-between md:p-2.5 gap-[30px]">
      <div className="hidden md:block md:w-1/2 w-full">
        <img src={CompanyPNG} alt="loginImg" className="rounded-2xl w-full lg:h-[759px]" />
      </div>
      <div className="md:w-1/2 w-full hide-scrollbar md:h-[759px] md:overflow-y-auto">
        <img src={LogoSVG} alt="logoImg" className="md:max-w-[285px] max-w-[180px] mx-auto min-h-[29px] mb-5 md:mb-10" />
        <OnboardingStepper/>
        <h2 className="lg:text-[30px] md:text-[25px] text-[22px] font-bold mb-4 text-center">
          Company Info & Market Coverage
        </h2>
        <CompanyInfoForm />
      </div>
    </div>
  );
};

export default CompanyInfo;
