import React, { useState } from "react";
import { PortfolioPNG } from "../../../../constants/Imgs";
import PortfolioForm from "./PortfolioForm";
import OnboardingStepper from "../OnboardingStepper";
import { LogoSVG } from "../../../../Constants/Icons";

const Portfolio = () => {
  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-between p-2.5 gap-[30px]">
      <div className="hidden md:block w-1/2">
        <img
          src={PortfolioPNG}
          alt="loginImg"
          className="rounded-2xl w-full min-h-[759px]"
        />
      </div>
      <div className="md:w-1/2 w-full hide-scrollbar  h-[759px] overflow-y-auto">
        <img
          src={LogoSVG}
          alt="logoImg"
          className="max-w-[285px] mx-auto min-h-[29px] md:mb-14 mb-9"
        />
        <OnboardingStepper />
        <h2 className="lg:text-[30px] md:text-[25px] text-[22px] font-bold mb-4 text-center">
          Portfolio, Operations & Services
        </h2>

        <PortfolioForm />
      </div>
    </div>
  );
};

export default Portfolio;
