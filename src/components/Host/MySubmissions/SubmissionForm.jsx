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
import useTantanstackClient from "../../../hook/useTantanstackClient";

const schema = z.object({
  address: z.string().min(1, "Address is required"),
  link: z.string().min(1, "Link is required"),
  reason_switching: z.string().min(1, "Reason is required"),
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
  manger: z.enum(["Yes", "No"], {
    required_error: "Please select an option",
  }),
  involvement_level: z.enum(["Yes", "No", "Minimal involvement preferred"], {
    required_error: "Please select an option",
  }),
  pm_top_priority: z.array(z.string()).min(1, "Select at least one"),
  type: z.array(z.string()).min(1, "Select at least one"),
  rented_out: z.array(z.string()).min(1, "Select at least one"),
  desc: z.string().optional(),
});

const SubmissionForm = () => {
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
  const [openDropdown, setOpenDropdown] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      address: "",
      link: "",
      reason_switching: "",
      files: [],
      open_investing: "",
      suggestion: "",
      photography: "",
      desc: "",
      co_hosting: "",
      involvement_level: "",
      split_percentage: "",
      manger: "",
      pm_top_priority: [],
      type: [],
      rented_out: [],
    },
  });

  const { mutate, isPending } = useTantanstackClient.usePostMutation(
    ["property"],
    "/property/",
    null,
    {
      onSuccess: (data) => {
        console.log("Submission response:", data);
        alert("submit data");
      },
      onError: (error) => {
        toast.error(error.message || "Submission failed");
      },
    }
  );

  const onSubmit = (formData) => {
    console.log("Submitting data:", formData);
    mutate(formData);
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
          name="reason_switching"
          control={control}
          render={({ field }) => (
            <div>
              <InputField
                label="Reason for Switching"
                id="response"
                name="response"
                type="text"
                fieldName="w-full"
                placeholder="Unresponsive support"
                {...field}
              />
              {errors.reason_switching && (
                <p className="text-red-500 text-sm -mt-6">
                  {errors.reason_switching.message}
                </p>
              )}
            </div>
          )}
        />
        <Controller
          name="files"
          control={control}
          render={({ field }) => (
            <div>
              <FileUpload label=" Upload Files" {...field} />
              {errors.files && (
                <p className="text-red-500 text-sm -mt-5 mb-2">
                  {errors.files.message}
                </p>
              )}
            </div>
          )}
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
                  isMulti={false}
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
                    value="No"
                    label="No"
                    checked={field.value === "No"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="ManagerYes"
                    name="isManager"
                    value="Yes"
                    label="Yes"
                    checked={field.value === "Yes"}
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
                  id="add"
                  name="add"
                  type="text"
                  fieldName="w-full"
                  placeholder="Enter Address"
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

          <Controller
            name="involvement_level"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <h3 className="text-sm font-bold mb-4">
                  Involvement in Day-to-Day Decisions?
                </h3>
                <div className="flex items-center gap-5">
                  <RadioField
                    id="dayYes"
                    value="Yes"
                    label="Yes"
                    checked={field.value === "Yes"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="dayNo"
                    value="No"
                    label="No"
                    checked={field.value === "No"}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <RadioField
                    id="dayMinimal"
                    value="Minimal involvement preferred"
                    label="Minimal involvement preferred"
                    checked={field.value === "Minimal involvement preferred"}
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
        <div className="mb-6">
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

        <div className="flex justify-end">
          <Button
            variant="defaultBtn"
            disabled={isPending}
            type="submit"
            className="md:w-[160px] w-full"
          >
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SubmissionForm;
