import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../constants/Routes";
import CheckBox from "../../../../CheckBox/CheckBox";
import RadioField from "../../../../Auths/RadioField/RadioField";
import InputField from "../../../../InputField/InputField";
import SelectField from "../../../../SelectField/SelectField";
import Button from "../../../../Button/Button";

const HostCompanyInfoForm = () => {
  const navigate = useNavigate();

  const [entity, setEntity] = useState("");
  const [agreed, setAgreed] = useState(false);

;

  const Entity = [
    { label: "Select", value: "Select" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];


  const handleClick = (e) => {
    e.preventDefault();
    navigate(ROUTES.HOSTPORTFOLIO);
  };

  return (
    <div>
      <form>
      <div>
        <InputField
          label="Full Name"
          id="Name"
          name="Name"
          type="text"
          fieldName="w-full"
          placeholder="Enter your full name"
          asterisk="true"
        />
      </div>

      <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
        <InputField
          label="Email Address"
          id="address"
          name="address"
          type="text"
          fieldName="md:w-1/2 w-full"
          placeholder="Enter your email address"
          asterisk="true"
        />
        <InputField
          label="Phone Number"
          id="contactPhone"
          name="contactPhone"
          type="tel"
          fieldName="md:w-1/2 w-full"
          placeholder="XX-XXX-XXXX"
          asterisk="true"
        />
      </div>

      <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
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
         <InputField
          label="Confirm Password"
          id="password"
          name="password"
          type="password"
          fieldName="w-full"
          InputClass="h-[56px]"
          placeholder="*************"
          asterisk={true}
        />
      </div>

      <SelectField
        label="Number of Properties Seeking Management"
        name="entityType"
        value={entity}
        onChange={(e) => setEntity(e.target.value)}
        options={Entity}
        selectClass="mb-7 w-full"
      />

      {/* Checkbox */}
      <div className="mb-5">
        <CheckBox
          name="terms"
          id="terms"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          label={
            <>
              I agree to the
              <span className="text-[#0050B3] ml-1">Terms & Conditions</span>
            </>
          }
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button
          variant="graybtn"
          className="mb-5 w-[30%]"
          onClick={() => navigate(ROUTES.LOGIN)}
        >
          Back
        </Button>
        <Button
          variant="defaultBtn"
          className="mb-5 md:w-[70%] w-full md:py-[16px] rounded-[8px] bg-[#4D72FF]"
          onClick={handleClick}
        >
          Save & Continue
        </Button>
      </div>
      </form>
    </div>
  );
};

export default HostCompanyInfoForm;
