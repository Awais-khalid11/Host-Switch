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
    <div className="w-full text-black">
      {/* Dropdown label simulation */}
      <div className="text-sm font-medium mb-2 text-[#252525b3] rounded-[8px] px-2 py-2 bg-white">
        What was your main reasons for declining?
      </div>

      <div className="bg-white rounded-md p-3 mb-5 space-y-2">
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

      {/* Other Reason Input */}
      {/* {selectedOptions.includes(optionsList[4]) && (
        <div className="mb-5">
          <label className="text-sm font-semibold mb-1 block">
            Any Other reason for decline ?
          </label>
          <textarea
            className="w-full p-2 rounded-md text-black text-sm"
            placeholder="Enter message..."
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
            rows={3}
          />
        </div>
      )} */}

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
          className="px-6 py-4 text-black !w-[200px] h-[35px]"
          onClick={handleSubmit}
        >
          Submit Feedback
        </Button>
      </div>
    </div>
  );
};

export default HostDeclineModal;
