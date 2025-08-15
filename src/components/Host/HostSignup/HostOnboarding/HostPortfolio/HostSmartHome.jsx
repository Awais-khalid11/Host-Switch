import React, {useState} from "react";
import CheckBox from "../../../../CheckBox/CheckBox";

const HostSmartHome = () => {
  const [lock, setLock] = useState(false);
  const [stats, setStats] = useState(false);
  const [smart, setSmart] = useState(false);
  const [door, setDoor] = useState(false);
  const [sensor, setSensor] = useState(false);
  const [local, setLocal] = useState(false);
  const [plug, setPlug] = useState(false);
  const [hub, setHub] = useState(false);
  const [energy, setEnergy] = useState(false);
  const [other, setOther] = useState(false);
 
  return (
    <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
      <h4 className="text-sm font-bold mb-4">Scope of Services</h4>
      <div className="flex md:flex-nowrap flex-wrap items-center md:gap-6 gap-3 mb-3.5">
        <CheckBox
          name="lock"
          id="lock"
          label="Smart Locks"
          checked={lock}
          onChange={(e) => setLock(e.target.checked)}
        />
        <CheckBox
          name="stats"
          id="stats"
          label="Smart Thermostats"
          checked={stats}
          onChange={(e) => setStats(e.target.checked)}
        />
        <CheckBox
          name="smart"
          id="smart"
          label=" Smart Lights"
          checked={smart}
          onChange={(e) => setSmart(e.target.checked)}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center md:gap-6 gap-4 mb-3.5">
        <CheckBox
          name="door"
          id="door"
          label="Smart Doorbells"
          checked={door}
          onChange={(e) => setDoor(e.target.checked)}
        />
        <CheckBox
          name="sensor"
          id="sensor"
          label="Smart Sensors"
          checked={sensor}
          onChange={(e) => setSensor(e.target.checked)}
        />
        <CheckBox
          name="local"
          id="local"
          label="Not local"
          checked={local}
          onChange={(e) => setLocal(e.target.checked)}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center md:gap-6 gap-3 mb-3.5">
        <CheckBox
          name="plug"
          id="plug"
          label=" Smart Plugs & Outlets"
          checked={plug}
          onChange={(e) => setPlug(e.target.checked)}
        />
        <CheckBox
          name="hub"
          id="hub"
          label="Smart Home Hub"
          checked={hub}
          onChange={(e) => setHub(e.target.checked)}
        />
      </div>
      <div className="flex items-center gap-6 mb-3.5">
        <CheckBox
          name="energy"
          id="energy"
          label=" Energy Monitoring Devices"
          checked={energy}
          onChange={(e) => setEnergy(e.target.checked)}
        />
        <CheckBox
          name="other"
          id="other"
          label="Other"
          checked={other}
          onChange={(e) => setOther(e.target.checked)}
        />
      </div>

    </div>
  );
};

export default HostSmartHome;
