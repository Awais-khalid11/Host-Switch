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
import MultiCheckboxDropdown from "../../../../Auths/Onboarding/Portfolio/MultiCheckboxDropdown";

const HostPortfolioForm = ({ onNext }) => {
  const navigate = useNavigate();
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [hostingTypes, setHostingTypes] = useState([]);
  const [cleanTypes, setCleanTypes] = useState([]);
  const [rentTypes, setRentTypes] = useState([]);

  const [property, setProperty] = useState("");
  const [accountManager, setAccountManager] = useState("");
  const [willing, setWilling] = useState("");
  const [choose, setChoose] = useState("");
  const [condition, setCondition] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(ROUTES.HOSTEXPECTATIONS);
  };
  return (
    <div>
      <form>
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
        <MultiCheckboxDropdown
          label="How Often Is Your Property Rented Out?"
          options={["Full-time", "seasonal", "Ocassionally"]}
          selectedValues={rentTypes}
          setSelectedValues={setRentTypes}
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
      <div>
        <MultiCheckboxDropdown
          label="Type of Property"
          options={[
            "Condo",
            "Multi-Family/Fuplex",
            "Luxary Home",
            "Tiny Home",
            "Single Family Home",
            "Beachfront/Waterfront",
            "Other",
          ]}
          selectedValues={propertyTypes}
          setSelectedValues={setPropertyTypes}
          className="mb-5"
        />
        <MultiCheckboxDropdown
          label="Do you have a preference in size of your PM (Property Manager)?"
          options={[
            "20 properties or less",
            "100 properties or less",
            "Size doesn't matter",
          ]}
          selectedValues={hostingTypes}
          setSelectedValues={setHostingTypes}
          className="mb-5"
        />
        <MultiCheckboxDropdown
          label="Do you have a cleaning preference?"
          options={[
            "In-house cleaners",
            "3rd party cleaners",
            "Doesn't matter to me",
          ]}
          selectedValues={cleanTypes}
          setSelectedValues={setCleanTypes}
          className="mb-5"
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
          checked={condition}
          onChange={(e) => setCondition(e.target.checked)}
          label={
            <>
              I agree to the
              <span className="text-[#0050B3] ml-1">Terms & Conditions</span>
            </>
          }
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
      </form>
    </div>
  );
};

export default HostPortfolioForm;
