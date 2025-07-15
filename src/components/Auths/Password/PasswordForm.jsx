import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const PasswordForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <InputField
        label="Email Address"
        id="email"
        name="email"
        type="email"
        fieldName="w-full"
        placeholder="Enter your email address"
         InputClass="h-[56px]"
      />
      <div className="flex gap-4">
        <Button
          variant="graybtn"
          className="mb-5 w-[30%]"
           onClick={()=>navigate("/login")}
        >
         Back
        </Button>
        <Button
          variant="defaultBtn"
          className="mb-5 w-[70%] md:py-[16px] rounded-[8px] hover:none"
          onClick={()=>navigate("/newpassword")}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default PasswordForm;
