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
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useTantanstackClient from "../../../../../hook/useTantanstackClient";

const schema = z.object({
  current_pm_company_name: z.string().min(1, "CompanyName is required"),
  pm_charge_percentage: z.array(z.string()).min(1, "Select at least one"),
  yearly_revenue: z.string().min(1, "Revenue is required"),
  flooringcondition: z.string().nonempty("Flooring condition is required"),
  kitechencondition: z.string().nonempty("kitchen condition is required"),
  bathroomcondition: z.string().nonempty("Bathroom condition is required"),
  furniturecondition: z.string().nonempty("Furniture condition is required"),
  paintcondition: z.string().nonempty("PaintInterior condition is required"),
  devicescondition: z.string().nonempty("SmartDevices condition is required"),
  outdoorcondition: z.string().nonempty("Outdooor condition is required"),
  othercondition: z.string().nonempty("Others condition is required"),
  involvement_level: z.enum(
    ["Highly Involved", "Somewhat Involved", "Minimally Involved"],
    {
      required_error: "Please select an option",
    }
  ),
  absolute_must_have: z
    .array(z.string())
    .nonempty("Select at least one absolute must have"),
});

const HostExpectationForm = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const absoluteMustHaveOptions = [
    "Local PM Company",
    "Dedicated account manager",
    "I use my property personally 25%+ per year",
    "I require personal approval for every property-related purchase",
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      current_pm_company_name: "",
      pm_charge_percentage: "",
      yearly_revenue: "",
      absolute_must_have: [],
      flooringcondition: "",
      kitechencondition: "",
      bathroomcondition: "",
      furniturecondition: "",
      paintcondition: "",
      devicescondition: "",
      outdoorcondition: "",
      othercondition: "",
      involvement_level: [],
    },
  });

  const { mutate, isPending } = useTantanstackClient.usePostMutation(
    ["property"],
    "/property/",
    null,
    {
      onSuccess: (data) => {
        console.log("Submitted Data", data);
      },
      onError: (errors) => {
        toast.error(errors.message || "Signup failed");
      },
    }
  );

  const onSubmit = (formData) => {
    console.log("Submitting data:", formData);
    mutate(formData);
  };

  return (
    <div>
      <form className="md:px-0 px-2.5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="current_pm_company_name"
            control={control}
            render={({ field }) => (
              <div>
                <InputField
                  label="What is the name of your current PM company?"
                  id="address"
                  name="address"
                  type="text"
                  fieldName="w-full"
                  placeholder="Enter name"
                  asterisk="true"
                  {...field}
                />
                {errors.current_pm_company_name && (
                  <p className="text-red-500 text-sm -mt-8">
                    {errors.current_pm_company_name.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div>
          <Controller
            name="pm_charge_percentage"
            control={control}
            render={({ field }) => (
              <div>
                <MultiCheckboxDropdown
                  label="What % does your current PM charge?"
                  placeholder="How Often Is Your Property Rented Out?"
                  options={["<10%", "10–15%", ">15%"]}
                  selectedValues={field.value}
                  setSelectedValues={(values) => field.onChange(values)}
                  dropdownKey="charge"
                  isOpen={openDropdown === "charge"}
                  setOpenDropdown={setOpenDropdown}
                  isMulti={false}
                  className="mb-5"
                />
                {errors.pm_charge_percentage && (
                  <p className="text-red-500 text-sm -mt-4">
                    {errors.pm_charge_percentage.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <Controller
          name="yearly_revenue"
          control={control}
          render={({ field }) => (
            <div>
              <InputField
                label="What is your property's current yearly revenue expectation?"
                id="pay"
                name="pay"
                type="text"
                fieldName="w-full"
                placeholder="e.g., $10k–$25k, $25k–$50k,"
                {...field}
              />
              {errors.yearly_revenue && (
                <p className="text-red-500 text-sm -mt-8">
                  {errors.yearly_revenue.message}
                </p>
              )}
            </div>
          )}
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
        <div>
          <Controller
            name="absolute_must_have"
            control={control}
            render={({ field }) => {
              // field.value is the array of selected options (or empty)
              const selected = field.value || [];

              const toggleOption = (option) => {
                if (selected.includes(option)) {
                  // Remove option
                  field.onChange(selected.filter((item) => item !== option));
                } else {
                  // Add option
                  field.onChange([...selected, option]);
                }
              };

              return (
                <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
                  <h2 className="text-sm font-bold mb-4">
                    Mark if any of these that are ABSOLUTE MUST HAVES
                  </h2>
                  <div className="flex flex-wrap  gap-4 mb-3">
                    {absoluteMustHaveOptions.map((label, index) => (
                      <CheckBox
                        key={index}
                        id={`absolute_must_have[${index}]`}
                        name={`absolute_must_have[${index}]`}
                        label={label}
                        checked={selected.includes(label)}
                        onChange={() => toggleOption(label)}
                      />
                    ))}
                  </div>

                  {errors.absolute_must_have && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.absolute_must_have.message}
                    </p>
                  )}
                </div>
              );
            }}
          />
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

        <FileUpload label="Upload Photos & Videos" />
        <TextArea
          type="text"
          placeholder={"Enter message"}
          label={
            "Please tell us more about your property and any unique features or issues. The more we know, the better we can match you with the right PM options"
          }
        />
        <div className="flex gap-4">
          <Link
            className="mb-5 w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
            to={ROUTES.HOSTSUBMISSION}
          >
            Back
          </Link>
          <Button
            type="submit"
            displayed={isPending}
            className="mb-5 md:w-[70%] w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#4D72FF]"
          >
            {isPending ? "Submitting...." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HostExpectationForm;
