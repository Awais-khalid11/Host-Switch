import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/Routes";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(ROUTES.PASSWORD);
  };
  return (
    <div>
      <form className="space-y-5 ">
        <InputField
          label="Email Address"
          id="email"
          name="email"
          type="email"
          fieldName="w-full"
          placeholder="Enter your email address"
          InputClass="h-[56px]"
          asterisk={true}
        />
        <InputField
          label="Password"
          id="password"
          name="password"
          type="password"
          fieldName="w-full"
          InputClass="h-[56px]"
          placeholder="*************"
          asterisk={true}
        />
        <div className="text-[14px] font-medium text-right my-3 mb-5 cursor-pointer">
          <a href="#" onClick={handleClick}>
            Forget Password?
          </a>
        </div>
        <Link
          to="/pm"
          className="bg-[#4D72FF] text-white font-semibold rounded-[8px] w-full h-[55px] flex justify-center items-center mb-5"
        >
          Login
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
