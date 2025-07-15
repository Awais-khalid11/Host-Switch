import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/password");
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
        <div className="text-[14px] font-medium text-right my-3 cursor-pointer">
          <a href="#" onClick={handleClick}>
            <i>Forget Password?</i>
          </a>
        </div>
        <Button
          variant="defaultBtn"
          className="mb-5 w-full md:py-[16px] rounded-[8px] hover:none"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
