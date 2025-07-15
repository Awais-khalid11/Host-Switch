import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { LogoSVG } from "../../../Constants/Icons";
import { LoginPNG } from "../../../constants/Imgs";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/Routes";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(ROUTES.COMPANYINFO);
  };
  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-center p-2.5 gap-[30px]">
      <div className="md:w-1/2 w-full">
        <img
          src={LoginPNG}
          alt="loginImg"
          className="rounded-2xl w-full"
        />
      </div>
      <div className="md:w-1/2 w-full">
        <img
          src={LogoSVG}
          alt="logoImg"
          className="md:max-w-[285px] max-w-[180px] mx-auto min-h-[29px] mb-9 md:mb-14"
        />
        <h2 className="lg:text-[30px] md:text-[30px] text-[25px] md:leading-7 sm:leading-6  font-bold mb-3.5 text-center">
          Login to Host Switch
        </h2>
        <LoginForm />
        <div className="text-sm text-center font-medium leading-6 text-[#777777]">
          <p>
            Don't have an account?
            <span
              className="font-bold cursor-pointer text-[#252525]"
              onClick={handleClick}
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
