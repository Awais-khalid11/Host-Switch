import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../InputField/InputField";
import SelectField from "../../../SelectField/SelectField";
import RadioField from "../../RadioField/RadioField";
import CheckBox from "../../../CheckBox/CheckBox";
import { ROUTES } from "../../../../constants/Routes";
import { MarkSVG } from "../../../../constants/Icons";
import usePMForm from "../../../../store/usePMForm";
import Button from "../../../Button/Button";

const yesNoToBool = z.enum(["yes", "no"]).transform((val) => val === "yes");

const CompanyInfoSchema = z.object({
  businessName: z.string().min(1, "Business Name is required"),
  operatingName: z.string().min(1, "Operating Name is required"),
  address: z.string().min(1, "Address is required"),
  contactName: z.string().min(1, "Contact Name is required"),
  contactPhone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .regex(/^[0-9+\- ]+$/, "Invalid phone number"),
  contactEmail: z.string().email("Invalid email"),
  yearFounded: z.string().min(1, "Please select Year Founded"),
  entityType: z.string().min(1, "Please select Entity Type"),
  isLocal: yesNoToBool,
  isFullTime: yesNoToBool,
  involvement: z.string().min(1, "Please select Owner involvement"),
  markets: z.string().min(1, "Primary Market(s) is required"),
  zones: z.string().min(1, "Zones Served is required"),
  zip: z.string().min(1, "Secondary Market(s) is required"),
  specific: z.string().min(1, "Specific Neighborhoods is required"),
  distance: z.string().min(1, "Please select Distance"),
  isLicensed: yesNoToBool,
  doesPermit: yesNoToBool,
  terms: z.boolean().refine((v) => v === true, {
    message: "You must agree to Terms & Conditions",
  }),
});

