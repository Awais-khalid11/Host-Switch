import React, {useState} from "react";
import CheckBox from "../../../CheckBox/CheckBox";

const ScopeBox = () => {
  const [agreed, setAgreed] = useState(false);
  const [yard, setYard] = useState(false);
  const [pool, setPool] = useState(false);
  const [owner, setOwner] = useState(false);
  const [service, setService] = useState(false);
  const [clean, setClean] = useState(false);
  const [house, setHouse] = useState(false);
  const [permit, setPermit] = useState(false);
  const [light, setLight] = useState(false);
  const [heavy, setHeavy] = useState(false);
  const [reno, setReno] = useState(false);
  const [construct, setConstruct] = useState(false);
  const [utility, setUtility] = useState(false);
  const [upkeep, setKeep] = useState(false);
  const [land, setLand] = useState(false);
  return (
    <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
      <h4 className="text-sm font-bold mb-4">Scope of Services</h4>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          name="terms"
          id="terms"
          label="Guest communication"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <CheckBox
          name="pool"
          id="pool"
          label=" 24/7 Guest Support"
          checked={pool}
          onChange={(e) => setPool(e.target.checked)}
        />
        <CheckBox
          name="yard"
          id="yard"
          label=" Booking Management"
          checked={yard}
          onChange={(e) => setYard(e.target.checked)}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center justify-between md:gap-0 gap-5 mb-3.5">
        <CheckBox
          name="own"
          id="own"
          label=" Owner Portal / Dashboard Access"
          checked={owner}
          onChange={(e) => setOwner(e.target.checked)}
        />
        <CheckBox
          name="service"
          id="service"
          label="Concierge Services"
          checked={service}
          onChange={(e) => setService(e.target.checked)}
        />
        <CheckBox
          name="clean"
          id="clean"
          label="Cleaning Coordination"
          checked={clean}
          onChange={(e) => setClean(e.target.checked)}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          name="house"
          id="house"
          label=" In-House Cleaning Team"
          checked={house}
          onChange={(e) => setHouse(e.target.checked)}
        />
        <CheckBox
          name="permit"
          id="permit"
          label="Permit & Licensing Assistance"
          checked={permit}
          onChange={(e) => setPermit(e.target.checked)}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          name="light"
          id="light"
          label="Light Maintenance / Handyman Work"
          checked={light}
          onChange={(e) => setLight(e.target.checked)}
        />
        <CheckBox
          name="heavy"
          id="heavy"
          label="Heavy Maintenance / Handyman Work"
          checked={heavy}
          onChange={(e) => setHeavy(e.target.checked)}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          name="reno"
          id="reno"
          label="Light Construction / Renovation"
          checked={reno}
          onChange={(e) => setReno(e.target.checked)}
        />
        <CheckBox
          name="construct"
          id="construct"
          label="Heavy Construction / Renovation"
          checked={construct}
          onChange={(e) => setConstruct(e.target.checked)}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center justify-between md:gap-0 gap-5">
        <CheckBox
          name="utility"
          id="utility"
          label="Utilities Management"
          checked={utility}
          onChange={(e) => setUtility(e.target.checked)}
        />
        <CheckBox
          name="upkeep"
          id="upkeep"
          label="Pool Upkeep"
          checked={upkeep}
          onChange={(e) => setKeep(e.target.checked)}
        />
        <CheckBox
          name="land"
          id="land"
          label="Yard & Landscaping Management"
          checked={land}
          onChange={(e) => setLand(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default ScopeBox;
