import React, { useState, useEffect } from "react";
import CheckBox from "../../../CheckBox/CheckBox";

const SmartHome = ({ setSmartHomeTech }) => {
  const [tech, setTech] = useState({
    lock: false,
    stats: false,
    smart: false,
    door: false,
    sensor: false,
    local: false,
    plug: false,
    hub: false,
    energy: false,
    other: false,
  });

  // Map selected values into array for PortfolioForm
  useEffect(() => {
    const selected = Object.entries(tech)
      .filter(([_, val]) => val)
      .map(([key]) => key);
    setSmartHomeTech(selected);
  }, [tech, setSmartHomeTech]);

  const toggleTech = (key) => {
    setTech((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
      <h4 className="text-sm font-bold mb-4">Smart Home Tech Used</h4>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          label="Smart Locks"
          checked={tech.lock}
          onChange={() => toggleTech("lock")}
        />
        <CheckBox
          label="Smart Thermostats"
          checked={tech.stats}
          onChange={() => toggleTech("stats")}
        />
        <CheckBox
          label="Smart Lights"
          checked={tech.smart}
          onChange={() => toggleTech("smart")}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          label="Smart Doorbells"
          checked={tech.door}
          onChange={() => toggleTech("door")}
        />
        <CheckBox
          label="Smart Sensors"
          checked={tech.sensor}
          onChange={() => toggleTech("sensor")}
        />
        <CheckBox
          label="Not Local"
          checked={tech.local}
          onChange={() => toggleTech("local")}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          label="Smart Plugs & Outlets"
          checked={tech.plug}
          onChange={() => toggleTech("plug")}
        />
        <CheckBox
          label="Smart Home Hub"
          checked={tech.hub}
          onChange={() => toggleTech("hub")}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          label="Energy Monitoring Devices"
          checked={tech.energy}
          onChange={() => toggleTech("energy")}
        />
        <CheckBox
          label="Other"
          checked={tech.other}
          onChange={() => toggleTech("other")}
        />
      </div>
    </div>
  );
};

export default SmartHome;
