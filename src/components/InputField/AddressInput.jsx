import { useState, useRef } from "react";
import { Controller } from "react-hook-form";

const AddressInput = ({ control, setValue, errors }) => {
  const [addressValue, setAddressValue] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const addressInputRef = useRef(null);

  return (
    <Controller
      control={control}
      name="address"
      rules={{ required: "Property address is required" }}
      render={({ field }) => (
        <div className=" w-full -mt-4">
          <label
            htmlFor="address"
            className="block mb-3.5 whitespace-nowrap text-[#323232] text-sm  font-bold leading-[100%] "
          >
            Property Address
          </label>

          <div className="relative">
            <input
              ref={addressInputRef}
              {...field}
              id="address"
              name="address"
              type="text"
              placeholder="Type and select location..."
              className="w-full h-[48px] mb-3.5  border border-[#2525251A] rounded-[8px] px-4 text-sm font-normal text-[#000000] placeholder:text-[#25252580] focus:outline-none "
              autoComplete="address-line1"
              value={addressValue}
              onChange={(e) => {
                const value = e.target.value;
                setAddressValue(value);
                setValue("address", value, { shouldValidate: true });

                if (value.length > 3) {
                  fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                      value
                    )}.json?access_token=${
                      import.meta.env.VITE_MAPBOX_TOKEN
                    }&types=address&limit=5`
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      setAddressSuggestions(data.features || []);
                      setShowSuggestions(true);
                    })
                    .catch((err) => {
                      console.error("Autocomplete error:", err);
                    });
                } else {
                  setAddressSuggestions([]);
                  setShowSuggestions(false);
                }
              }}
              onFocus={() => {
                if (addressSuggestions.length > 0) {
                  setShowSuggestions(true);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setShowSuggestions(false);
                }
              }}
            />

            {showSuggestions && addressSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                {addressSuggestions.map((suggestion, index) => {
                  const streetAddress = suggestion.place_name
                    .split(",")[0]
                    .trim();

                  return (
                    <div
                      key={index}
                      className="px-4 py-3 cursor-pointer transition-colors duration-150 
                         hover:bg-sky-50 hover:text-sky-600 
                         flex flex-col gap-0.5  last:border-0"
                      onClick={() => {
                        const postcode = suggestion.context?.find((ctx) =>
                          ctx.id.startsWith("postcode")
                        )?.text;
                        if (postcode) {
                          setValue("zipcode", postcode, {
                            shouldValidate: true,
                          });
                        }

                        const region = suggestion.context?.find((ctx) =>
                          ctx.id.startsWith("region")
                        )?.text;
                        if (region) {
                          setValue("state", region, { shouldValidate: true });
                        }

                        const place = suggestion.context?.find((ctx) =>
                          ctx.id.startsWith("place")
                        )?.text;
                        if (place) {
                          setValue("city", place, { shouldValidate: true });
                        }

                        const country = suggestion.context?.find((ctx) =>
                          ctx.id.startsWith("country")
                        )?.text;
                        if (country) {
                          setValue("country", country, {
                            shouldValidate: true,
                          });
                        }

                        setAddressValue(streetAddress);
                        setValue("address", streetAddress, {
                          shouldValidate: true,
                        });
                        setTimeout(() => {
                          setShowSuggestions(false);
                          setAddressSuggestions([]);
                          addressInputRef.current?.focus();
                        }, 100);
                      }}
                    >
                      <span className="font-medium">{streetAddress}</span>
                      <span className="text-xs text-gray-500 truncate">
                        {suggestion.place_name
                          .split(",")
                          .slice(1)
                          .join(",")
                          .trim()}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default AddressInput;
