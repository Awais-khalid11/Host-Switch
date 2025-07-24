import React, { useState } from "react";
import Button from "../../../Button/Button";
import { useNavigate } from "react-router-dom";
import InputField from "../../../InputField/InputField";
import SelectField from "../../../SelectField/SelectField";
import FileUpload from "../../../UploadFile/UploadFile";
import TextArea from "../../../TextArea/TextArea";
import RadioField from "../../RadioField/RadioField";
import { ROUTES } from "../../../../constants/Routes";
import MultiCheckboxDropdown from "../Portfolio/MultiCheckboxDropdown";

const ExpectationForm = () => {
  const navigate = useNavigate();
  const [willing, setWilling] = useState("");
  const [tool, setTool] = useState("");
  const [ticket, setTicket] = useState("");
  const [onboardingFees, setOnboardingFees] = useState("");
  const [restockingCharges, setRestockingCharges] = useState("");
  const [markupMaintenance, setMarkupMaintenance] = useState("");
  const [financialProjection, setFinancialProjection] = useState("");
  const [cleaningHandledBy, setCleaningHandledBy] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);


  const Property = [
    { label: "Select an option", value: "Select an option" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  const TOOL = [
    { label: "Select an option", value: "Select an option" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    navigate(ROUTES.SUBMITTING);
  };

  return (
    <div>
      <form>
        <InputField
          label="Average Review Rating (Airbnb/Vrbo)"
          id="num"
          name="num"
          type="number"
          fieldName="w-full"
          placeholder="Enter number"
        />
        <InputField
          label="Number of Listings Under Your Profile"
          id="num"
          name="num"
          type="number"
          fieldName="w-full"
          placeholder="Enter number"
        />
        <InputField
          label="Superhost / Premier Host?"
          id="text"
          name="text"
          type="text"
          fieldName="w-full"
          placeholder="Enter Host"
        />
        <InputField
          label="% of Direct Channel Bookings"
          id="num"
          name="num"
          type="number"
          fieldName="w-full"
          placeholder="Enter percentage value"
        />
        <InputField
          label="Cancellations (last 6 months)"
          id="num"
          name="num"
          type="number"
          fieldName="w-full"
          placeholder="Enter number"
        />
        <InputField
          label="Occupancy Rate (avg past 12 months)"
          id="num"
          name="num"
          type="number"
          fieldName="w-full"
          placeholder="Enter percentage %"
        />
        <InputField
          label="Owner Retention Rate (%)"
          id="num"
          name="num"
          type="number"
          fieldName="w-full"
          placeholder="Enter percentage %"
        />
        <FileUpload label="Upload Sample Mgmt Contract" />
        <SelectField
          label="Contract Length"
          name="tool"
          value={tool}
          onChange={(e) => setTool(e.target.value)}
          options={TOOL}
          selectClass="mb-7 w-full"
          className="font-bold"
        />
        <MultiCheckboxDropdown
          label="Contract Length"
          options={["Month-to-month", "6 month", "1 year"]}
          placeholder="Select an option Or Type"
          selectedValues={cleaningHandledBy}
          setSelectedValues={setCleaningHandledBy}
          className="mb-5"
          dropdownKey="clean"
          isOpen={openDropdown === "clean"}
          setOpenDropdown={setOpenDropdown}
          isMulti={true}
        />
        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"Termination Terms"}
        />
        <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-2.5 mb-5">
          <h3 className="text-sm font-bold">
            Require Furniture/Décor Upgrade?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              id="ticketYes"
              name="ticket"
              value="yes"
              label="Yes"
              checked={ticket === "yes"}
              onChange={(e) => setTicket(e.target.value)}
            />
            <RadioField
              id="ticketNo"
              name="ticket"
              value="no"
              label="No"
              checked={ticket === "no"}
              onChange={(e) => setTicket(e.target.value)}
            />
          </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap md:gap-5 ">
          <FileUpload label="Upload Logo" />
          <FileUpload label="Upload Welcome Video" />
        </div>
        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"What makes your company stand out?"}
        />
        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"What kind of properties/owners are NOT a fit?"}
        />
        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"What does your ideal owner care about?"}
        />
        <div>
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3">
              Willing to offer discounts to acquire listings?
            </h3>
            <div className="flex items-center gap-10">
              <RadioField
                id="onboardingYes"
                name="onboardingFees"
                value="yes"
                label="Yes"
                checked={onboardingFees === "yes"}
                onChange={(e) => setOnboardingFees(e.target.value)}
              />
              <RadioField
                id="onboardingNo"
                name="onboardingFees"
                value="no"
                label="No "
                checked={onboardingFees === "no"}
                onChange={(e) => setOnboardingFees(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3">
              Accept out-of-state / absentee owners?
            </h3>
            <div className="flex items-center gap-10">
              <RadioField
                id="restockingYes"
                name="restockingCharges"
                value="yes"
                label="Yes"
                checked={restockingCharges === "yes"}
                onChange={(e) => setRestockingCharges(e.target.value)}
              />
              <RadioField
                id="restockingNo"
                name="restockingCharges"
                value="no"
                label="No "
                checked={restockingCharges === "no"}
                onChange={(e) => setRestockingCharges(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3">
              Manage not-yet-ready STRs?
            </h3>
            <div className="flex items-center gap-10">
              <RadioField
                id="markupYes"
                name="markupMaintenance"
                value="yes"
                label="Yes"
                checked={markupMaintenance === "yes"}
                onChange={(e) => setMarkupMaintenance(e.target.value)}
              />
              <RadioField
                id="markupNo"
                name="markupMaintenance"
                value="no"
                label="No "
                checked={markupMaintenance === "no"}
                onChange={(e) => setMarkupMaintenance(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3">
              Offer property improvement or upgrade services?
            </h3>
            <div className="flex items-center gap-10">
              <RadioField
                id="projectionYes"
                name="financialProjection"
                value="yes"
                label="Yes"
                checked={financialProjection === "yes"}
                onChange={(e) => setFinancialProjection(e.target.value)}
              />
              <RadioField
                id="projectionNo"
                name="financialProjection"
                value="no"
                label="No "
                checked={financialProjection === "no"}
                onChange={(e) => setFinancialProjection(e.target.value)}
              />
            </div>
          </div>
        </div>
        <InputField
          label="Social Media Links"
          id="url"
          name="url"
          type="text"
          fieldName="w-full"
          placeholder="Enter URL here.. "
        />
        <InputField
          label="Yelp / Google Reviews Link"
          id="Yelp"
          name="Yelp"
          type="text"
          fieldName="w-full"
          placeholder="Enter URL here.. "
        />
        <InputField
          label="Team Size"
          id="num"
          name="num"
          type="number"
          fieldName="w-full"
          placeholder="Enter number"
        />
        <TextArea
          type="text"
          placeholder={"Enter message"}
          label={"Any Service Level Guarantees?"}
        />
        <FileUpload label="Upload Sample Owner Statement / Reviews" />
        <div className="flex gap-4">
          <Button
            variant="graybtn"
            className="mb-5 w-[30%]"
            onClick={() => navigate(ROUTES.PORTFOLIO)}
          >
            Back
          </Button>
          <Button
            variant="defaultBtn"
            className="mb-5 md:w-[70%] w-full md:py-[16px] rounded-[8px] bg-[#0050B3]"
            onClick={handleClick}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ExpectationForm;
