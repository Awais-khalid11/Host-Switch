import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { BackarrowSVG, FillmsgSVG, GreenprofileSVG, GreentickSVG, ModalmsgSVG, QuestionSVG, RedcrossSVG } from "../../../../constants/Icons";
import Button from "../../../Button/Button";
import Modal from "../../../Modal/Modal";
import { ROUTES } from "../../../../constants/Routes";
import Introduction from "../../HostProposals/HostProposalView/Introduction";
import MyMatchModal from "../../../Modal/MyMatchModal";

const MyMatchProposal = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

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
          Proposals
        </h2>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-2.5">
          <Button
            variant="borderbtn"
            className="border-[#C30000] text-[#C30000] text-[12px] max-w-[157px]"
            prefixImg={RedcrossSVG}
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            Decline Match
          </Button>
          {showModal && (
          <Modal
            modalTitle="Please Tell us?"
            modalText="Why you chose not to move forward with this property management company."
            modalImg={QuestionSVG}
            onClose={() => setShowModal(false)}
            width="693px"
            height="446px"
            useBgImage={true}
            showModalIcon={true}
            showTitle={true}
            showText={true}
            updateClass=" px-8  items-start !justify-start"
            textClass="!mx-0 !mb-1"
          >
            <MyMatchModal />
          </Modal>
        )}
          {/* <Button
            variant="borderbtn"
            className="border-[#555555] text-[#555555] text-[12px] max-w-[157px]"
            prefixImg={FillmsgSVG}
          >
            Send a Message
          </Button> */}
          <Button
            variant="greenbtn"
            className="w-[157px] px-5"
            prefixImg={GreenprofileSVG}
            onClick={() => navigate(ROUTES.HOSTFEEDBACK)}
          >
            Request a Parposal
          </Button>
        </div>
      </div>
      <Introduction />
    </div>
  );
};

export default MyMatchProposal;
