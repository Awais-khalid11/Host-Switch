import React from "react";
import NewPasswordForm from "./NewPasswordForm";
import { NewpasswordPNG } from "../../../constants/Imgs";
import { LogoSVG } from "../../../constants/Icons";

const NewPassword = () => {
  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-center md:p-5 md:!pr-10 gap-[30px] p-2.5">
      <div className="md:w-1/2 hidden md:block w-full">
        <img
          src={NewpasswordPNG}
          alt="loginImg"
          className="rounded-2xl w-full"
        />
      </div>
      <div className="md:w-1/2 w-full">
        <img
          src={LogoSVG}
          alt="logoImg"
          className="md:max-w-[285px] max-w-[180px] mx-auto min-h-[29px] mb-5 md:mb-14"
        />
        <h2 className="lg:text-[32px] md:text-[30px] text-[28px] font-bold  mb-8 text-center">
          Create your New Password
        </h2>
        <NewPasswordForm />
      </div>
    </div>
  );
};

export default NewPassword;
