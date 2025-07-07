import React, { useState } from "react";
import LoginForm from "./LoginForm";
import login from "../../../assets/login.png";
import logo from "../../../assets/logo.svg"


const Login = () => {
  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-center p-5 gap-10">
      <div className="w-1/2 ">
        <img src={login} alt="loginImg" className="rounded-2xl max-w-[645px]"/>
      </div>
      <div className="md:w-[43.5%] w-full md:max-w-[508px] mx-auto">
        <img src={logo} alt="logoImg" className="max-w-[285px] mx-auto min-h-[29px] mb-14"/>
        <h2 className="lg:text-[30px] md:text-[30px] text-[28px] font-bold md:mb-3.5 mb-1 text-center">Login to Host Switch</h2>
        <LoginForm/>
        <div className="text-sm text-center font-medium leading-6 text-[#777777]">
          <p>Don't have an account? <span className="font-bold cursor-pointer text-[#252525]">Create an account</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
