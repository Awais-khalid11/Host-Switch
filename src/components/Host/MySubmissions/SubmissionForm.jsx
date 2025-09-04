import React, { useState } from "react";
import InputField from "../../InputField/InputField";
import FileUpload from "../../UploadFile/UploadFile";
import RadioField from "../../Auths/RadioField/RadioField";
import CheckBox from "../../CheckBox/CheckBox";
import TextArea from "../../TextArea/TextArea";
import Button from "../../Button/Button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import MultiCheckboxDropdown from "../../Auths/Onboarding/Portfolio/MultiCheckboxDropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { postData } from "../../../api/apiClient"; // Adjust path as needed

const schema = z.object({
  address: z.string().min(1, "Address is required"),
  unit_apt: z.string().optional(),
  link: z.string().min(1, "Link is required"),
  scope_service: z.array(z.string()).min(1, "Select at least one service"),
  split_percentage: z.string().min(1, "Enter Percentage"),
  files: z
    .any()
    .refine((val) => val && val.length > 0, { message: "Attach Files" }),
  open_investing: z.enum(["Yes", "No", "May be"], {
    required_error: "Please select an option",
  }),
  suggestion: z.enum(["Yes", "No", "Possibly, depending on cost"], {
    required_error: "Please select an option",
  }),
  photography: z.enum(["Yes", "No", "Somewhat"], {
    required_error: "Please select an option",
  }),
  co_hosting: z.enum(["Yes", "No", "May be"], {
    required_error: "Please select an option",
  }),
  seeking_pm_host: z.enum(["Full Service", "Co-Host"], {
    required_error: "Please select an option",
  }),
  accountManager: z.enum(["yes", "no"], {
    required_error: "Please select an option",
  }),
  involvement_level: z.enum(
    ["Highly Involved", "Somewhat Involved", "Minimally Involved"],
    {
      required_error: "Please select an option",
    }
  ),
  pm_top_priority: z.array(z.string()).min(1, "Select at least one"),
  renovations: z.array(z.string()).min(1, "Select at least one"),
  reason_switching: z.array(z.string()).min(1, "Select at least one"),
  type: z.array(z.string()).min(1, "Select at least one"),
  rented_out: z.array(z.string()).min(1, "Select at least one"),
  hostingTypes: z.array(z.string()).min(1, "Select at least one"), // Added missing field
  cleanTypes: z.array(z.string()).min(1, "Select at least one"), // Added missing field
  desc: z.string().optional(),
  message: z.string().optional(), // Additional message field

  current_pm_company_name: z.string().min(1, "Company Name is required"),
  pm_charge_percentage: z.array(z.string()).min(1, "Select at least one"),
  yearly_revenue: z.string().min(1, "Revenue is required"),
  condition: z.object({
    Flooring: z.string().nonempty("Flooring condition is required"),
    KitchenAppliances: z
      .string()
      .nonempty("Kitchen Appliances condition is required"),
    BathroomFixtures: z
      .string()
      .nonempty("Bathroom Fixtures condition is required"),
    Furniture: z.string().nonempty("Furniture condition is required"),
    PaintInterior: z.string().nonempty("Paint/Interior condition is required"),
    SmartDevices: z.string().nonempty("Smart Devices condition is required"),
    OutdoorAmenities: z
      .string()
      .nonempty("Outdoor Amenities condition is required"),
    Others: z.string().nonempty("Others condition is required"),
  }),

  absolute_must_have: z
    .array(z.string())
    .nonempty("Select at least one absolute must have"),
});

