import React, { useState } from "react";
import Button from "../../../Button/Button";
import {
  BackarrowSVG,
  GreentickSVG,
  ModalmsgSVG,
} from "../../../../constants/Icons";
import { useNavigate } from "react-router-dom";
import InputField from "../../../InputField/InputField";
import SelectField from "../../../SelectField/SelectField";
import Modal from "../../../Modal/Modal";
import FeedbackModal from "../../../Modal/FeedbackModal";

const HostFeedback = () => {
  const navigate = useNavigate();
  const [entity, setEntity] = useState("");
  const [showModal, setShowModal] = useState(false);

  const Entity = [
    { label: "Select what you prefer ", value: "Select what you prefer" },
    { label: "2 Months", value: "2 Months" },
    { label: "1 Months", value: "1 Months" },
  ];

  return (
    <div>
      <div className="flex md:flex-nowrap flex-wrap items-center justify-between mb-5">
        <h2 className="font-bold text-2xl flex items-center gap-2 md:mb-0 mb-2.5">
          <img
            src={BackarrowSVG}
            alt="img"
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
          Feedback
        </h2>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-2.5">
          <Button
            variant="greenbtn"
            className="w-[157px] px-5"
            prefixImg={GreentickSVG}
          >
            Hired
          </Button>
        </div>
      </div>
      <div className="border border-[#2525251A] rounded-[20px] min-h-[246px] flex justify-center items-center mb-5">
        <div className="max-w-[706px] text-center">
          <h2 className="text-[30px] font-bold">
            Congratulations! 🎉You've Hired a New Property Manager.
          </h2>
          <div className="text-sm font-normal">
            <p>
              "We're glad you found the right fit. Help us improve by sharing a
              little feedback about your experience."
            </p>
          </div>
        </div>
      </div>
      <div className="border border-[#2525251A] p-5 rounded-[20px] mb-8">
        <form>
          <div className="flex items-center gap-[35px]">
            <SelectField
              label="Business Entity Type"
              name="entityType"
              value={entity}
              onChange={(e) => setEntity(e.target.value)}
              options={Entity}
              selectClass="mb-7 md:w-1/2 w-full"
            />
            <InputField
              label="What stood out most about this company?"
              id="text"
              name="text"
              type="text"
              fieldName="md:w-1/2 w-full"
              placeholder="They seemed really responsive and had great local market knowledge."
            />
          </div>
          <div className="flex items-center gap-[35px]">
            <InputField
              label="How would you rate their communication during the process?"
              id="text"
              name="text"
              type="text"
              fieldName="md:w-1/2 w-full"
              placeholder="They seemed really responsive and had great local market knowledge."
            />
            <InputField
              label="Any additional notes about your decision?"
              id="text"
              name="text"
              type="text"
              fieldName="md:w-1/2 w-full"
              placeholder="Any thoughts you'd like to share with us privately?"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-end gap-5">
        <Button
          variant="borderbtn"
          className="border-[#727272] text-[#727272] h-[48px] !w-[160px]"
        >
          Skip
        </Button>
        <Button variant="defaultBtn" className="!w-[160px] !h-[48px]" onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}>
          Submit Feedback
        </Button>
        {showModal && (
          <Modal
            modalTitle="Thank you!"
            modalText="Your feedback has been submitted. We wish you great success with your new property manager."
            modalImg={ModalmsgSVG}
            onClose={() => setShowModal(false)}
            width="586px"
            height="263px"
            useBgImage={true}
            showModalIcon={true}
            showTitle={true}
            showText={true}
            // updateClass="pt-10 px-8  items-start"
            // textClass="!mx-0"
          >
            <FeedbackModal />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default HostFeedback;
