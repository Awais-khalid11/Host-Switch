import React, { useState } from "react";
import PasswordForm from "./PasswordForm";
import password from "../../../assets/password.png"
import logo from "../../../assets/logo.svg"



const Password = () => {
  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-center p-5 gap-10">
      <div className="w-1/2 ">
        <img src={password} alt="loginImg" className="rounded-2xl max-w-[645px]"/>
      </div>
      <div className="md:w-[43.5%] w-full md:max-w-[508px] mx-auto">
        <img src={logo} alt="logoImg" className="max-w-[285px] mx-auto min-h-[29px] mb-14"/>
        <h2 className="lg:text-[32px] md:text-[30px] text-[28px] font-bold  mb-1 text-center">Forget Password?</h2>
        <div className="max-w-[442px] mx-auto text-[#252525CC] text-sm font-normal text-center mb-10">
            <p>Enter your registered login email below to get your unique link to reset the password.</p>
        </div>
        <PasswordForm/>
      </div>
    </div>
  );
};

export default Password;

