import React, { useState } from "react";
import Button from "../../../Button/Button";
import InputField from "../../../InputField/InputField";
import CheckBox from "../../../CheckBox/CheckBox";
import { useNavigate } from "react-router-dom";
import TextArea from "../../../TextArea/TextArea";
import SelectField from "../../../SelectField/SelectField";
import ScopeBox from "./ScopeBox";
import RadioField from "../../RadioField/RadioField";
import SmartHome from "./SmartHome";
import { ROUTES } from "../../../../constants/Routes";
import MultiCheckboxDropdown from "./MultiCheckboxDropdown";

const PortfolioForm = ({ onNext }) => {
  const navigate = useNavigate();
  const [property, setProperty] = useState("");
  const [accountManager, setAccountManager] = useState("");
  const [linens, setLinens] = useState("");
  const [smartLock, setSmartLock] = useState("");
  const [onboardingFees, setOnboardingFees] = useState("");
  const [restockingCharges, setRestockingCharges] = useState("");
  const [markupMaintenance, setMarkupMaintenance] = useState("");
  const [financialProjection, setFinancialProjection] = useState("");
  const [ownerPortal, setOwnerPortal] = useState("");
  const [selected, setSelected] = useState("");
  const [willing, setWilling] = useState("");
  const [choose, setChoose] = useState("");
  const [handle, setHandle] = useState("");
  const [pms, setPms] = useState("");
  const [tool, setTool] = useState("");
  const [ticket, setTicket] = useState("");

  const [propertyTypes, setPropertyTypes] = useState([]);
  const [agreementTypes, setAgreementTypes] = useState([]);
  const [cohostOptions, setCohostOptions] = useState([]);
  const [cleaningHandledBy, setCleaningHandledBy] = useState([]);
  const [pmsTools, setPmsTools] = useState([]);
  const [pricingTools, setPricingTools] = useState([]);
  const [guest, setGuest] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(ROUTES.EXPECTATIONS);
  };
  return (
    <div>
      <form>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <InputField
            label="Number of Active STR Properties Managed"
            id="num"
            name="num"
            type="number"
            fieldName="md:w-1/2 w-full"
            placeholder="Enter number"
          />
          <InputField
            label="Max Properties You Can Onboard (30 Days)"
            id="no"
            name="no"
            type="number"
            fieldName="md:w-1/2 w-full"
            placeholder="Enter number"
          />
        </div>
        <InputField
          label="Company Website"
          id="url"
          name="url"
          type="text"
          fieldName="w-full"
          placeholder="Enter url.."
        />
        <MultiCheckboxDropdown
          label="Property Types Managed"
          placeholder="Select Property type"
          options={[
            "Single-Family Home",
            "Condominium",
            "Apartment",
            "Luxury Property / Villa",
            "Entire Property",
            "Vacation Rental",
          ]}
          selectedValues={propertyTypes}
          setSelectedValues={setPropertyTypes}
          customGrid={true}
          className="mb-5"
          dropdownKey="rent"
          isOpen={openDropdown === "rent"}
          setOpenDropdown={setOpenDropdown}
          isMulti={true}
        />
        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"Minimum Property Requirements"}
        />
        <MultiCheckboxDropdown
          label="Exclusive or Non-Exclusive Agreements?"
          placeholder="Select an option"
          options={["Exclusive", "Non-Exclusive"]}
          selectedValues={agreementTypes}
          setSelectedValues={setAgreementTypes}
          customGrid={true}
          className="mb-5"
          dropdownKey="exc"
          isOpen={openDropdown === "exc"}
          setOpenDropdown={setOpenDropdown}
          isMulti={true}
        />

        <MultiCheckboxDropdown
          label="Co-hosting or Full-Service?"
          options={["Co-Host for Owners", "Only Full-Services"]}
          placeholder="Choose"
          selectedValues={cohostOptions}
          setSelectedValues={setCohostOptions}
          className="mb-5"
          dropdownKey="co"
          isOpen={openDropdown === "co"}
          setOpenDropdown={setOpenDropdown}
          isMulti={true}
        />
        <ScopeBox />
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Do you provide a dedicated account manager to home owners?
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
        <MultiCheckboxDropdown
          label="Who handles cleaning?"
          options={["In-house", "3rd Party", "Hybrid"]}
          placeholder="Select an option"
          selectedValues={cleaningHandledBy}
          setSelectedValues={setCleaningHandledBy}
          className="mb-5"
          dropdownKey="clean"
          isOpen={openDropdown === "clean"}
          setOpenDropdown={setOpenDropdown}
          isMulti={true}
        />
        <InputField
          label="Avg Turnover Time (hours)"
          id="num"
          name="num"
          type="number"
          fieldName="w-full"
          placeholder="Enter number"
        />
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Do you provide linens & consumables?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              id="linensYes"
              name="linens"
              value="yes"
              label="Yes"
              checked={linens === "yes"}
              onChange={(e) => setLinens(e.target.value)}
            />
            <RadioField
              id="linensNo"
              name="linens"
              value="no"
              label="No"
              checked={linens === "no"}
              onChange={(e) => setLinens(e.target.value)}
            />
          </div>
        </div>
        <InputField
          label="Maintenance Response Time (Avg)"
          id="num"
          name="num"
          type="number"
          fieldName="w-full"
          placeholder="Enter number"
        />
        <InputField
          label="Guest Response Time (Avg)"
          id="num"
          name="num"
          type="number"
          fieldName="w-full"
          placeholder="Enter number"
        />
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Use Smart Lock / Self-Check-in Tech?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              id="smartYes"
              name="smartLock"
              value="yes"
              label="Yes"
              checked={smartLock === "yes"}
              onChange={(e) => setSmartLock(e.target.value)}
            />
            <RadioField
              id="smartNo"
              name="smartLock"
              value="no"
              label="No"
              checked={smartLock === "no"}
              onChange={(e) => setSmartLock(e.target.value)}
            />
          </div>
        </div>
        <InputField
          label="What % commission do you charge on a standard PM contract (non-promotional)?"
          id="num"
          name="num"
          type="number"
          fieldName="w-full"
          placeholder="Enter number percentage"
        />
        <div className="mb-5">
          <h3 className="text-sm font-bold mb-3">
            Are there setup or onboarding fees?
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
            Do you charge for linens/supplies/restocking?
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
            Do you mark up maintenance?
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
            Do you provide a financial projection during onboarding?
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
        <MultiCheckboxDropdown
          label="PMS / Channel Manager Used"
          options={["Guesty", "Hostaway", "Lodgify"]}
          placeholder="Select or type..."
          selectedValues={pmsTools}
          setSelectedValues={setPmsTools}
          className="mb-5"
          dropdownKey="pm"
          isOpen={openDropdown === "pm"}
          setOpenDropdown={setOpenDropdown}
          isMulti={true}
        />
        <MultiCheckboxDropdown
          label="Dynamic Pricing Tool Used"
          options={["Beyond", "PriceLabs", "Wheelhouse"]}
          placeholder="Select or type..."
          selectedValues={pricingTools}
          setSelectedValues={setPricingTools}
          className="mb-5"
          dropdownKey="tool"
          isOpen={openDropdown === "tool"}
          setOpenDropdown={setOpenDropdown}
          isMulti={true}
        />
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Owner Reporting Portal Provided?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              id="field11"
              name="inactivity"
              value="after3months"
              label="Yes"
              checked={selected === "after3months"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <RadioField
              id="field22"
              name="inactivity"
              value="after6months"
              label="No "
              checked={selected === "after6months"}
              onChange={(e) => setSelected(e.target.value)}
            />
          </div>
        </div>
        <SmartHome />
        <MultiCheckboxDropdown
          label="Guest Communication Platform"
          options={["Mnual", "Automated", "Hybrid"]}
          placeholder="Select or type..."
          selectedValues={guest}
          setSelectedValues={setGuest}
          className="mb-5"
          dropdownKey="guest"
          isOpen={openDropdown === "guest"}
          setOpenDropdown={setOpenDropdown}
          isMulti={true}
        />
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Maintenance Ticketing System Used?
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
        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"Anything else you'd like us to know?"}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex gap-4">
          <Button
            variant="graybtn"
            className="mb-5 w-[30%]"
            onClick={() => navigate(ROUTES.COMPANYINFO)}
          >
            Back
          </Button>
          <Button
            variant="defaultBtn"
            className="mb-5 md:w-[70%] w-full md:py-[16px] rounded-[8px] bg-[#0050B3]"
            onClick={handleClick}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PortfolioForm;


