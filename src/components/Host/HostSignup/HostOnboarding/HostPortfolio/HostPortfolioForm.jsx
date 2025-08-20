import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HostScopeBox from "./HostScopeBox";
import { ROUTES } from "../../../../../constants/Routes";
import InputField from "../../../../InputField/InputField";
import TextArea from "../../../../TextArea/TextArea";
import RadioField from "../../../../Auths/RadioField/RadioField";
import { MdAddLocation } from "react-icons/md";
import CheckBox from "../../../../CheckBox/CheckBox";
import MultiCheckboxDropdown from "../../../../Auths/Onboarding/Portfolio/MultiCheckboxDropdown";
import useHostForm from "../../../../../store/useHostForm";

const HostPortfolioForm = () => {
  const navigate = useNavigate();

  const { updatePortfolio } = useHostForm();

  const [propertyTypes, setPropertyTypes] = useState([]);
  const [hostingTypes, setHostingTypes] = useState([]);
  const [cleanTypes, setCleanTypes] = useState([]);
  const [rentTypes, setRentTypes] = useState([]);
  const [accountManager, setAccountManager] = useState("");
  const [condition, setCondition] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();

    if (!condition) {
      alert("Please accept Terms & Conditions before proceeding.");
      return;
    }

    const payload = {
      address,
      unit_apt: unit,
      link: url,
      rented_out: rentTypes[0],
      type: propertyTypes,
      hostingTypes,
      cleanTypes,
      accountManager,
      message,
      split_percentage: 100,
    };

    updatePortfolio(payload); // Save to Zustand
    navigate(ROUTES.HOSTEXPECTATIONS); // Go next
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        {/* Address & Unit */}
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <InputField
            label="Property Address"
            id="address"
            name="address"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="Type and select location..."
            icon={MdAddLocation}
            asterisk="true"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <InputField
            label="Unit/Apt # (if applicable)"
            id="unit"
            name="unit"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="Unit/Apt #"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </div>

        {/* Rent & Link */}
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <MultiCheckboxDropdown
            label="How Often Is Your Property Rented Out?"
            placeholder="How Often Is Your Property Rented Out?"
            options={["Full-time", "Seasonal", "Occasionally"]}
            selectedValues={rentTypes}
            setSelectedValues={setRentTypes}
            dropdownKey="rent"
            isOpen={openDropdown === "rent"}
            setOpenDropdown={setOpenDropdown}
            isMulti={false}
            className="mb-8"
          />
          <InputField
            label="Airbnb/Vrbo Link"
            id="url"
            name="url"
            type="text"
            fieldName="w-full"
            placeholder="Airbnb/Vrbo listing link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        {/* Property / Hosting / Cleaning */}
        <div>
          <MultiCheckboxDropdown
            label="Type of Property"
            options={[
              "Condo",
              "Multi-Family/Duplex",
              "Luxury Home",
              "Tiny Home",
              "Single Family Home",
              "Beachfront/Waterfront",
              "Other",
            ]}
            placeholder="Select Property type"
            selectedValues={propertyTypes}
            setSelectedValues={setPropertyTypes}
            dropdownKey="region"
            isOpen={openDropdown === "region"}
            setOpenDropdown={setOpenDropdown}
            isMulti={false}
            className="mb-5"
          />

          <MultiCheckboxDropdown
            label="Do you have a preference in size of your PM (Property Manager)?"
            options={[
              "20 properties or less",
              "100 properties or less",
              "Size doesn't matter",
            ]}
            placeholder="Select PM size preference"
            selectedValues={hostingTypes}
            setSelectedValues={setHostingTypes}
            dropdownKey="hosting"
            isOpen={openDropdown === "hosting"}
            setOpenDropdown={setOpenDropdown}
            isMulti={true}
            className="mb-5"
          />

          <MultiCheckboxDropdown
            label="Do you have a cleaning preference?"
            options={[
              "In-house cleaners",
              "3rd party cleaners",
              "Doesn't matter to me",
            ]}
            placeholder="Select cleaning preference"
            selectedValues={cleanTypes}
            setSelectedValues={setCleanTypes}
            dropdownKey="clean"
            isOpen={openDropdown === "clean"}
            setOpenDropdown={setOpenDropdown}
            isMulti={true}
            className="mb-5"
          />
        </div>

        {/* Scope Box */}
        <HostScopeBox />

        {/* Account Manager */}
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

        {/* Extra message */}
        <TextArea
          type="text"
          placeholder="Enter message..."
          label="Anything else you'd like us to know?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Terms */}
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

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            className="mb-5 w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
            to={ROUTES.HOSTCOMPANYINFO}
          >
            Back
          </Link>
          <button
            loading={isLoading}
            type="submit"
            className="mb-5 md:w-[70%] w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#4D72FF]"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default HostPortfolioForm;
