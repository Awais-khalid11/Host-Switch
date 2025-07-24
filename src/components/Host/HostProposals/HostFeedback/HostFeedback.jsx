import React, { useState } from "react";
import Button from "../../../Button/Button";
import {
  BackarrowSVG,
  GreentickSVG,
  ModalmsgSVG,
  Thumbsup,
} from "../../../../constants/Icons";
import { useNavigate } from "react-router-dom";
import InputField from "../../../InputField/InputField";
import SelectField from "../../../SelectField/SelectField";
import Modal from "../../../Modal/Modal";
import FeedbackModal from "../../../Modal/FeedbackModal";
import MultiCheckboxDropdown from "../../../Auths/Onboarding/Portfolio/MultiCheckboxDropdown";
import RadioField from "../../../Auths/RadioField/RadioField";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { ConfirmmodalPNG, ProposalmodalPNG } from "../../../../constants/Imgs";


const HostFeedback = ({setClose}) => {
  const navigate = useNavigate();
  const [entity, setEntity] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [rentTypes, setRentTypes] = useState([]);
  const [isLocal, setIsLocal] = useState("");

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
            onClick={() => setClose(false)}
          />
          Feedback
        </h2>
      </div>
      <div className="border border-[#2525251A] px-2.5 rounded-[20px] min-h-[246px] flex justify-center items-center mb-5">
        <div className="max-w-[706px] text-center">
          <h2 className="md:text-[30px] text-xl mb-2.5 font-bold">
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
      <div className="border border-[#2525251A] md:p-5 md:pb-10 py-12 px-2.5 rounded-[20px] mb-8">
        <form>
          <div className="flex md:flex-nowrap flex-wrap items-center md:gap-[35px]">
            <MultiCheckboxDropdown
              label="What was the biggest reason you chose this PM company"
              options={[
                "Commission rate was fair",
                "Best services offered for my property",
                "Fast and clear communication",
                "Strong experience and reviews",
                "Local knowledge and market expertise",
                " Other",
              ]}
              selectedValues={rentTypes}
              setSelectedValues={setRentTypes}
              className="md:w-1/2 -mt-8"
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
          <div className="flex md:flex-nowrap flex-wrap items-center md:gap-[35px] ">
            <div className="mb-5 md:w-1/2 w-full">
              <h3 className="text-sm font-bold mb-2.5">
               Would you recommend HostSwitch to other property owners? 
              </h3>
             <div className="flex items-center gap-5 w-full h-[48px] mb-3.5 bg-[#FBFCFD] border border-[#2525251A] rounded-[8px] px-4 text-sm font-normal text-[#1A1A1A] placeholder:text-gray-500 focus:outline-none">
               <RadioField
                id="localYes"
                name="isLocal"
                value="yes"
                label="Yes"
                checked={isLocal === "yes"}
                onChange={(e) => setIsLocal(e.target.value)}
              />
              <RadioField
                id="localNo"
                name="isLocal"
                value="no"
                label="No"
                checked={isLocal === "no"}
                onChange={(e) => setIsLocal(e.target.value)}
              />
             </div>
            </div>
            <InputField
              label="Any additional notes about your decision?"
              id="text"
              name="text"
              type="text"
              fieldName="md:w-1/2 w-full"
              placeholder="Any thoughts you'd like to share with us privately?"
            />
          </div>
          <div className="w-full h-[48px] mb-3.5">
            <h3 className="text-sm font-bold mb-2.5">How satisfied were you with the proposals you received overall?</h3>
            <div className="flex items-center gap-2.5 bg-[#FBFCFD] border border-[#2525251A] rounded-[8px] px-4 py-2.5 placeholder:text-gray-500 focus:outline-none">
              <FaStar className="text-[#FFE70F] w-[22px] h-[22px]"/>
              <FaStar className="text-[#FFE70F] w-[22px] h-[22px]"/>
              <FaStar className="text-[#FFE70F] w-[22px] h-[22px]"/>
              <CiStar className="text-[#DEDEDE] w-[22px] h-[22px]"/>
              <CiStar className="text-[#DEDEDE] w-[22px] h-[22px]"/>
              <h4 className="text-lg font-normal text-[#DBDBDB]">3/5</h4>
            </div>
          </div>
        </form>
      </div>
      <div className="flex md:flex-nowrap flex-wrap md:justify-end gap-5">
        <Button
          variant="borderbtn"
          className="border-[#727272] text-[#727272] h-[48px] !w-[160px]"
        >
          Skip
        </Button>
        <Button
          variant="defaultBtn"
          className="!w-[160px] !h-[48px]"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        >
          Submit Feedback
        </Button>
        {showModal && (
          <Modal
            modalTitle="Thank you!"
            modalText="Your feedback has been submitted. We wish you great success with your new property manager."
            modalImg={Thumbsup}
            onClose={() => setShowModal(false)}
            width="586px"
            height="263px"
            useBgImage={true}
            showModalIcon={true}
            showTitle={true}
            showText={true}
            ModalbgClass={ConfirmmodalPNG}
            updateClass="pt-15 px-8 "
          >
            <FeedbackModal />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default HostFeedback;
