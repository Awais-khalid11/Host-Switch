import React from "react";
import { UserPNG } from "../../../../constants/Imgs";
import {
  CalenderSVG,
  CallSVG,
  LocationSVG,
  SmsSVG,
  StatusSVG,
} from "../../../../constants/Icons";
import { formatDate } from "../../../../utils";

const AwaitingSam = ({ data }) => {
  const user = data?.host || {};
  const property = data?.property || {};
  const userImage = user.image
    ? `${import.meta.env.VITE_IMG_URL}${user.image}`
    : UserPNG;
  return (
    <div className="border border-[#E4E5E8] p-5 rounded-[12px] mb-5">
      <div className="flex items-center gap-2 mb-5">
        <img
          src={userImage}
          alt={user?.name || "user"}
          className="rounded-full h-[58px] w-[58px]"
        />
        <div>
          <h4 className="text-xl font-bold">{user?.name || "Unknown User"}</h4>
          <h5 className="text-sm text-[#727272]">Property Owner</h5>
        </div>
      </div>

      <div className="max-w-[639px] flex flex-wrap md:flex-nowrap justify-between">
        <div className="md:mb-0 mb-2.5 space-y-2.5">
          <InfoRow icon={SmsSVG} text={user?.email} />
          <InfoRow icon={CallSVG} text={user?.number} />
          <InfoRow
            icon={LocationSVG}
            text={[property?.address, property?.city, property?.country]
              .filter(Boolean)
              .join(", ")}
          />
        </div>

        <div className="space-y-2.5">
          <InfoRow
            icon={CalenderSVG}
            text={
              <>
                <span className="font-semibold">Match Date:</span>{" "}
                {formatDate(data?.created_at)}
              </>
            }
          />
          <div className="flex items-center gap-1 text-sm font-bold">
            <img src={StatusSVG} alt="status" />
            Status:
            <span className="bg-[#FFAF3F1A] border border-[#FFAF3F] text-[#FFAF3F] font-normal rounded-2xl px-2 py-0.5 capitalize">
              {data?.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, text }) => {
  if (!text) return null;
  return (
    <h3 className="flex items-center gap-1 text-sm font-normal">
      <img src={icon} alt="icon" />
      {text}
    </h3>
  );
};

export default AwaitingSam;
