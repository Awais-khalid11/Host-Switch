import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import HostScopeBox from "./HostScopeBox";
import { ROUTES } from "../../../../../constants/Routes";
import InputField from "../../../../InputField/InputField";
import TextArea from "../../../../TextArea/TextArea";
import RadioField from "../../../../Auths/RadioField/RadioField";
import { MdAddLocation } from "react-icons/md";
import CheckBox from "../../../../CheckBox/CheckBox";
import MultiCheckboxDropdown from "../../../../Auths/Onboarding/Portfolio/MultiCheckboxDropdown";
import useHostForm from "../../../../../store/useHostForm";
import useRoleStore from "../../../../../store/useRoleIdStore";
import { toast } from "react-toastify";
import FileUpload from "../../../../UploadFile/UploadFile";

const HostPortfolioForm = () => {
  const navigate = useNavigate();
  const { property } = useRoleStore();
  const { updatePortfolio } = useHostForm();
  const [isLoading, setIsLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
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

  const watchedCurrentlyManaged = watch("currently_managed");

  const submitHandle = (data) => {
    setIsLoading(true);

    const payload = {
      anything_else: data.message,
      split_percentage: 100,
      reason_switching: data.reasons_switching,
    };

    if (property === "Multiple Properties/ Portfolio") {
      Object.assign(payload, {
        number_of_rental_properties: data.number_rental,
        address: data.property_location,
        active_str_properties: data.str_active,
        property_type: data.property_types,
        managed_by_pm: data.currently_managed,
        current_pm_company_name: data.pm_company_name,
        work_duration: data.work_duration,
        contract_photo: data.contract_photo,
        files: data.files,
        under_contract: data.under_contract,
        current_provided_services_pm: data.pm_services,
        preference_future_pm: data.pm_preference,
        rented_out: data.rented_out,
      });
    } else {
      Object.assign(payload, {
        rented_out: data.rented_out,
        type: data.property_types,
        hostingTypes: data.hosting_preference,
        cleanTypes: data.cleaning_preference,
        accountManager: data.account_manager,
        address: data.address,
        unit_apt: data.unit_apt,
        link: data.link,
      });
    }

    updatePortfolio(payload);
    navigate(ROUTES.HOSTEXPECTATIONS);
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandle)}>
        {property === "multiple" ? (
          <>
            <Controller
              control={control}
              name="number_rental"
              rules={{ required: "Number of rental properties is required" }}
              render={({ field }) => (
                <div>
                  <InputField
                    label="Number of Rental properties"
                    id="number_rental"
                    name="number_rental"
                    type="number"
                    fieldName="w-full"
                    placeholder="05"
                    {...field}
                  />
                  {errors.number_rental && (
                    <p className="text-red-500 text-sm -mt-6">
                      {errors.number_rental.message}
                    </p>
                  )}
                </div>
              )}
            />

            <Controller
              control={control}
              name="property_location"
              rules={{ required: "Property location is required" }}
              render={({ field }) => (
                <div>
                  <InputField
                    label="Property Location"
                    id="property_location"
                    name="property_location"
                    type="text"
                    fieldName="w-full"
                    placeholder="Type and select location..."
                    icon={MdAddLocation}
                    asterisk="true"
                    {...field}
                  />
                  {errors.property_location && (
                    <p className="text-red-500 text-sm -mt-6">
                      {errors.property_location.message}
                    </p>
                  )}
                </div>
              )}
            />

            <div className="my-4 space-y-3">
              <h3 className="text-sm font-bold">
                Are these properties active STR properties?
              </h3>
              <Controller
                control={control}
                name="str_active"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="cohostingYes"
                      name="str_active"
                      value="Yes"
                      label="Yes"
                      checked={field.value === "Yes"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="cohostingNo"
                      name="str_active"
                      value="No"
                      label="No"
                      checked={field.value === "No"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="cohostingMix"
                      name="str_active"
                      value="Mixture"
                      label="Mixture"
                      checked={field.value === "Mixture"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                )}
              />
              {errors.str_active && (
                <p className="text-red-500 text-sm">
                  {errors.str_active.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                control={control}
                name="property_types"
                rules={{ required: "Property type is required" }}
                render={({ field }) => (
                  <div>
                    <MultiCheckboxDropdown
                      label="Property Types"
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
                      setSelectedValues={field.onChange}
                      dropdownKey="region"
                      isOpen={openDropdown === "region"}
                      setOpenDropdown={setOpenDropdown}
                      isMulti={false}
                      className="mb-5"
                    />
                    {errors.property_types && (
                      <p className="text-red-500 text-sm -mt-3">
                        {errors.property_types.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="my-4 space-y-3">
              <h3 className="text-sm font-bold">How often rented?</h3>
              <Controller
                control={control}
                name="rented_out"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="rentf"
                      name="rented_out"
                      value="Full-time"
                      label="Full-time"
                      checked={field.value === "Full-time"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="rents"
                      name="rented_out"
                      value="Seasonal"
                      label="Seasonal"
                      checked={field.value === "Seasonal"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="rentO"
                      name="rented_out"
                      value="Occasionally"
                      label="Occasionally"
                      checked={field.value === "Occasionally"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                )}
              />
              {errors.rent_frequency && (
                <p className="text-red-500 text-sm">
                  {errors.rent_frequency.message}
                </p>
              )}
            </div>

            <div className="my-4 space-y-3">
              <h3 className="text-sm font-bold">Currently managed by a PM?</h3>
              <Controller
                control={control}
                name="currently_managed"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="no"
                      name="currently_managed"
                      value="No"
                      label="No"
                      checked={field.value === "No"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="yes"
                      name="currently_managed"
                      value="Yes"
                      label="Yes"
                      checked={field.value === "Yes"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                )}
              />
              {errors.currently_managed && (
                <p className="text-red-500 text-sm">
                  {errors.currently_managed.message}
                </p>
              )}
            </div>

            {watchedCurrentlyManaged === "Yes" && (
              <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
                <Controller
                  control={control}
                  name="pm_company_name"
                  rules={{ required: "PM company name is required" }}
                  render={({ field }) => (
                    <div className="w-full md:w-1/2">
                      <InputField
                        label="PM Company Name"
                        id="pm_company_name"
                        name="pm_company_name"
                        type="text"
                        fieldName="w-full"
                        placeholder="Enter Company Name"
                        {...field}
                      />
                      {errors.pm_company_name && (
                        <p className="text-red-500 text-sm">
                          {errors.pm_company_name.message}
                        </p>
                      )}
                    </div>
                  )}
                />

                <Controller
                  control={control}
                  name="work_duration"
                  rules={{ required: "Work duration is required" }}
                  render={({ field }) => (
                    <div className="w-full md:w-1/2">
                      <MultiCheckboxDropdown
                        label="Work Duration"
                        placeholder="Select"
                        options={[
                          "<6 months",
                          "6-12 months",
                          "1-3 years",
                          "3+ years",
                        ]}
                        selectedValues={field.value}
                        setSelectedValues={field.onChange}
                        dropdownKey="work_duration"
                        isOpen={openDropdown === "work_duration"}
                        setOpenDropdown={setOpenDropdown}
                        isMulti={false}
                        className="mb-8"
                      />
                      {errors.work_duration && (
                        <p className="text-red-500 text-sm -mt-3">
                          {errors.work_duration.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            )}

            <div className="mb-5 space-y-3">
              <h3 className="text-sm font-bold">Under Contract?</h3>
              <Controller
                control={control}
                name="under_contract"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="yes"
                      name="under_contract"
                      value="Yes"
                      label="Yes"
                      checked={field.value === "Yes"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="no"
                      name="under_contract"
                      value="No"
                      label="No"
                      checked={field.value === "No"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="not-sure"
                      name="under_contract"
                      value="Not Sure"
                      label="Not Sure"
                      checked={field.value === "Not Sure"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                )}
              />
              {errors.under_contract && (
                <p className="text-red-500 text-sm">
                  {errors.under_contract.message}
                </p>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Controller
                name="contract_photo"
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
              <Controller
                name="files"
                control={control}
                render={({ field }) => {
                  const handleFileChange = (selectedFiles) => {
                    field.onChange(selectedFiles);
                  };

                  return (
                    <div className="flex-1 ">
                      <FileUpload
                        label="Upload Multiple Property Files"
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

            <div>
              <Controller
                control={control}
                name="pm_services"
                render={({ field }) => (
                  <MultiCheckboxDropdown
                    label="Services provided by current Pm?"
                    placeholder="Select or Type..."
                    options={[
                      "Booking Management",
                      "Dynamic Pricing",
                      "Maintenance",
                      "Guest Communication",
                      "Cleaning Coordination",
                      "Concierge Services",
                      "Owner Portal/Dashboard",
                      "Other",
                    ]}
                    selectedValues={field.value}
                    setSelectedValues={field.onChange}
                    dropdownKey="pm_services"
                    isOpen={openDropdown === "pm_services"}
                    setOpenDropdown={setOpenDropdown}
                    isMulti={true}
                    className="mb-8"
                  />
                )}
              />
            </div>

            <div className="my-4 space-y-3">
              <h3 className="text-sm font-bold">Preference for future PM</h3>
              <Controller
                control={control}
                name="pm_preference"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="cohostingYes"
                      name="pm_preference"
                      value="One company for all"
                      label="One company for all"
                      checked={field.value === "One company for all"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="cohostingNo"
                      name="pm_preference"
                      value="Different companies"
                      label="Different companies"
                      checked={field.value === "Different companies"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="cohostingMix"
                      name="pm_preference"
                      value="Not sure"
                      label="Not sure"
                      checked={field.value === "Not sure"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                )}
              />
              {errors.pm_preference && (
                <p className="text-red-500 text-sm">
                  {errors.pm_preference.message}
                </p>
              )}
            </div>

            <Controller
              control={control}
              name="reasons_switching"
              render={({ field }) => <HostScopeBox control={control} />}
            />

            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <TextArea
                  type="text"
                  placeholder="Enter message..."
                  label="Anything else about your property portfolio"
                  {...field}
                />
              )}
            />
          </>
        ) : (
          <>
            <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
              <Controller
                control={control}
                name="address"
                rules={{ required: "Property address is required" }}
                render={({ field }) => (
                  <div className="md:w-1/2 w-full">
                    <InputField
                      label="Property Address"
                      id="address"
                      name="address"
                      type="text"
                      fieldName="w-full"
                      placeholder="Type and select location..."
                      icon={MdAddLocation}
                      asterisk="true"
                      {...field}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name="unit_apt"
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
                  </div>
                )}
              />
            </div>

            <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
              <Controller
                control={control}
                name="rented_out"
                rules={{ required: "Rental frequency is required" }}
                render={({ field }) => (
                  <div className="w-full md:w-1/2">
                    <MultiCheckboxDropdown
                      label="How Often Is Your Property Rented Out?"
                      placeholder="How Often Is Your Property Rented Out?"
                      options={["Full-time", "Seasonal", "Occasionally"]}
                      selectedValues={field.value}
                      setSelectedValues={field.onChange}
                      dropdownKey="rent"
                      isOpen={openDropdown === "rent"}
                      setOpenDropdown={setOpenDropdown}
                      isMulti={false}
                      className="mb-8"
                    />
                    {errors.rented_out && (
                      <p className="text-red-500 text-sm -mt-3">
                        {errors.rented_out.message}
                      </p>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name="link"
                render={({ field }) => (
                  <div className="w-full md:w-1/2">
                    <InputField
                      label="Airbnb/Vrbo Link"
                      id="link"
                      name="link"
                      type="text"
                      fieldName="w-full"
                      placeholder="Airbnb/Vrbo listing link"
                      {...field}
                    />
                  </div>
                )}
              />
            </div>

            <div>
              <Controller
                control={control}
                name="property_types"
                rules={{ required: "Property type is required" }}
                render={({ field }) => (
                  <div>
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
                      setSelectedValues={field.onChange}
                      dropdownKey="region"
                      isOpen={openDropdown === "region"}
                      setOpenDropdown={setOpenDropdown}
                      isMulti={false}
                      className="mb-5"
                    />
                    {errors.property_types && (
                      <p className="text-red-500 text-sm -mt-3">
                        {errors.property_types.message}
                      </p>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name="hosting_preference"
                render={({ field }) => (
                  <MultiCheckboxDropdown
                    label="Do you have a preference in size of your PM (Property Manager)?"
                    options={[
                      "20 properties or less",
                      "100 properties or less",
                      "Size doesn't matter",
                    ]}
                    placeholder="Select PM size preference"
                    selectedValues={field.value}
                    setSelectedValues={field.onChange}
                    dropdownKey="hosting"
                    isOpen={openDropdown === "hosting"}
                    setOpenDropdown={setOpenDropdown}
                    isMulti={true}
                    className="mb-5"
                  />
                )}
              />

              <Controller
                control={control}
                name="cleaning_preference"
                render={({ field }) => (
                  <MultiCheckboxDropdown
                    label="Do you have a cleaning preference?"
                    options={[
                      "In-house cleaners",
                      "3rd party cleaners",
                      "Doesn't matter to me",
                    ]}
                    placeholder="Select cleaning preference"
                    selectedValues={field.value}
                    setSelectedValues={field.onChange}
                    dropdownKey="clean"
                    isOpen={openDropdown === "clean"}
                    setOpenDropdown={setOpenDropdown}
                    isMulti={true}
                    className="mb-5"
                  />
                )}
              />
            </div>

            <Controller
              control={control}
              name="reasons_switching"
              render={({ field }) => <HostScopeBox control={control} />}
            />

            <div className="my-4 space-y-3">
              <h3 className="text-sm font-bold">
                Do You Currently Have a Property Manager?
              </h3>
              <Controller
                control={control}
                name="account_manager"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <div className="flex items-center gap-5">
                    <RadioField
                      id="accountYes"
                      name="account_manager"
                      value="yes"
                      label="Yes"
                      checked={field.value === "yes"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <RadioField
                      id="accountNo"
                      name="account_manager"
                      value="no"
                      label="No"
                      checked={field.value === "no"}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                )}
              />
              {errors.account_manager && (
                <p className="text-red-500 text-sm">
                  {errors.account_manager.message}
                </p>
              )}
            </div>

            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <TextArea
                  type="text"
                  placeholder="Enter message..."
                  label="Anything else you'd like us to know?"
                  {...field}
                />
              )}
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
          <button
            disabled={isLoading}
            type="submit"
            className="mb-5 md:w-[70%] w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#4D72FF] disabled:opacity-70"
          >
            {isLoading ? "Processing..." : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HostPortfolioForm;
