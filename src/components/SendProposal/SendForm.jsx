import React, {useState} from "react";
import InputField from "../InputField/InputField";
import SelectField from "../SelectField/SelectField";
import FileUpload from "../UploadFile/UploadFile";
import SendCheckbox from "./SendCheckbox";

const SendForm = () => {
  const [date, setDate] = useState("");
  const [setup, setSetup] = useState("");

  const roleOptions = [
    { label: "Select an option", value: "Select an option" },
    { label: "Entity1", value: "Entity1" },
    { label: "1 Months", value: "1 Months" },
  ];
  const SETUP = [
    { label: "Select an option", value: "Select an option" },
    { label: "Entity1", value: "Entity1" },
    { label: "1 Months", value: "1 Months" },
  ];
  return (
    <div>
      <form>
        <div className="flex md:flex-nowrap flex-wrap md:gap-2.5">
          <InputField
            label="Projected 1-Year Median Revenue Expectation"
            id="num"
            name="num"
            type="number"
            fieldName="w-full"
            placeholder="Enter number"
            InputClass="h-[51px]"
          />
          <InputField
            label="Commission %"
            id="num"
            name="num"
            type="number"
            fieldName="w-full"
            placeholder="Enter number & percentage value"
            InputClass="h-[51px]"
          />
        </div>
        <div className="flex md:flex-nowrap flex-wrap gap-2.5">
          <SelectField
            label="Agreement Type"
            name="yearFounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            options={roleOptions}
            selectClass="md:w-1/2 w-full mb-5"
          />
          <InputField
            label="Start Date Availability"
            id="date"
            name="date"
            type="date"
            fieldName="md:w-1/2 w-full"
            placeholder="MM/YY"
            InputClass="h-[51px]"
          />
        </div>
        <div className="flex md:flex-nowrap flex-wrap gap-2.5">
          <SelectField
            label="Setup/Onboarding Fee"
            name="setup"
            value={setup}
            onChange={(e) => setSetup(e.target.value)}
            options={SETUP}
            selectClass="md:w-1/2 w-full mb-5"
          />
          <InputField
            label="Message to Host"
            id="text"
            name="text"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="“Hi Sara, please find attached my proposal...”"
            InputClass="h-[51px]"
          />
        </div>
        <FileUpload label="Upload Introduction Video" />
        <SendCheckbox />
        <FileUpload label="Upload Client Property Proposal" />
        <FileUpload label="Upload sample management contract (PDF)" />
      </form>
    </div>
  );
};

export default SendForm;
