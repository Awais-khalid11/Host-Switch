import React, { useState } from "react";
import Button from "../../../Button/Button";
import InputField from "../../../InputField/InputField";
import CheckBox from "../../../CheckBox/CheckBox";
import { Link, useNavigate } from "react-router-dom";
import TextArea from "../../../TextArea/TextArea";
import SelectField from "../../../SelectField/SelectField";
import ScopeBox from "./ScopeBox";
import RadioField from "../../RadioField/RadioField";
import SmartHome from "./SmartHome";
import { ROUTES } from "../../../../constants/Routes";
import MultiCheckboxDropdown from "./MultiCheckboxDropdown";
import usePMForm from "../../../../store/usePMForm";

const PortfolioForm = () => {
  const navigate = useNavigate();
  const { updatePortfolio } = usePMForm();

  const [activeStr, setActiveStr] = useState("");
  const [maxOnboard, setMaxOnboard] = useState("");
  const [website, setWebsite] = useState("");
  const [propertyRequirement, setPropertyRequirement] = useState("");

  const [accountManager, setAccountManager] = useState("");
  const [linens, setLinens] = useState("");
  const [smartLock, setSmartLock] = useState("");
  const [onboardingFees, setOnboardingFees] = useState("");
  const [restockingCharges, setRestockingCharges] = useState("");
  const [markupMaintenance, setMarkupMaintenance] = useState("");
  const [financialProjection, setFinancialProjection] = useState("");
  const [selected, setSelected] = useState("");
  const [ticket, setTicket] = useState("");
  const [message, setMessage] = useState("");

  const [propertyTypes, setPropertyTypes] = useState([]);
  const [agreementTypes, setAgreementTypes] = useState([]);
  const [cohostOptions, setCohostOptions] = useState([]);
  const [cleaningHandledBy, setCleaningHandledBy] = useState([]);
  const [pmsTools, setPmsTools] = useState([]);
  const [pricingTools, setPricingTools] = useState([]);
  const [guest, setGuest] = useState([]);
  const [scopeServices, setScopeServices] = useState([]);
  const [smartHomeTech, setSmartHomeTech] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  // extra number fields
  const [overTime, setOverTime] = useState("");
  const [maintenanceResponse, setMaintenanceResponse] = useState("");
  const [guestResponse, setGuestResponse] = useState("");
  const [commission, setCommission] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("operation_service[active_str_number]", activeStr);
    formData.append("operation_service[max_properties]", maxOnboard);
    formData.append("operation_service[website]", website);

    propertyTypes.forEach((val) =>
      formData.append("operation_service[property_type][]", val)
    );

    formData.append(
      "operation_service[property_requirement]",
      propertyRequirement
    );

    agreementTypes.forEach((val) =>
      formData.append("operation_service[agreement][]", val)
    );
    cohostOptions.forEach((val) =>
      formData.append("operation_service[co_hosting_service][]", val)
    );

    scopeServices.forEach((val, index) => {
      formData.append(`operation_service[scope_service][${index}]`, val);
    });

    formData.append(
      "operation_service[dedicated_account_manager]",
      accountManager === "yes" ? "1" : "0"
    );
    cleaningHandledBy.forEach((val) =>
      formData.append("operation_service[handle_cleaning][]", val)
    );
    formData.append("operation_service[over_time]", overTime);
    formData.append(
      "operation_service[linens_consumables]",
      linens === "yes" ? "1" : "0"
    );
    formData.append(
      "operation_service[maintenance_response_time]",
      maintenanceResponse
    );
    formData.append("operation_service[guest_response_time]", guestResponse);
    formData.append(
      "operation_service[smart_lock_tech]",
      smartLock === "yes" ? "1" : "0"
    );
    formData.append("operation_service[commission_percentage]", commission);
    formData.append(
      "operation_service[onboarding_fee]",
      onboardingFees === "yes" ? "1" : "0"
    );
    formData.append(
      "operation_service[charges_linens]",
      restockingCharges === "yes" ? "1" : "0"
    );
    formData.append(
      "operation_service[mark_maintenance]",
      markupMaintenance === "yes" ? "1" : "0"
    );
    formData.append(
      "operation_service[financial_projection_onboarding]",
      financialProjection === "yes" ? "1" : "0"
    );

    pmsTools.forEach((val) =>
      formData.append("operation_service[pms_channel_manager][]", val)
    );
    pricingTools.forEach((val) =>
      formData.append("operation_service[dynamic_pricing_tool][]", val)
    );

    formData.append(
      "operation_service[owner_reporting_portal]",
      selected === "after3months" ? "1" : "0"
    );

    smartHomeTech.forEach((val, index) => {
      formData.append(`operation_service[smart_home_tech][${index}]`, val);
    });

    guest.forEach((val) =>
      formData.append("operation_service[guest_communication][]", val)
    );
    formData.append(
      "operation_service[maintenance_ticketing_system]",
      ticket === "yes" ? "1" : "0"
    );

    formData.append("operation_service[anything_else_to_know]", message);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ":", pair[1]);
    }

    updatePortfolio(Object.fromEntries(formData.entries()));
    navigate(ROUTES.EXPECTATIONS);
  };

  return (
    <div>
      <form onSubmit={submitHandle} className="md:px-0 px-2.5">
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <InputField
            label="Number of Active STR Properties Managed"
            type="number"
            placeholder="Enter number"
            value={activeStr}
            onChange={(e) => setActiveStr(e.target.value)}
          />
          <InputField
            label="Max Properties You Can Onboard (30 Days)"
            type="number"
            placeholder="Enter number"
            value={maxOnboard}
            onChange={(e) => setMaxOnboard(e.target.value)}
          />
        </div>
        <InputField
          label="Company Website"
          type="text"
          placeholder="Enter url.."
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
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
          placeholder={"Enter requirements..."}
          label={"Minimum Property Requirements"}
          value={propertyRequirement}
          onChange={(e) => setPropertyRequirement(e.target.value)}
        />
        <MultiCheckboxDropdown
          label="Exclusive or Non-Exclusive Agreements?"
          placeholder="Select an option"
          options={["Exclusive", "Non-Exclusive"]}
          selectedValues={agreementTypes}
          setSelectedValues={setAgreementTypes}
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
        <ScopeBox setScopeServices={setScopeServices} />

        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Do you provide a dedicated account manager to home owners?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              name="accountManager"
              value="yes"
              label="Yes"
              checked={accountManager === "yes"}
              onChange={(e) => setAccountManager(e.target.value)}
            />
            <RadioField
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
          type="number"
          placeholder="Enter number"
          value={overTime}
          onChange={(e) => setOverTime(e.target.value)}
        />
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Do you provide linens & consumables?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              name="linens"
              value="yes"
              label="Yes"
              checked={linens === "yes"}
              onChange={(e) => setLinens(e.target.value)}
            />
            <RadioField
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
          type="number"
          placeholder="Enter number"
          value={maintenanceResponse}
          onChange={(e) => setMaintenanceResponse(e.target.value)}
        />
        <InputField
          label="Guest Response Time (Avg)"
          type="number"
          placeholder="Enter number"
          value={guestResponse}
          onChange={(e) => setGuestResponse(e.target.value)}
        />
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Use Smart Lock / Self-Check-in Tech?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              name="smartLock"
              value="yes"
              label="Yes"
              checked={smartLock === "yes"}
              onChange={(e) => setSmartLock(e.target.value)}
            />
            <RadioField
              name="smartLock"
              value="no"
              label="No"
              checked={smartLock === "no"}
              onChange={(e) => setSmartLock(e.target.value)}
            />
          </div>
        </div>
        <InputField
          label="What % commission do you charge?"
          type="number"
          placeholder="Enter %"
          value={commission}
          onChange={(e) => setCommission(e.target.value)}
        />
        <div className="mb-5">
          <h3 className="text-sm font-bold mb-3">
            Are there setup or onboarding fees?
          </h3>
          <div className="flex items-center gap-10">
            <RadioField
              name="onboardingFees"
              value="yes"
              label="Yes"
              checked={onboardingFees === "yes"}
              onChange={(e) => setOnboardingFees(e.target.value)}
            />
            <RadioField
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
              name="restockingCharges"
              value="yes"
              label="Yes"
              checked={restockingCharges === "yes"}
              onChange={(e) => setRestockingCharges(e.target.value)}
            />
            <RadioField
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
              name="markupMaintenance"
              value="yes"
              label="Yes"
              checked={markupMaintenance === "yes"}
              onChange={(e) => setMarkupMaintenance(e.target.value)}
            />
            <RadioField
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
              name="financialProjection"
              value="yes"
              label="Yes"
              checked={financialProjection === "yes"}
              onChange={(e) => setFinancialProjection(e.target.value)}
            />
            <RadioField
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
              name="ownerPortal"
              value="after3months"
              label="Yes"
              checked={selected === "after3months"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <RadioField
              name="ownerPortal"
              value="after6months"
              label="No "
              checked={selected === "after6months"}
              onChange={(e) => setSelected(e.target.value)}
            />
          </div>
        </div>

        <SmartHome setSmartHomeTech={setSmartHomeTech} />

        <MultiCheckboxDropdown
          label="Guest Communication Platform"
          options={["Manual", "Automated", "Hybrid"]}
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
              name="ticket"
              value="yes"
              label="Yes"
              checked={ticket === "yes"}
              onChange={(e) => setTicket(e.target.value)}
            />
            <RadioField
              name="ticket"
              value="no"
              label="No"
              checked={ticket === "no"}
              onChange={(e) => setTicket(e.target.value)}
            />
          </div>
        </div>
        <TextArea
          placeholder={"Enter message..."}
          label={"Anything else you'd like us to know?"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex md:gap-4 gap-2">
          <Link
            className="w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
            to={ROUTES.COMPANYINFO}
          >
            Back
          </Link>
          <button
            type="submit"
            className="mb
-5 md:w-[70%] w-full md:py-[16px] cursor-pointer py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#0050B3]"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PortfolioForm;
