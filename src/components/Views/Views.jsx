import React, { useState } from "react";
import {
  BackarrowSVG,
  BluemsgSVG,
  CrossSVG,
  DocumentSVG,
  MsgSVG,
  QuestionSVG,
  RedcrossSVG,
  Thumbsup,
  ViewsndSVG,
} from "../../constants/Icons";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Sam from "./Sam";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import HostExpectations from "./HostExpectations";
import CurrentPM from "./CurrentPM";
import Documents from "./Documents";
import { ROUTES } from "../../constants/Routes";
import Modal from "../Modal/Modal";
import HostDeclineModal from "../Modal/HostDeclineModal";
import SendProposal from "../SendProposal/SendProposal";
import { HostdeclinePNG } from "../../constants/Imgs";

const Views = ({ setClose }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [sendPage, setSendPage] = useState();
  const [isOpen, setIsOpen] = useState(false);

  return sendPage ? (
    sendPage
  ) : (
    <div className="pb-2.5 pt-5">
      <div className="flex md:flex-nowrap flex-wrap items-center justify-between mb-5">
        <h2 className="font-bold text-2xl flex items-center gap-2 md:mb-0 mb-2.5">
          <img
            src={BackarrowSVG}
            alt="img"
            className="cursor-pointer"
            onClick={() => setClose(false)}
          />
          Incoming Leads
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-2.5">
          {showModal && (
            <Modal
              modalTitle="Please tell us why are you declining this Host property?"
              modalText="Your feedback helps us improve future matches."
              onClose={() => setShowModal(false)}
              width="780px"
              height="395px"
              bgColor="#4D72FF"
              updateClass="!flex-none !justify-start !items-start px-8 pt-18"
              bgClass="!flex-none !justify-start !items-start"
              textClass="w-full !mx-0 text-start"
              useBgImage={true}
              showModalIcon={true}
              
              showTitle={true}
              showText={true}
              modalImg={QuestionSVG}
              ModalbgClass={HostdeclinePNG}
            >
              <HostDeclineModal setClose={() => setShowModal(false)} />
            </Modal>
          )}

          <Button
            variant="greenbtn"
            className="w-[157px]"
            prefixImg={ViewsndSVG}
            onClick={() => setSendPage(<SendProposal setClose={setSendPage} />)}
          >
            Send Proposal
          </Button>
          <Button
            variant="borderBtn"
            className="!w-[157px] h-[48px] text-[#4D72FF] text-[12px] font-normal border border-[#4D72FF] px-5"
            prefixImg={BluemsgSVG}
            onClick={() => navigate(ROUTES.MESSAGES)}
          >
            Message Host
          </Button>
          <Button
            variant="borderbtn"
            className="border-[#CE1B1B]  text-[12px] text-[#CE1B1B] max-w-[157px]"
            prefixImg={RedcrossSVG}
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            Decline Lead
          </Button>
        </div>
      </div>
      <Sam />
      <PropertyDetails />
      <HostExpectations />
      <CurrentPM />
      <Documents />
    </div>
  );
};

export default Views;