const CompanyInfoForm = () => {
  const navigate = useNavigate();
  const { updateCompanyInfo } = usePMForm();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CompanyInfoSchema),
    defaultValues: {
      businessName: "",
      operatingName: "",
      address: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      yearFounded: "",
      entityType: "",
      isLocal: "",
      isFullTime: "",
      involvement: "",
      markets: "",
      zones: "",
      zip: "",
      specific: "",
      distance: "",
      isLicensed: "",
      doesPermit: "",
      terms: false,
    },
  });

  const roleOptions = [
    { label: "Select", value: "" },
    { label: "Entity1", value: "Entity1" },
    { label: "1 Months", value: "1 Months" },
  ];

  const Entity = [
    { label: "Select", value: "" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  const Involvement = [
    { label: "Select", value: "" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  const Distance = [
    { label: "Select", value: "" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  const onSubmit = (data) => {
    console.warn(data, "validated data ");

    const formData = new FormData();
    formData.append("company_profile[business_name]", data.businessName);
    formData.append("company_profile[operating_name]", data.operatingName);
    formData.append("company_profile[business_address]", data.address);
    formData.append("company_profile[year_founded]", data.yearFounded);
    formData.append("company_profile[business_type]", data.entityType);
    formData.append("company_profile[locally_based]", data.isLocal);
    formData.append("company_profile[full_time_business]", data.isFullTime);
    formData.append("company_profile[owner_involvement]", data.involvement);
    formData.append("company_profile[zip_code]", data.markets);
    formData.append("company_profile[neighborhoods_zone]", data.specific);
    formData.append("company_profile[distance_service]", data.distance);
    formData.append("company_profile[licensed_market]", data.isLicensed);
    formData.append("company_profile[permitting_client]", data.doesPermit);

    formData.append("contacts[name]", data.contactName);
    formData.append("contacts[phone]", data.contactPhone);
    formData.append("contacts[email]", data.contactEmail);
    formData.append("contacts[is_primary]", data.isPrimary ? "1" : "0");

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    updateCompanyInfo(formData);
    navigate(ROUTES.PORTFOLIO);
  };

  return (
    <div>
      <form className="md:px-0 px-2.5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3">
          <Controller
            name="businessName"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  {...field}
                  label="Legal Business Name"
                  placeholder="Enter business name"
                />
                {errors.businessName && (
                  <p className="text-red-500 text-[12px] -mt-7">
                    {errors.businessName.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="operatingName"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  {...field}
                  label="DBA / Operating Name"
                  placeholder="Enter operating name"
                />
                {errors.operatingName && (
                  <p className="text-red-500 text-[12px] -mt-7">
                    {errors.operatingName.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <div className="w-full mb-2">
              <InputField
                {...field}
                label="Business Address"
                placeholder="Enter address"
              />
              {errors.address && (
                <p className="text-red-500 text-[12px] -mt-7">
                  {errors.address.message}
                </p>
              )}
            </div>
          )}
        />

        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-2">
          <Controller
            name="contactName"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  {...field}
                  label="Primary Contact Name"
                  placeholder="Enter name"
                />
                {errors.contactName && (
                  <p className="text-red-500 text-[12px] -mt-7">
                    {errors.contactName.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="contactPhone"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  {...field}
                  label="Primary Contact Phone"
                  placeholder="XX-XXX-XXXX"
                />
                {errors.contactPhone && (
                  <p className="text-red-500 text-[12px] -mt-7">
                    {errors.contactPhone.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Contact Email & Year Founded */}
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-2">
          <Controller
            name="contactEmail"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  {...field}
                  label="Primary Contact Email"
                  type="email"
                  placeholder="Enter email"
                />
                {errors.contactEmail && (
                  <p className="text-red-500 text-[12px] -mt-7">
                    {errors.contactEmail.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="yearFounded"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <SelectField
                  {...field}
                  label="Year Founded"
                  options={roleOptions}
                  selectClass="mb-7 "
                />
                {errors.yearFounded && (
                  <p className="text-red-500 text-[12px] -mt-7">
                    {errors.yearFounded.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="mb-4">
          <Controller
            name="entityType"
            control={control}
            render={({ field }) => (
              <SelectField
                {...field}
                label="Business Entity Type"
                options={Entity}
                selectClass="mb-7 w-full"
              />
            )}
          />
        </div>
        {errors.entityType && (
          <p className="text-red-500 text-[12px] -mt-7">
            {errors.entityType.message}
          </p>
        )}

        <div className="flex md:flex-nowrap flex-wrap items-center gap-2.5 md:gap-5 mt-3 mb-5">
          <h3 className="text-sm font-bold">
            Are you locally based in the market(s) you serve?
          </h3>
          <Controller
            name="isLocal"
            control={control}
            render={({ field }) => (
              <>
                <RadioField
                  {...field}
                  value="yes"
                  label="Yes"
                  checked={field.value === "yes"}
                />
                <RadioField
                  {...field}
                  value="no"
                  label="No"
                  checked={field.value === "no"}
                />
              </>
            )}
          />
        </div>
        {errors.isLocal && (
          <p className="text-red-500 text-[12px] -mt-5">
            {errors.isLocal.message}
          </p>
        )}

        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mt-3 mb-5">
          <h3 className="text-sm font-bold">
            Is this your full-time business?
          </h3>
          <Controller
            name="isFullTime"
            control={control}
            render={({ field }) => (
              <>
                <RadioField
                  {...field}
                  value="yes"
                  label="Yes"
                  checked={field.value === "yes"}
                />
                <RadioField
                  {...field}
                  value="no"
                  label="No"
                  checked={field.value === "no"}
                />
              </>
            )}
          />
        </div>
        {errors.isFullTime && (
          <p className="text-red-500 text-[12px] -mt-5">
            {errors.isFullTime.message}
          </p>
        )}

        <div className="mt-3">
          <Controller
            name="involvement"
            control={control}
            render={({ field }) => (
              <SelectField
                {...field}
                label="Owner involvement"
                options={Involvement}
                selectClass="mb-7 w-full"
              />
            )}
          />
          {errors.involvement && (
            <p className="text-red-500 text-[12px] -mt-7">
              {errors.involvement.message}
            </p>
          )}
        </div>

        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-2">
          <Controller
            name="markets"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  {...field}
                  label="Primary Market(s)"
                  placeholder="Enter zip code"
                />
                {errors.markets && (
                  <p className="text-red-500 text-[12px] -mt-4">
                    {errors.markets.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="zones"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  {...field}
                  label="Specific Neighborhoods or Zones Served"
                  placeholder="Type here..."
                />
                {errors.zones && (
                  <p className="text-red-500 text-[12px] -mt-4">
                    {errors.zones.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="text-[10px] flex items-center gap-1 font-normal text-[#323232] -mt-10 mb-4">
          <img src={MarkSVG} alt="" />
          Separate all zip codes by a commas.
        </div>

        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mt-8">
          <Controller
            name="zip"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  {...field}
                  label="Secondary Market(s)"
                  placeholder="Enter all zip codes"
                />
                {errors.zip && (
                  <p className="text-red-500 text-[12px] -mt-4">
                    {errors.zip.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="specific"
            control={control}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  {...field}
                  label="Specific Neighborhoods or Zones Served"
                  placeholder="Type here..."
                />
                {errors.specific && (
                  <p className="text-red-500 text-[12px] -mt-4">
                    {errors.specific.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="text-[10px] flex items-center gap-1 font-normal text-[#323232] -mt-7 mb-4">
          <img src={MarkSVG} alt="" />
          Separate all zip codes by a commas.
        </div>
        <div className="mb-2.5 mt-5">
          <Controller
            name="distance"
            control={control}
            render={({ field }) => (
              <SelectField
                {...field}
                label="Maximum Distance Willing to Service (miles)"
                options={Distance}
                selectClass="mb-7 w-full"
              />
            )}
          />
          {errors.distance && (
            <p className="text-red-500 text-[12px] -mt-7">
              {errors.distance.message}
            </p>
          )}
        </div>

        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
          <h3 className="text-sm font-bold">
            Are you licensed to operate in all markets?
          </h3>
          <Controller
            name="isLicensed"
            control={control}
            render={({ field }) => (
              <>
                <RadioField
                  {...field}
                  value="yes"
                  label="Yes"
                  checked={field.value === "yes"}
                />
                <RadioField
                  {...field}
                  value="no"
                  label="No"
                  checked={field.value === "no"}
                />
              </>
            )}
          />
        </div>
        {errors.isLicensed && (
          <p className="text-red-500 text-[12px] -mt-5">
            {errors.isLicensed.message}
          </p>
        )}

        <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5 mt-3">
          <h3 className="text-sm font-bold">
            Do you handle permitting for new clients?
          </h3>
          <Controller
            name="doesPermit"
            control={control}
            render={({ field }) => (
              <>
                <RadioField
                  {...field}
                  value="yes"
                  label="Yes"
                  checked={field.value === "yes"}
                />
                <RadioField
                  {...field}
                  value="no"
                  label="No"
                  checked={field.value === "no"}
                />
              </>
            )}
          />
        </div>
        {errors.doesPermit && (
          <p className="text-red-500 text-[12px] -mt-5">
            {errors.doesPermit.message}
          </p>
        )}

        <div className="my-5">
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <CheckBox
                {...field}
                checked={field.value}
                label={
                  <>
                    <span>I agree to the</span>{" "}
                    <span className="text-[#0050B3] ml-1">
                      Terms & Conditions
                    </span>
                  </>
                }
              />
            )}
          />
        </div>
        {errors.terms && (
          <p className="text-red-500 text-[12px] -mt-5">
            {errors.terms.message}
          </p>
        )}

        {/* Buttons */}
        <div className="flex md:gap-4 gap-2 mt-2.5">
          <Link
            className="mb-5 w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
            to={ROUTES.ROLESELECTION}
          >
            Back
          </Link>
          <Button
            type="submit"
            className="mb-5 md:w-[70%] w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#0050B3]"
          >
            Save & Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfoForm;
