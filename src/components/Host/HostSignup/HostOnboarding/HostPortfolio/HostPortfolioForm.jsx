import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostScopeBox from "./HostScopeBox";
import HostSmartHome from "./HostSmartHome";
import { ROUTES } from "../../../../../constants/Routes";
import InputField from "../../../../InputField/InputField";
import SelectField from "../../../../SelectField/SelectField";
import TextArea from "../../../../TextArea/TextArea";
import RadioField from "../../../../Auths/RadioField/RadioField";
import Button from "../../../../Button/Button";
import { MdAddLocation } from "react-icons/md";
import CheckBox from "../../../../CheckBox/CheckBox";

const HostPortfolioForm = ({ onNext }) => {
  const navigate = useNavigate();
  const [property, setProperty] = useState("");
  const [accountManager, setAccountManager] = useState("");
  const [willing, setWilling] = useState("");
  const [choose, setChoose] = useState("");
    const [condition, setCondition] = useState(false);
  

  const Property = [
    {
      label: "How Often Is Your Property Rented Out?",
      value: "How Often Is Your Property Rented Out?",
    },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];
  const Distance = [
    { label: "Select Property type", value: "Select Property type" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];
  const Handle = [
    { label: "Select an option", value: "Select an option" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];
  const Choose = [
    { label: "Select Property type", value: "Select Property type" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];
  const PMS = [
    { label: "Select or type...", value: "Select or type..." },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];
  const TOOL = [
    { label: "Select or type...", value: "Select or type..." },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    navigate(ROUTES.HOSTEXPECTATIONS);
  };
  return (
    <div>
      {/* <form> */}
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
        <InputField
          label="Property Address*"
          id="address"
          name="address"
          type="text"
          fieldName="md:w-1/2 w-full"
          placeholder="Type and select location..."
          icon={MdAddLocation}
          asterisk="true"
        />
        <InputField
          label="Unit/Apt # (if applicable)"
          id="unit"
          name="unit"
          type="text"
          fieldName="md:w-1/2 w-full"
          placeholder="Unit/Apt #"
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
        <SelectField
          label="How Often Is Your Property Rented Out?"
          name="role"
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          options={Property}
          selectClass="mb-7  w-full"
        />
        <InputField
          label="Airbnb/Vrbo Link"
          id="url"
          name="url"
          type="text"
          fieldName="w-full"
          placeholder="Airbnb/Vrbo listing link"
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
        <SelectField
          label="Exclusive or Non-Exclusive Agreements?"
          name="role"
          value={willing}
          onChange={(e) => setWilling(e.target.value)}
          options={Distance}
          selectClass="mb-7 w-full"
        />
        <SelectField
          label="Co-hosting or Full-Service?"
          name="role"
          value={choose}
          onChange={(e) => setChoose(e.target.value)}
          options={Choose}
          selectClass="mb-7 w-full"
        />
      </div>
      <HostScopeBox />
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
        <h3 className="text-sm font-bold">
          Do You Currently Have a Property Manager?
        </h3>
        <div className="flex items-center gap-5">
          <RadioField
            id="accountYes"
            name="accountManager"
            value="yes"
            label="Yes"
            checked={accountManager === "yes"}
            onChange={(e) => setAccountManager(e.target.value)}
          />
          <RadioField
            id="accountNo"
            name="accountManager"
            value="no"
            label="No"
            checked={accountManager === "no"}
            onChange={(e) => setAccountManager(e.target.value)}
          />
        </div>
      </div>
     
      <TextArea
        type="text"
        placeholder={"Enter message..."}
        label={"Anything else you'd like us to know?"}
      />
      <div className="mb-5">
        <CheckBox
          name="terms"
          id="terms"
          label="I agree to the Terms & Conditions"
          checked={condition}
          onChange={(e) => setCondition(e.target.checked)}
        />
      </div>
      <div className="flex gap-4">
        <Button
          variant="graybtn"
          className="mb-5 w-[30%]"
          onClick={() => navigate(ROUTES.HOSTCOMPANYINFO)}
        >
          Back
        </Button>
        <Button
          variant="defaultBtn"
          className="mb-5 md:w-[70%] w-full md:py-[16px] rounded-[8px] bg-[#4D72FF]"
          onClick={handleClick}
        >
          Next
        </Button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default HostPortfolioForm;
