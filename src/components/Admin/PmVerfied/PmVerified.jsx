import Button from "../../Button/Button";
import { BackarrowSVG, SlashSVG } from "../../../constants/Icons";
import VerifiedSam from "./VerifiedSam";
import Property from "./Property/Property";
import Portfolio from "./Portfolio/Portfolio";
import Opertaions from "./Operations/Opertaions";
import Reviews from "./Reviews/Reviews";
import Uploaded from "./Uploaded/Uploaded";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData, postData, putData } from "../../../api/apiClient"; // ✅ postData added
import Skeleton from "../../Skeleton/SkeletonCard";

const PmVerified = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const fetchDetail = async () => {
    try {
      setLoading(true);
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

  useEffect(() => {
    fetchDetail();
  }, [id]);

  const toggleVerification = async () => {
    if (!data) return;

    try {
      setUpdating(true);
      const newStatus = !data.is_verified;

      const res = await putData(`/user/${id}`, {
        is_verified: newStatus,
      });

      if (res?.success) {
        setData((prev) => ({
          ...prev,
          is_verified: newStatus,
        }));
      }
      fetchDetail();
    } catch (error) {
      console.error("Error updating verification:", error);
    } finally {
      setUpdating(false);
    }
  };

  const isVerified = data?.is_verified;

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
            className={`text-[12px] max-w-[157px] ${
              isVerified
                ? "border-green-600 text-green-600"
                : "border-red-600 text-red-600"
            }`}
            prefixImg={!isVerified && SlashSVG}
            disabled={updating}
            onClick={toggleVerification}
          >
            {updating ? "Updating..." : isVerified ? "Verified PM" : "Flag PM"}
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
    </div>
  );
};

export default PmVerified;
