import React, { useState } from "react";
import {
  BtnsndSVG,
  BuildSVG,
  HomeSVG,
  LocationSVG,
  CircleSVG,
  EyeSVG,
  Thumbsup,
  QuestionSVG,
  BluemsgSVG,
  ModalmsgSVG,
} from "../../constants/Icons";
import Button from "../Button/Button";
import DropdownActions from "../DropDown/Dropdown";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import HostDeclineModal from "../Modal/HostDeclineModal";
import SendMessageModal from "../Modal/SendMessageModal";
import { RequestPNG, SndmsgPNG } from "../../constants/Imgs";

const IncomingCards = ({ incomingData, setCardDetail }) => {
  const navigate = useNavigate();
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dropdownActions = [
    {
      label: "View",
      icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
      onClick: () => setCardDetail("view"),
    },
    {
      label: "Decline",
      icon: <img src={CircleSVG} alt="decline" className="w-4 h-4" />,
      onClick: () => setShowDeclineModal(true),
    },
  ];

  return (
    <>
      {/* MODAL */}
      {showDeclineModal && (
        <Modal
          modalTitle="Please tell us why are you declining this Host property?"
          modalText="Your feedback helps us improve future matches."
          onClose={() => setShowDeclineModal(false)}
          width="750px"
          height="480px"
          bgColor="#4D72FF"
          updateClass="!flex-none !justify-start !items-start px-8 pt-18"
          bgClass="!flex-none !justify-start !items-start"
          textClass="w-full !mx-0 text-start"
          useBgImage={true}
          showModalIcon={true}
          showTitle={true}
          showText={true}
          modalImg={QuestionSVG}
        >
          <HostDeclineModal setClose={() => setShowDeclineModal(false)} />
        </Modal>
      )}

      {/* CARDS */}
      <div className="flex items-center justify-between flex-wrap lg:gap-4">
        {incomingData.map((item, index) => (
          <div
            key={index}
            className="border border-[#001B4429] rounded-[12px] p-5 h-[252px] lg:mb-0 lg:mr-0 mb-2.5  md:w-[49%] lg:w-[32%] w-full relative"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2.5 mb-3.5">
                <img
                  src={item.img}
                  alt="img"
                  className="h-[54px] w-[54px] rounded-full"
                />
                <div>
                  <h4 className="text-base font-medium text-[#1B252B]">
                    {item.title}
                  </h4>
                  <p className="text-[12px] font-normal text-[#727272]">
                    {item.text}
                  </p>
                </div>
              </div>
              <DropdownActions actions={dropdownActions} />
            </div>

            {/* Middle Section */}
            <div className="mb-4">
              <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5 mb-2">
                <img src={LocationSVG} alt="location" />3 King's Road, Chelsea,
                London SW3P
              </h5>
              <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5 mb-2">
                <img src={BuildSVG} alt="type" />
                Single-Family Home
              </h5>
              <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5">
                <img src={HomeSVG} alt="rooms" />3 Bed / 2 Bath
              </h5>
            </div>

            {/* Bottom Button */}
            <Button
              variant="borderbtn"
              prefixImg={BluemsgSVG}
              className="text-sm"
              onClick={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
            >
              Send Message
            </Button>
            {showModal && (
              <Modal
                modalTitle="Send a Message to Host"
                modalText="introduce yourself and invite the host to view your services."
                modalImg={ModalmsgSVG}
                onClose={() => setShowModal(false)}
                useBgImage={true}
                height="346px"
                width="582px"
                showModalIcon={true}
                showTitle={true}
                showText={true}
                updateClass="px-5 pt-18 items-start"
                textClass="!mx-0 text-start"
                ModalbgClass={SndmsgPNG}
              >
                <SendMessageModal />
              </Modal>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default IncomingCards;
