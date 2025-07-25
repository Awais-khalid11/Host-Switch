import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../constants/Routes";
import CheckBox from "../../../../CheckBox/CheckBox";
import RadioField from "../../../../Auths/RadioField/RadioField";
import InputField from "../../../../InputField/InputField";
import SelectField from "../../../../SelectField/SelectField";
import Button from "../../../../Button/Button";
import MultiCheckboxDropdown from "../../../../Auths/Onboarding/Portfolio/MultiCheckboxDropdown";

const HostCompanyInfoForm = () => {
  const navigate = useNavigate();

  const [entity, setEntity] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [cleaningHandledBy, setCleaningHandledBy] = useState([]);


  return (
    <div>
      <form className="md:px-0 px-2.5">
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

        {/* <SelectField
        label="Number of Properties Seeking Management"
        name="entityType"
        value={entity}
        onChange={(e) => setEntity(e.target.value)}
        options={Entity}
        selectClass="mb-7 w-full"
      /> */}

        <MultiCheckboxDropdown
          label="Number of Properties Seeking Management"
          options={["Single Property", "Multiple Properties/ Portfolio"]}
          placeholder="Select"
          selectedValues={cleaningHandledBy}
          setSelectedValues={setCleaningHandledBy}
          className="mb-5"
          dropdownKey="clean"
          isOpen={openDropdown === "clean"}
          setOpenDropdown={setOpenDropdown}
          isMulti={true}
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
        <div className="flex md:gap-4 gap-2">
          <Link
            variant="graybtn"
            className="mb-5 w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
            to={ROUTES.ROLESELECTION}
          >
            Back
          </Link>
          <Link
            className="mb-5 md:w-[70%] w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#4D72FF]"
            to={ROUTES.HOSTPORTFOLIO}
          >
            Save & Continue
          </Link>
        </div>
      </form>
    </div>
  );
};

export default HostCompanyInfoForm;
