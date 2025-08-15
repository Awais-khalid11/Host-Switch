import React, { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";

const SendCheckbox = () => {
  const [agreed, setAgreed] = useState(false);
  const [yard, setYard] = useState(false);
  const [pool, setPool] = useState(false);
  const [owner, setOwner] = useState(false);
  const [light, setLight] = useState(false);
  const [reno, setReno] = useState(false);
  const [construct, setConstruct] = useState(false);
  const [utility, setUtility] = useState(false);
  return (
    <div>
      <h4 className="text-sm font-bold mb-4">Services Offered</h4>
      <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
        <div className="flex lg:flex-nowrap flex-wrap items-center gap-3 lg:gap-6 lg:mb-3.5">
          <CheckBox
            name="terms"
            id="terms"
            label="Guest communication"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="yard"
            id="yard"
            label=" 24/7 Guest Support"
            checked={yard}
            onChange={(e) => setYard(e.target.checked)}
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="pool"
            id="pool"
            label="  Booking Management"
            checked={pool}
            onChange={(e) => setPool(e.target.checked)}
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="own"
            id="own"
            label=" Cleaning Coordination"
            checked={owner}
            onChange={(e) => setOwner(e.target.checked)}
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="light"
            id="light"
            label=" Owner Portal / Dashboard Access"
            checked={light}
            onChange={(e) => setLight(e.target.checked)}
            labelClass="!text-[#000000]"
          />
        </div>
        <div className="flex  lg:flex-nowrap flex-wrap  items-center gap-3  lg:gap-10 mb-3.5">
          <CheckBox
            name="reno"
            id="reno"
            label=" In-House Cleaning Team"
            checked={reno}
            onChange={(e) => setReno(e.target.checked)}
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="construct"
            id="construct"
            label="Permit & Licensing Assistance"
            checked={construct}
            onChange={(e) => setConstruct(e.target.checked)}
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="utility"
            id="utility"
            label="Concierge Services"
            checked={utility}
            onChange={(e) => setUtility(e.target.checked)}
            labelClass="!text-[#000000]"
          />
        </div>
      </div>
    </div>
  );
};

export default SendCheckbox;
