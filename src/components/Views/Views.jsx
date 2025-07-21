import React, { useState } from "react";
import {
  BackarrowSVG,
  CrossSVG,
  DocumentSVG,
  MsgSVG,
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
          <Button
            variant="borderbtn"
            className="border-[#555555] text-[#555555] max-w-[157px]"
            prefixImg={CrossSVG}
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            Decline Lead
          </Button>
          {showModal && (
            <Modal
              setIsOpen={setShowModal} // Close control passed here
              width="582px"
              height="263px"
              useBgImage={false}
              bgColor="#4D72FF"
              showModalIcon={false}
              updateClass="px-8"
            >
              <HostDeclineModal setClose={() => setShowModal(false)} />
            </Modal>
          )}

          <Button
            variant="borderbtn"
            className="border-[#4D72FF] text-[#4D72FF] max-w-[157px]"
            prefixImg={DocumentSVG}
            onClick={() => setSendPage(<SendProposal setClose={setSendPage} />)}
          >
            Send Proposal
          </Button>
          <Button
            variant="greenbtn"
            className="w-[157px] px-5"
            prefixImg={MsgSVG}
            onClick={() => navigate(ROUTES.MESSAGES)}
          >
            Message Host
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
