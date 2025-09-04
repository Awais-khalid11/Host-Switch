import React from "react";
import { BackarrowSVG } from "../../../constants/Icons";
import SubmissionForm from "./SubmissionForm";
import { Navigate, useNavigate } from "react-router-dom";

const HostSubmission = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="font-bold text-2xl flex items-center gap-2 mb-8">
        <img
          src={BackarrowSVG}
          alt="img"
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        My Submission
      </h2>
      <SubmissionForm />
    </div>
  );
};

export default HostSubmission;