const SubmissionForm = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const absoluteMustHaveOptions = [
    "Local PM Company",
    "Dedicated account manager",
    "I use my property personally 25%+ per year",
    "I require personal approval for every property-related purchase",
  ];

  const renovationsList = [
    { id: 0, label: "Flooring" },
    { id: 1, label: "Kitchen appliances" },
    { id: 2, label: "Bathroom fixtures" },
    { id: 3, label: "Furniture" },
    { id: 4, label: "Paint / Interior" },
    { id: 5, label: "Smart devices" },
    { id: 6, label: "Outdoor amenities" },
    { id: 7, label: "Others" },
  ];

  const reasonSwitchingList = [
    { id: 0, label: "Newly acquired property" },
    { id: 1, label: "Limited use of home" },
    { id: 2, label: "Unfair contract terms" },
    { id: 3, label: "High fees" },
    { id: 4, label: "Guest issues" },
    { id: 5, label: "Not local" },
    { id: 6, label: "Poor owner relations" },
    { id: 7, label: "Unclear reporting" },
    { id: 8, label: "Poor maintenance / upkeep" },
    { id: 9, label: "Others" },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      address: "",
      unit_apt: "",
      link: "",
      files: [],
      open_investing: "",
      suggestion: "",
      scope_service: [],
      photography: "",
      desc: "",
      message: "",
      co_hosting: "",
      seeking_pm_host: "",
      accountManager: "",
      involvement_level: "",
      split_percentage: "",
      pm_top_priority: [],
      type: [],
      rented_out: [],
      hostingTypes: [],
      cleanTypes: [],
      renovations: [],
      reason_switching: [],
      current_pm_company_name: "",
      pm_charge_percentage: [],
      yearly_revenue: "",
      absolute_must_have: [],
      condition: {
        Flooring: "",
        KitchenAppliances: "",
        BathroomFixtures: "",
        Furniture: "",
        PaintInterior: "",
        SmartDevices: "",
        OutdoorAmenities: "",
        Others: "",
      },
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const renovations = data.renovations || [];
      const absoluteMustHave = data.absolute_must_have || [];

      const payload = {
        address: data.address,
        unit_apt: data.unit_apt,
        link: data.link,
        rented_out: data.rented_out?.[0] || "",
        type: data.type?.[0] || "",
        hostingTypes: data.hostingTypes?.[0] || "",
        cleanTypes: data.cleanTypes?.[0] || "",
        ...data.scope_service.reduce((acc, item, index) => {
          acc[`scope_service[${index}]`] = item;
          return acc;
        }, {}),
        accountManager: data.accountManager,
        anything_else: data.message,
        split_percentage: 100,

        current_pm_company_name: data.current_pm_company_name,
        seeking_pm_host: data.seeking_pm_host,
        co_hosting: data.co_hosting,
        involvement_level: data.involvement_level,

        "condition[Flooring]": data.condition.Flooring,
        "condition[KitchenAppliances]": data.condition.KitchenAppliances,
        "condition[BathroomFixtures]": data.condition.BathroomFixtures,
        "condition[Furniture]": data.condition.Furniture,
        "condition[PaintInterior]": data.condition.PaintInterior,
        "condition[SmartDevices]": data.condition.SmartDevices,
        "condition[OutdoorAmenities]": data.condition.OutdoorAmenities,
        "condition[Others]": data.condition.Others,

        suggestion: data.suggestion,
        open_investing: data.open_investing,
        photography: data.photography,

        ...absoluteMustHave.reduce((acc, item, index) => {
          acc[`absolute_must_have[${index}]`] = item;
          return acc;
        }, {}),

        ...renovations.reduce((acc, renovation, index) => {
          acc[`renovations[${index}]`] = renovation;
          return acc;
        }, {}),

        pm_charge_percentage: data.pm_charge_percentage?.[0] || "",
        yearly_revenue: data.yearly_revenue,
        desc: data.desc,

        ...data.reason_switching.reduce((acc, item, index) => {
          acc[`reason_switching[${index}]`] = item;
          return acc;
        }, {}),

        pm_top_priority: data.pm_top_priority?.[0] || "",
      };

      const formData = new FormData();

      Object.keys(payload).forEach((key) => {
        formData.append(key, payload[key]);
      });

      if (data.files && data.files.length > 0) {
        Array.from(data.files).forEach((file) => {
          formData.append("files", file);
        });
      }

      const response = await postData("/property", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("API Success:", response);
      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("API Error:", error);
      toast.error(error.message || "Submission failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  label="Property Address"
                  id="address"
                  name="address"
                  type="text"
                  fieldName="w-full"
                  placeholder="Type and select location..."
                  asterisk="true"
                  {...field}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm -mt-7 mb-2">
                    {errors.address.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="unit_apt"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  label="Unit/Apt # (if applicable)"
                  id="unit_apt"
                  name="unit_apt"
                  type="text"
                  fieldName="w-full"
                  placeholder="Unit/Apt #"
                  {...field}
                />
                {errors.unit_apt && (
                  <p className="text-red-500 text-sm -mt-7 mb-2">
                    {errors.unit_apt.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Rent & Link */}
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <Controller
            name="rented_out"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <MultiCheckboxDropdown
                  label="How Often Is Your Property Rented Out?"
                  placeholder="How Often Is Your Property Rented Out?"
                  options={["Full-time", "Seasonal", "Occasionally"]}
                  selectedValues={field.value}
                  setSelectedValues={(values) => field.onChange(values)}
                  dropdownKey="rent"
                  isOpen={openDropdown === "rent"}
                  setOpenDropdown={setOpenDropdown}
                  isMulti={false}
                  className="mb-8"
                />
                {errors.rented_out && (
                  <p className="text-red-500 text-sm">
                    {errors.rented_out.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="link"
            control={control}
            render={({ field }) => (
              <div className="w-full">
                <InputField
                  label="Airbnb/Vrbo Link"
                  id="link"
                  name="link"
                  type="text"
                  fieldName="w-full"
                  placeholder="Airbnb/Vrbo listing link"
                  {...field}
                />
                {errors.link && (
                  <p className="text-red-500 text-sm -mt-7 mb-2">
                    {errors.link.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Property / Hosting / Cleaning */}
        <div>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <div className="mb-5">
                <MultiCheckboxDropdown
                  label="Type of Property"
                  options={[
                    "Condo",
                    "Multi-Family/Duplex",
                    "Luxury Home",
                    "Tiny Home",
                    "Single Family Home",
                    "Beachfront/Waterfront",
                    "Other",
                  ]}
                  placeholder="Select Property type"
                  selectedValues={field.value}
                  setSelectedValues={(values) => field.onChange(values)}
                  dropdownKey="type"
                  isOpen={openDropdown === "type"}
                  setOpenDropdown={setOpenDropdown}
                  isMulti={false}
                />
                {errors.type && (
                  <p className="text-red-500 text-sm">{errors.type.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name="scope_service"
            control={control}
            render={({ field }) => (
              <div className="mb-5">
                <MultiCheckboxDropdown
                  label="Scope of Services"
                  options={[
                    "Guest communication",
                    "24/7 Guest Support",
                    "Booking Management",
                    "Owner Portal / Dashboard Access ",
                    "Concierge Services ",
                    "Cleaning Coordination ",
                    "In-House Cleaning Team ",
                    "Permit & Licensing Assistance ",
                    "Light Maintenance / Handyman Work ",
                    "Heavy Maintenance / Handyman Work ",
                    "Light Construction / Renovation ",
                    "Heavy Construction / Renovation ",
                    "Utilities Management ",
                    "Pool Upkeep ",
                    "Yard & Landscaping Management ",
                  ]}
                  placeholder="Select Scope of services"
                  selectedValues={field.value}
                  setSelectedValues={(values) => field.onChange(values)}
                  dropdownKey="scope_service" // Changed to match field name
                  isOpen={openDropdown === "scope_service"} // Changed to match field name
                  setOpenDropdown={setOpenDropdown}
                  isMulti={true}
                />
                {errors.scope_service && (
                  <p className="text-red-500 text-sm">
                    {errors.scope_service.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="hostingTypes"
            control={control}
            render={({ field }) => (
              <div className="mb-5">
                <MultiCheckboxDropdown
                  label="Do you have a preference in size of your PM (Property Manager)?"
                  options={[
                    "20 properties or less",
                    "100 properties or less",
                    "Size doesn't matter",
                  ]}
                  placeholder="Select PM size preference"
                  selectedValues={field.value}
                  setSelectedValues={(values) => field.onChange(values)}
                  dropdownKey="hosting"
                  isOpen={openDropdown === "hosting"}
                  setOpenDropdown={setOpenDropdown}
                  isMulti={true}
                />
                {errors.hostingTypes && (
                  <p className="text-red-500 text-sm">
                    {errors.hostingTypes.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="cleanTypes"
            control={control}
            render={({ field }) => (
              <div className="mb-5">
                <MultiCheckboxDropdown
                  label="Do you have a cleaning preference?"
                  options={[
                    "In-house cleaners",
                    "3rd party cleaners",
                    "Doesn't matter to me",
                  ]}
                  placeholder="Select cleaning preference"
                  selectedValues={field.value}
                  setSelectedValues={(values) => field.onChange(values)}
                  dropdownKey="clean"
                  isOpen={openDropdown === "clean"}
                  setOpenDropdown={setOpenDropdown}
                  isMulti={true}
                />
                {errors.cleanTypes && (
                  <p className="text-red-500 text-sm">
                    {errors.cleanTypes.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Account Manager */}
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Do You Currently Have a Property Manager?
          </h3>
          <Controller
            name="accountManager"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-5">
                <RadioField
                  id="accountYes"
                  name="accountManager"
                  value="yes"
                  label="Yes"
                  checked={field.value === "yes"}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <RadioField
                  id="accountNo"
                  name="accountManager"
                  value="no"
                  label="No"
                  checked={field.value === "no"}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                {errors.accountManager && (
                  <p className="text-red-500 text-sm">
                    {errors.accountManager.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Files Upload */}
        <Controller
          name="files"
          control={control}
          render={({ field }) => {
            const handleFileChange = (selectedFiles) => {
              field.onChange(selectedFiles);
            };
            return (
              <div>
                <FileUpload
                  label="Upload Photos & Videos"
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

        {/* Reason for Switching */}
        <div className="border border-[#2525251A] p-4 rounded-[8px] mb-6">
          <h4 className="font-bold text-sm mb-4">Reason for Switching</h4>
          <Controller
            name="reason_switching"
            control={control}
            render={({ field }) => {
              const selected = field.value || [];
              const toggleValue = (label) => {
                if (selected.includes(label)) {
                  field.onChange(selected.filter((val) => val !== label));
                } else {
                  field.onChange([...selected, label]);
                }
              };
              return (
                <>
                  <div className="flex flex-wrap items-center gap-5 mb-3">
                    {reasonSwitchingList.map((item) => (
                      <CheckBox
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        checked={selected.includes(item.label)}
                        onChange={() => toggleValue(item.label)}
                      />
                    ))}
                  </div>
                  {errors.reason_switching && (
                    <p className="text-red-500 text-sm">
                      {errors.reason_switching.message}
                    </p>
                  )}
                </>
              );
            }}
          />
        </div>

        {/* Split Percentage & PM Top Priority */}
        <div className="flex md:flex-nowrap flex-wrap items-center md:gap-4">
          <Controller
            name="split_percentage"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  label="Ideal % Split You'd Like to Pay"
                  id="split_percentage"
                  name="split_percentage"
                  type="text"
                  fieldName="w-full"
                  placeholder="e.g. 20%"
                  asterisk="true"
                  {...field}
                />
                {errors.split_percentage && (
                  <p className="text-red-500 text-sm -mt-6">
                    {errors.split_percentage.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="pm_top_priority"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <MultiCheckboxDropdown
                  label="Top Priorities in New PM"
                  options={[
                    "Revenue optimization",
                    "Trust & Communication",
                    "Transparency & Reporting",
                    "Cleaning quality",
                    "Maintenance responsiveness",
                    "Pricing Strategy",
                    "Guest Experience",
                    "Tech & automation",
                    "Local knowledge",
                    "Other",
                  ]}
                  placeholder="Select Property type"
                  selectedValues={field.value || []}
                  setSelectedValues={(values) => field.onChange(values)}
                  dropdownKey="pm_top_priority"
                  isOpen={openDropdown === "pm_top_priority"}
                  setOpenDropdown={setOpenDropdown}
                  isMulti={false}
                  className="mb-8"
                />
                {errors.pm_top_priority && (
                  <p className="text-red-500 text-sm -mt-6">
                    {errors.pm_top_priority.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Current PM Company Name */}
        <div>
          <Controller
            name="current_pm_company_name"
            control={control}
            render={({ field }) => (
              <div>
                <InputField
                  label="What is the name of your current PM company?"
                  id="current_pm_company_name"
                  name="current_pm_company_name"
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

        {/* PM Charge Percentage */}
        <div>
          <Controller
            name="pm_charge_percentage"
            control={control}
            render={({ field }) => (
              <div>
                <MultiCheckboxDropdown
                  label="What % does your current PM charge?"
                  placeholder="Select percentage range"
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

        {/* Yearly Revenue */}
        <Controller
          name="yearly_revenue"
          control={control}
          render={({ field }) => (
            <div>
              <InputField
                label="What is your property's current yearly revenue expectation?"
                id="yearly_revenue"
                name="yearly_revenue"
                type="text"
                fieldName="w-full"
                placeholder="e.g., $10k–$25k, $25k–$50k"
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

        {/* Full Service vs Co-Host */}
        <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-2.5 mb-5">
          <h3 className="text-sm font-bold">
            Are you seeking Full PM or Co-Host?
          </h3>
          <Controller
            name="seeking_pm_host"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-5">
                <RadioField
                  id="seekingFull"
                  name="seeking_pm_host"
                  value="Full Service"
                  label="Full Service"
                  checked={field.value === "Full Service"}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <RadioField
                  id="seekingCoHost"
                  name="seeking_pm_host"
                  value="Co-Host"
                  label="Co-Host"
                  checked={field.value === "Co-Host"}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                {errors.seeking_pm_host && (
                  <p className="text-red-500 text-sm">
                    {errors.seeking_pm_host.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Co-hosting consideration */}
        <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-2.5 mb-5">
          <h3 className="text-sm font-bold">Would You Consider Co-hosting?</h3>
          <Controller
            name="co_hosting"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-5">
                <RadioField
                  id="cohostingYes"
                  name="co_hosting"
                  value="Yes"
                  label="Yes"
                  checked={field.value === "Yes"}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <RadioField
                  id="cohostingNo"
                  name="co_hosting"
                  value="No"
                  label="No"
                  checked={field.value === "No"}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <RadioField
                  id="cohostingMaybe"
                  name="co_hosting"
                  value="May be"
                  label="May be"
                  checked={field.value === "May be"}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                {errors.co_hosting && (
                  <p className="text-red-500 text-sm">
                    {errors.co_hosting.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Absolute Must Haves */}
        <Controller
          name="absolute_must_have"
          control={control}
          render={({ field }) => {
            const selected = field.value || [];
            const toggleOption = (option) => {
              if (selected.includes(option)) {
                field.onChange(selected.filter((item) => item !== option));
              } else {
                field.onChange([...selected, option]);
              }
            };

            return (
              <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
                <h2 className="text-sm font-bold mb-4">
                  Mark if any of these that are ABSOLUTE MUST HAVES
                </h2>
                <div className="flex flex-wrap gap-8 mb-3">
                  {absoluteMustHaveOptions.map((label, index) => (
                    <CheckBox
                      key={index}
                      id={`absolute_must_have_${index}`}
                      name={`absolute_must_have_${index}`}
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

        {/* Involvement Level */}
        <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
          <h3 className="text-sm font-bold mb-5">
            Involvement in Day-to-Day Decisions?
          </h3>
          <Controller
            name="involvement_level"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-5">
                <RadioField
                  id="dayHighly"
                  name="involvement_level"
                  value="Highly Involved"
                  label="Highly Involved"
                  checked={field.value === "Highly Involved"}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <RadioField
                  id="daySomewhat"
                  name="involvement_level"
                  value="Somewhat Involved"
                  label="Somewhat Involved"
                  checked={field.value === "Somewhat Involved"}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <RadioField
                  id="dayMinimally"
                  name="involvement_level"
                  value="Minimally Involved"
                  label="Minimally Involved"
                  checked={field.value === "Minimally Involved"}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                {errors.involvement_level && (
                  <p className="text-red-500 text-sm">
                    {errors.involvement_level.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Renovations in Last 3 Years */}
        <div className="border border-[#2525251A] p-4 rounded-[8px] mb-6">
          <h4 className="font-bold text-sm mb-4">
            Renovations in Last 3 Years
          </h4>
          <Controller
            name="renovations"
            control={control}
            render={({ field }) => {
              const selected = field.value || [];
              const toggleValue = (label) => {
                if (selected.includes(label)) {
                  field.onChange(selected.filter((val) => val !== label));
                } else {
                  field.onChange([...selected, label]);
                }
              };
              return (
                <>
                  <div className="flex flex-wrap items-center gap-5 mb-3">
                    {renovationsList.map((item, index) => (
                      <CheckBox
                        key={index}
                        id={item.id}
                        label={item.label}
                        checked={selected.includes(item.label)}
                        onChange={() => toggleValue(item.label)}
                      />
                    ))}
                  </div>
                  {errors.renovations && (
                    <p className="text-red-500 text-sm">
                      {errors.renovations.message}
                    </p>
                  )}
                </>
              );
            }}
          />
        </div>

        {/* Condition of Property */}
        <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
          <h2 className="text-sm font-bold mb-3">Condition of Property</h2>

          {/* Flooring */}
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Flooring</h2>
            <Controller
              name="condition.Flooring"
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
                  {errors.condition?.Flooring && (
                    <p className="text-red-500 text-sm">
                      {errors.condition.Flooring.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Kitchen Appliances */}
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Kitchen Appliances</h2>
            <Controller
              name="condition.KitchenAppliances"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="appliancesExcellent"
                      value="Excellent condition"
                      label="Excellent condition"
                      checked={field.value === "Excellent condition"}
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
                  {errors.condition?.KitchenAppliances && (
                    <p className="text-red-500 text-sm">
                      {errors.condition.KitchenAppliances.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Bathroom Fixtures */}
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Bathroom Fixtures</h2>
            <Controller
              name="condition.BathroomFixtures"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="fixturesExcellent"
                      value="Excellent condition"
                      label="Excellent condition"
                      checked={field.value === "Excellent condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="fixturesAverage"
                      value="Average condition"
                      label="Average condition"
                      checked={field.value === "Average condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="fixturesNeeds"
                      value="Needs attention"
                      label="Needs attention"
                      checked={field.value === "Needs attention"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                  {errors.condition?.BathroomFixtures && (
                    <p className="text-red-500 text-sm">
                      {errors.condition.BathroomFixtures.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Furniture */}
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Furniture</h2>
            <Controller
              name="condition.Furniture"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="furnitureExcellent"
                      value="Excellent condition"
                      label="Excellent condition"
                      checked={field.value === "Excellent condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="furnitureAverage"
                      value="Average condition"
                      label="Average condition"
                      checked={field.value === "Average condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="furnitureNeeds"
                      value="Needs attention"
                      label="Needs attention"
                      checked={field.value === "Needs attention"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                  {errors.condition?.Furniture && (
                    <p className="text-red-500 text-sm">
                      {errors.condition.Furniture.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Paint/Interior */}
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Paint/Interior</h2>
            <Controller
              name="condition.PaintInterior"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="paintExcellent"
                      value="Excellent condition"
                      label="Excellent condition"
                      checked={field.value === "Excellent condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="paintAverage"
                      value="Average condition"
                      label="Average condition"
                      checked={field.value === "Average condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="paintNeeds"
                      value="Needs attention"
                      label="Needs attention"
                      checked={field.value === "Needs attention"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                  {errors.condition?.PaintInterior && (
                    <p className="text-red-500 text-sm">
                      {errors.condition.PaintInterior.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Smart Devices */}
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Smart Devices</h2>
            <Controller
              name="condition.SmartDevices"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="devicesExcellent"
                      value="Excellent condition"
                      label="Excellent condition"
                      checked={field.value === "Excellent condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="devicesAverage"
                      value="Average condition"
                      label="Average condition"
                      checked={field.value === "Average condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="devicesNeeds"
                      value="Needs attention"
                      label="Needs attention"
                      checked={field.value === "Needs attention"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                  {errors.condition?.SmartDevices && (
                    <p className="text-red-500 text-sm">
                      {errors.condition.SmartDevices.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Outdoor Amenities */}
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Outdoor Amenities</h2>
            <Controller
              name="condition.OutdoorAmenities"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="outdoorExcellent"
                      value="Excellent condition"
                      label="Excellent condition"
                      checked={field.value === "Excellent condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="outdoorAverage"
                      value="Average condition"
                      label="Average condition"
                      checked={field.value === "Average condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="outdoorNeeds"
                      value="Needs attention"
                      label="Needs attention"
                      checked={field.value === "Needs attention"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                  {errors.condition?.OutdoorAmenities && (
                    <p className="text-red-500 text-sm">
                      {errors.condition.OutdoorAmenities.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Others */}
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Others</h2>
            <Controller
              name="condition.Others"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="othersExcellent"
                      value="Excellent condition"
                      label="Excellent condition"
                      checked={field.value === "Excellent condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="othersAverage"
                      value="Average condition"
                      label="Average condition"
                      checked={field.value === "Average condition"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="othersNeeds"
                      value="Needs attention"
                      label="Needs attention"
                      checked={field.value === "Needs attention"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                  {errors.condition?.Others && (
                    <p className="text-red-500 text-sm">
                      {errors.condition.Others.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        {/* Upgrade Suggestions, Investment, Photography */}
        <div className="flex flex-wrap md:flex-nowrap items-start justify-between mb-6 gap-4">
          <Controller
            name="suggestion"
            control={control}
            render={({ field }) => (
              <div className="md:w-[33%] w-full">
                <h3 className="text-sm font-bold mb-4">
                  Are You Open to Upgrade Suggestions?
                </h3>
                <div className="flex flex-col gap-3">
                  <RadioField
                    id="suggestionYes"
                    name="suggestion"
                    value="Yes"
                    label="Yes"
                    checked={field.value === "Yes"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="suggestionNo"
                    name="suggestion"
                    value="No"
                    label="No"
                    checked={field.value === "No"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="suggestionCost"
                    name="suggestion"
                    value="Possibly, depending on cost"
                    label="Possibly, depending on cost"
                    checked={field.value === "Possibly, depending on cost"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
                {errors.suggestion && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.suggestion.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="open_investing"
            control={control}
            render={({ field }) => (
              <div className="md:w-[33%] w-full">
                <h3 className="text-sm font-bold mb-4">
                  Open to Investing for Higher ROI?
                </h3>
                <div className="flex flex-col gap-3">
                  <RadioField
                    id="investingYes"
                    name="open_investing"
                    value="Yes"
                    label="Yes"
                    checked={field.value === "Yes"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="investingNo"
                    name="open_investing"
                    value="No"
                    label="No"
                    checked={field.value === "No"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="investingMaybe"
                    name="open_investing"
                    value="May be"
                    label="May be"
                    checked={field.value === "May be"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
                {errors.open_investing && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.open_investing.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="photography"
            control={control}
            render={({ field }) => (
              <div className="md:w-[33%] w-full">
                <h3 className="text-sm font-bold mb-4">
                  Furniture & Décor Photography Ready?
                </h3>
                <div className="flex flex-col gap-3">
                  <RadioField
                    id="photographyYes"
                    name="photography"
                    value="Yes"
                    label="Yes"
                    checked={field.value === "Yes"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="photographyNo"
                    name="photography"
                    value="No"
                    label="No"
                    checked={field.value === "No"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="photographySomewhat"
                    name="photography"
                    value="Somewhat"
                    label="Somewhat"
                    checked={field.value === "Somewhat"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
                {errors.photography && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.photography.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Additional Message */}
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextArea
              type="text"
              placeholder="Enter message..."
              label="Anything else you'd like us to know?"
              {...field}
            />
          )}
        />

        {/* Description */}
        <Controller
          name="desc"
          control={control}
          render={({ field }) => (
            <TextArea
              type="text"
              placeholder="Enter message"
              label="Please tell us more about your property and any unique features or issues. The more we know, the better we can match you with the right PM options"
              {...field}
            />
          )}
        />

        {/* Submit Button */}
        <div className="flex justify-end gap-2.5">
          <Button
            type="submit"
            loading={isLoading}
            disabled={isLoading}
            className="mb-5 w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#4D72FF] disabled:opacity-50"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SubmissionForm;
