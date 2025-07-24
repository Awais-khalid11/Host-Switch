import React, { useState } from "react";
import Button from "../../../Button/Button";
import InputField from "../../../InputField/InputField";
import SelectField from "../../../SelectField/SelectField";
import RadioField from "../../RadioField/RadioField";
import CheckBox from "../../../CheckBox/CheckBox";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/Routes";
import { MarkSVG } from "../../../../Constants/Icons";

const CompanyInfoForm = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [entity, setEntity] = useState("");
  const [involve, setInvolve] = useState("");
  const [willing, setWilling] = useState("");
  const [agreed, setAgreed] = useState(false);

  // Separate states for each radio group
  const [isLocal, setIsLocal] = useState("");
  const [isFullTime, setIsFullTime] = useState("");
  const [isLicensed, setIsLicensed] = useState("");
  const [doesPermit, setDoesPermit] = useState("");

  const roleOptions = [
    { label: "Select", value: "Select" },
    { label: "Entity1", value: "Entity1" },
    { label: "1 Months", value: "1 Months" },
  ];

  const Entity = [
    { label: "Select", value: "Select" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  const Involvement = [
    { label: "Select", value: "Select" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  const Distance = [
    { label: "Select", value: "Select" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    navigate(ROUTES.PORTFOLIO);
  };

  return (
    <div>
      <form>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <InputField
            label="Legal Business Name"
            id="businessName"
            name="businessName"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="Enter business name"
          />
          <InputField
            label="DBA / Operating Name"
            id="operatingName"
            name="operatingName"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="Enter operating name"
          />
        </div>

        <InputField
          label="Business Address"
          id="address"
          name="address"
          type="text"
          fieldName="w-full"
          placeholder="Enter address"
        />

        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <InputField
            label="Primary Contact Name"
            id="contactName"
            name="contactName"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="Enter name"
          />
          <InputField
            label="Primary Contact Phone"
            id="contactPhone"
            name="contactPhone"
            type="tel"
            fieldName="md:w-1/2 w-full"
            placeholder="XX-XXX-XXXX"
          />
        </div>

        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <InputField
            label="Primary Contact Email"
            id="contactEmail"
            name="contactEmail"
            type="email"
            fieldName="md:w-1/2 w-full"
            placeholder="Enter email"
          />
          <SelectField
            label="Year Founded"
            name="yearFounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            options={roleOptions}
            selectClass="mb-7 md:w-1/2 w-full"
          />
        </div>

        <SelectField
          label="Business Entity Type"
          name="entityType"
          value={entity}
          onChange={(e) => setEntity(e.target.value)}
          options={Entity}
          selectClass="mb-7 w-full"
        />

        {/* Locally Based */}
        <div className="flex md:flex-nowrap flex-wrap items-center gap-2.5 md:gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Are you locally based in the market(s) you serve?
          </h3>
          <RadioField
            id="localYes"
            name="isLocal"
            value="yes"
            label="Yes"
            checked={isLocal === "yes"}
            onChange={(e) => setIsLocal(e.target.value)}
          />
          <RadioField
            id="localNo"
            name="isLocal"
            value="no"
            label="No"
            checked={isLocal === "no"}
            onChange={(e) => setIsLocal(e.target.value)}
          />
        </div>

        {/* Full-time */}
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Is this your full-time business?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              id="fullYes"
              name="isFullTime"
              value="yes"
              label="Yes"
              checked={isFullTime === "yes"}
              onChange={(e) => setIsFullTime(e.target.value)}
            />
            <RadioField
              id="fullNo"
              name="isFullTime"
              value="no"
              label="No"
              checked={isFullTime === "no"}
              onChange={(e) => setIsFullTime(e.target.value)}
            />
          </div>
        </div>

        <SelectField
          label="Owner involvement"
          name="involvement"
          value={involve}
          onChange={(e) => setInvolve(e.target.value)}
          options={Involvement}
          selectClass="mb-7 w-full"
        />

        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <InputField
            label="Primary Market(s)"
            id="markets"
            name="markets"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="Enter zip code"
          />
          <InputField
            label="Specific Neighborhoods or Zones Served"
            id="zones"
            name="zones"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="Type here..."
          />
        </div>
        <div className="text-[10px] flex items-center gap-1 font-normal text-[#323232] -mt-5 mb-4">
          <img src={MarkSVG} alt="" />
          Separate all zip codes by a commas.
        </div>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <InputField
            label="Secondary Market(s)"
            id="zip"
            name="zip"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="Enter all zip codes in your service area"
          />
          <InputField
            label="Specific Neighborhoods or Zones Served"
            id="Specific"
            name="Specific"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="Type here..."
          />
        </div>
        <div className="text-[10px] flex items-center gap-1 font-normal text-[#323232] -mt-5 mb-4">
          <img src={MarkSVG} alt="" />
          Separate all zip codes by a commas.
        </div>
        <SelectField
          label="Maximum Distance Willing to Service (miles)"
          name="distance"
          value={willing}
          onChange={(e) => setWilling(e.target.value)}
          options={Distance}
          selectClass="mb-7 w-full"
        />

        {/* Licensed */}
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Are you licensed to operate in all markets?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              id="licensedYes"
              name="isLicensed"
              value="yes"
              label="Yes"
              checked={isLicensed === "yes"}
              onChange={(e) => setIsLicensed(e.target.value)}
            />
            <RadioField
              id="licensedNo"
              name="isLicensed"
              value="no"
              label="No"
              checked={isLicensed === "no"}
              onChange={(e) => setIsLicensed(e.target.value)}
            />
          </div>
        </div>

        {/* Permitting */}
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Do you handle permitting for new clients?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              id="permitYes"
              name="doesPermit"
              value="yes"
              label="Yes"
              checked={doesPermit === "yes"}
              onChange={(e) => setDoesPermit(e.target.value)}
            />
            <RadioField
              id="permitNo"
              name="doesPermit"
              value="no"
              label="No"
              checked={doesPermit === "no"}
              onChange={(e) => setDoesPermit(e.target.value)}
            />
          </div>
        </div>

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
            className="mb-5 md:w-[70%] w-full md:py-[16px] rounded-[8px] bg-[#0050B3]"
            onClick={handleClick}
          >
            Save & Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfoForm;
