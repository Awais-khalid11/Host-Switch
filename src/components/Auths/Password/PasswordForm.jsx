import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/Routes";

const PasswordForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <form >
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
        <Button
          variant="graybtn"
          className="mb-5 w-[30%]"
           onClick={()=>navigate(ROUTES.LOGIN)}
        >
         Back
        </Button>
        <Link 
          variant="defaultBtn"
          className="mb-5 w-full md:py-[16px] rounded-[8px] hover:none"
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
