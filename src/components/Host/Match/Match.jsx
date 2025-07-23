import React, { useState } from "react";
import {
  BluemsgSVG,
  CrossSVG,
  ModalmsgSVG,
  ProfileSVG,
  RedlocationSVG,
  StarSVG,
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

const Match = ({ matchdata, borderBtn, setRenderPage }) => {
  const location = useLocation();

  const [showSendMessageModal, setShowSendMessageModal] = useState(null);
  const [showDeclineModal, setShowDeclineModal] = useState(null);
  const [showRequestModal, setShowRequestModal] = useState(null);
  const isDashboard = location.pathname.includes("dashboard");

  const navigate = useNavigate();

  const isMyMatchPage = location.pathname.includes("mymatch");
  const isMatchPage = location.pathname.includes("matches");

  return (
    <div>
      {matchdata.map((item, index) => (
        <div
          key={index}
          className="flex items-center md:flex-nowrap flex-wrap border border-[#2525251A] rounded-[20px] p-5 mb-5 w-full"
        >
          {/* LEFT SIDE */}
          <div className="flex lg:flex-nowrap flex-wrap gap-3 pb-3 md:pr-3 md:border-r border-r-[#3636361A] md:w-1/2">
            <img
              src={item.image}
              alt="img"
              className="md:w-[241px] md:h-[190px] rounded-[10px]"
            />
            <div>
              <div className="flex gap-2.5 items-center mb-3">
                <img
                  src={item.globalImg}
                  alt="img"
                  className="w-[50px] h-[50px]"
                />
                <div>
                  <h4 className="text-base font-semibold whitespace-nowrap">
                    {item.name}
                  </h4>
                  <div className="text-[#1B252B99] whitespace-nowrap text-sm font-normal flex items-center gap-1">
                    <img src={StarSVG} alt="starImg" className="w-3.5 h-3.5" />
                    <p>{item.points}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm font-normal text-[#1B252B80] max-w-[273px] mb-2">
                {item.desc}
              </p>
              <div className="text-[11px] font-normal text-black flex items-center gap-1">
                <img src={RedlocationSVG} alt="location" />
                <p>{item.location}</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex lg:flex-nowrap flex-wrap items-center justify-between gap-5 pl-3 md:w-1/2">
            <div>
              <h3 className="text-base font-bold text-[#1B252B] mb-4">
                Services
              </h3>
              <div className="mb-4 flex gap-4 flex-wrap">
                {[
                  "Property Maintenance",
                  "Guest Management",
                  "Listing Optimization",
                  "Revenue Management",
                  "Reporting & Insights",
                  "Owner Support",
                ].map((service, i) => (
                  <h5
                    key={i}
                    className="border text-[12px] font-normal border-[#0050B333] rounded-[90px] px-3 py-1"
                  >
                    {service}
                  </h5>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6">
                <SemiCircleProgress />
              </div>

              <div className="space-y-2.5">
                <Button
                  variant="borderbtn"
                  className="!border-[#1A932E] text-[#555555] text-[12px]"
                  prefixImg={ProfileSVG}
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
                      }
                    } else if (isMyMatchPage) {
                      setShowSendMessageModal(index);
                    }
                  }}
                >
                  Request a Proposal
                </Button>

                <Button
                  variant="borderbtn"
                  prefixImg={BluemsgSVG}
                  className="text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isMyMatchPage) {
                      navigate(ROUTES.HOSTMESSAGES); // ✅ MyMatch redirect
                    } else {
                      setShowSendMessageModal(index); // ✅ Dashboard opens modal
                    }
                  }}
                >
                  Send Message
                </Button>

                {/* {!isMyMatchPage && (
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
                      }}
                    >
                      Decline Match
                    </Button>
                  </div>
                )} */}

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
              modalImg={ModalmsgSVG}
              onClose={() => setShowRequestModal(null)}
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

          {/* ✅ MODALS */}
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
              <SendMessageModal />
            </Modal>
          )}

          {showDeclineModal === index && (
            <Modal
              modalTitle="Send a Message to Host"
              modalText="Introduce yourself and invite the host to view your services."
              modalImg={ModalmsgSVG}
              onClose={() => setShowDeclineModal(null)}
              useBgImage={true}
              height="500px"
              width="780px"
              showModalIcon={true}
              showTitle={true}
              showText={true}
              updateClass="px-5 pt-15 items-start"
              textClass="!mx-0 text-start"
              ModalbgClass={HostdeclinePNG}
            >
              <HostDeclineModal />
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
};

export default Match;
