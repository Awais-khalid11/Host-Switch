import React from "react";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/Routes";

const ProposalModal = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <Link
        variant="defaultBtn"
        className="border rounded-[8px] font-bold flex items-center justify-center border-white bg-white text-black px-6 py-4 w-full md:w-[339px] md:mt-0 mt-3"
        to={ROUTES.PROPOSALS}
      >
        View My Proposal
      </Link>
    </div>
  );
};

export default ProposalModal;
