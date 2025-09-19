import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../constants/Routes";
import InputField from "../../../../InputField/InputField";
import FileUpload from "../../../../UploadFile/UploadFile";
import RadioField from "../../../../Auths/RadioField/RadioField";
import Button from "../../../../Button/Button";
import CheckBox from "../../../../CheckBox/CheckBox";
import TextArea from "../../../../TextArea/TextArea";
import MultiCheckboxDropdown from "../../../../Auths/Onboarding/Portfolio/MultiCheckboxDropdown";
import useHostForm from "../../../../../store/useHostForm";
import { postData } from "../../../../../api/apiClient";
import { Controller, useForm } from "react-hook-form";
import useRoleStore from "../../../../../store/useRoleIdStore";
import { buildFormData } from "../../../../../utils";

const HostExpectationForm = () => {
  const navigate = useNavigate();
  const [ticket, setTicket] = useState("");
  const [cohosting, setCohosting] = useState("");
  const [day, setDay] = useState("");
  const [floor, setFloor] = useState("");
  const [appliances, setAppliances] = useState("");
  const [fixtures, setFixtures] = useState("");
  const [furniture, setFurniture] = useState("");
  const [paint, setPaint] = useState("");
  const [devices, setDevices] = useState("");
  const [outdoor, setOutdoor] = useState("");
  const [others, setOthers] = useState("");
  const [onboardingFees, setOnboardingFees] = useState("");
  const [restockingCharges, setRestockingCharges] = useState("");
  const [markupMaintenance, setMarkupMaintenance] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [account, setAccount] = useState(false);
  const [require, setRequire] = useState(false);
  const [use, setUse] = useState(false);
  const [flooringRenovation, setFlooringRenovation] = useState(false);
  const [flooring, setFlooring] = useState(false);
  const [kappliances, setKappliances] = useState(false);
  const [bfixtures, setBfixtures] = useState(false);
  const [interior, setInterior] = useState(false);
  const [smart, setSmart] = useState(false);
  const [amenities, setAmenities] = useState(false);
  const [last, setLast] = useState(false);
  const [pmTypes, setPMTypes] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [currentPMCompany, setCurrentPMCompany] = useState("");
  const [revenueExpectation, setRevenueExpectation] = useState("");

  // New states for multiple property flow
  const [involvementLevel, setInvolvementLevel] = useState("");
  const [propertyCondition, setPropertyCondition] = useState("");
  const [selectedUpgrades, setSelectedUpgrades] = useState([]);
  const [openToPMUpgrades, setOpenToPMUpgrades] = useState("");
  const [willingToInvest, setWillingToInvest] = useState("");
  const [furniturePhotoReady, setFurniturePhotoReady] = useState("");

  const [additionalNote, setAdditionalNote] = useState("");

  const { getFinalPayload, updateExpectation } = useHostForm();
  const [desc, setDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { property } = useRoleStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: "",
      unit_apt: "",
      link: "",
      number_rental: "",
      property_location: "",
      str_active: "",
      property_types: [],
      rent_frequency: "",
      currently_managed: "",
      pm_company_name: "",
      work_duration: [],
      under_contract: "",
      pm_services: [],
      pm_preference: "",
      rented_out: [],
      hosting_preference: [],
      cleaning_preference: [],
      account_manager: "",
      message: "",
      condition: false,
    },
  });

  const upgradeOptions = [
    "Flooring",
    "Kitchen appliances",
    "Bathroom fixtures",
    "Furniture",
    "Paint",
    "Smart devices",
  ];

  const submitHandle = async (data) => {
    setIsLoading(true);

    if (property === "multiple") {
      // Handle multiple property submission
      const payload = {
        top_priorities: propertyTypes,
        co_hosting: cohosting,
        involvement_level: involvementLevel,
        property_condition: propertyCondition,
        renovations: selectedUpgrades,
        open_to_pm_upgrades: openToPMUpgrades,
        willing_to_invest: willingToInvest,
        furniture_photo_ready: furniturePhotoReady,
        desc: additionalNote,
        pm_contract_file: Array.from(data.pm_contract || []).map((file) => ({
          file,
        })),
        listing_links_portfolio_file: Array.from(data.listing_link || []).map(
          (file) => ({
            file,
          })
        ),
        revenue_reports_file: Array.from(data.revenue_report || []).map(
          (file) => ({
            file,
          })
        ),
        files: Array.from(data.files || []).map((file) => ({
          file,
        })),
        additional_note: additionalNote,
      };
      console.log(payload);

      updateExpectation(payload);
    } else {
      // Original single property logic
      const renovations = [];
      if (flooring) renovations.push("Flooring");
      if (kappliances) renovations.push("Kitchen appliances");
      if (bfixtures) renovations.push("Bathroom fixtures");
      if (furniture) renovations.push("Furniture");
      if (interior) renovations.push("Paint / Interior");
      if (smart) renovations.push("Smart devices");
      if (amenities) renovations.push("Outdoor amenities");
      if (last) renovations.push("Others");

      const absoluteMustHave = [];
      if (agreed) absoluteMustHave.push("Local PM Company");
      if (use)
        absoluteMustHave.push("I use my property personally 25%+ per year");
      if (account) absoluteMustHave.push("Dedicated account manager");
      if (require)
        absoluteMustHave.push(
          "I require personal approval for every property-related purchase"
        );

      const payload = {
        current_pm_company_name: currentPMCompany,
        seeking_pm_host: ticket,
        pm_top_priority: propertyTypes,
        co_hosting: cohosting,
        involvement_level: day,
        "condition[Flooring]": floor,
        "condition[KitchenAppliances]": appliances,
        "condition[BathroomFixtures]": fixtures,
        "condition[Furniture]": furniture,
        "condition[PaintInterior]": paint,
        "condition[SmartDevices]": devices,
        "condition[OutdoorAmenities]": outdoor,
        "condition[Others]": others,
        suggestion: onboardingFees,
        open_investing: restockingCharges,
        photography: markupMaintenance,
        account,
        require,
        use,
        ...absoluteMustHave.reduce((acc, item, index) => {
          acc[`absolute_must_have[${index}]`] = item;
          return acc;
        }, {}),
        ...renovations.reduce((acc, renovation, index) => {
          acc[`renovations[${index}]`] = renovation;
          return acc;
        }, {}),
        pm_charge_percentage: pmTypes[0],
        yearly_revenue: revenueExpectation,
        contract_photo: Array.from(data.files || []).map((file) => ({
          file,
        })),
        desc,
      };

      updateExpectation(payload);
    }
    const finalPayload = getFinalPayload();

    try {
      const formData = buildFormData(finalPayload);

      await postData("/property", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate(ROUTES.HOSTDASHBOARD);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandle)} className="md:px-0 px-2.5">
        {property === "multiple" ? (
          <>
            <MultiCheckboxDropdown
              label="Top 3 Priorities"
              options={[
                "Revenue optimization",
                "Trust & communication",
                "Transparency & reporting",
                "Cleaning quality",
                "Maintenance responsiveness",
                "Pricing strategy",
                "Guest experience",
                "Tech & automation",
                "Local knowledge",
              ]}
              selectedValues={propertyTypes}
              placeholder="Select what you prefer "
              setSelectedValues={setPropertyTypes}
              dropdownKey="prop"
              isOpen={openDropdown === "prop"}
              setOpenDropdown={setOpenDropdown}
              isMulti={true}
              className="mb-5"
            />
            {/* <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-2.5 mb-5">
              <h3 className="text-sm font-bold">Willing to consider?</h3>
              <div className="flex items-center gap-5">
                <RadioField
                  id="ticketYes"
                  name="ticket"
                  value="Full Service"
                  label="Full Service "
                  checked={ticket === "Full Service"}
                  onChange={(e) => setTicket(e.target.value)}
                />
                <RadioField
                  id="ticketNo"
                  name="ticket"
                  value="Co-Host"
                  label="Co-Host"
                  checked={ticket === "Co-Host"}
                  onChange={(e) => setTicket(e.target.value)}
                />
              </div>
            </div> */}
            {/* Co-hosting Section */}
            <div className="flex md:flex-nowrap flex-wrap items-start flex-col md:gap-5 gap-2.5 mb-5">
              <h3 className="text-sm font-bold">
                Willing to Consider Co-hosting?
              </h3>
              <div className="flex items-center gap-5">
                <RadioField
                  id="cohostingYes"
                  name="cohosting"
                  value="Yes"
                  label="Yes"
                  checked={cohosting === "Yes"}
                  onChange={(e) => setCohosting(e.target.value)}
                />
                <RadioField
                  id="cohostingNo"
                  name="cohosting"
                  value="No"
                  label="No"
                  checked={cohosting === "No"}
                  onChange={(e) => setCohosting(e.target.value)}
                />
                <RadioField
                  id="cohostingNotSure"
                  name="cohosting"
                  value="Not Sure"
                  label="Not Sure"
                  checked={cohosting === "Not Sure"}
                  onChange={(e) => setCohosting(e.target.value)}
                />
              </div>
            </div>

            {/* Involvement Level Section */}
            <div className="flex md:flex-nowrap flex-wrap items-start flex-col md:gap-5 gap-2.5 mb-5">
              <h3 className="text-sm font-bold">Involvement Level</h3>
              <div className="flex items-center gap-5">
                <RadioField
                  id="involvementFull"
                  name="involvementLevel"
                  value="Fully Involved"
                  label="Fully Involved"
                  checked={involvementLevel === "Fully Involved"}
                  onChange={(e) => setInvolvementLevel(e.target.value)}
                />
                <RadioField
                  id="involvementLight"
                  name="involvementLevel"
                  value="Light Involvement"
                  label="Light Involvement"
                  checked={involvementLevel === "Light Involvement"}
                  onChange={(e) => setInvolvementLevel(e.target.value)}
                />
                <RadioField
                  id="involvementNone"
                  name="involvementLevel"
                  value="No Day-to-Day Involvement"
                  label="No Day-to-Day Involvement"
                  checked={involvementLevel === "No Day-to-Day Involvement"}
                  onChange={(e) => setInvolvementLevel(e.target.value)}
                />
              </div>
            </div>

            {/* Property Condition Section */}
            <div className="flex md:flex-nowrap flex-wrap items-start flex-col md:gap-5 gap-2.5 mb-5">
              <h3 className="text-sm font-bold">Property condition</h3>
              <div className="flex items-center gap-5">
                <RadioField
                  id="conditionExcellent"
                  name="propertyCondition"
                  value="Excellent"
                  label="Excellent"
                  checked={propertyCondition === "Excellent"}
                  onChange={(e) => setPropertyCondition(e.target.value)}
                />
                <RadioField
                  id="conditionGood"
                  name="propertyCondition"
                  value="Good"
                  label="Good"
                  checked={propertyCondition === "Good"}
                  onChange={(e) => setPropertyCondition(e.target.value)}
                />
                <RadioField
                  id="conditionFair"
                  name="propertyCondition"
                  value="Fair"
                  label="Fair"
                  checked={propertyCondition === "Fair"}
                  onChange={(e) => setPropertyCondition(e.target.value)}
                />
                <RadioField
                  id="conditionPoor"
                  name="propertyCondition"
                  value="Poor"
                  label="Poor"
                  checked={propertyCondition === "Poor"}
                  onChange={(e) => setPropertyCondition(e.target.value)}
                />
              </div>
            </div>

            {/* Upgrades in last 3 years - Dropdown */}
            <MultiCheckboxDropdown
              label="Upgrades in last 3 years"
              placeholder="Select up to 3 that matter most to you."
              options={upgradeOptions}
              selectedValues={selectedUpgrades}
              setSelectedValues={setSelectedUpgrades}
              dropdownKey="upgrades"
              isOpen={openDropdown === "upgrades"}
              setOpenDropdown={setOpenDropdown}
              isMulti={true}
              maxSelections={3}
              className="mb-5"
            />

            {/* Open to PM upgrade suggestions */}
            <div className="flex md:flex-nowrap flex-wrap items-start flex-col md:gap-5 gap-2.5 mb-5">
              <h3 className="text-sm font-bold">
                Open to PM upgrade suggestions?
              </h3>
              <div className="flex items-center gap-5">
                <RadioField
                  id="pmUpgradesYes"
                  name="openToPMUpgrades"
                  value="Yes"
                  label="Yes"
                  checked={openToPMUpgrades === "Yes"}
                  onChange={(e) => setOpenToPMUpgrades(e.target.value)}
                />
                <RadioField
                  id="pmUpgradesPossibly"
                  name="openToPMUpgrades"
                  value="Possibly"
                  label="Possibly"
                  checked={openToPMUpgrades === "Possibly"}
                  onChange={(e) => setOpenToPMUpgrades(e.target.value)}
                />
                <RadioField
                  id="pmUpgradesNo"
                  name="openToPMUpgrades"
                  value="No"
                  label="No"
                  checked={openToPMUpgrades === "No"}
                  onChange={(e) => setOpenToPMUpgrades(e.target.value)}
                />
              </div>
            </div>

            {/* Willing to invest if income increases */}
            <div className="flex md:flex-nowrap flex-wrap items-start flex-col md:gap-5 gap-2.5 mb-5">
              <h3 className="text-sm font-bold">
                Willing to invest if income increases?
              </h3>
              <div className="flex items-center gap-5">
                <RadioField
                  id="investYes"
                  name="willingToInvest"
                  value="Yes"
                  label="Yes"
                  checked={willingToInvest === "Yes"}
                  onChange={(e) => setWillingToInvest(e.target.value)}
                />
                <RadioField
                  id="investMaybe"
                  name="willingToInvest"
                  value="Maybe"
                  label="Maybe"
                  checked={willingToInvest === "Maybe"}
                  onChange={(e) => setWillingToInvest(e.target.value)}
                />
                <RadioField
                  id="investNo"
                  name="willingToInvest"
                  value="No"
                  label="No"
                  checked={willingToInvest === "No"}
                  onChange={(e) => setWillingToInvest(e.target.value)}
                />
              </div>
            </div>

            {/* Furniture photo-ready */}
            <div className="flex md:flex-nowrap flex-wrap items-start flex-col md:gap-5 gap-2.5 mb-5">
              <h3 className="text-sm font-bold">Furniture photo-ready?</h3>
              <div className="flex items-center gap-5">
                <RadioField
                  id="furnitureYes"
                  name="furniturePhotoReady"
                  value="Yes"
                  label="Yes"
                  checked={furniturePhotoReady === "Yes"}
                  onChange={(e) => setFurniturePhotoReady(e.target.value)}
                />
                <RadioField
                  id="furnitureSomewhat"
                  name="furniturePhotoReady"
                  value="Somewhat"
                  label="Somewhat"
                  checked={furniturePhotoReady === "Somewhat"}
                  onChange={(e) => setFurniturePhotoReady(e.target.value)}
                />
                <RadioField
                  id="furnitureNo"
                  name="furniturePhotoReady"
                  value="No"
                  label="No"
                  checked={furniturePhotoReady === "No"}
                  onChange={(e) => setFurniturePhotoReady(e.target.value)}
                />
              </div>
            </div>

            {/* File Upload Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <Controller
                name="pm_contract"
                control={control}
                render={({ field }) => {
                  const handleFileChange = (selectedFiles) => {
                    field.onChange(selectedFiles);
                  };

                  return (
                    <div className="flex-1">
                      <FileUpload
                        label="Upload PM Contract(s)"
                        value={field.value}
                        onChange={handleFileChange}
                        type="doc"
                      />

                      {errors.pm_contract && (
                        <p className="text-red-500 text-sm -mt-5 mb-2">
                          {errors.pm_contract.message}
                        </p>
                      )}
                    </div>
                  );
                }}
              />
              <Controller
                name="listing_link"
                control={control}
                render={({ field }) => {
                  const handleFileChange = (selectedFiles) => {
                    field.onChange(selectedFiles);
                  };

                  return (
                    <div className="flex-1">
                      <FileUpload
                        label="Upload Listing Links or Portfolio"
                        value={field.value}
                        onChange={handleFileChange}
                      />

                      {errors.listing_link && (
                        <p className="text-red-500 text-sm -mt-5 mb-2">
                          {errors.listing_link.message}
                        </p>
                      )}
                    </div>
                  );
                }}
              />
              <Controller
                name="revenue_report"
                control={control}
                render={({ field }) => {
                  const handleFileChange = (selectedFiles) => {
                    field.onChange(selectedFiles);
                  };

                  return (
                    <div className="flex-1">
                      <FileUpload
                        label="Upload Revenue Reports"
                        value={field.value}
                        onChange={handleFileChange}
                        type="doc"
                      />

                      {errors.revenue_report && (
                        <p className="text-red-500 text-sm -mt-5 mb-2">
                          {errors.revenue_report.message}
                        </p>
                      )}
                    </div>
                  );
                }}
              />
              <Controller
                name="files"
                control={control}
                render={({ field }) => {
                  const handleFileChange = (selectedFiles) => {
                    field.onChange(selectedFiles);
                  };

                  return (
                    <div className="flex-1">
                      <FileUpload
                        label="Upload Property Images"
                        value={field.value}
                        onChange={handleFileChange}
                      />

                      {errors.files && (
                        <p className="text-red-500 text-sm -mt-5 mb-2">
                          {errors.files.message}
                        </p>
                      )}
                    </div>
                  );
                }}
              />
            </div>

            {/* Additional Note */}
            <TextArea
              type="text"
              placeholder="Type here..."
              label="Additional Note"
              value={additionalNote}
              onChange={(e) => setAdditionalNote(e.target.value)}
            />
          </>
        ) : (
          <>
            <div>
              <InputField
                label="What is the name of your current PM company?"
                id="currentPMCompany"
                name="currentPMCompany"
                type="text"
                fieldName="w-full"
                placeholder="Enter name"
                asterisk="true"
                value={currentPMCompany}
                onChange={(e) => setCurrentPMCompany(e.target.value)}
              />
            </div>
            <div className="flex md:flex-nowrap flex-wrap gap-5">
              <MultiCheckboxDropdown
                label="Top Priorities in New PM"
                options={[
                  "Revenue optimization",
                  "Trust & communication",
                  "Transparency & reporting",
                  "Cleaning quality",
                  "Maintenance responsiveness",
                  "Pricing strategy",
                  "Guest experience",
                  "Tech & automation",
                  "Local knowledge",
                  "Other",
                ]}
                selectedValues={propertyTypes}
                placeholder="Select what you prefer "
                setSelectedValues={setPropertyTypes}
                dropdownKey="prop"
                isOpen={openDropdown === "prop"}
                setOpenDropdown={setOpenDropdown}
                isMulti={false}
                className="mb-5"
              />
              <MultiCheckboxDropdown
                label="What % does your current PM charge?"
                placeholder="How Often Is Your Property Rented Out?"
                options={["10%", "15%", "20%", "25%", "30%", "35%", "40%"]}
                selectedValues={pmTypes}
                setSelectedValues={setPMTypes}
                dropdownKey="charge"
                isOpen={openDropdown === "charge"}
                setOpenDropdown={setOpenDropdown}
                isMulti={false}
                className="mb-5"
              />
            </div>
            <InputField
              label="What is your property's current yearly revenue expectation?"
              id="revenueExpectation"
              name="revenueExpectation"
              type="text"
              fieldName="w-full"
              placeholder="e.g., $10k–$25k, $25k–$50k, "
              value={revenueExpectation}
              onChange={(e) => setRevenueExpectation(e.target.value)}
            />
            <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-2.5 mb-5">
              <h3 className="text-sm font-bold">
                Are you seeking Full PM or Co-Host?
              </h3>
              <div className="flex items-center gap-5">
                <RadioField
                  id="ticketYes"
                  name="ticket"
                  value="Full Service"
                  label="Full Service "
                  checked={ticket === "Full Service"}
                  onChange={(e) => setTicket(e.target.value)}
                />
                <RadioField
                  id="ticketNo"
                  name="ticket"
                  value="Co-Host"
                  label="Co-Host"
                  checked={ticket === "Co-Host"}
                  onChange={(e) => setTicket(e.target.value)}
                />
              </div>
            </div>
            <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-2.5 mb-5">
              <h3 className="text-sm font-bold">
                Would You Consider Co-hosting?
              </h3>
              <div className="flex items-center gap-5">
                <RadioField
                  id="cohostingYes"
                  name="cohosting"
                  value="Yes"
                  label="Yes"
                  checked={cohosting === "Yes"}
                  onChange={(e) => setCohosting(e.target.value)}
                />
                <RadioField
                  id="cohostingNo"
                  name="cohosting"
                  value="No"
                  label="No"
                  checked={cohosting === "No"}
                  onChange={(e) => setCohosting(e.target.value)}
                />
                <RadioField
                  id="cohosting"
                  name="cohosting"
                  value="May be"
                  label="May be"
                  checked={cohosting === "May be"}
                  onChange={(e) => setCohosting(e.target.value)}
                />
              </div>
            </div>
            <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
              <h2 className="text-sm font-bold mb-4">
                Mark if any of these that are ABSOLUTE MUST HAVES
              </h2>
              <div className="flex gap-8 mb-3">
                <CheckBox
                  name="local"
                  id="local"
                  label="Local PM Company"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <CheckBox
                  name="use"
                  id="use"
                  label=" I use my property personally 25%+ per year"
                  checked={use}
                  onChange={(e) => setUse(e.target.checked)}
                />
              </div>
              <div className="flex gap-1">
                <CheckBox
                  name="account"
                  id="account"
                  label=" Dedicated account manager"
                  checked={account}
                  onChange={(e) => setAccount(e.target.checked)}
                />
                <CheckBox
                  name="require"
                  id="require"
                  label="I require personal approval for every property-related purchase"
                  checked={require}
                  onChange={(e) => setRequire(e.target.checked)}
                />
              </div>
            </div>
            <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
              <div>
                <h3 className="text-sm font-bold mb-5">
                  Involvement in Day-to-Day Decisions?
                </h3>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="dayHighly"
                    name="day"
                    value="Highly Involved"
                    label="Highly Involved"
                    checked={day === "Highly Involved"}
                    onChange={(e) => setDay(e.target.value)}
                  />
                  <RadioField
                    id="daySomewhat"
                    name="day"
                    value="Somewhat Involved"
                    label="Somewhat Involved"
                    checked={day === "Somewhat Involved"}
                    onChange={(e) => setDay(e.target.value)}
                  />
                  <RadioField
                    id="dayMinimally"
                    name="day"
                    value="Minimally Involved"
                    label="Minimally Involved"
                    checked={day === "Minimally Involved"}
                    onChange={(e) => setDay(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
              <h2 className="text-sm font-bold mb-3">
                Renovations in Last 3 Years
              </h2>
              <div className="flex items-center gap-8 mb-4">
                <CheckBox
                  name="flooring"
                  id="flooring"
                  label="Flooring"
                  checked={flooringRenovation}
                  onChange={(e) => setFlooringRenovation(e.target.checked)}
                />
                <CheckBox
                  name="kappliances"
                  id="kappliances"
                  label="Kitchen appliances"
                  checked={kappliances}
                  onChange={(e) => setKappliances(e.target.checked)}
                />
                <CheckBox
                  name="bfixtures"
                  id="bfixtures"
                  label="Bathroom fixtures"
                  checked={bfixtures}
                  onChange={(e) => setBfixtures(e.target.checked)}
                />
              </div>
              <div className="flex items-center gap-8 mb-4">
                <CheckBox
                  name="furniture"
                  id="furniture"
                  label="Furniture"
                  checked={furniture}
                  onChange={(e) => setFurniture(e.target.checked)}
                />
                <CheckBox
                  name="Interior"
                  id="interior"
                  label="Paint / Interior"
                  checked={interior}
                  onChange={(e) => setInterior(e.target.checked)}
                />
                <CheckBox
                  name="smart"
                  id="smart"
                  label="Smart devices"
                  checked={smart}
                  onChange={(e) => setSmart(e.target.checked)}
                />
              </div>
              <div className="flex items-center gap-8 mb-4">
                <CheckBox
                  name="amenities"
                  id="amenities"
                  label="Outdoor amenities"
                  checked={amenities}
                  onChange={(e) => setAmenities(e.target.checked)}
                />
                <CheckBox
                  name="last"
                  id="last"
                  label="Others"
                  checked={last}
                  onChange={(e) => setLast(e.target.checked)}
                />
              </div>
            </div>
            <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
              <h2 className="text-sm font-bold mb-3">Condition of Property</h2>
              <div className="flex items-center gap-10 mb-5">
                <h2 className="text-sm font-bold w-[130px]">Flooring</h2>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="floorExcellent"
                    name="floor"
                    value=" Excellent condition"
                    label=" Excellent condition"
                    checked={floor === " Excellent condition"}
                    onChange={(e) => setFloor(e.target.value)}
                  />
                  <RadioField
                    id="floorAverage"
                    name="floor"
                    value="Average condition"
                    label="Average condition"
                    checked={floor === "Average condition"}
                    onChange={(e) => setFloor(e.target.value)}
                  />
                  <RadioField
                    id="floorNeeds"
                    name="floor"
                    value="Needs attention"
                    label="Needs attention"
                    checked={floor === "Needs attention"}
                    onChange={(e) => setFloor(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-10 mb-5">
                <h2 className="text-sm font-bold w-[130px]">
                  Kitchen Appliances
                </h2>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="appliancesExcellent"
                    name="appliances"
                    value=" Excellent condition"
                    label=" Excellent condition"
                    checked={appliances === " Excellent condition"}
                    onChange={(e) => setAppliances(e.target.value)}
                  />
                  <RadioField
                    id="appliancesAverage"
                    name="appliances"
                    value="Average condition"
                    label="Average condition"
                    checked={appliances === "Average condition"}
                    onChange={(e) => setAppliances(e.target.value)}
                  />
                  <RadioField
                    id="appliancesNeeds"
                    name="appliances"
                    value="Needs attention"
                    label="Needs attention"
                    checked={appliances === "Needs attention"}
                    onChange={(e) => setAppliances(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-10 mb-5">
                <h2 className="text-sm font-bold w-[130px]">
                  Bathroom Fixtures
                </h2>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="fixturesExcellent"
                    name="fixtures"
                    value=" Excellent condition"
                    label=" Excellent condition"
                    checked={fixtures === " Excellent condition"}
                    onChange={(e) => setFixtures(e.target.value)}
                  />
                  <RadioField
                    id="fixturesAverage"
                    name="fixtures"
                    value="Average condition"
                    label="Average condition"
                    checked={fixtures === "Average condition"}
                    onChange={(e) => setFixtures(e.target.value)}
                  />
                  <RadioField
                    id="fixturesNeeds"
                    name="fixtures"
                    value="Needs attention"
                    label="Needs attention"
                    checked={fixtures === "Needs attention"}
                    onChange={(e) => setFixtures(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-10 mb-5">
                <h2 className="text-sm font-bold w-[130px]">Furniture</h2>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="furnitureExcellent"
                    name="furniture"
                    value=" Excellent condition"
                    label=" Excellent condition"
                    checked={furniture === " Excellent condition"}
                    onChange={(e) => setFurniture(e.target.value)}
                  />
                  <RadioField
                    id="furnitureAverage"
                    name="furniture"
                    value="Average condition"
                    label="Average condition"
                    checked={furniture === "Average condition"}
                    onChange={(e) => setFurniture(e.target.value)}
                  />
                  <RadioField
                    id="furnitureNeeds"
                    name="furniture"
                    value="Needs attention"
                    label="Needs attention"
                    checked={furniture === "Needs attention"}
                    onChange={(e) => setFurniture(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-10 mb-5">
                <h2 className="text-sm font-bold w-[130px]">Paint/Interior</h2>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="paintExcellent"
                    name="paint"
                    value=" Excellent condition"
                    label=" Excellent condition"
                    checked={paint === " Excellent condition"}
                    onChange={(e) => setPaint(e.target.value)}
                  />
                  <RadioField
                    id="paintAverage"
                    name="paint"
                    value="Average condition"
                    label="Average condition"
                    checked={paint === "Average condition"}
                    onChange={(e) => setPaint(e.target.value)}
                  />
                  <RadioField
                    id="paintNeeds"
                    name="paint"
                    value="Needs attention"
                    label="Needs attention"
                    checked={paint === "Needs attention"}
                    onChange={(e) => setPaint(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-10 mb-5">
                <h2 className="text-sm font-bold w-[130px]">Smart Devices</h2>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="devicesExcellent"
                    name="devices"
                    value=" Excellent condition"
                    label=" Excellent condition"
                    checked={devices === " Excellent condition"}
                    onChange={(e) => setDevices(e.target.value)}
                  />
                  <RadioField
                    id="devicesAverage"
                    name="devices"
                    value="Average condition"
                    label="Average condition"
                    checked={devices === "Average condition"}
                    onChange={(e) => setDevices(e.target.value)}
                  />
                  <RadioField
                    id="devicesNeeds"
                    name="devices"
                    value="Needs attention"
                    label="Needs attention"
                    checked={devices === "Needs attention"}
                    onChange={(e) => setDevices(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-10 mb-5">
                <h2 className="text-sm font-bold w-[130px]">
                  Outdoor Amenities
                </h2>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="outdoorExcellent"
                    name="outdoor"
                    value=" Excellent condition"
                    label=" Excellent condition"
                    checked={outdoor === " Excellent condition"}
                    onChange={(e) => setOutdoor(e.target.value)}
                  />
                  <RadioField
                    id="outdoorAverage"
                    name="outdoor"
                    value="Average condition"
                    label="Average condition"
                    checked={outdoor === "Average condition"}
                    onChange={(e) => setOutdoor(e.target.value)}
                  />
                  <RadioField
                    id="outdoorNeeds"
                    name="outdoor"
                    value="Needs attention"
                    label="Needs attention"
                    checked={outdoor === "Needs attention"}
                    onChange={(e) => setOutdoor(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-10 mb-5">
                <h2 className="text-sm font-bold w-[130px]">Others</h2>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="othersExcellent"
                    name="others"
                    value=" Excellent condition"
                    label=" Excellent condition"
                    checked={others === " Excellent condition"}
                    onChange={(e) => setOthers(e.target.value)}
                  />
                  <RadioField
                    id="othersAverage"
                    name="others"
                    value="Average condition"
                    label="Average condition"
                    checked={others === "Average condition"}
                    onChange={(e) => setOthers(e.target.value)}
                  />
                  <RadioField
                    id="othersNeeds"
                    name="others"
                    value="Needs attention"
                    label="Needs attention"
                    checked={others === "Needs attention"}
                    onChange={(e) => setOthers(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
              <h2 className="text-sm font-bold mb-3">
                Renovations in Last 3 Years
              </h2>
              <div className="flex items-center gap-8 mb-4">
                <CheckBox
                  name="flooring"
                  id="flooring"
                  label="Flooring"
                  checked={flooring}
                  onChange={(e) => setFlooring(e.target.checked)}
                />
                <CheckBox
                  name="kappliances"
                  id="kappliances"
                  label="Kitchen appliances"
                  checked={kappliances}
                  onChange={(e) => setKappliances(e.target.checked)}
                />
                <CheckBox
                  name="bfixtures"
                  id="bfixtures"
                  label="Bathroom fixtures"
                  checked={bfixtures}
                  onChange={(e) => setBfixtures(e.target.checked)}
                />
              </div>
              <div className="flex items-center gap-8 mb-4">
                <CheckBox
                  name="furniture"
                  id="furniture"
                  label="Furniture"
                  checked={furniture}
                  onChange={(e) => setFurniture(e.target.checked)}
                />
                <CheckBox
                  name="Interior"
                  id="interior"
                  label="Paint / Interior"
                  checked={interior}
                  onChange={(e) => setInterior(e.target.checked)}
                />
                <CheckBox
                  name="smart"
                  id="smart"
                  label="Smart devices"
                  checked={smart}
                  onChange={(e) => setSmart(e.target.checked)}
                />
              </div>
              <div className="flex items-center gap-8 mb-4">
                <CheckBox
                  name="amenities"
                  id="amenities"
                  label="Outdoor amenities"
                  checked={amenities}
                  onChange={(e) => setAmenities(e.target.checked)}
                />
                <CheckBox
                  name="last"
                  id="last"
                  label="Others"
                  checked={last}
                  onChange={(e) => setLast(e.target.checked)}
                />
              </div>
            </div>

            <div>
              <div className="mb-5">
                <h3 className="text-sm font-bold mb-3">
                  Are You Open to Upgrade Suggestions?
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
                  <RadioField
                    id="onboardingPossibly"
                    name="onboardingFees"
                    value="Possibly, depending on cost"
                    label="Possibly, depending on cost "
                    checked={onboardingFees === "Possibly, depending on cost"}
                    onChange={(e) => setOnboardingFees(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-5">
                <h3 className="text-sm font-bold mb-3">
                  Open to Investing for Higher ROI?
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
                  <RadioField
                    id="restockingMay"
                    name="restockingCharges"
                    value="Maybe"
                    label="Maybe "
                    checked={restockingCharges === "May be"}
                    onChange={(e) => setRestockingCharges(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-5">
                <h3 className="text-sm font-bold mb-3">
                  Furniture & Décor Photography Ready?
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
                  <RadioField
                    id="markupSomewhat"
                    name="markupMaintenance"
                    value="Somewhat"
                    label="Somewhat "
                    checked={markupMaintenance === "Somewhat"}
                    onChange={(e) => setMarkupMaintenance(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Controller
              name="files"
              control={control}
              render={({ field }) => {
                const handleFileChange = (selectedFiles) => {
                  field.onChange(selectedFiles);
                };

                return (
                  <div className="flex-1">
                    <FileUpload
                      label="Upload Photo of contract"
                      value={field.value}
                      onChange={handleFileChange}
                    />

                    {errors.files && (
                      <p className="text-red-500 text-sm -mt-5 mb-2">
                        {errors.files.message}
                      </p>
                    )}
                  </div>
                );
              }}
            />
            <TextArea
              type="text"
              placeholder="Enter message"
              label="Please tell us more about your property..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </>
        )}
        <div className="mb-5">
          <Controller
            control={control}
            name="condition"
            rules={{ required: "You must accept the terms and conditions" }}
            render={({ field }) => (
              <div>
                <CheckBox
                  name="condition"
                  id="condition"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  label={
                    <>
                      I agree to the
                      <span className="text-[#0050B3] ml-1">
                        Terms & Conditions
                      </span>
                    </>
                  }
                />
                {errors.condition && (
                  <p className="text-red-500 text-sm">
                    {errors.condition.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="flex gap-4">
          <Link
            className="mb-5 w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
            to={ROUTES.HOSTCOMPANYINFO}
          >
            Back
          </Link>
          <Button
            // loading={isLoading}
            type="submit"
            // disabled={isLoading}
            className="mb-5 md:w-[70%] w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#4D72FF] disabled:opacity-50"
          >
            {isLoading ? "Submitting..." : "Next"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HostExpectationForm;
