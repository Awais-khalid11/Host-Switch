import React from "react";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";

const DeclineModal = () => {
  return (
    <div>
      <TextArea
        type="text"
        placeholder={"Enter message..."}
        label={"Any reason for decline lead?"}
        labelClass="text-3xl !text-white"
      />
      <div className="flex items-center gap-2.5">
        <Button variant="defaultBtn" className="border border-white px-6 py-4 !w-[262px]">
          Cancel
        </Button>
        <Button variant="whitebtn" className="px-6 py-4 !w-[262px]">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default DeclineModal;
