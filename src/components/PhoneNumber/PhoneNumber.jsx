import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller } from "react-hook-form";

const PhoneNumber = ({
  name,
  label,
  control,
  required = false,
  defaultCountry = "se",
  onchange
}) => {
  return (
    <div className="flex flex-col gap-1 md:mb-6 mb-4 ">
      {label && (
        <label className="text-sm font-bold text-[#323232]">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={required ? { required: `${label || name} is required` } : {}}
        render={({ field, fieldState }) => (
          <>
            <PhoneInput
              {...field}
              country={defaultCountry}
              onChange={(value) => field.onChange(value)}
              inputStyle={{ width: "100%" }}
              inputClass="w-full md:w-1/2 !h-[46px] border !border-[#2525251A]"
              dropdownClass="!z-50"
              specialLabel=""
              onchange={onchange}
            />
            {/* {fieldState.error && (
              <p className="text-red-500 text-xs mt-1">
                {fieldState.error.message}
              </p>
            )} */}
          </>
        )}
      />
    </div>
  );
};

export default PhoneNumber;
