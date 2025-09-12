import React from "react";
import { UserPNG } from "../../../constants/Imgs";
import {
  AccepthostSVG,
  CallSVG,
  LocationSVG,
  Send2SVG,
  SmsSVG,
  StatusSVG,
} from "../../../constants/Icons";
import SemiCircleProgress from "../../Host/MatchScore";
import NoDataFound from "../../NoDataFound";

const VerifiedSam = ({ userData }) => {
  if (!userData) {
    return <NoDataFound message="No User Information" />;
  }

  const profile = userData?.profile;
  const overview = userData?.company_overview;
  const isVerified = userData?.status === "ACTIVE";
  return (
    <div className="border border-[#E4E5E8] p-5 rounded-[12px] mb-5 flex items-center justify-between">
      <div className="md:w-[60%] w-full">
        <div className="flex items-center gap-2 mb-5">
          <img
            src={
              overview?.company_logo
                ? `${import.meta.env.VITE_IMG_URL}${overview.company_logo}`
                : UserPNG
            }
            alt="Company Logo"
            className="rounded-full h-[58px] w-[58px]"
          />
          <div>
            <h4 className="text-xl font-bold">
              {overview?.business_name || userData.name}
            </h4>
            <h5 className="font-normal text-sm text-[#727272]">
              {overview?.business_type || "Property Manager"}
            </h5>
          </div>
        </div>

        <div className="max-w-[639px] md:flex-nowrap flex-wrap flex justify-between md:flex-row flex-col">
          <div className="md:mb-0 mb-2.5">
            <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
              <img src={SmsSVG} alt="Email" />
              {profile?.emial || userData.email}
            </h3>
            <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
              <img src={CallSVG} alt="Phone" />
              {profile?.phone || userData.phone || "N/A"}
            </h3>
            <h3 className="flex items-center gap-1 text-sm font-normal">
              <img src={LocationSVG} alt="Location" />
              {profile?.business_address || "No Address"}
            </h3>
          </div>

          <div>
            <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
              <img src={Send2SVG} alt="Proposal Sent" />
              <span className="font-semibold">Proposal sent:</span>{" "}
              {profile?.proposal_sent ?? "-"}
            </h3>
            <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
              <img src={AccepthostSVG} alt="Proposal Accepted" />
              <span className="font-semibold">Accepted by Hosts:</span>{" "}
              {profile?.proposal_accepted ?? "-"}
            </h3>
            <h3 className="flex items-center gap-1 text-sm font-bold mb-2.5">
              <img src={StatusSVG} alt="Status" />
              Status:
              <span
                className={`${
                  isVerified
                    ? "bg-[#ECFDF3] text-[#067647] border-[#067647]"
                    : "bg-[#FFF0F0] text-[#CE1B1B] border-[#CE1B1B]"
                } font-normal border rounded-2xl px-2 py-0.5 ml-1`}
              >
                {isVerified ? "Verified" : "Unverified"}
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div className="md:w-[34%] w-full flex justify-center">
        <SemiCircleProgress score={profile?.match_score || 0} />
      </div>
    </div>
  );
};

export default VerifiedSam;
