import React, {useState} from "react";
import CheckBox from "../../../../CheckBox/CheckBox";

const HostScopeBox = () => {
  const [newclr, setNewClr] = useState(false);
  const [yard, setYard] = useState(false);
  const [pool, setPool] = useState(false);
  const [owner, setOwner] = useState(false);
  const [service, setService] = useState(false);
  const [clean, setClean] = useState(false);
  const [house, setHouse] = useState(false);
  const [permit, setPermit] = useState(false);
  const [light, setLight] = useState(false);
  const [poor, setPoor] = useState(false);
  return (
    <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
      <h4 className="text-sm font-bold mb-4">Reason for Switching</h4>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-8 mb-3.5">
        <CheckBox
          name="clr"
          id="clr"
          label="Newly acquired property"
          checked={newclr}
          onChange={(e) => setNewClr(e.target.checked)}
        />
        <CheckBox
          name="pool"
          id="pool"
          label="Limited use of home"
          checked={pool}
          onChange={(e) => setPool(e.target.checked)}
        />
        <CheckBox
          name="yard"
          id="yard"
          label="Unfair contract terms"
          checked={yard}
          onChange={(e) => setYard(e.target.checked)}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center  md:gap-8 gap-5 mb-3.5">
        <CheckBox
          name="own"
          id="own"
          label="High fees"
          checked={owner}
          onChange={(e) => setOwner(e.target.checked)}
        />
        <CheckBox
          name="service"
          id="service"
          label="Guest issues"
          checked={service}
          onChange={(e) => setService(e.target.checked)}
        />
        <CheckBox
          name="clean"
          id="clean"
          label="Not local"
          checked={clean}
          onChange={(e) => setClean(e.target.checked)}
        />
        <CheckBox
          name="poor"
          id="poor"
          label="Poor owner relations"
          checked={poor}
          onChange={(e) => setPoor(e.target.checked)}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-8 mb-3.5">
        <CheckBox
          name="house"
          id="house"
          label="Unclear reporting"
          checked={house}
          onChange={(e) => setHouse(e.target.checked)}
        />
        <CheckBox
          name="permit"
          id="permit"
          label="Poor maintenance / upkeep"
          checked={permit}
          onChange={(e) => setPermit(e.target.checked)}
        />
         <CheckBox
          name="light"
          id="light"
          label="Others"
          checked={light}
          onChange={(e) => setLight(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default HostScopeBox;
