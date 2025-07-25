import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/Routes";

const PasswordForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <InputField
          label="Email Address"
          id="email"
          name="email"
          type="email"
          fieldName="w-full"
          placeholder="Enter your email address"
          InputClass="h-[56px]"
        />
        <div className="flex justify-center gap-4">
          <Link
            className="mb-5 w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
            to={ROUTES.LOGIN}
          >
            Back
          </Link>
          <Link
            className="mb-5 md:w-[70%] w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#4D72FF]"
            to={ROUTES.OTP}
          >
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;
