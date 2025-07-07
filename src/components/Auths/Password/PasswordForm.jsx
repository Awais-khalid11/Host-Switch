import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";

const PasswordForm = () => {
  return (
    <div>
      <InputField
        label="Email Address"
        id="email"
        name="email"
        type="email"
        fieldName="w-full"
        placeholder="Enter your email address"
      />
      <div className="flex gap-4">
        <Button
          variant="graybtn"
          className="mb-5 w-[30%]"
        >
         Back
        </Button>
        <Button
          variant="defaultBtn"
          className="mb-5 w-[70%] md:py-[16px] rounded-[8px] hover:none"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default PasswordForm;
