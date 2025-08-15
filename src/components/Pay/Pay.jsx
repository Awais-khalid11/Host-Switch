import React from "react";
import { BackarrowSVG } from "../../constants/Icons";
import { useNavigate } from "react-router-dom";
import PaySummary from "./PaySummary";
import PayForm from "./PayForm";

const Pay = ({setClose}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pb-2.5 pt-5">
      <h2 className="font-bold text-2xl flex items-center gap-2 mb-5">
        <img
          src={BackarrowSVG}
          alt="img"
          className="cursor-pointer"
          onClick={() => setClose(false)}
        />
        Pay Invoice INV-00345
      </h2>
      <PaySummary/>
      <PayForm/>
    </div>
    </div>
  );
};

export default Pay;
