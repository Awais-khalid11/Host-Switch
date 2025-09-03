import React, { useState } from "react";
import Button from "../../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../InputField/InputField";
import SelectField from "../../../SelectField/SelectField";
import FileUpload from "../../../UploadFile/UploadFile";
import TextArea from "../../../TextArea/TextArea";
import RadioField from "../../RadioField/RadioField";
import { ROUTES } from "../../../../constants/Routes";
import MultiCheckboxDropdown from "../Portfolio/MultiCheckboxDropdown";
import usePMForm from "../../../../store/usePMForm";
import { putData } from "../../../../api/apiClient";
import { toast } from "react-toastify";

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
  const [sampleMgmtContract, setSampleMgmtContract] = useState(null);
  const [logo, setLogo] = useState(null);
  const [welcomeVideo, setWelcomeVideo] = useState(null);
  const [sampleOwnerStatement, setSampleOwnerStatement] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    if (sampleMgmtContract) {
      formData.append("sample_contract", sampleMgmtContract);
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

    if (logo) {
      formData.append("company_logo", logo);
    }

    if (welcomeVideo) {
      formData.append("video", welcomeVideo);
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

    if (sampleOwnerStatement) {
      formData.append("sample_owner_statement", sampleOwnerStatement);
    }

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
      const res = await putData("/auth/property-manager/profile", apiFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Form submitted successfully!");
      localStorage.removeItem("token");
      navigate(ROUTES.SUBMITTING);
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit form. Try again!");
    }
  };

  const handleFileUpload = (setter) => (files) => {
    const file = files[0];
    setter(file);
  };
  return (
    <div>
      <form className="md:px-0 px-2.5" onSubmit={handleSubmit}>
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

        <FileUpload
          label="Upload Sample Mgmt Contract"
          onChange={handleFileUpload(setSampleMgmtContract)}
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
          <FileUpload
            label="Upload Logo"
            onChange={handleFileUpload(setLogo)}
          />
          <FileUpload
            label="Upload Welcome Video"
            onChange={handleFileUpload(setWelcomeVideo)}
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

        <FileUpload
          label="Upload Sample Owner Statement / Reviews"
          onChange={handleFileUpload(setSampleOwnerStatement)}
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
            className="mb-5 md:w-[70%] w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#0050B3]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpectationForm;
