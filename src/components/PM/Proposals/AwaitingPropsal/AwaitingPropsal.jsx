import React, { useEffect, useState } from "react";
import AwaitingSam from "./AwaitingSam";
import {
  BackarrowSVG,
  BluemsgSVG,
  CrossSVG,
} from "../../../../constants/Icons";
import Button from "../../../Button/Button";
import { ROUTES } from "../../../../constants/Routes";
import PropertyDetails from "../../../Views/PropertyDetails/PropertyDetails";
import HostExpectations from "../../../Views/HostExpectations";
import CurrentPM from "../../../Views/CurrentPM";
import Documents from "../../../Views/Documents";
import SendProposal from "../../../SendProposal/SendProposal";
import { getData } from "../../../../api/apiClient";
import Skeleton from "../../../Skeleton/SkeletonCard";
import NoDataFound from "../../../NoDataFound";

const AwaitingPropsal = ({ setClose, id, status }) => {
  const [send, setSend] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchProposals = async () => {
    setLoading(true);
    try {
      const response = await getData(`/proposal/${id}`);
      setData(response?.payload);
    } catch (error) {
      console.error("Error fetching proposals:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProposals();
  }, []);

  return send ? (
    send
  ) : (
    <div className="pb-2.5 pt-5">
      {loading ? (
        <Skeleton variant="card" count={1} hasImage rows={3} />
      ) : (
        <>
          <div className="flex md:flex-nowrap flex-wrap items-center justify-between mb-5">
            <h2 className="font-bold text-2xl flex items-center gap-2 md:mb-0 mb-2.5 capitalize">
              <img
                src={BackarrowSVG}
                alt="img"
                className="cursor-pointer"
                onClick={() => setClose(false)}
              />
              {status} Proposal
            </h2>
            <div className="flex md:flex-nowrap flex-wrap items-center gap-2.5">
              <Button
                variant="borderbtn"
                className=" !text-[12px] max-w-[157px]"
                prefixImg={BluemsgSVG}
              >
                Message Host
              </Button>
              <Button
                variant="borderBtn"
                className="!w-[162px] !text-[12px] font-normal h-[48px] px-5 border border-[#555555]"
                prefixImg={CrossSVG}
              >
                Withdraw Proposal
              </Button>
            </div>
          </div>
          <AwaitingSam data={data} />
          <PropertyDetails data={data} />
          {/* //TODO */}
          {/* <HostExpectations /> */}
          {/* <CurrentPM /> */}
          <Documents data={data} />
        </>
      )}
    </div>
  );
};

export default AwaitingPropsal;
