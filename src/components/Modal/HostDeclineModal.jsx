import React, { useState } from "react";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";

const optionsList = [
  "Property type doesn’t fit our portfolio",
  "Location is outside our service area",
  "Property condition is below our standards",
  "Owner’s expectations are unrealistic",
  "Other (text area for custom reason)",
];

const HostDeclineModal = ({ setClose }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherReason, setOtherReason] = useState("");

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = () => {
    const feedback = {
      reasons: selectedOptions,
      otherText: selectedOptions.includes(optionsList[4]) ? otherReason : "",
    };
    console.log("Submitted Feedback:", feedback);
    setClose();
  };

  return (
    <div className="w-full text-black p-2.5 h-[230px] overflow-auto">
      {/* Dropdown label simulation */}
      <div className="text-sm font-medium mb-2 text-[#252525b3] rounded-[8px] px-2 py-2 bg-white">
        What was your main reasons for declining?
      </div>

      <div className="bg-white rounded-md p-3 mb-2 space-y-2">
        {optionsList.map((option, index) => (
          <label key={index} className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-1"
              checked={selectedOptions.includes(option)}
              onChange={() => toggleOption(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"Any Other reason for decline ?"}
          rows={2}
          labelClass="text-white"
          placeClass="!text-[#25252580] bg-white"
        />

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          variant="whitebtn"
          className="px-6 py-4 text-black !w-[200px] h-[45px]"
          onClick={handleSubmit}
        >
          Submit Feedback
        </Button>
      </div>
    </div>
  );
};

export default HostDeclineModal;
