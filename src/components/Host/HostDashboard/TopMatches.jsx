import React, { useState, useEffect } from "react";
import Match from "../Match/Match";
import { LuxePNG, ManImgPNG, ViewmodalPNG } from "../../../constants/Imgs";
import { AvatorSVG, LockSVG, StaySVG } from "../../../constants/Icons";
import Button from "../../Button/Button";
import HostViewModal from "../../Modal/HostViewModal";
import Modal from "../../Modal/Modal";
import { getData } from "../../../api/apiClient";
import NoDataFound from "../../NoDataFound";
import SkeletonCard from "../../Skeleton/SkeletonCard";

const fallbackData = [
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
];

const TopMatches = ({ matchClass, setRenderPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const data = await getData("/matche?status=suggested&limit=3");

        if (Array.isArray(data) && data.length > 0) {
          setMatches(data);
        } else {
          setMatches([]);
        }
      } catch (err) {
        console.error("Failed to fetch matches:", err);
        setMatches([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className={`${matchClass}`}>
      <div className="flex justify-between items-center mb-2.5">
        <h2 className="text-2xl font-bold">Top Matches</h2>
        <Button
          className="bg-transparent text-[#25252599] text-[12px] font-normal"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        >
          View All
        </Button>
      </div>

      {loading ? (
        <SkeletonCard count={3} />
      ) : matches.length > 0 ? (
        <Match
          matchdata={matches}
          borderBtn={true}
          setRenderPage={setRenderPage}
        />
      ) : (
        <NoDataFound
          message="No Matches Available"
          subMessage="We couldn't find any property management matches for you at this time. Please try again later."
          className="my-6"
        />
      )}

      {showModal && (
        <Modal
          modalTitle="Unlock Full Access"
          modalText="Get unlimited access to all PM companies in your market, including top-rated, premium matches."
          modalImg={LockSVG}
          onClose={() => setShowModal(false)}
          width="582px"
          height="346px"
          useBgImage={true}
          showModalIcon={true}
          showTitle={true}
          showText={true}
          updateClass="pt-10 px-8 items-start"
          textClass="!mx-0 text-start"
          ModalbgClass={ViewmodalPNG}
        >
          <HostViewModal />
        </Modal>
      )}
    </div>
  );
};

export default TopMatches;
