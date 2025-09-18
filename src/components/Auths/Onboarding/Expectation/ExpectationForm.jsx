import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../InputField/InputField";
import FileUpload from "../../../UploadFile/UploadFile";
import TextArea from "../../../TextArea/TextArea";
import RadioField from "../../RadioField/RadioField";
import { ROUTES } from "../../../../constants/Routes";
import MultiCheckboxDropdown from "../Portfolio/MultiCheckboxDropdown";
import usePMForm from "../../../../store/usePMForm";
import { postData, putData } from "../../../../api/apiClient";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import useRoleStore from "../../../../store/useRoleIdStore";

const ExpectationForm = () => {
  const navigate = useNavigate();
  const { updateExpectation, getFinalPayload } = usePMForm();
  const [reviewRating, setReviewRating] = useState("");
  const [listingProfile, setListingProfile] = useState("");
  const [superhostPremierHost, setSuperhostPremierHost] = useState("");
  const [percentageChannelBooking, setPercentageChannelBooking] = useState("");
  const [cancellation, setCancellation] = useState("");
  const [occupancyRate, setOccupancyRate] = useState("");
  const [ownerRetentionRate, setOwnerRetentionRate] = useState("");
  const [contractLength, setContractLength] = useState([]);
  const [terminationTerm, setTerminationTerm] = useState("");
  const [requireFurniture, setRequireFurniture] = useState(null);
  const [companyStand, setCompanyStand] = useState("");
  const [kindProperty, setKindProperty] = useState("");
  const [idealOwner, setIdealOwner] = useState("");
  const [offerDiscount, setOfferDiscount] = useState(null);
  const [acceptStateOwner, setAcceptStateOwner] = useState(null);
  const [manageReadyStrs, setManageReadyStrs] = useState(null);
  const [propertyImprovementServices, setPropertyImprovementServices] =
    useState(null);
  const [socialMediaLinks, setSocialMediaLinks] = useState("");
  const [yelpGoogleReviewsLink, setYelpGoogleReviewsLink] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [serviceLevelGuarantees, setServiceLevelGuarantees] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { setRoleId, setUser } = useRoleStore();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    const formData = new FormData();

    formData.append("expectation_preference[review_rating]", reviewRating);
    formData.append("expectation_preference[listing_profile]", listingProfile);
    formData.append(
      "expectation_preference[superhost_premier_host]",
      superhostPremierHost
    );
    formData.append(
      "expectation_preference[percentage_channel_booking]",
      percentageChannelBooking
    );
    formData.append("expectation_preference[cancellation]", cancellation);
    formData.append("expectation_preference[occupancy_rate]", occupancyRate);
    formData.append(
      "expectation_preference[owner_retention_rate]",
      ownerRetentionRate
    );

    contractLength.forEach((val) =>
      formData.append("expectation_preference[contract_length][]", val)
    );

    formData.append(
      "expectation_preference[termination_term]",
      terminationTerm
    );
    formData.append(
      "expectation_preference[require_furniture]",
      requireFurniture
    );

    if (data.files && data.files.length > 0) {
      Array.from(data.files).forEach((file) => {
        formData.append("sample_contract", file);
      });
    }

    formData.append("expectation_preference[company_stand]", companyStand);
    formData.append("expectation_preference[kind_property]", kindProperty);
    formData.append("expectation_preference[ideal_owner]", idealOwner);
    formData.append("expectation_preference[offer_discount]", offerDiscount);
    formData.append(
      "expectation_preference[accept_state_owner]",
      acceptStateOwner
    );
    formData.append(
      "expectation_preference[manage_ready_strs]",
      manageReadyStrs
    );
    formData.append(
      "expectation_preference[property_improvement_services]",
      propertyImprovementServices
    );
    if (data.logo && data.logo.length > 0) {
      Array.from(data.logo).forEach((file) => {
        formData.append("company_logo", file);
      });
    }

    if (data.video && data.video.length > 0) {
      Array.from(data.video).forEach((file) => {
        formData.append("video", file);
      });
    }

    if (data.sample && data.sample.length > 0) {
      Array.from(data.sample).forEach((file) => {
        formData.append("sample_owner_statement", file);
      });
    }

    formData.append(
      "expectation_preference[social_media_links]",
      socialMediaLinks
    );
    formData.append(
      "expectation_preference[yelp_google_reviews_link]",
      yelpGoogleReviewsLink
    );
    formData.append("expectation_preference[team_size]", teamSize);
    formData.append(
      "expectation_preference[service_level_guarantees]",
      serviceLevelGuarantees
    );

    const expectationData = {};
    for (let [key, value] of formData.entries()) {
      if (key.endsWith("[]")) {
        const baseKey = key.slice(0, -2);
        if (!expectationData[baseKey]) {
          expectationData[baseKey] = [];
        }
        expectationData[baseKey].push(value);
      } else {
        expectationData[key] = value;
      }
    }

    updateExpectation(expectationData);

    const finalPayload = getFinalPayload();
    console.log(finalPayload);

    const apiFormData = new FormData();

    for (const [key, value] of Object.entries(finalPayload)) {
      if (Array.isArray(value)) {
        value.forEach((item) => apiFormData.append(key, item));
      } else if (value instanceof File) {
        apiFormData.append(key, value);
      } else {
        apiFormData.append(key, value);
      }
    }
    console.log(finalPayload);
    try {
      const response = await putData(
        "/auth/property-manager/profile",
        apiFormData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const user = response?.payload;
      const userRoleId = response?.payload?.role_id;
      setUser(user);
      setRoleId(userRoleId);
      toast.success("Profile submitted successfully!");
      const res = await postData("/payment/create-checkout-session");
      if (res.success && res.payload.checkoutUrl) {
        window.location.href = res.payload.checkoutUrl;
        localStorage.setItem("sessionId", res.payload.sessionId);
      } else {
        navigate(ROUTES.SUBMITTING);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <form className="md:px-0 px-2.5" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Average Review Rating (Airbnb/Vrbo)"
          id="reviewRating"
          name="reviewRating"
          type="number"
          fieldName="w-full"
          placeholder="Enter number"
          value={reviewRating}
          onChange={(e) => setReviewRating(e.target.value)}
        />

        <InputField
          label="Number of Listings Under Your Profile"
          id="listingProfile"
          name="listingProfile"
          type="number"
          fieldName="w-full"
          placeholder="Enter number"
          value={listingProfile}
          onChange={(e) => setListingProfile(e.target.value)}
        />

        <InputField
          label="Superhost / Premier Host?"
          id="superhostPremierHost"
          name="superhostPremierHost"
          type="text"
          fieldName="w-full"
          placeholder="Enter Host"
          value={superhostPremierHost}
          onChange={(e) => setSuperhostPremierHost(e.target.value)}
        />

        <InputField
          label="% of Direct Channel Bookings"
          id="percentageChannelBooking"
          name="percentageChannelBooking"
          type="number"
          fieldName="w-full"
          placeholder="Enter percentage value"
          value={percentageChannelBooking}
          onChange={(e) => setPercentageChannelBooking(e.target.value)}
        />

        <InputField
          label="Cancellations (last 6 months)"
          id="cancellation"
          name="cancellation"
          type="number"
          fieldName="w-full"
          placeholder="Enter number"
          value={cancellation}
          onChange={(e) => setCancellation(e.target.value)}
        />

        <InputField
          label="Occupancy Rate (avg past 12 months)"
          id="occupancyRate"
          name="occupancyRate"
          type="number"
          fieldName="w-full"
          placeholder="Enter percentage %"
          value={occupancyRate}
          onChange={(e) => setOccupancyRate(e.target.value)}
        />

        <InputField
          label="Owner Retention Rate (%)"
          id="ownerRetentionRate"
          name="ownerRetentionRate"
          type="number"
          fieldName="w-full"
          placeholder="Enter percentage %"
          value={ownerRetentionRate}
          onChange={(e) => setOwnerRetentionRate(e.target.value)}
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
                  label="Upload Sample Mgmt Contract"
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

        <MultiCheckboxDropdown
          label="Contract Length"
          options={["Month-to-month", "6 month", "1 year"]}
          placeholder="Select an option Or Type"
          selectedValues={contractLength}
          setSelectedValues={setContractLength}
          className="mb-5"
          dropdownKey="contract"
          isOpen={openDropdown === "contract"}
          setOpenDropdown={setOpenDropdown}
          isMulti={true}
        />

        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"Termination Terms"}
          value={terminationTerm}
          onChange={(e) => setTerminationTerm(e.target.value)}
        />

        <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5 gap-2.5 mb-5">
          <h3 className="text-sm font-bold">
            Require Furniture/Décor Upgrade?
          </h3>
          <div className="flex items-center gap-5">
            <RadioField
              id="requireFurnitureYes"
              name="requireFurniture"
              value={true}
              label="Yes"
              checked={requireFurniture === true}
              onChange={() => setRequireFurniture(true)}
            />
            <RadioField
              id="requireFurnitureNo"
              name="requireFurniture"
              value={false}
              label="No"
              checked={requireFurniture === false}
              onChange={() => setRequireFurniture(false)}
            />
          </div>
        </div>

        <div className="flex md:flex-nowrap flex-wrap md:gap-5 ">
          <Controller
            name="logo"
            control={control}
            render={({ field }) => {
              const handleFileChange = (selectedFiles) => {
                field.onChange(selectedFiles);
              };

              return (
                <div className="flex-1">
                  <FileUpload
                    label="Upload Logo"
                    value={field.value}
                    onChange={handleFileChange}
                  />

                  {errors.logo && (
                    <p className="text-red-500 text-sm -mt-5 mb-2">
                      {errors.logo.message}
                    </p>
                  )}
                </div>
              );
            }}
          />
          <Controller
            name="video"
            control={control}
            render={({ field }) => {
              const handleFileChange = (selectedFiles) => {
                field.onChange(selectedFiles);
              };

              return (
                <div className="flex-1">
                  <FileUpload
                    label="Upload Welcome Video"
                    value={field.value}
                    onChange={handleFileChange}
                  />

                  {errors.video && (
                    <p className="text-red-500 text-sm -mt-5 mb-2">
                      {errors.video.message}
                    </p>
                  )}
                </div>
              );
            }}
          />
        </div>

        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"What makes your company stand out?"}
          value={companyStand}
          onChange={(e) => setCompanyStand(e.target.value)}
        />

        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"What kind of properties/owners are NOT a fit?"}
          value={kindProperty}
          onChange={(e) => setKindProperty(e.target.value)}
        />

        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"What does your ideal owner care about?"}
          value={idealOwner}
          onChange={(e) => setIdealOwner(e.target.value)}
        />

        <div>
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3">
              Willing to offer discounts to acquire listings?
            </h3>
            <div className="flex items-center gap-10">
              <RadioField
                id="offerDiscountYes"
                name="offerDiscount"
                value={true}
                label="Yes"
                checked={offerDiscount === true}
                onChange={() => setOfferDiscount(true)}
              />
              <RadioField
                id="offerDiscountNo"
                name="offerDiscount"
                value={false}
                label="No"
                checked={offerDiscount === false}
                onChange={() => setOfferDiscount(false)}
              />
            </div>
          </div>

          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3">
              Accept out-of-state / absentee owners?
            </h3>
            <div className="flex items-center gap-10">
              <RadioField
                id="acceptStateOwnerYes"
                name="acceptStateOwner"
                value={true}
                label="Yes"
                checked={acceptStateOwner === true}
                onChange={() => setAcceptStateOwner(true)}
              />
              <RadioField
                id="acceptStateOwnerNo"
                name="acceptStateOwner"
                value={false}
                label="No"
                checked={acceptStateOwner === false}
                onChange={() => setAcceptStateOwner(false)}
              />
            </div>
          </div>

          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3">
              Manage not-yet-ready STRs?
            </h3>
            <div className="flex items-center gap-10">
              <RadioField
                id="manageReadyStrsYes"
                name="manageReadyStrs"
                value={true}
                label="Yes"
                checked={manageReadyStrs === true}
                onChange={() => setManageReadyStrs(true)}
              />
              <RadioField
                id="manageReadyStrsNo"
                name="manageReadyStrs"
                value={false}
                label="No"
                checked={manageReadyStrs === false}
                onChange={() => setManageReadyStrs(false)}
              />
            </div>
          </div>

          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3">
              Offer property improvement or upgrade services?
            </h3>
            <div className="flex items-center gap-10">
              <RadioField
                id="propertyImprovementServicesYes"
                name="propertyImprovementServices"
                value={true}
                label="Yes"
                checked={propertyImprovementServices === true}
                onChange={() => setPropertyImprovementServices(true)}
              />
              <RadioField
                id="propertyImprovementServicesNo"
                name="propertyImprovementServices"
                value={false}
                label="No"
                checked={propertyImprovementServices === false}
                onChange={() => setPropertyImprovementServices(false)}
              />
            </div>
          </div>
        </div>

        <InputField
          label="Social Media Links"
          id="socialMediaLinks"
          name="socialMediaLinks"
          type="text"
          fieldName="w-full"
          placeholder="Enter URL here.. "
          value={socialMediaLinks}
          onChange={(e) => setSocialMediaLinks(e.target.value)}
        />

        <InputField
          label="Yelp / Google Reviews Link"
          id="yelpGoogleReviewsLink"
          name="yelpGoogleReviewsLink"
          type="text"
          fieldName="w-full"
          placeholder="Enter URL here.. "
          value={yelpGoogleReviewsLink}
          onChange={(e) => setYelpGoogleReviewsLink(e.target.value)}
        />

        <InputField
          label="Team Size"
          id="teamSize"
          name="teamSize"
          type="number"
          fieldName="w-full"
          placeholder="Enter number"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
        />

        <TextArea
          type="text"
          placeholder={"Enter message"}
          label={"Any Service Level Guarantees?"}
          value={serviceLevelGuarantees}
          onChange={(e) => setServiceLevelGuarantees(e.target.value)}
        />

        <Controller
          name="sample"
          control={control}
          render={({ field }) => {
            const handleFileChange = (selectedFiles) => {
              field.onChange(selectedFiles);
            };

            return (
              <div className="flex-1">
                <FileUpload
                  label="Upload Sample Owner Statement/Reviews"
                  value={field.value}
                  onChange={handleFileChange}
                />

                {errors.sample && (
                  <p className="text-red-500 text-sm -mt-5 mb-2">
                    {errors.sample.message}
                  </p>
                )}
              </div>
            );
          }}
        />

        <div className="flex md:gap-4 gap-2">
          <Link
            className="mb-5 w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
            to={ROUTES.PORTFOLIO}
          >
            Back
          </Link>
          <button
            type="submit"
            className="mb-5 md:w-[70%] cursor-pointer w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#0050B3]"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpectationForm;
