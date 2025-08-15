import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckBox from "../CheckBox/CheckBox";
import { ROUTES } from "../../constants/Routes";

const HostViewModal = () => {
  const [agreed, setAgreed] = useState(false);
  const [match, setMatch] = useState(false);
  const [early, setEarly] = useState(false);

  return (
    <div>
      <div className="mb-10">
        <CheckBox
          name="terms"
          id="terms"
          label="View All Property Managers"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          labelClass="text-white"
          className="mb-3.5"
        />
        <CheckBox
          name="terms"
          id="terms"
          label="Priority Match Refreshes"
          checked={match}
          onChange={(e) => setMatch(e.target.checked)}
          labelClass="text-white"
          className="mb-3.5"
        />
        <CheckBox
          name="terms"
          id="terms"
          label="Early Access to Concierge Support"
          checked={early}
          onChange={(e) => setEarly(e.target.checked)}
          labelClass="text-white"
          className="mb-3.5"
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link className="text-base rounded-[8px] font-normal flex items-center justify-center border border-white text-white w-[250px] h-[54px]"
        to={ROUTES.HOSTUNLOCK}
        >
          One-Time Fee: <span className="font-black ml-1.5">$49</span>
        </Link>
        <Link className="text-base rounded-[8px] font-normal flex items-center justify-center text-black bg-white w-[250px] h-[54px]"
         to={ROUTES.HOSTUNLOCK}
        >
          Subscribe: <span className="font-black ml-1.5">$12/month</span>
        </Link>
      </div>
    </div>
  );
};

export default HostViewModal;
