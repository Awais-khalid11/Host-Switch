import React from "react";
import { UserPNG } from "../../constants/Imgs";
import {
  CalenderSVG,
  CallSVG,
  LocationSVG,
  SmsSVG,
  StatusSVG,
} from "../../constants/Icons";

const Sam = ({ data }) => {
  const user = data?.user || {};
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
      <div className="max-w-[639px] md:flex-nowrap flex-wrap flex justify-between md:flex-row flex-col">
        <div className="md:mb-0 mb-2.5">
          <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
            <img src={SmsSVG} alt="img" />
            {user?.email}
          </h3>
          <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
            <img src={CallSVG} alt="img" />
            {user?.number}
          </h3>
          {user?.address && (
            <h3 className="flex items-center  gap-1 text-sm font-normal">
              <img src={LocationSVG} alt="img" />
              {user?.address}
            </h3>
          )}
        </div>
        {/* Todo */}
        <div>
          <h3 className="flex items-center gap-1 text-sm font-normal mb-2.5">
            <img src={CalenderSVG} alt="img" />
            <span className="font-semibold"> Match Date:</span> June 14, 2025
          </h3>
          <h3 className="flex items-center gap-1 text-sm font-bold mb-2.5">
            <img src={StatusSVG} alt="img" />
            Status:
            <span className="bg-[#ABEFC6] font-normal text-[#067647] rounded-2xl px-2 py-0.5">
              Matched
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sam;
