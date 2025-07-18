import React from "react";
import { BackarrowSVG } from "../../../constants/Icons";
import { useNavigate } from "react-router-dom";
import SubmissionForm from "./SubmissionForm";

const HostSubmission = ({ setClose }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl flex items-center gap-2 mb-8">
        <img
          src={BackarrowSVG}
          alt="img"
          className="cursor-pointer"
          onClick={() => setClose(false)}
        />
        My Submission
      </h2>
      <SubmissionForm/>
    </div>
  );
};


export default HostSubmission;
