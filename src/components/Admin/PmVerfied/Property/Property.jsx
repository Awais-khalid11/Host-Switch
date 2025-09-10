import React, { useEffect, useState } from "react";
import Property1 from "./Property1";
import Property2 from "./Property2";
import { getData } from "../../../../api/apiClient";
import { useParams } from "react-router-dom";

const Property = () => {
  const { id } = useParams(); // dynamic id from route
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const res = await getData(`/user/${id}`);
        if (res?.success) {
          setUserData(res.payload);
        }
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };
    fetchPropertyData();
  }, [id]);

  if (!userData) {
    return (
      <p className="text-center text-gray-500">Loading property data...</p>
    );
  }

  return (
    <div className="border border-[#E4E5E8] p-5 rounded-[12px] md:flex-nowrap flex-wrap flex justify-between gap-5 mb-5">
      <div className="md:w-1/2 w-full">
        <Property1 companyOverview={userData.company_overview} />
      </div>
      <div className="md:w-1/2 w-full">
        <Property2 marketsCoverage={userData.markets_coverage} />
      </div>
    </div>
  );
};

export default Property;
