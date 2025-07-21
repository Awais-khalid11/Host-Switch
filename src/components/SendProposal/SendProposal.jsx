import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackarrowSVG, Thumbsup } from "../../constants/Icons";
import SendForm from "./SendForm";
import Button from "../Button/Button";
import ProposalModal from "../Modal/ProposalModal";
import Modal from "../Modal/Modal";

const SendProposal = ({setClose}) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="pt-5">
      <h2 className="font-bold text-2xl flex items-center gap-2 mb-8">
        <img
          src={BackarrowSVG}
          alt="img"
          className="cursor-pointer"
          onClick={() => setClose(false)}
        />
        Proposal
      </h2>
      <SendForm />
      <div className="flex justify-end">
        <Button
          variant=" defaultBtn"
          className="bg-[#4D72FF] text-white h-[44px] w-[160px]"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        >
          Submit
        </Button>
        {showModal && (
          <Modal
            modalTitle="Proposal Submitted Successfully"
            modalText="Your proposal has been sent. You’ll be notified when the host views or responds. Track it in your Proposals tab."
            modalImg={Thumbsup}
            onClose={() => setShowModal(false)}
            width="md:500px w-full"
            height="263px"
            useBgImage={true}
            showModalIcon={true}
            showTitle={true}
            showText={true}
          >
            <ProposalModal />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SendProposal;
