import React, { useState } from "react";
import {
  BuildSVG,
  HomeSVG,
  LocationSVG,
  CircleSVG,
  EyeSVG,
  BluemsgSVG,
  ModalmsgSVG,
} from "../../constants/Icons";
import Button from "../Button/Button";
import DropdownActions from "../DropDown/Dropdown";
import Modal from "../Modal/Modal";
import HostDeclineModal from "../Modal/HostDeclineModal";
import SendMessageModal from "../Modal/SendMessageModal";
import { HostdeclinePNG, SndmsgPNG, UserPNG } from "../../constants/Imgs";
import { useNavigate } from "react-router-dom";

const IncomingCards = ({ incomingData }) => {
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();
  const [proposalId, setProposalId] = useState();
  const navigate = useNavigate();

  const dropdownActions = (item) => [
    {
      label: "View",
      icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
      onClick: () => navigate(`/pm/incomingleads/${item.id}`),
    },
    {
      label: "Decline",
      icon: <img src={CircleSVG} alt="decline" className="w-4 h-4" />,
      onClick: () => {
        setProposalId(item?.id);
        setShowDeclineModal(true);
      },
    },
  ];

  return (
    <>
      {showDeclineModal && (
        <Modal
          modalTitle="Decline Lead"
          modalText="Send a decline message to the host."
          modalImg={ModalmsgSVG}
          onClose={() => setShowDeclineModal(false)}
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
            id={proposalId}
            onClose={() => setShowDeclineModal(false)}
          />
        </Modal>
      )}

      <div className="flex items-center justify-between   flex-wrap lg:gap-4">
        {incomingData.map((item, index) => {
          const fullAddress = [
            item.address,
            item.unit_apt,
            item.city,
            item.state,
            item.zip_code,
            item.country,
          ]
            .filter(Boolean)
            .join(", ");

          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {incomingData.map((item, index) => {
                const fullAddress = [
                  item.address,
                  item.unit_apt,
                  item.city,
                  item.state,
                  item.zip_code,
                  item.country,
                ]
                  .filter(Boolean)
                  .join(", ");

                return (
                  <div
                    key={index}
                    className="border border-[#001B4429] rounded-[12px] p-5 h-full flex flex-col justify-between"
                  >
                    {/* Top Section */}
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={
                              item.user?.image
                                ? `${import.meta.env.VITE_IMG_URL}${
                                    item.user.image
                                  }`
                                : UserPNG
                            }
                            alt="user"
                            className="h-[54px] w-[54px] rounded-full object-cover border border-gray-300"
                            onError={(e) => {
                              e.currentTarget.src = UserPNG;
                            }}
                          />
                          <div>
                            <h4 className="text-base font-medium text-[#1B252B]">
                              {item.user?.name || "Property Host"}
                            </h4>
                            <p className="text-[12px] font-normal text-[#727272]">
                              {item.user?.role || "Owner"}
                            </p>
                          </div>
                        </div>
                        <DropdownActions actions={dropdownActions(item)} />
                      </div>

                      <div>
                        <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5 mb-2">
                          <img src={LocationSVG} alt="location" />
                          {fullAddress || "No address provided"}
                        </h5>
                        <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5 mb-2">
                          <img src={BuildSVG} alt="type" />
                          {item.type || "N/A"}
                        </h5>
                        <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5">
                          <img src={HomeSVG} alt="renovations" />
                          {item.renovations?.length
                            ? item.renovations.join(", ")
                            : "No renovations listed"}
                        </h5>
                      </div>
                    </div>

                    {/* Button pinned at bottom */}
                    <Button
                      variant="borderbtn"
                      prefixImg={BluemsgSVG}
                      className="text-sm mt-4"
                      onClick={() => {
                        setId(item?.user?.id);
                        setShowModal(true);
                      }}
                    >
                      Send Message
                    </Button>
                  </div>
                );
              })}
            </div>
          );
        })}

        {showModal && (
          <Modal
            modalTitle="Send a Message to Host"
            modalText="Introduce yourself and invite the host to view your services."
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
            <SendMessageModal id={id} onCancel={() => setShowModal(false)} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default IncomingCards;
