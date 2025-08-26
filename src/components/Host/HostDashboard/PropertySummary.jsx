import React, { useEffect, useState } from "react";
import {
  BuildingSVG,
  BuildSVG,
  EditSVG,
  LinkSVG,
  PropertySVG,
  StatusSVG,
} from "../../../constants/Icons";
import Button from "../../Button/Button";
import { getData } from "../../../api/apiClient";
import Skeleton from "../../Skeleton/SkeletonCard";
import NoDataFound from "../../NoDataFound";

const PropertySummary = () => {
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState([]);
  useEffect(() => {
    const getAllProperties = async () => {
      try {
        setLoading(true);
        const data = await getData("/property?limit=1&sort=id:desc");
        if (data?.payload?.records?.length > 0) {
          setProperty(data?.payload?.records);
        } else {
          setProperty([]);
        }
      } catch (err) {
        console.error("Failed to fetch properties:", err);
        setProperty([]);
      } finally {
        setLoading(false);
      }
    };

    getAllProperties();
  }, []);
  console.log(property);
  return (
    <div className="border border-[#2525251A] p-5 rounded-[20px] ">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-[#181D27]">Property Summary</h2>
        <Button
          variant="borderbtn"
          className="border-[#555555] text-[#555555] max-w-[180px]"
          prefixImg={EditSVG}
        >
          Edit Property Info
        </Button>
      </div>
      {loading ? (
        <Skeleton variant="card" count={2} />
      ) : property.length === 0 ? (
        <NoDataFound
          message="No Properties Found"
          subMessage="We couldn't find any properties. Please add a property to get started."
        />
      ) : (
        property.map((property, index) => (
          <div
            key={index}
            className="border border-[#2525251A] p-5 rounded-[20px] mb-5"
          >
            <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-2.5 border-b border-b-[#2525251A] pb-4">
              <h5 className="text-base font-semibold flex items-center gap-1.5">
                <img src={PropertySVG} alt="" />
                Property address:
              </h5>
              <h6 className="text-base font-normal">{property.address}</h6>
            </div>

            <div className="flex flex-wrap md:flex-nowrap justify-between items-center border-b border-b-[#2525251A] pb-4 mb-2.5">
              <h5 className="text-base font-semibold flex items-center gap-1.5">
                <img src={LinkSVG} alt="" />
                Airbnb/Vrbo Link:
              </h5>
              <h6
                className="text-base font-normal"
                style={{ color: property.linkColor }}
              >
                {property.link}
              </h6>
            </div>

            <div className="flex flex-wrap md:flex-nowrap justify-between items-center border-b border-b-[#2525251A] pb-4 mb-2.5">
              <h5 className="text-base font-semibold flex items-center gap-1.5">
                <img src={StatusSVG} alt="" />
                Status:
              </h5>
              <h6
                className={`text-[12px] font-normal rounded-[90px] w-[80px] h-[28px] pt-1 text-center ${
                  property.status
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                <i>{property.status ? "Active" : "Inactive"}</i>
              </h6>
            </div>

            <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
              <h5 className="text-base font-semibold flex items-center gap-1.5">
                <img src={BuildingSVG} alt="" />
                Current PM Company:
              </h5>
              <h6 className="text-base font-normal">
                {property?.current_pm_company_name}
              </h6>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PropertySummary;
