import React from "react";
import Button from "../../Button/Button";
import { WhitecircleSVG } from "../../../constants/Icons";
import PropertySubmission from "./PropertySubmission";
import { useNavigate } from "react-router-dom";

const MySubmissions = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-5">
        <h2 className="text-xl font-bold md:mb-0 mb-2.5">My Submission</h2>
        <Button
          variant="defaultBtn"
          prefixImg={WhitecircleSVG}
          className="!w-[179px] !h-[40px] text-base"
          onClick={() => navigate("create-submission")}
        >
          Add New Property
        </Button>
      </div>
      <PropertySubmission />
    </div>
  );
};

export default MySubmissions;
