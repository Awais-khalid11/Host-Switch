import React from "react";
import { BackarrowSVG } from "../../../constants/Icons";
import SubmissionForm from "./SubmissionForm";
import EditForm from "./EditForm";
import { useNavigate } from "react-router-dom";

const HostEdit = () => {
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
        Edit Submission
      </h2>
      <EditForm />
    </div>
  );
};

export default HostEdit;
