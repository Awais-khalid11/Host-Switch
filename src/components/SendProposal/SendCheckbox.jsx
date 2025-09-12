import React, { useState, useCallback } from "react";
import CheckBox from "../CheckBox/CheckBox";

const SendCheckbox = ({ checked, onChange }) => {
  const [services, setServices] = useState(
    checked || {
      guest_communication: false,
      guest_support: false,
      booking_management: false,
      cleaning_coordination: false,
      owner_portal: false,
      in_house_cleaning: false,
      permit_assistance: false,
      concierge_services: false,
    }
  );

  const handleServiceChange = useCallback(
    (serviceName, value) => {
      setServices((prevServices) => {
        const updatedServices = {
          ...prevServices,
          [serviceName]: value,
        };

        if (onChange) {
          onChange(updatedServices);
        }

        return updatedServices;
      });
    },
    [onChange]
  );

  return (
    <div>
      <h4 className="text-sm font-bold mb-4">Services Offered</h4>
      <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
        <div className="flex lg:flex-nowrap flex-wrap items-center gap-3 lg:gap-6 lg:mb-3.5">
          <CheckBox
            name="guest_communication"
            id="guest_communication"
            label="Guest communication"
            checked={services.guest_communication}
            onChange={(e) =>
              handleServiceChange("guest_communication", e.target.checked)
            }
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="guest_support"
            id="guest_support"
            label="24/7 Guest Support"
            checked={services.guest_support}
            onChange={(e) =>
              handleServiceChange("guest_support", e.target.checked)
            }
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="booking_management"
            id="booking_management"
            label="Booking Management"
            checked={services.booking_management}
            onChange={(e) =>
              handleServiceChange("booking_management", e.target.checked)
            }
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="cleaning_coordination"
            id="cleaning_coordination"
            label="Cleaning Coordination"
            checked={services.cleaning_coordination}
            onChange={(e) =>
              handleServiceChange("cleaning_coordination", e.target.checked)
            }
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="owner_portal"
            id="owner_portal"
            label="Owner Portal / Dashboard Access"
            checked={services.owner_portal}
            onChange={(e) =>
              handleServiceChange("owner_portal", e.target.checked)
            }
            labelClass="!text-[#000000]"
          />
        </div>
        <div className="flex lg:flex-nowrap flex-wrap items-center gap-3 lg:gap-10 mb-3.5">
          <CheckBox
            name="in_house_cleaning"
            id="in_house_cleaning"
            label="In-House Cleaning Team"
            checked={services.in_house_cleaning}
            onChange={(e) =>
              handleServiceChange("in_house_cleaning", e.target.checked)
            }
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="permit_assistance"
            id="permit_assistance"
            label="Permit & Licensing Assistance"
            checked={services.permit_assistance}
            onChange={(e) =>
              handleServiceChange("permit_assistance", e.target.checked)
            }
            labelClass="!text-[#000000]"
          />
          <CheckBox
            name="concierge_services"
            id="concierge_services"
            label="Concierge Services"
            checked={services.concierge_services}
            onChange={(e) =>
              handleServiceChange("concierge_services", e.target.checked)
            }
            labelClass="!text-[#000000]"
          />
        </div>
      </div>
    </div>
  );
};

export default SendCheckbox;
