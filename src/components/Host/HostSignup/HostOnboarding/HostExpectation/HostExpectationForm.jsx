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
  const { getFinalPayload, portfolioData, updateExpectation } = useHostForm();
  const [files, setFiles] = useState([]);
  const [desc, setDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const submitHandle = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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
      type: propertyTypes[0],
      yearly_revenue: revenueExpectation,
      // files,
      desc,
    };

    updateExpectation(payload);

    const finalPayload = getFinalPayload();
    try {
      const res = await postData("/property", finalPayload);
      console.log("API Success:", res);

      navigate(ROUTES.HOSTDASHBOARD);
    } catch (error) {
      console.error(" API Error:", error);
    } finally {
      setIsLoading(false); // Set loading to false when done (success or error)
    }
  };
  return (
    <div>
      <form onSubmit={submitHandle} className="md:px-0 px-2.5">
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
          {/* <MultiCheckboxDropdown
            label="Type of Property"
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
          /> */}
          <MultiCheckboxDropdown
            label="What % does your current PM charge?"
            placeholder="How Often Is Your Property Rented Out?"
            options={["<10%", "10–15%", ">15%"]}
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
        {/* <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-2.5 mb-5">
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
        </div> */}
        {/* <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-2.5 mb-5">
          <h3 className="text-sm font-bold">Would You Consider Co-hosting?</h3>
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
        </div> */}
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
            <div>
              <Controller
                name="involvement_level"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="dayHighly"
                        name={field.name} // use controller name here
                        value="Highly Involved"
                        label="Highly Involved"
                        checked={field.value === "Highly Involved"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="daySomewhat"
                        name={field.name}
                        value="Somewhat Involved"
                        label="Somewhat Involved"
                        checked={field.value === "Somewhat Involved"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="dayMinimally"
                        name={field.name}
                        value="Minimally Involved"
                        label="Minimally Involved"
                        checked={field.value === "Minimally Involved"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </div>
                    {errors.involvement_level && (
                      <p className="text-red-500 text-sm ">
                        {errors.involvement_level.message}
                      </p>
                    )}
                  </div>
                )}
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
            <Controller
              name="flooringcondition"
              id="flooring"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="floorExcellent"
                      value="Excellent condition"
                      label="Excellent condition"
                      checked={field.value === "Excellent condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="floorAverage"
                      value="Average condition"
                      label="Average condition"
                      checked={field.value === "Average condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="floorNeeds"
                      value="Needs attention"
                      label="Needs attention"
                      checked={field.value === "Needs attention"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                  {errors.flooringcondition && (
                    <p className="text-red-500 text-sm">
                      {errors.flooringcondition.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[130px]">Kitchen Appliances</h2>
            <Controller
              name="kitechencondition"
              id="kitchen"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="appliancesExcellent"
                      value=" Excellent condition"
                      label=" Excellent condition"
                      checked={field.value === " Excellent condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="appliancesAverage"
                      value="Average condition"
                      label="Average condition"
                      checked={field.value === "Average condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="appliancesNeeds"
                      value="Needs attention"
                      label="Needs attention"
                      checked={field.value === "Needs attention"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                  {errors.kitechencondition && (
                    <p className="text-red-500 text-sm ">
                      {errors.kitechencondition.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[130px]">Bathroom Fixtures</h2>
            <div>
              <Controller
                name="bathroomcondition"
                id="BathroomFixtures"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="fixturesExcellent"
                        name="fixtures"
                        value=" Excellent condition"
                        label=" Excellent condition"
                        checked={field.value === " Excellent condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="fixturesAverage"
                        name="fixtures"
                        value="Average condition"
                        label="Average condition"
                        checked={field.value === "Average condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="fixturesNeeds"
                        name="fixtures"
                        value="Needs attention"
                        label="Needs attention"
                        checked={field.value === "Needs attention"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </div>
                    {errors.bathroomcondition && (
                      <p className="text-red-500 text-sm ">
                        {errors.bathroomcondition.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[130px]">Furniture</h2>
            <div>
              <Controller
                name="furniturecondition"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="furnitureExcellent"
                        name="furniture"
                        value=" Excellent condition"
                        label=" Excellent condition"
                        checked={field.value === " Excellent condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="furnitureAverage"
                        name="furniture"
                        value="Average condition"
                        label="Average condition"
                        checked={field.value === "Average condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="furnitureNeeds"
                        name="furniture"
                        value="Needs attention"
                        label="Needs attention"
                        checked={field.value === "Needs attention"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </div>
                    {errors.furniturecondition && (
                      <p className="text-red-500 text-sm ">
                        {errors.furniturecondition.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[130px]">Paint/Interior</h2>
            <div>
              <Controller
                name="paintcondition"
                id="PaintInterior"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="paintExcellent"
                        name="paint"
                        value=" Excellent condition"
                        label=" Excellent condition"
                        checked={field.value === " Excellent condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="paintAverage"
                        name="paint"
                        value="Average condition"
                        label="Average condition"
                        checked={field.value === "Average condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="paintNeeds"
                        name="paint"
                        value="Needs attention"
                        label="Needs attention"
                        checked={field.value === "Needs attention"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </div>
                    {errors.paintcondition && (
                      <p className="text-red-500 text-sm ">
                        {errors.paintcondition.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[130px]">Smart Devices</h2>
            <div>
              <Controller
                name="devicescondition"
                id="SmartDevices"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="devicesExcellent"
                        name="devices"
                        value=" Excellent condition"
                        label=" Excellent condition"
                        checked={field.value === " Excellent condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="devicesAverage"
                        name="devices"
                        value="Average condition"
                        label="Average condition"
                        checked={field.value === "Average condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="devicesNeeds"
                        name="devices"
                        value="Needs attention"
                        label="Needs attention"
                        checked={field.value === "Needs attention"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </div>
                    {errors.devicescondition && (
                      <p className="text-red-500 text-sm ">
                        {errors.devicescondition.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[130px]">Outdoor Amenities</h2>
            <div>
              <Controller
                name="outdoorcondition"
                id="OutdoorAmenities"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="outdoorExcellent"
                        name="outdoor"
                        value=" Excellent condition"
                        label=" Excellent condition"
                        checked={field.value === " Excellent condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="outdoorAverage"
                        name="outdoor"
                        value="Average condition"
                        label="Average condition"
                        checked={field.value === "Average condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="outdoorNeeds"
                        name="outdoor"
                        value="Needs attention"
                        label="Needs attention"
                        checked={field.value === "Needs attention"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </div>
                    {errors.outdoorcondition && (
                      <p className="text-red-500 text-sm ">
                        {errors.outdoorcondition.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[130px]">Others</h2>
            <div>
              <Controller
                name="othercondition"
                id="Others"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="othersExcellent"
                        name="others"
                        value=" Excellent condition"
                        label=" Excellent condition"
                        checked={field.value === " Excellent condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="othersAverage"
                        name="others"
                        value="Average condition"
                        label="Average condition"
                        checked={field.value === "Average condition"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <RadioField
                        id="othersNeeds"
                        name="others"
                        value="Needs attention"
                        label="Needs attention"
                        checked={field.value === "Needs attention"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </div>
                    {errors.othercondition && (
                      <p className="text-red-500 text-sm ">
                        {errors.othercondition.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
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
                value="May be"
                label="May be "
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
        <FileUpload
          label="Upload Photos & Videos"
          onChange={(selectedFiles) => setFiles(selectedFiles)}
        />
        <TextArea
          type="text"
          placeholder="Enter message"
          label="Please tell us more about your property..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="flex gap-4">
          <Link
            className="mb-5 w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
            to={ROUTES.HOSTCOMPANYINFO}

          >
            Back
          </Link>
          <Button
            loading={isLoading}
            type="submit"
            disabled={isLoading}
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
