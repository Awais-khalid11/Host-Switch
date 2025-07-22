import React, { useState } from "react";
import PasswordForm from "./PasswordForm";
import { PasswordPNG } from "../../../constants/Imgs";
import { LogoSVG } from "../../../Constants/Icons";



const Password = () => {
  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-center md:p-5 md:!pr-10 gap-[30px]">
      <div className="md:w-1/2 w-full">
        <img src={PasswordPNG} alt="loginImg" className="rounded-2xl w-full lg:h-[759px]"/>
      </div>
      <div className="md:w-1/2 w-full">
        <img src={LogoSVG} alt="logoImg" className="md:max-w-[285px] max-w-[180px] mx-auto min-h-[29px] mb-5 md:mb-14"/>
        <h2 className="lg:text-[32px] md:text-[30px] text-[25px] md:leading-7 sm:leading-6 font-bold  mb-3 text-center">Forget Password?</h2>
        <div className="max-w-[442px] mx-auto text-[#252525CC] text-sm font-normal text-center mb-10">
            <p>Enter your registered login email below to get your unique link to reset the password.</p>
        </div>
        <PasswordForm/>
      </div>
    </div>
  );
};

export default Password;

