import React, { useState } from "react";
import Match from "../Match/Match";
import { HostdeclinePNG, LuxePNG, ManImgPNG, ViewmodalPNG } from "../../../constants/Imgs";
import { AvatorSVG, LockSVG, QuestionSVG, StaySVG } from "../../../constants/Icons";
import Button from "../../Button/Button";
import HostProposalView from "../HostProposals/HostProposalView/HostProposalView";
import HostViewModal from "../../Modal/HostViewModal";
import Modal from "../../Modal/Modal";

const dashboarddata = [
  {
    image: LuxePNG,
    globalImg: AvatorSVG,
    name: "LuxeBnB Mgmt",
    points: "4.8 (125 reviews)",
    desc: "Your property stays well-maintained, profitable, and in trusted hands — from tenant screening to maintenance and reporting.",
    location: "4517 Washington Ave. Manchester,",
  },
  {
    image: ManImgPNG,
    globalImg: StaySVG,
    name: "StayWell Homes",
    points: "4.8 (125 reviews)",
    desc: "Your property stays well-maintained, profitable, and in trusted hands — from tenant screening to maintenance and reporting.",
    location: "4517 Washington Ave. Manchester,",
  },
  {
    image: LuxePNG,
    globalImg: AvatorSVG,
    name: "LuxeBnB Mgmt",
    points: "4.8 (125 reviews)",
    desc: "Your property stays well-maintained, profitable, and in trusted hands — from tenant screening to maintenance and reporting.",
    location: "4517 Washington Ave. Manchester,",
  },
];

const TopMatches = ({ matchClass, setRenderPage }) => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className={`${matchClass}`}>
      <div className="flex justify-between items-center mb-2.5">
        <h2 className="text-2xl font-bold">Top Matches</h2>
        <Button className="bg-transparent text-[#25252599] text-[12px] font-normal"
        onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          
        >
          View All
        </Button>
      </div>
      <Match
        matchdata={dashboarddata}
        borderBtn={true}
        setRenderPage={setRenderPage}
      />
      {showModal && (
            <Modal
              modalTitle=" Unlock Full Access"
              modalText="Get unlimited access to all PM companies in your market, including top-rated, premium matches."
              modalImg={LockSVG}
              onClose={() => setShowModal(false)}
              width="582px"
              height="346px"
              useBgImage={true}
              showModalIcon={true}
              showTitle={true}
              showText={true}
              updateClass="pt-10 px-8  items-start"
              textClass="!mx-0 text-start"
              ModalbgClass={ViewmodalPNG}
              // bgClass="overflow-auto"
            >
              <HostViewModal />
            </Modal>
          )}
    </div>
  );
};


export default TopMatches;

