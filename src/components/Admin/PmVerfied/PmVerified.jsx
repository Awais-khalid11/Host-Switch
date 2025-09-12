import Button from "../../Button/Button";
import { BackarrowSVG, ReddelSVG, SlashSVG } from "../../../constants/Icons";
import VerifiedSam from "./VerifiedSam";
import Property from "./Property/Property";
import Portfolio from "./Portfolio/Portfolio";
import Opertaions from "./Operations/Opertaions";
import Reviews from "./Reviews/Reviews";
import Uploaded from "./Uploaded/Uploaded";
import Brand from "./Brand";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../../api/apiClient";
import Skeleton from "../../Skeleton/SkeletonCard";

const PmVerified = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await getData(`/user/${id}`);
        if (res?.success) {
          setData(res.payload);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, []);
  return (
    <div>
      <div className="flex md:flex-nowrap flex-wrap items-center justify-between mb-5">
        <h2 className="font-bold text-2xl flex items-center gap-2 md:mb-0 mb-2.5">
          <img
            src={BackarrowSVG}
            alt="img"
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
          PM Company Detail
        </h2>
        <div>
          <Button
            variant="borderbtn"
            className="border-[#FF0000] text-[12px] text-[#FF0000] max-w-[157px]"
            prefixImg={SlashSVG}
          >
            Flag PM
          </Button>
        </div>
      </div>
      {loading ? (
        <Skeleton variant="card" rows={6} count={4} hasImage />
      ) : (
        <>
          <VerifiedSam userData={data} />
          <Property userData={data} />
          <Portfolio portfolioData={data} />
          <Opertaions operationsData={data} />
          <Reviews reviewData={data} />
          <Uploaded
            text="Uploaded Documents"
            type="statement"
            docs={data?.document}
          />
          <Uploaded
            text="Uploaded Contract"
            type="contract"
            docs={data?.document}
          />
        </>
      )}

      {/* <Brand /> */}
    </div>
  );
};

export default PmVerified;
