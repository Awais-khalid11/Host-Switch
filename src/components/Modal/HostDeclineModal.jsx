import React, { useState } from "react";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import { putData } from "../../api/apiClient";

const optionsList = [
  "Services offered did not match my needs",
  "PM had poor communication or responsiveness",
  "I didn't like their proposal or presentation",
  "I don't feel they are a good fit for my property",
  "Other",
];

const HostDeclineModal = ({ onClose, id }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherReason, setOtherReason] = useState("");
  const [updateStatus, setUpdateStatus] = useState(false);
  const [error, setError] = useState("");

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  async function handleSubmit() {
    if (selectedOptions.length === 0) {
      setError("Please select at least one reason.");
      return;
    }

    if (selectedOptions.includes("Other") && otherReason.trim() === "") {
      setError("Please provide details for 'Other'.");
      return;
    }

    setError("");
    setUpdateStatus(true);
    try {
      const payload = {
        status: "declined",
        reason_message: otherReason,
        reasons: selectedOptions,
      };

      await putData(`/matche/${id}`, payload);
      onClose();
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setUpdateStatus(false);
    }
  }

  return (
    <div className="w-full text-black p-2.5 h-[230px] overflow-auto">
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

      {selectedOptions.includes("Other") && (
        <TextArea
          type="text"
          placeholder={"Enter message..."}
          label={"Any Other reason for decline ?"}
          rows={2}
          labelClass="text-white"
          placeClass="!text-[#25252580] bg-white"
          value={otherReason}
          onChange={(e) => setOtherReason(e.target.value)}
        />
      )}

      {error && <p className="text-white text-sm mt-1">{error}</p>}

      <div className="flex justify-end mt-2">
        <Button
          variant="whitebtn"
          className="px-6 py-4 text-black !w-[200px] h-[45px]"
          onClick={handleSubmit}
          loading={updateStatus}
        >
          Submit Feedback
        </Button>
      </div>
    </div>
  );
};

export default HostDeclineModal;
