import React, { useState } from "react";
import HostOnboardingStepper from "../HostOnboardingStepper";
import HostPortfolioForm from "./HostPortfolioForm";
import {  PropertyPNG } from "../../../../../constants/Imgs";
import { LogoSVG } from "../../../../../Constants/Icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../constants/Routes";

const HostPortfolio = () => {
  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-between md:p-5 md:!pr-10 gap-[30px] p-2.5">
      <div className="hidden md:block w-1/2">
        <img
          src={PropertyPNG}
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
        <HostOnboardingStepper />
        <h2 className="lg:text-[30px] md:text-[25px] text-[22px] font-bold mb-4 text-center">
          Property Information
        </h2>

        <HostPortfolioForm />
        <h4 className="text-sm font-normal text-[#777777] text-center ">
          If you are already a member, please
          <Link className="text-sm text-black font-bold cursor-pointer ml-2" to={ROUTES.LOGIN}>
             Login
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default HostPortfolio;
