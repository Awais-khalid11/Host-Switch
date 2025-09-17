import React, { useState, useEffect } from "react";
import CheckBox from "../../../CheckBox/CheckBox";

const ScopeBox = ({ setScopeServices }) => {
  const [services, setServices] = useState({
    guest: false,
    support: false,
    booking: false,
    owner: false,
    concierge: false,
    cleaning: false,
    house: false,
    permit: false,
    light: false,
    heavy: false,
    reno: false,
    construct: false,
    utility: false,
    upkeep: false,
    land: false,
  });

  // Map the state into an array whenever values change
  useEffect(() => {
    const selected = Object.entries(services)
      .filter(([_, val]) => val)
      .map(([key]) => key);
    setScopeServices(selected);
  }, [services, setScopeServices]);

  const toggleService = (key) => {
    setServices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
      <h4 className="text-sm font-bold mb-4">
        Scope of services required in new Managment Under cleaners
      </h4>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          label="Guest communication"
          checked={services.guest}
          onChange={() => toggleService("guest")}
        />
        <CheckBox
          label="24/7 Guest Support"
          checked={services.support}
          onChange={() => toggleService("support")}
        />
        <CheckBox
          label="Booking Management"
          checked={services.booking}
          onChange={() => toggleService("booking")}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          label="Owner Portal / Dashboard Access"
          checked={services.owner}
          onChange={() => toggleService("owner")}
        />
        <CheckBox
          label="Concierge Services"
          checked={services.concierge}
          onChange={() => toggleService("concierge")}
        />
        <CheckBox
          label="Cleaning Coordination"
          checked={services.cleaning}
          onChange={() => toggleService("cleaning")}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          label="In-House Cleaning Team"
          checked={services.house}
          onChange={() => toggleService("house")}
        />
        <CheckBox
          label="Permit & Licensing Assistance"
          checked={services.permit}
          onChange={() => toggleService("permit")}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          label="Light Maintenance / Handyman Work"
          checked={services.light}
          onChange={() => toggleService("light")}
        />
        <CheckBox
          label="Heavy Maintenance / Handyman Work"
          checked={services.heavy}
          onChange={() => toggleService("heavy")}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          label="Light Construction / Renovation"
          checked={services.reno}
          onChange={() => toggleService("reno")}
        />
        <CheckBox
          label="Heavy Construction / Renovation"
          checked={services.construct}
          onChange={() => toggleService("construct")}
        />
      </div>
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-3.5">
        <CheckBox
          label="Utilities Management"
          checked={services.utility}
          onChange={() => toggleService("utility")}
        />
        <CheckBox
          label="Pool Upkeep"
          checked={services.upkeep}
          onChange={() => toggleService("upkeep")}
        />
        <CheckBox
          label="Yard & Landscaping Management"
          checked={services.land}
          onChange={() => toggleService("land")}
        />
      </div>
    </div>
  );
};

export default ScopeBox;
