import React, { useState } from "react";
import {
  BluemsgSVG,
  CrossSVG,
  ModalmsgSVG,
  ProfileSVG,
  RedlocationSVG,
  StarSVG,
  Thumbsup,
} from "../../../constants/Icons";
import SemiCircleProgress from "../MatchScore";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import HostDeclineModal from "../../Modal/HostDeclineModal";
import SendMessageModal from "../../Modal/SendMessageModal";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/Routes";
import { HostdeclinePNG, RequestPNG, SndmsgPNG } from "../../../constants/Imgs";
import HostProposalView from "../HostProposals/HostProposalView/HostProposalView";
import { postData, putData } from "../../../api/apiClient";

const Match = ({ matchdata, borderBtn, setRenderPage, fetchMatches }) => {
  const location = useLocation();

  const [showSendMessageModal, setShowSendMessageModal] = useState(null);
  const [showDeclineModal, setShowDeclineModal] = useState(null);
  const [showRequestModal, setShowRequestModal] = useState(null);
  const [declineId, setDeclineId] = useState(null);
  const isDashboard = location.pathname.includes("dashboard");
  const navigate = useNavigate();
  const isMyMatchPage = location.pathname.includes("mymatch");
  const [updateStatus, setUpdateStatus] = useState(false);
  const [pmId, setPmId] = useState();
  async function requestProposal(id) {
    setUpdateStatus(true);
    try {
      const payload = {
        status: "requested",
      };

      await putData(`/matche/${id}`, payload);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setUpdateStatus(false);
    }
  }

  const onSubmit = async (id) => {
    try {
      const formData = new FormData();
      formData.append("content", "Hi");
      formData.append("userIds[0]", id);
      await postData("chat", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate(ROUTES.HOSTMESSAGES);
    } catch (error) {
      console.error("Message send failed:", error);
    }
  };

  return (
    <div>
      {matchdata.map((item, index) => (
        <div
          key={index}
          className="flex items-center md:flex-nowrap flex-wrap border border-[#2525251A] rounded-[20px] p-5 mb-5 w-full"
        >
          <div className="flex lg:flex-nowrap flex-wrap gap-3 pb-3 md:pr-3 md:border-r border-r-[#3636361A] md:w-1/2">
            <video
              className="md:w-[245px] md:h-[190px] rounded-[10px] object-cover"
              controls
            >
              <source
                src={`${import.meta.env.VITE_IMG_URL}${
                  item?.pm_user?.company_profile?.expectation_preference?.video
                }`}
                type="video/mp4"
              />
            </video>

            <div>
              <div className="flex gap-2.5 items-center mb-3">
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${
                    item?.pm_user?.company_profile?.company_logo
                  }`}
                  alt="img"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div>
                  <h4 className="text-base font-semibold whitespace-nowrap">
                    {item?.pm_user?.company_profile?.business_name}
                  </h4>
                  <div className="text-[#1B252B99] whitespace-nowrap text-sm font-normal flex items-center gap-1">
                    <img src={StarSVG} alt="starImg" className="w-3.5 h-3.5" />
                    <p>4.8 (125 reviews)</p>
                  </div>
                </div>
              </div>
              <p className="text-sm font-normal text-[#1B252B80] max-w-[273px] mb-2">
                {/* {item.desc} pending */}
                Your property stays well-maintained, profitable, and in trusted
                hands — from tenant screening to maintenance and reporting.
              </p>
              <div className="text-[11px] font-normal text-black flex items-center gap-1">
                <img src={RedlocationSVG} alt="location" />
                <p>{`${item?.pm_user?.company_profile?.city}, ${item?.pm_user?.company_profile?.country}`}</p>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-nowrap flex-wrap items-center justify-between gap-5 pl-3 md:w-1/2">
            <div>
              <h3 className="text-base font-bold text-[#1B252B] mb-4">
                Services
              </h3>
              <div className="mb-4 flex gap-4 flex-wrap">
                {item?.pm_user?.company_profile?.operation_service?.scope_service.map(
                  (service, i) => (
                    <h5
                      key={i}
                      className="border text-[12px] font-normal border-[#0050B333] rounded-[90px] px-3 py-1"
                    >
                      {service}
                    </h5>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6">
                <SemiCircleProgress percentage={item?.match_score} />
              </div>

              <div className="space-y-2.5">
                <Button
                  variant="borderbtn"
                  className="!border-[#1A932E] text-[#555555] text-[12px]"
                  prefixImg={ProfileSVG}
                  loading={updateStatus && showRequestModal === index}
                  onClick={(e) => {
                    e.preventDefault();
                    if (isDashboard) {
                      if (index === 2 && setRenderPage) {
                        setRenderPage(
                          <HostProposalView
                            setClose={() => setRenderPage(null)}
                          />
                        );
                      } else {
                        setShowRequestModal(index);
                        requestProposal(item.id);
                      }
                    } else if (isMyMatchPage) {
                      setShowSendMessageModal(index);
                      setPmId(item?.pm_user_id);
                    }
                  }}
                >
                  Request a Proposal
                </Button>

                <Button
                  variant="borderbtn"
                  prefixImg={BluemsgSVG}
                  className="text-[12px]"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isMyMatchPage) {
                      navigate(ROUTES.HOSTMESSAGES);
                      onSubmit(item?.pm_user_id);
                    } else {
                      setShowSendMessageModal(index);
                    }
                  }}
                >
                  Send Message
                </Button>

                <div
                  className={`w-full ${
                    borderBtn && index === 2
                      ? "border border-[#555555] w-[160px] h-[48px] pt-3.5 rounded-[8px] mt-2"
                      : "mt-2"
                  }`}
                >
                  <Button
                    className="!md:px-2 text-[12px] font-semibold text-[#555555]"
                    prefixImg={CrossSVG}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowDeclineModal(index);
                      setDeclineId(item.id);
                    }}
                  >
                    Decline Match
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {showRequestModal === index && (
            <Modal
              modalTitle="Request Sent Successfully"
              modalText="Your request has been sent to this Property Manager. They’ve been notified and will respond with a customized proposal shortly."
              modalImg={Thumbsup}
              onClose={() => {
                setShowRequestModal(null);
                fetchMatches();
              }}
              useBgImage={true}
              height="189px"
              width="582px"
              showModalIcon={true}
              showTitle={true}
              showText={true}
              updateClass="px-5 pt-18"
              ModalbgClass={RequestPNG}
            />
          )}

          {showSendMessageModal === index && (
            <Modal
              modalTitle="Send a Message to Host"
              modalText="Introduce yourself and invite the host to view your services."
              modalImg={ModalmsgSVG}
              onClose={() => setShowSendMessageModal(null)}
              useBgImage={true}
              height="346px"
              showModalIcon={true}
              showTitle={true}
              showText={true}
              updateClass="px-5 pt-18 items-start"
              textClass="!mx-0 text-start"
              ModalbgClass={SndmsgPNG}
            >
              <SendMessageModal
                onCancel={() => setShowSendMessageModal(null)}
                id={pmId}
              />
            </Modal>
          )}

          {showDeclineModal === index && (
            <Modal
              modalTitle="Send a Message to Host"
              modalText="Introduce yourself and invite the host to view your services."
              modalImg={ModalmsgSVG}
              onClose={() => setShowDeclineModal(null)}
              useBgImage={true}
              height="395px"
              width="800px"
              showModalIcon={true}
              showTitle={true}
              showText={true}
              updateClass="px-5 pt-15 items-start"
              textClass="!mx-0 text-start"
              ModalbgClass={HostdeclinePNG}
              iconPosition="relative -right-[4px]"
            >
              <HostDeclineModal
                id={declineId}
                onClose={() => {
                  setShowDeclineModal(null);
                  fetchMatches();
                }}
              />
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
};

export default Match;
