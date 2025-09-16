import React from "react";
import { Controller } from "react-hook-form";
import CheckBox from "../../../../CheckBox/CheckBox";

const HostScopeBox = ({ control, name = "reasons_switching" }) => {
  // Changed default name
  const reasons = [
    {
      id: "newly_acquired",
      label: "Newly acquired property",
      value: "Newly acquired property",
    },
    {
      id: "limited_use",
      label: "Limited use of home",
      value: "Limited use of home",
    },
    {
      id: "unfair_contract",
      label: "Unfair contract terms",
      value: "Unfair contract terms",
    },
    { id: "high_fees", label: "High fees", value: "High fees" },
    { id: "guest_issues", label: "Guest issues", value: "Guest issues" },
    { id: "not_local", label: "Not local", value: "Not local" },
    {
      id: "poor_relations",
      label: "Poor owner relations",
      value: "Poor owner relations",
    },
    {
      id: "unclear_reporting",
      label: "Unclear reporting",
      value: "Unclear reporting",
    },
    {
      id: "poor_maintenance",
      label: "Poor maintenance / upkeep",
      value: "Poor maintenance / upkeep",
    },
    { id: "others", label: "Others", value: "Others" },
  ];

  return (
    <div className="border border-[#2525251A] rounded-[8px] p-4 mb-4">
      <h4 className="text-sm font-bold mb-4">Reason for Switching</h4>

      <Controller
        control={control}
        name={name}
        defaultValue={[]}
        render={({ field }) => (
          <>
            <div className="flex md:flex-nowrap flex-wrap items-center gap-8 mb-3.5">
              {reasons.slice(0, 3).map((reason) => (
                <CheckBox
                  key={reason.id}
                  name={name}
                  id={reason.id}
                  label={reason.label}
                  checked={field.value.includes(reason.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      field.onChange([...field.value, reason.value]);
                    } else {
                      field.onChange(
                        field.value.filter((item) => item !== reason.value)
                      );
                    }
                  }}
                />
              ))}
            </div>

            <div className="flex md:flex-nowrap flex-wrap items-center md:gap-8 gap-5 mb-3.5">
              {reasons.slice(3, 7).map((reason) => (
                <CheckBox
                  key={reason.id}
                  name={name}
                  id={reason.id}
                  label={reason.label}
                  checked={field.value.includes(reason.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      field.onChange([...field.value, reason.value]);
                    } else {
                      field.onChange(
                        field.value.filter((item) => item !== reason.value)
                      );
                    }
                  }}
                />
              ))}
            </div>

            <div className="flex md:flex-nowrap flex-wrap items-center gap-8 mb-3.5">
              {reasons.slice(7).map((reason) => (
                <CheckBox
                  key={reason.id}
                  name={name}
                  id={reason.id}
                  label={reason.label}
                  checked={field.value.includes(reason.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      field.onChange([...field.value, reason.value]);
                    } else {
                      field.onChange(
                        field.value.filter((item) => item !== reason.value)
                      );
                    }
                  }}
                />
              ))}
            </div>
          </>
        )}
      />
    </div>
  );
};

export default HostScopeBox;
