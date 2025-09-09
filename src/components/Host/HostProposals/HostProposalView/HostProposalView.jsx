import React, { useEffect, useState } from "react";
import {
  BackarrowSVG,
  BluemsgSVG,
  FillmsgSVG,
  GreentickSVG,
  ModalmsgSVG,
  MsgSVG,
  QuestionSVG,
  RedcrossSVG,
  Thumbsup,
} from "../../../../constants/Icons";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../Button/Button";
import Introduction from "./Introduction";
import { ROUTES } from "../../../../constants/Routes";
import Modal from "../../../Modal/Modal";
import DeclineModal from "../../../Modal/DeclineModal";
import HostDeclineModal from "../../../Modal/HostDeclineModal";
import SendMessageModal from "../../../Modal/SendMessageModal";
import { HostdeclinePNG, RequestPNG } from "../../../../constants/Imgs";
import HostFeedback from "../HostFeedback/HostFeedback";
import { getData, putData } from "../../../../api/apiClient";
import Skeleton from "../../../Skeleton/SkeletonCard";

const HostProposalView = ({ setClose = null }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { status } = data;
  const [updateStatus, setUpdateStatus] = useState(false);

  const fetchProposals = async () => {
    setLoading(true);
    try {
      const response = await getData(`/proposal/${id}`);
      setData(response?.payload);
    } catch (error) {
      console.error("Error fetching proposals:", error);
    } finally {
      setLoading(false);
    }
  };

  async function updateProposal(status) {
    setUpdateStatus(true);
    try {
      const payload = { status };
      const response = await putData(`/proposal/${id}`, payload);
      setFeedback(<HostFeedback setClose={setFeedback} />);
      console.log("API Success:", response);
      fetchProposals();
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setUpdateStatus(false);
    }
  }

  useEffect(() => {
    fetchProposals();
  }, []);
  return feedback ? (
    feedback
  ) : (
    <div>
      {loading ? (
        <Skeleton variant="card" count={1} hasImage rows={3} />
      ) : (
        <>
          <div className="flex md:flex-nowrap flex-wrap items-center justify-between mb-5">
            <h2 className="font-bold text-2xl flex items-center gap-2 md:mb-0 mb-2.5">
              <img
                src={BackarrowSVG}
                alt="img"
                className="cursor-pointer"
                onClick={() => (setClose ? setClose(false) : navigate(-1))}
              />
              Proposals
            </h2>
            <div className="flex  md:flex-nowrap flex-wrap items-center gap-2.5">
              <Button
                variant="greenbtn"
                className="w-[157px] px-5"
                prefixImg={GreentickSVG}
                onClick={() => updateProposal("accepted")}
                loading={updateStatus}
                disabled={status === "accepted"}
              >
                {status === "accepted" ? "Hired" : "Mark As Hired"}
              </Button>
              <Button
                variant="borderbtn"
                className="border-[#4D72FF] text-[#4D72FF] text-[12px] max-w-[157px]"
                prefixImg={BluemsgSVG}
                //  onClick={(e) => {
                //   e.preventDefault();
                //   setShowModal(true);
                // }}
                onClick={() => navigate(ROUTES.HOSTMESSAGES)}
              >
                Send a Message
              </Button>

              {status === "suggested" && (
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
              )}
              {showModal && (
                <Modal
                  modalTitle="Send Proposal Request"
                  modalText="You’re about to request a proposal from this Property Manager."
                  modalImg={QuestionSVG}
                  onClose={() => setShowModal(false)}
                  width="800px"
                  height="395px"
                  useBgImage={true}
                  showModalIcon={true}
                  showTitle={true}
                  showText={true}
                  updateClass="pt-10 px-8  items-start"
                  textClass="!mx-0 text-start"
                  ModalbgClass={HostdeclinePNG}
                  iconPosition="relative -right-[4px]"
                >
                  <HostDeclineModal id={id} />
                </Modal>
              )}
            </div>
          </div>
          <Introduction data={data} />
        </>
      )}
    </div>
  );
};

export default HostProposalView;
