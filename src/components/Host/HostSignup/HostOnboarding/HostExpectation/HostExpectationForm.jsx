import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../constants/Routes";
import InputField from "../../../../InputField/InputField";
import FileUpload from "../../../../UploadFile/UploadFile";
import RadioField from "../../../../Auths/RadioField/RadioField";
import Button from "../../../../Button/Button";
import CheckBox from "../../../../CheckBox/CheckBox";
import TextArea from "../../../../TextArea/TextArea";
import MultiCheckboxDropdown from "../../../../Auths/Onboarding/Portfolio/MultiCheckboxDropdown";

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


  return (
    <div>
      <form>
        <div>
          <InputField
            label="What is the name of your current PM company?"
            id="address"
            name="address"
            type="text"
            fieldName="w-full"
            placeholder="Enter name"
            asterisk="true"
          />
        </div>
        <div className="flex md:flex-nowrap flex-wrap gap-5">
          <MultiCheckboxDropdown
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
              "Other"
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
          id="pay"
          name="pay"
          type="text"
          fieldName="w-full"
          placeholder="e.g., $10k–$25k, $25k–$50k, "
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
            <h2 className="text-sm font-bold w-[130px]">Kitchen Appliances</h2>
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
            <h2 className="text-sm font-bold w-[130px]">Bathroom Fixtures</h2>
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
            <h2 className="text-sm font-bold w-[130px]">Outdoor Amenities</h2>
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
        <FileUpload label="Upload Photos & Videos" />
        <TextArea
          type="text"
          placeholder={"Enter message"}
          label={
            "Please tell us more about your property and any unique features or issues. The more we know, the better we can match you with the right PM options"
          }
        />
        <div className="flex gap-4">
          <Button
            variant="graybtn"
            className="mb-5 w-[30%]"
            onClick={() => navigate(ROUTES.HOSTPORTFOLIO)}
          >
            Back
          </Button>
          <Button
            variant="defaultBtn"
            className="mb-5 md:w-[70%] w-full md:py-[16px] rounded-[8px] bg-[#4D72FF]"
            onClick={() => navigate(ROUTES.HOSTDASHBOARD)}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HostExpectationForm;
