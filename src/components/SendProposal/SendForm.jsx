import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputField from "../InputField/InputField";
import SelectField from "../SelectField/SelectField";
import FileUpload from "../UploadFile/UploadFile";
import SendCheckbox from "./SendCheckbox";
import Modal from "../Modal/Modal";
import { ProposalmodalPNG, RequestPNG } from "../../constants/Imgs";
import { Thumbsup } from "../../constants/Icons";
import ProposalModal from "../Modal/ProposalModal";
import Button from "../Button/Button";
import { postData } from "../../api/apiClient";
import { ROUTES } from "../../constants/Routes";
import { useNavigate, useParams } from "react-router-dom";

const SendForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const serviceLabels = {
    guest_communication: "Guest communication",
    guest_support: "24/7 Guest Support",
    booking_management: "Booking Management",
    cleaning_coordination: "Cleaning Coordination",
    owner_portal: "Owner Portal / Dashboard Access",
    in_house_cleaning: "In-House Cleaning Team",
    permit_assistance: "Permit & Licensing Assistance",
    concierge_services: "Concierge Services",
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      revenue_expectation: "",
      commission_percentage: "",
      agreement_type: "Select an option",
      start_date: "",
      onboarding_fee: "Select an option",
      message_host: "",
      video: [],
      property_proposal: [],
      sample_contract: [],
      services_offered: {
        guest_communication: false,
        guest_support: false,
        booking_management: false,
        cleaning_coordination: false,
        owner_portal: false,
        in_house_cleaning: false,
        permit_assistance: false,
        concierge_services: false,
      },
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();

      if (id) {
        formData.append("property_id", id);
      }

      formData.append("revenue_expectation", data.revenue_expectation);
      formData.append("commission_percentage", data.commission_percentage);
      formData.append("agreement_type", data.agreement_type);
      formData.append("start_date", data.start_date);
      formData.append("onboarding_fee", data.onboarding_fee);
      formData.append("message_host", data.message_host);

      const services = Object.entries(data.services_offered)
        .filter(([_, value]) => value === true)
        .map(([key]) => serviceLabels[key]);

      services.forEach((service, index) => {
        formData.append(`services_offered[${index}]`, service);
      });

      if (data.video && data.video.length > 0) {
        formData.append("video", data.video[0]);
      }

      if (data.property_proposal && data.property_proposal.length > 0) {
        formData.append("property_proposal", data.property_proposal[0]);
      }

      if (data.sample_contract && data.sample_contract.length > 0) {
        formData.append("sample_contract", data.sample_contract[0]);
      }

      await postData("proposal", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setShowModal(true);
      reset();
    } catch (error) {
      console.error("Message send failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const roleOptions = [
    { label: "Select an option", value: "Select an option" },
    { label: "Entity1", value: "Entity1" },
    { label: "1 Months", value: "1 Months" },
  ];

  const SETUP = [
    { label: "Select an option", value: "Select an option" },
    { label: "Entity1", value: "Entity1" },
    { label: "1 Months", value: "1 Months" },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex md:flex-nowrap flex-wrap md:gap-2.5">
          <Controller
            control={control}
            name="revenue_expectation"
            rules={{
              required: "Projected revenue is required",
              min: { value: 0, message: "Revenue cannot be negative" },
            }}
            render={({ field }) => (
              <div className="w-full md:w-1/2">
                <InputField
                  label="Projected 1-Year Median Revenue Expectation"
                  id="revenue_expectation"
                  name="revenue_expectation"
                  type="number"
                  fieldName="w-full"
                  placeholder="Enter number"
                  InputClass="h-[51px]"
                  {...field}
                />
                {errors.revenue_expectation && (
                  <p className="text-red-500 text-sm -mt-5 mb-2">
                    {errors.revenue_expectation.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="commission_percentage"
            rules={{
              required: "Commission percentage is required",
              min: { value: 0, message: "Commission cannot be negative" },
              max: { value: 100, message: "Commission cannot exceed 100%" },
            }}
            render={({ field }) => (
              <div className="w-full md:w-1/2">
                <InputField
                  label="Commission %"
                  id="commission_percentage"
                  name="commission_percentage"
                  type="number"
                  fieldName="w-full"
                  placeholder="Enter number & percentage value"
                  InputClass="h-[51px]"
                  {...field}
                />
                {errors.commission_percentage && (
                  <p className="text-red-500 text-sm -mt-5 mb-2">
                    {errors.commission_percentage.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex md:flex-nowrap flex-wrap gap-2.5">
          <Controller
            control={control}
            name="agreement_type"
            rules={{
              validate: (value) =>
                value !== "Select an option" ||
                "Please select an agreement type",
            }}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <SelectField
                  label="Agreement Type"
                  name="agreement_type"
                  value={field.value}
                  onChange={field.onChange}
                  options={roleOptions}
                  selectClass="w-full mb-4"
                />
                {errors.agreement_type && (
                  <p className="text-red-500 text-sm -mt-2 mb-4">
                    {errors.agreement_type.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="start_date"
            rules={{
              required: "Start date is required",
            }}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  label="Start Date Availability"
                  id="start_date"
                  name="start_date"
                  type="date"
                  fieldName="w-full"
                  placeholder="MM/YY"
                  InputClass="h-[48px]"
                  {...field}
                />
                {errors.start_date && (
                  <p className="text-red-500 text-sm -mt-5">
                    {errors.start_date.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex md:flex-nowrap flex-wrap gap-2.5">
          <Controller
            control={control}
            name="onboarding_fee"
            rules={{
              validate: (value) =>
                value !== "Select an option" ||
                "Please select a setup fee option",
            }}
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <SelectField
                  label="Setup/Onboarding Fee"
                  name="onboarding_fee"
                  value={field.value}
                  onChange={field.onChange}
                  options={SETUP}
                  selectClass="w-full mb-4"
                />
                {errors.onboarding_fee && (
                  <p className="text-red-500 text-sm -mt-2 mb-4">
                    {errors.onboarding_fee.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="message_host"
            render={({ field }) => (
              <div className="md:w-1/2 w-full">
                <InputField
                  label="Message to Host"
                  id="message_host"
                  name="message_host"
                  type="text"
                  fieldName="w-full"
                  placeholder="“Hi Sara, please find attached my proposal...”"
                  InputClass="h-[48px]"
                  {...field}
                />
              </div>
            )}
          />
        </div>

        <Controller
          control={control}
          name="video"
          render={({ field }) => (
            <FileUpload
              label="Upload Introduction Video"
              value={field.value}
              onChange={(files) => field.onChange(files)}
            />
          )}
        />

        <Controller
          control={control}
          name="services_offered"
          rules={{
            validate: (value) => {
              const atLeastOneService = Object.values(value).some(
                (service) => service === true
              );
              return atLeastOneService || "Please select at least one service";
            },
          }}
          render={({ field }) => (
            <div>
              <SendCheckbox checked={field.value} onChange={field.onChange} />
              {errors.services_offered && (
                <p className="text-red-500 text-sm -mt-2">
                  {errors.services_offered.message}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          control={control}
          name="property_proposal"
          render={({ field }) => (
            <FileUpload
              label="Upload Client Property Proposal"
              value={field.value}
              onChange={(files) => field.onChange(files)}
              type="doc"
            />
          )}
        />

        <Controller
          control={control}
          name="sample_contract"
          render={({ field }) => (
            <FileUpload
              label="Upload sample management contract (PDF)"
              value={field.value}
              onChange={(files) => field.onChange(files)}
              type="doc"
            />
          )}
        />

        <div className="flex justify-end">
          <Button
            variant="defaultBtn"
            className="bg-[#4D72FF] text-white h-[44px] w-[160px]"
            type="submit"
            disabled={loading}
          >
            Submit
          </Button>
        </div>
      </form>

      {showModal && (
        <Modal
          modalTitle="Proposal Submitted Successfully"
          modalText="Your proposal has been sent. You'll be notified when the host views or responds. Track it in your Proposals tab."
          modalImg={Thumbsup}
          onClose={() => {
            setShowModal(false);
            navigate(ROUTES.HOSTMESSAGES);
          }}
          height="263px"
          width="582px"
          useBgImage={true}
          showModalIcon={true}
          showTitle={true}
          showText={true}
          updateClass="px-5 pt-18"
          ModalbgClass={ProposalmodalPNG}
        >
          <ProposalModal />
        </Modal>
      )}
    </div>
  );
};

export default SendForm;
