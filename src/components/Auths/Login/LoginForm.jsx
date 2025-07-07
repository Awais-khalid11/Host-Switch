import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";

const LoginForm = () => {
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
          asterisk={true}
        />
        <InputField
          label="Password"
          id="password"
          name="password"
          type="password"
          fieldName="w-full"
        //   className="mb-2"
          placeholder="*************"
          asterisk={true}
        />
        <div className="text-[14px] font-medium text-right -mt-5 cursor-pointer">
          <a href="#">Forget Password?</a>
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
