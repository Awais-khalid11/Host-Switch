import React, { useState } from "react";
import InputField from "../../InputField/InputField";
import FileUpload from "../../UploadFile/UploadFile";
import SelectField from "../../SelectField/SelectField";
import RadioField from "../../Auths/RadioField/RadioField";
import CheckBox from "../../CheckBox/CheckBox";
import TextArea from "../../TextArea/TextArea";
import Button from "../../Button/Button";

const SubmissionForm = () => {
  const [willing, setWilling] = useState("");
  const [top, setTop] = useState("");
  const [type, setType] = useState("");

  //   checkbox fields
  const [agreed, setAgreed] = useState(false);
  const [revenue, setRevenue] = useState(false);
  const [fees, setFees] = useState(false);
  const [guest, setGuest] = useState(false);
  const [local, setLocal] = useState(false);
  const [unclear, setUnclear] = useState(false);
  const [upkeep, setUpkeep] = useState(false);
  const [others, setOthers] = useState(false);
  const [floor, setFloor] = useState(false);
  const [appliances, setAppliances] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [smart, setSmart] = useState(false);
  const [amenities, setAmenities] = useState(false);
  const [anyOthers, setAnyOthers] = useState(false);
  const [fixtures, setFixtures] = useState(false);
  const [paint, setPaint] = useState(false);

  //   Radio Fields
  const [isManager, setIsManager] = useState("");
  const [isDay, setIsDay] = useState("");
  const [isHosting, setIsHosting] = useState("");
  const [isUpgrade, setIsUpgrade] = useState("");
  const [isOpen, setIsOpen] = useState("");
  const [isDécor, setIsDécor] = useState("");

  const Distance = [
    {
      label: "How Often Is Your Property Rented Out?",
      value: "How Often Is Your Property Rented Out?",
    },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  const Property = [
    { label: "Select Property type", value: "Select Property type" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  const Top = [
    { label: "Select what you prefer ", value: "Select what you prefer " },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  return (
    <div>
      <form>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-4">
          <InputField
            label="Property Address"
            id="address"
            name="address"
            type="text"
            fieldName="md:1/2 w-full"
            placeholder="DHA Phase 6, Lahore"
          />
          <InputField
            label="Airbnb/Vrbo Link"
            id="link"
            name="link"
            type="text"
            fieldName="md:1/2 w-full"
            placeholder="Enter your last name"
          />
        </div>
        <InputField
          label="Reason for Switching"
          id="response"
          name="response"
          type="text"
          fieldName="w-full"
          placeholder="Unresponsive support"
        />
        <FileUpload label=" Upload Files" />
        <div className="flex md:flex-nowrap flex-wrap items-center gap-4">
          <SelectField
            label="How Often Is Your Property Rented Out?"
            name="distance"
            value={willing}
            onChange={(e) => setWilling(e.target.value)}
            options={Distance}
            selectClass="mb-7 md:1/2 w-full"
          />
          <SelectField
            label="Type of Property"
            name="distance"
            value={type}
            onChange={(e) => setType(e.target.value)}
            options={Property}
            selectClass="mb-7 md:1/2 w-full"
          />
        </div>
        <div className="border border-[#2525251A] p-4 rounded-[8px] mb-4">
          <h4 className="font-bold text-sm mb-4">Reason for Switching</h4>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-5 mb-3">
            <CheckBox
              name="terms"
              id="terms"
              label="Poor communication"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <CheckBox
              name="low"
              id="low"
              label="Low revenue performance"
              checked={revenue}
              onChange={(e) => setRevenue(e.target.checked)}
            />
            <CheckBox
              name="fees"
              id="fees"
              label="High fees"
              checked={fees}
              onChange={(e) => setFees(e.target.checked)}
            />
            <CheckBox
              name="issues"
              id="issues"
              label="Guest issues"
              checked={guest}
              onChange={(e) => setGuest(e.target.checked)}
            />
            <CheckBox
              name="local"
              id="local"
              label="Not local"
              checked={local}
              onChange={(e) => setLocal(e.target.checked)}
            />
            <CheckBox
              name="Unclear"
              id="Unclear"
              label="Unclear reporting"
              checked={unclear}
              onChange={(e) => setUnclear(e.target.checked)}
            />
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-5 mb-3">
            <CheckBox
              name="upkeep"
              id="upkeep"
              label="Poor maintenance / upkeep"
              checked={upkeep}
              onChange={(e) => setUpkeep(e.target.checked)}
            />
            <CheckBox
              name="Others"
              id="Others"
              label="Others"
              checked={others}
              onChange={(e) => setOthers(e.target.checked)}
            />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Do You Currently Have a Property Manager?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              id="ManagerNo"
              name="isManager"
              value="No"
              label="No "
              checked={isManager === "No"}
              onChange={(e) => setIsManager(e.target.value)}
            />
            <RadioField
              id="Manageryes"
              name="isManager"
              value="yes"
              label="yes"
              checked={isManager === "yes"}
              onChange={(e) => setIsManager(e.target.value)}
            />
          </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-4">
          <InputField
            label="Property AdIdeal % Split You’d Like to Paydress"
            id="add"
            name="add"
            type="text"
            fieldName="w-full"
            placeholder="Enter Address"
            asterisk="true"
          />
          <SelectField
            label="Top Priorities in New PM"
            name="Top"
            value={top}
            onChange={(e) => setTop(e.target.value)}
            options={Top}
            selectClass="mb-7 md:1/2 w-full"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 mb-4">
          <div className="md:w-1/2 w-full">
            <h3 className="text-sm font-bold mb-4">
              Would You Consider Co-hosting?
            </h3>
            <div className="flex items-center gap-5">
              <RadioField
                id="hostingNo"
                name="isHosting"
                value="No"
                label="No"
                checked={isHosting === "No"}
                onChange={(e) => setIsHosting(e.target.value)}
              />
              <RadioField
                id="hostingyes"
                name="isHosting"
                value="yes"
                label="yes"
                checked={isHosting === "yes"}
                onChange={(e) => setIsHosting(e.target.value)}
              />
              <RadioField
                id="hostingbe"
                name="isHosting"
                value="May be"
                label="May be"
                checked={isHosting === "May be"}
                onChange={(e) => setIsHosting(e.target.value)}
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-sm font-bold mb-4">
              Involvement in Day-to-Day Decisions?
            </h3>
            <div className="flex items-center gap-5">
              <RadioField
                id="dayyes"
                name="isDay"
                value="Yes"
                label="Yes"
                checked={isDay === "Yes"}
                onChange={(e) => setIsDay(e.target.value)}
              />
              <RadioField
                id="dayNo"
                name="isDay"
                value="No"
                label="No "
                checked={isDay === "No"}
                onChange={(e) => setIsDay(e.target.value)}
              />
              <RadioField
                id="daypreferred"
                name="isDay"
                value="Minimal involvement preferred"
                label="Minimal involvement preferred"
                checked={isDay === "Minimal involvement preferred"}
                onChange={(e) => setIsDay(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2.5">
            Renovations in Last 3 Years
          </h3>
          <div className="flex md:flex-nowrap flex-wrap items-center gap-4">
            <CheckBox
              name="floor"
              id="floor"
              label="Flooring"
              checked={floor}
              onChange={(e) => setFloor(e.target.checked)}
            />
            <CheckBox
              name="appliances"
              id="appliances"
              label="Kitchen appliances"
              checked={appliances}
              onChange={(e) => setAppliances(e.target.checked)}
            />
            <CheckBox
              name="fixtures"
              id="fixtures"
              label="Bathroom fixtures"
              checked={fixtures}
              onChange={(e) => setFixtures(e.target.checked)}
            />
            <CheckBox
              name="Furniture"
              id="Furniture"
              label="Furniture"
              checked={furniture}
              onChange={(e) => setFurniture(e.target.checked)}
            />
            <CheckBox
              name="Paint"
              id="Paint"
              label="Paint / Interior"
              checked={paint}
              onChange={(e) => setPaint(e.target.checked)}
            />
            <CheckBox
              name="Smart"
              id="Smart"
              label="Smart devices"
              checked={smart}
              onChange={(e) => setSmart(e.target.checked)}
            />
            <CheckBox
              name="amenities"
              id="amenities"
              label="Outdoor amenities"
              checked={amenities}
              onChange={(e) => setAmenities(e.target.checked)}
            />
            <CheckBox
              name="any"
              id="any"
              label="Others"
              checked={anyOthers}
              onChange={(e) => setAnyOthers(e.target.checked)}
            />
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-4">
          <div className="md:w-[40%] w-full">
            <h3 className="text-sm font-bold mb-4">
              Are You Open to Upgrade Suggestions?
            </h3>
            <div className="flex items-center gap-5">
              <RadioField
                id="UpgradeYes"
                name="isUpgrade"
                value="Yes"
                label="Yes"
                checked={isUpgrade === "Yes"}
                onChange={(e) => setIsUpgrade(e.target.value)}
              />
              <RadioField
                id="UpgradeNo"
                name="isUpgrade"
                value="No"
                label="No"
                checked={isUpgrade === "No"}
                onChange={(e) => setIsUpgrade(e.target.value)}
              />
              <RadioField
                id="Upgradecost"
                name="isUpgrade"
                value="Possibly, depending on cost"
                label="Possibly, depending on cost"
                checked={isUpgrade === "Possibly, depending on cost"}
                onChange={(e) => setIsUpgrade(e.target.value)}
              />
            </div>
          </div>
          <div className="md:w-[30%] w-full">
            <h3 className="text-sm font-bold mb-4">
              Open to Investing for Higher ROI?
            </h3>
            <div className="flex items-center gap-5">
              <RadioField
                id="Openyes"
                name="isOpen"
                value="Yes"
                label="Yes"
                checked={isOpen === "Yes"}
                onChange={(e) => setIsOpen(e.target.value)}
              />
              <RadioField
                id="OpenNo"
                name="isOpen"
                value="No"
                label="No "
                checked={isOpen === "No"}
                onChange={(e) => setIsOpen(e.target.value)}
              />
              <RadioField
                id="Openbe"
                name="isOpen"
                value="May be"
                label="May be"
                checked={isOpen === "May be"}
                onChange={(e) => setIsOpen(e.target.value)}
              />
            </div>
          </div>
          <div className="md:w-[30%] w-full">
            <h3 className="text-sm font-bold mb-4">
              Furniture & Décor Photography Ready?
            </h3>
            <div className="flex items-center gap-5">
              <RadioField
                id="Décoryes"
                name="isDécor"
                value="Yes"
                label="Yes"
                checked={isDécor === "Yes"}
                onChange={(e) => setIsDécor(e.target.value)}
              />
              <RadioField
                id="DécorNo"
                name="isDécor"
                value="No"
                label="No "
                checked={isDécor === "No"}
                onChange={(e) => setIsDécor(e.target.value)}
              />
              <RadioField
                id="DécorSomewhat"
                name="isDécor"
                value="Somewhat"
                label="Somewhat"
                checked={isDécor === "Somewhat"}
                onChange={(e) => setIsDécor(e.target.value)}
              />
            </div>
          </div>
        </div>
        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"Anything else you'd like us to know?"}
        />
        <div className="flex justify-end">
            <Button variant="defaultBtn" className="md:w-[160px] w-full">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default SubmissionForm;
