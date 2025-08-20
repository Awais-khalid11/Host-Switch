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

const schema = z.object({
  address: z.string().min(1, "Address is required"),
  link: z.string().min(1, "Link is required"),
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
  manger: z.enum(["True", "False"], {
    required_error: "Please select an option",
  }),
  involvement_level: z.enum(["Yes", "No", "Minimal involvement preferred"], {
    required_error: "Please select an option",
  }),
  pm_top_priority: z.array(z.string()).min(1, "Select at least one"),
  renovations: z.array(z.string()).min(1, "Select at least one"),
  reason_switching: z.array(z.string()).min(1, "Select at least one"),
  type: z.array(z.string()).min(1, "Select at least one"),
  rented_out: z.array(z.string()).min(1, "Select at least one"),
  desc: z.string().optional(),

  current_pm_company_name: z.string().min(1, "CompanyName is required"),
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
      .nonempty("Smart Devices condition is required"),
    Others: z.string().nonempty("Smart Devices condition is required"),
  }),

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

const SubmissionForm = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
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
    { id: 8, label: "Others" },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      address: "",
      link: "",
      files: [],
      open_investing: "",
      suggestion: "",
      photography: "",
      desc: "",
      co_hosting: "",
      involvement_level: "",
      split_percentage: "",
      manger: "",
      pm_top_priority: "",
      type: [],
      rented_out: [],
      renovations: [],
      reason_switching: [],
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


  // const { mutate, isPending } = useTantanstackClient.usePostMutation(
  //   ["property"],
  //   "/property/",
  //   null,
  //   {
  //     onSuccess: (data) => {
  //       console.log("Submission response:", data);
  //       alert("submit data");
  //     },
  //     onError: (error) => {
  //       toast.error(error.message || "Submission failed");
  //     },
  //   }
  // );

  const { mutateAsync: PostSubmitForm, isPending } = useMutation({
    mutationFn: SubmitFormDataMutation,

    onSuccess: (data) => {
      console.log("Submission response:", data);
      alert("submit data");
    },
    onError: (error) => {
      toast.error(error.message || "Submission failed");
    },
  });


  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("link", data.link);
    data.reason_switching.forEach((reason, index) => {
      formData.append(`reason_switching[${index}]`, reason);
    });
    (data.renovations || []).forEach((renovate, index) => {
      formData.append(`renovations[${index}]`, renovate);
    });

    formData.append("rented_out", data.rented_out.join(","));
    formData.append("type", data.type.join(","));
    formData.append("manger", data.manger);
    formData.append("pm_top_priority", data.pm_top_priority.join(","));
    formData.append("co_hosting", data.co_hosting);
    formData.append("involvement_level", data.involvement_level);
    formData.append("suggestion", data.suggestion);
    formData.append("open_investing", data.open_investing);
    formData.append("photography", data.photography);
    formData.append("desc", data.desc);
    formData.append("address", data.address || "");
    formData.append("split_percentage", data.split_percentage || "");

    if (data.files && data.files.length > 0) {
      data.files.forEach((file) => {
        formData.append("files", file);
      });
    }
    Object.entries(data.condition).forEach(([key, value]) => {
      formData.append(`condition[${key}]`, value);
    });

    console.log("Submitting data:", formData);
    console.log("Form Values before append:", data);
    PostSubmitForm(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex md:flex-nowrap flex-wrap items-center md:gap-4">
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
                  placeholder="DHA Phase 6, Lahore"
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
            name="link"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  label="Airbnb/Vrbo Link"
                  id="link"
                  name="link"
                  type="text"
                  fieldName=" w-full"
                  placeholder="Enter your last name"
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
        <Controller
          name="files"
          control={control}
          render={({ field }) => {
            const handleFileChange = (selectedFiles) => {
              field.onChange(selectedFiles);
              console.log("Files selected:", selectedFiles);
            };

            return (
              <div>
                <FileUpload
                  label="Upload Files"
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
        <div className="flex md:flex-nowrap flex-wrap items-center gap-4 mb-5">
          <Controller
            name="rented_out"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <MultiCheckboxDropdown
                  label="How Often Is Your Property Rented Out?"
                  placeholder="Select option"
                  options={["Full-time", "Seasonal", "Occasionally"]}
                  selectedValues={field.value}
                  setSelectedValues={(values) => field.onChange(values)}
                  dropdownKey="rent"
                  isOpen={openDropdown === "rent"}
                  setOpenDropdown={setOpenDropdown}
                  isMulti={false}
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
            name="type"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <MultiCheckboxDropdown
                  label="Type of Property"
                  options={[
                    "Condo",
                    "Multi-Family/Fuplex",
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
                  isMulti={true}
                />
                {errors.type && (
                  <p className="text-red-500 text-sm">{errors.type.message}</p>
                )}
              </div>
            )}
          />
        </div>

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
                    {reasonSwitchingList.map((item) => {
                      return (
                        <CheckBox
                          key={item.index}
                          id={item.id}
                          label={item.label}
                          checked={selected.includes(item.label)}
                          onChange={() => toggleValue(item.label)}
                        />
                      );
                    })}
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

        <div className="flex flex-wrap md:flex-nowrap items-center gap-5 mb-6">
          <h3 className="text-sm font-bold">
            Do You Currently Have a Property Manager?
          </h3>
          <Controller
            name="manger"
            control={control}
            render={({ field }) => (
              <div>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="ManagerNo"
                    name="isManager"
                    value="False"
                    label="False"
                    checked={field.value === "False"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="ManagerYes"
                    name="isManager"
                    value="True"
                    label="True"
                    checked={field.value === "True"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
                {errors.manger && (
                  <p className="text-red-500 text-sm -mt-2">
                    {errors.manger.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="flex md:flex-nowrap flex-wrap items-center md:gap-4">
          <Controller
            name="split_percentage"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  label="Property AdIdeal % Split You’d Like to Paydress"
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
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 mb-6">
          <div className="md:w-1/2 w-full">
            <h3 className="text-sm font-bold mb-4">
              Would You Consider Co-hosting?
            </h3>
            <Controller
              name="co_hosting"
              control={control}
              render={({ field }) => (
                <div>
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="hostingNo"
                      value="No"
                      label="No"
                      checked={field.value === "No"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="hostingYes"
                      value="Yes"
                      label="Yes"
                      checked={field.value === "Yes"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="hostingMaybe"
                      value="May be"
                      label="May be"
                      checked={field.value === "May be"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                  {errors.co_hosting && (
                    <p className="text-red-500 text-sm ">
                      {errors.co_hosting.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>
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

        <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-6">
          <Controller
            name="suggestion"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="md:w-[40%] w-full">
                <h3 className="text-sm font-bold mb-4">
                  Are You Open to Upgrade Suggestions?
                </h3>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="UpgradeYes"
                    name={field.name}
                    value="Yes"
                    label="Yes"
                    checked={field.value === "Yes"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="UpgradeNo"
                    name={field.name}
                    value="No"
                    label="No"
                    checked={field.value === "No"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="Upgradecost"
                    name={field.name}
                    value="Possibly, depending on cost"
                    label="Possibly, depending on cost"
                    checked={field.value === "Possibly, depending on cost"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
                {errors.suggestion && (
                  <p className="text-red-500 text-sm ">
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
                    checked={field.value === "Yes"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="OpenNo"
                    name="isOpen"
                    value="No"
                    label="No"
                    checked={field.value === "No"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="Openbe"
                    name="isOpen"
                    value="May be"
                    label="May be"
                    checked={field.value === "May be"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
                {errors.open_investing && (
                  <p className="text-red-500 text-sm ">
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
              <div className="md:w-[30%] w-full">
                <h3 className="text-sm font-bold mb-4">
                  Furniture & Décor Photography Ready?
                </h3>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="Décoryes"
                    name={field.name}
                    value="Yes"
                    label="Yes"
                    checked={field.value === "Yes"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="DécorNo"
                    name={field.name}
                    value="No"
                    label="No"
                    checked={field.value === "No"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="DécorSomewhat"
                    name={field.name}
                    value="Somewhat"
                    label="Somewhat"
                    checked={field.value === "Somewhat"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
                {errors.photography && (
                  <p className="text-red-500 text-sm ">
                    {errors.photography.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <Controller
          name="desc"
          control={control}
          render={({ field }) => (
            <TextArea
              type="text"
              value="meesage"
              placeholder="Enter message..."
              label="Anything else you'd like us to know?"
              {...field}
            />
          )}
        />

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
                  <div className="flex flex-wrap justify-between  gap-4 mb-3">
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
            <h2 className="text-sm font-bold w-[200px]">Flooring</h2>
            <Controller
              name="condition.Flooring"
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
                  {errors.condition?.Flooring && (
                    <p className="text-red-500 text-sm">
                      {errors.condition.Flooring.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Kitchen Appliances</h2>
            <Controller
              name="condition.KitchenAppliances"
              id="kitchen"
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
                    <p className="text-red-500 text-sm ">
                      {errors.condition.KitchenAppliances.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Bathroom Fixtures</h2>
            <div>
              <Controller
                name="condition.BathroomFixtures"
                id="BathroomFixtures"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="fixturesExcellent"
                        name="fixtures"
                        value="Excellent condition"
                        label="Excellent condition"
                        checked={field.value === "Excellent condition"}
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
                    {errors.condition?.BathroomFixtures && (
                      <p className="text-red-500 text-sm ">
                        {errors.condition.BathroomFixtures.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Furniture</h2>
            <div>
              <Controller
                name="condition.Furniture"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="furnitureExcellent"
                        name="furniture"
                        value="Excellent condition"
                        label="Excellent condition"
                        checked={field.value === "Excellent condition"}
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
                    {errors.condition?.Furniture && (
                      <p className="text-red-500 text-sm ">
                        {errors.condition.Furniture.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Paint/Interior</h2>
            <div>
              <Controller
                name="condition.PaintInterior"
                id="PaintInterior"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="paintExcellent"
                        name="paint"
                        value="Excellent condition"
                        label="Excellent condition"
                        checked={field.value === "Excellent condition"}
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
                    {errors.condition?.PaintInterior && (
                      <p className="text-red-500 text-sm ">
                        {errors.condition.PaintInterior.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Smart Devices</h2>
            <div>
              <Controller
                name="condition.SmartDevices"
                id="SmartDevices"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="devicesExcellent"
                        name="devices"
                        value="Excellent condition"
                        label="Excellent condition"
                        checked={field.value === "Excellent condition"}
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
                    {errors.condition?.SmartDevices && (
                      <p className="text-red-500 text-sm ">
                        {errors.condition.SmartDevices.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Outdoor Amenities</h2>
            <div>
              <Controller
                name="condition.OutdoorAmenities"
                id="OutdoorAmenities"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="outdoorExcellent"
                        name="outdoor"
                        value="Excellent condition"
                        label="Excellent condition"
                        checked={field.value === "Excellent condition"}
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
                    {errors.condition?.OutdoorAmenities && (
                      <p className="text-red-500 text-sm ">
                        {errors.condition.OutdoorAmenities.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-10 mb-5">
            <h2 className="text-sm font-bold w-[200px]">Others</h2>
            <div>
              <Controller
                name="condition.Others"
                id="Others"
                control={control}
                render={({ field }) => (
                  <div>
                    <div className="flex items-center gap-5">
                      <RadioField
                        id="othersExcellent"
                        name="others"
                        value="Excellent condition"
                        label="Excellent condition"
                        checked={field.value === "Excellent condition"}
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
                    {errors.condition?.Others && (
                      <p className="text-red-500 text-sm ">
                        {errors.condition.Others.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
        <TextArea
          type="text"
          placeholder={"Enter message"}
          label={
            "Please tell us more about your property and any unique features or issues. The more we know, the better we can match you with the right PM options"
          }
        />
        <div className="flex justify-end gap-2.5">

          <Button
            type="submit"
            displayed={isPending}
            className="mb-5 w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#4D72FF]"
          >
            {isPending ? "Submitting...." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SubmissionForm;
